"use client";
import { useState } from "react";

export default function Dashboard() {
  const [review, setReview] = useState("");
  const [tone, setTone] = useState("friendly");
  const [platform, setPlatform] = useState("Google");
  const [language, setLanguage] = useState("English");
  const [businessName, setBusinessName] = useState("Repute Customer");
  const [signoff, setSignoff] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const disabled = !review.trim() || loading;

  async function generate() {
    setLoading(true); setReply("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review, tone, platform, language, businessName, signoff }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate");
      setReply(data.reply || "");
    } catch (e: any) {
      setReply(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  }

  async function copy() {
    if (!reply) return;
    await navigator.clipboard.writeText(reply);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
            <h1 className="text-2xl font-bold tracking-tight">Repute Dashboard</h1>
          </div>
          <a href="/" className="text-sm text-slate-600 hover:text-slate-900">← Back to site</a>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <label className="text-sm font-medium text-slate-700">
              Paste a review
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder='e.g., "Food was great but we waited 35 minutes…"'
                className="mt-2 h-44 w-full resize-vertical rounded-xl border border-slate-300 p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Picker label="Tone" value={tone} setValue={setTone} options={["friendly","professional","apologetic","cheerful"]}/>
              <Picker label="Platform" value={platform} setValue={setPlatform} options={["Google","Yelp","Facebook","TripAdvisor"]}/>
              <Picker label="Language" value={language} setValue={setLanguage} options={["English","French"]}/>
              <Input label="Business name" value={businessName} setValue={setBusinessName}/>
            </div>

            <Input label='Optional sign-off (e.g., “— Sam, Manager”)' value={signoff} setValue={setSignoff}/>

            <button
              onClick={generate}
              disabled={disabled}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 004 12z"/>
                </svg>
              ) : (
                <span>✨</span>
              )}
              {loading ? "Generating…" : "Generate reply"}
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-medium text-slate-700">Draft reply</h2>
              <button
                onClick={copy}
                disabled={!reply}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                📋 Copy
              </button>
            </div>
            <div className="min-h-40 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
              {reply ? reply : <span className="text-slate-500">Your AI reply will appear here…</span>}
            </div>
            {!!reply && (
              <div className="mt-4">
                <button
                  onClick={generate}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-100"
                >
                  🔁 Regenerate
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Picker({ label, value, setValue, options }:{label:string; value:string; setValue:(v:string)=>void; options:string[]}) {
  return (
    <label className="text-sm font-medium text-slate-700">
      {label}
      <select value={value} onChange={(e)=>setValue(e.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-300 p-2 text-sm focus:ring-2 focus:ring-indigo-500">
        {options.map(o=><option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
function Input({ label, value, setValue }:{label:string; value:string; setValue:(v:string)=>void}) {
  return (
    <label className="mt-4 block text-sm font-medium text-slate-700">
      {label}
      <input value={value} onChange={(e)=>setValue(e.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-300 p-2 text-sm focus:ring-2 focus:ring-indigo-500"/>
    </label>
  );
}
