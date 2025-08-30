"use client";
import { useMemo, useState } from "react";

export default function Page() {
  // Demo state for the mock preview (no API call here)
  const [langFR, setLangFR] = useState(false);
  const [tone, setTone] = useState<"friendly" | "professional" | "apologetic" | "cheerful">("friendly");

  // Stripe links (TEST mode)
  const STRIPE_BASIC = "https://buy.stripe.com/test_fZucN74Y56mwgxb2TBbfO00";
  const STRIPE_PRO   = "https://buy.stripe.com/test_00w00lfCJdOY0yd1PxbfO01";

  const email = useMemo(() => "hello@getrepute.ca", []);
  const demoReply = useMemo(() => {
    const replies = {
      en: {
        friendly: `Thanks for sharing this, Alex—sorry about the wait. That’s not the experience we aim for. Please email us at ${email} so we can make it right.`,
        professional: `Thank you for the feedback, Alex. We apologize for the delay you experienced. Please reach out at ${email} so we can review and make this right.`,
        apologetic: `We’re truly sorry about the 35-minute wait, Alex. That falls short of our standards. If you contact us at ${email}, we’ll make this right.`,
        cheerful: `Appreciate the kind words on the food, Alex—and sorry about the wait! Drop us a note at ${email}; we’ll fix this.`,
      },
      fr: {
        friendly: `Merci pour votre message, Alex — désolé pour l’attente. Ce n’est pas l’expérience que nous visons. Écrivez-nous à ${email} pour que nous puissions corriger la situation.`,
        professional: `Merci pour votre retour, Alex. Nous nous excusons pour le délai. Veuillez nous contacter à ${email} afin que nous puissions examiner et corriger cela.`,
        apologetic: `Nous sommes vraiment désolés pour l’attente de 35 minutes, Alex. Cela ne correspond pas à nos normes. Contactez-nous à ${email}; nous allons régler cela.`,
        cheerful: `Merci pour vos bons mots sur la cuisine, Alex — et désolé pour l’attente ! Écrivez-nous à ${email}; on va arranger ça.`,
      },
    } as const;
    return langFR ? replies.fr[tone] : replies.en[tone];
  }, [langFR, tone, email]);

  function copyDemo() {
    navigator.clipboard.writeText(demoReply).catch(() => alert("Copy failed"));
  }

  return (
    <main className="bg-[#0b1220] text-slate-100">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1220]/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white shadow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c5 0 9 3.6 9 8s-4 8-9 8c-1.6 0-3.1-.4-4.4-1.1l-3.4 1a1 1 0 0 1-1.2-1.2l1-3.4C3.3 13.2 3 11.7 3 11c0-4.4 4-8 9-8Zm3.8 7.2h-7.6a.75.75 0 0 0 0 1.5h7.6a.75.75 0 0 0 0-1.5Z"/></svg>
            </span>
            <span className="text-lg font-extrabold tracking-tight">Repute</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="hover:text-indigo-300 text-slate-300" href="#how">How it works</a>
            <a className="hover:text-indigo-300 text-slate-300" href="#pricing">Pricing</a>
            <a className="hover:text-indigo-300 text-slate-300" href="#faq">FAQ</a>
            <a className="hover:text-white text-slate-400" href="/dashboard">Dashboard</a>
            <a className="inline-flex items-center rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-500 shadow ring-1 ring-indigo-400/40" href="#cta">Start free</a>
          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-fuchsia-500/25 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-32 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">New — Reply to reviews in seconds</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
            AI replies for Google & Yelp reviews
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Draft warm, on-brand responses to every review—good, bad, or neutral—in minutes, not hours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={STRIPE_BASIC}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-indigo-600 hover:bg-indigo-500 shadow ring-1 ring-indigo-400/40"
            >
              Start 7-day free trial — Basic
            </a>
            <a
              href={STRIPE_PRO}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 ring-1 ring-white/15 hover:bg-white/5"
            >
              Start 7-day free trial — Pro
            </a>
          </div>
        </div>

        {/* Product demo */}
        <div className="mx-auto max-w-6xl px-6 pb-10">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 shadow-lg">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="text-sm font-semibold text-slate-200">Repute — Draft preview</div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                  <span>EN</span>
                  <input type="checkbox" checked={langFR} onChange={(e) => setLangFR(e.target.checked)} className="peer sr-only" />
                  <span className="relative inline-flex w-10 h-5 items-center rounded-full bg-slate-600 peer-checked:bg-indigo-600 transition">
                    <span className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white peer-checked:translate-x-5 transition" />
                  </span>
                  <span>FR</span>
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value as any)}
                  className="rounded-lg border border-white/10 bg-slate-900/60 px-2 py-1 text-xs"
                >
                  <option value="friendly">Friendly</option>
                  <option value="professional">Professional</option>
                  <option value="apologetic">Apologetic</option>
                  <option value="cheerful">Cheerful</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Pasted review</p>
                <div className="mt-2 rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-4 text-sm text-slate-200">
                  “Food was great but we waited 35 minutes to be seated…”
                </div>
              </div>
              <div className="p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Draft reply</p>
                <div className="mt-2 rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-4 text-sm min-h-[96px] whitespace-pre-wrap text-slate-100">
                  {demoReply}
                </div>
                <div className="mt-4">
                  <button
                    onClick={copyDemo}
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white bg-slate-800 hover:bg-slate-700 ring-1 ring-white/10"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    One-click copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400">Demo only. The dashboard generates replies from full reviews.</p>
        </div>
      </section>

      {/* Spacer */}
      <section className="py-8 md:py-12" />

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold">How it works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Paste a review", desc: "Drop in any Google, Yelp, Facebook, or TripAdvisor review." },
            { title: "Pick the tone", desc: "Friendly, professional, apologetic, or cheerful." },
            { title: "Copy & post", desc: "Edit if needed. Done in minutes." },
          ].map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 p-6 bg-slate-900/40">
              <div className="w-10 h-10 rounded-xl grid place-items-center bg-indigo-600 text-white text-sm">{i + 1}</div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24 bg-slate-900/30">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { t: "Consistent tone", d: "On-brand, respectful replies every time." },
            { t: "Fast", d: "Clear your week’s reviews in under 5 minutes." },
            { t: "Bilingual", d: "Reply in English or French." },
            { t: "Saves hours", d: "Owners and managers win back time." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-white/10 p-6 bg-slate-900/40">
              <h3 className="font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Simple pricing</h2>
            <p className="mt-2 text-slate-300">Start free. Cancel anytime.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 text-emerald-300 px-3 py-1 text-xs font-semibold ring-1 ring-emerald-300/20">
            7-day free trial
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Basic */}
          <div className="rounded-2xl border border-white/10 p-6 bg-slate-900/40">
            <h3 className="text-xl font-bold">Basic</h3>
            <p className="mt-2 text-sm text-slate-300">Single-location businesses.</p>
            <p className="mt-4 text-3xl font-extrabold">
              <span>$29</span><span className="text-base font-medium text-slate-400">/mo</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Unlimited replies</li>
              <li>• Tone presets</li>
              <li>• Copy to clipboard</li>
            </ul>
            <a
              href={STRIPE_BASIC}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-500 shadow ring-1 ring-indigo-400/40"
            >
              Start 7-day free trial
            </a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border-2 border-indigo-500 p-6 bg-slate-900/40">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 text-indigo-300 px-3 py-1 text-xs font-semibold">
              Best value
            </div>
            <h3 className="mt-2 text-xl font-bold">Pro</h3>
            <p className="mt-2 text-sm text-slate-300">Growing teams & multi-location.</p>
            <p className="mt-4 text-3xl font-extrabold">
              <span>$49</span><span className="text-base font-medium text-slate-400">/mo</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Everything in Basic</li>
              <li>• Saved templates</li>
              <li>• Multi-language</li>
            </ul>
            <a
              href={STRIPE_PRO}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-500 shadow ring-1 ring-indigo-400/40"
            >
              Start 7-day free trial
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-3xl bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white p-10 md:p-14 shadow-2xl">
          <div className="md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Ready to reply like a pro?</h2>
              <p className="mt-2 text-white/90">Launch your 7-day free trial now.</p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
              <a
                href={STRIPE_BASIC}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-slate-900 hover:bg-white/90"
              >
                Start free (Basic)
              </a>
              <a
                href={STRIPE_PRO}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 ring-1 ring-white/70 hover:bg-white/10"
              >
                Start free (Pro)
              </a>
            </div>
          </div>
          <div className="mt-6 text-sm text-white/90">
            Prefer to test the AI first? <a href="/dashboard" className="underline">Open the dashboard</a>.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-slate-300">© {new Date().getFullYear()} Repute</div>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-white text-slate-300">Privacy</a>
            <a href="#" className="hover:text-white text-slate-300">Terms</a>
            <a href="/dashboard" className="hover:text-white text-slate-300">Help</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
