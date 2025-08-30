// app/api/generate/route.ts
import { NextResponse } from "next/server";

// Ensure this runs on Node (stable env vars, good for external API calls)
export const runtime = "nodejs";
// Avoid static optimization
export const dynamic = "force-dynamic";
// Give the function time on Vercel
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const {
      review,
      tone = "friendly",
      platform = "Google",
      language = "English",
      businessName = "your business",
      signoff = "",
    } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "Missing OPENAI_API_KEY (set it in Vercel → Settings → Environment Variables, then redeploy)" }, { status: 500 });
    }
    if (!review || typeof review !== "string") {
      return NextResponse.json({ error: "Missing review text" }, { status: 400 });
    }

    // Guardrails
    const trimmed = review.slice(0, 2000);
    const toneMap: Record<string, string> = {
      friendly: "warm, appreciative, and human",
      professional: "calm, concise, and courteous",
      apologetic: "empathetic and solution-oriented",
      cheerful: "upbeat and positive",
    };
    const toneDesc = toneMap[tone as keyof typeof toneMap] ?? toneMap.friendly;

    const system = `
You are Repute, an assistant that drafts short, brand-safe replies to online reviews for small businesses.
Rules:
- Be ${toneDesc}. Never be defensive.
- 2–4 sentences max.
- No AI mentions. No jargon. No emojis.
- If the review is negative, acknowledge and invite to continue privately.
- Match the platform norms (platform: ${platform}).
- Language: ${language}.
- Business name: ${businessName}.
- If a sign-off is provided, end with it.
`.trim();

    const user = `
Review:
"""
${trimmed}
"""

Write the business reply now.
${signoff ? `Sign-off: ${signoff}` : ""}
`.trim();

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        temperature: 0.5,
        max_tokens: 220,
      }),
    });

    if (!resp.ok) {
      const errTxt = await resp.text();
      return NextResponse.json({ error: `OpenAI error (${resp.status}): ${errTxt}` }, { status: 500 });
    }

    const data = await resp.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "";
    if (!reply) {
      return NextResponse.json({ error: "No reply generated" }, { status: 500 });
    }
    return NextResponse.json({ reply });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}
