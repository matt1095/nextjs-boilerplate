import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { review, tone = "friendly", platform = "Google", language = "English", businessName = "your business", signoff = "" } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
    }
    if (!review || typeof review !== "string") {
      return NextResponse.json({ error: "Missing review text" }, { status: 400 });
    }

    const trimmed = review.slice(0, 2000);
    const toneMap: Record<string, string> = {
      friendly: "warm, appreciative, and human",
      professional: "calm, concise, and courteous",
      apologetic: "empathetic and solution-oriented",
      cheerful: "upbeat and positive",
    };
    const toneDesc = toneMap[tone] ?? toneMap.friendly;

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
`;

    const user = `
Review:
"""
${trimmed}
"""

Write the business reply now.
${signoff ? `Sign-off: ${signoff}` : ""}
`;

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: system }, { role: "user", content: user }],
        temperature: 0.5,
        max_tokens: 220,
      }),
    });

    if (!resp.ok) {
      const err = await resp.text();
      return NextResponse.json({ error: `OpenAI error: ${err}` }, { status: 500 });
    }

    const data = await resp.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "";
    return NextResponse.json({ reply });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}
