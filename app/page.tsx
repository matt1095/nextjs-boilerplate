"use client";
import { useMemo, useState } from "react";

export default function Page() {
  // Demo state (for the on-page preview)
  const [langFR, setLangFR] = useState(false);
  const [tone, setTone] = useState<"friendly" | "professional" | "apologetic" | "cheerful">("friendly");

  // 🔗 Your Stripe links (TEST mode)
  const STRIPE_BASIC = "https://buy.stripe.com/test_fZucN74Y56mwgxb2TBbfO00";
  const STRIPE_PRO   = "https://buy.stripe.com/test_00w00lfCJdOY0yd1PxbfO01";

  // Contact email used in demo reply text
  const email = useMemo(() => "hello@getrepute.ca", []);

  const reply = useMemo(() => {
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

  function copyReply() {
    navigator.clipboard.writeText(reply).catch(() => alert("Copy failed"));
  }

  return (
    <main className="bg-white text-slate-900 dark:bg-[#0a0c16] dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="inline-flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white shadow">
              <svg className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c5 0 9 3.582 9 8.002C21 16.42 17 21 12 21c-1.61 0-3.128-.4-4.43-1.107l-3.38.952a1 1 0 0 1-1.23-1.23l.952-3.38A8.77 8.77 0 0 1 3 11.002C3 6.582 7 3 12 3Zm3.75 7.25h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5Z"/></svg>
            </span>
            <span className="text-xl font-extrabold tracking-tight">Repute</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#how">How it works</a>
            <a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#pricing">Pricing</a>
            <a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#faq">FAQ</a>
            <a className="text-slate-500 hover:text-slate-900 dark:hover:text-white" href="/dashboard">Dashboard</a>
            <a className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-white shadow ring-1 ring-indigo-500/40 hover:bg-indigo-700" href="#cta">Start free</a>
          </nav>
        </div>
      </header>

      {/* HERO — airy section */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-60">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-400 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-fuchsia-400 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-28 md:grid-cols-2 md:py-36">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">New • Reply to reviews in seconds</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">
              AI replies for Google & Yelp reviews
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Draft warm, on-brand responses to every review—good, bad, or neutral—in minutes, not hours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={STRIPE_BASIC}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white shadow ring-1 ring-indigo-500/40 hover:bg-indigo-700"
              >
                Start 7-day trial — Basic
              </a>
              <a
                href={STRIPE_PRO}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 ring-1 ring-slate-300 hover:bg-slate-50 dark:ring-slate-700 dark:hover:bg-white/5"
              >
                Start 7-day trial — Pro
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full border border-slate-200/70 px-3 py-1 dark:border-white/10">For salons, restaurants, gyms</span>
              <span className="rounded-full border border-slate-200/70 px-3 py-1 dark:border-white/10">EN & FR replies</span>
              <span className="rounded-full border border-slate-200/70 px-3 py-1 dark:border-white/10">Google • Yelp • Facebook • TripAdvisor</span>
            </div>
          </div>

          {/* Interactive demo (short + clean) */}
          <div className="rounded-2xl bg-white/70 shadow-2xl ring-1 ring-slate-200/60 backdrop-blur dark:bg-slate-900/50 dark:ring-white/10">
            <div className="flex items-center justify-between border-b border-slate-200/60 px-4 py-3 text-sm dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-semibold">Demo — Draft reply</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <label className="inline-flex select-none items-center gap-2">
                  <span>EN</span>
                  <input type="checkbox" checked={langFR} onChange={(e) => setLangFR(e.target.checked)} className="peer sr-only" />
                  <span className="relative inline-flex h-5 w-10 items-center rounded-full bg-slate-300 transition peer-checked:bg-indigo-600">
                    <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
                  </span>
                  <span>FR</span>
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value as any)}
                  className="rounded-lg border border-slate-300/70 bg-transparent px-2 py-1 text-xs dark:border-white/15"
                >
                  <option value="friendly">Friendly</option>
                  <option value="professional">Professional</option>
                  <option value="apologetic">Apologetic</option>
                  <option value="cheerful">Cheerful</option>
                </select>
              </div>
            </div>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="border-b border-slate-200/60 p-5 text-sm dark:border-white/10 md:border-b-0 md:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pasted review</p>
                <div className="mt-2 rounded-xl bg-white/70 p-4 ring-1 ring-slate-200/70 dark:bg-slate-900/50 dark:ring-white/10">
                  “Food was great but we waited 35 minutes to be seated…”
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Draft reply</p>
                <div className="mt-2 min-h-[96px] whitespace-pre-wrap rounded-xl bg-white/70 p-4 text-sm ring-1 ring-slate-200/70 dark:bg-slate-900/50 dark:ring-white/10">
                  {reply}
                </div>
                <div className="mt-4">
                  <button
                    onClick={copyReply}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm text-white hover:opacity-90 dark:bg-white dark:text-slate-900"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    One-click copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW — 3 big steps, minimal text */}
      <section id="how" className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-extrabold md:text-4xl">How it works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Paste a review", desc: "Google, Yelp, Facebook, or TripAdvisor." },
              { title: "Pick the tone", desc: "Friendly, professional, apologetic, cheerful." },
              { title: "Copy & post", desc: "Tweak if you want. Done." },
            ].map((s, i) => (
              <div key={s.title} className="rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-white/10">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white">{i + 1}</div>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES — 4 short cards */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-extrabold md:text-4xl">Why Repute</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { t: "Consistent tone", d: "On-brand, respectful replies every time." },
              { t: "Fast", d: "Clear weekly reviews in minutes." },
              { t: "Multilingual", d: "English & French out of the box." },
              { t: "Time saved", d: "Owners and managers win back hours." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-white/10">
                <h3 className="font-bold">{f.t}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — 7-day trial, two plans */}
      <section id="pricing" className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">Simple pricing</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Monthly plans. Cancel anytime.</p>
            </div>
            <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              7-day free trial
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Basic */}
            <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-white/10">
              <h3 className="text-xl font-bold">Basic</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">For single-location businesses.</p>
              <p className="mt-4 text-3xl font-extrabold">$29<span className="text-base font-medium text-slate-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• Unlimited replies</li>
                <li>• Tone presets</li>
                <li>• Copy to clipboard</li>
              </ul>
              <a
                href={STRIPE_BASIC}
                target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white shadow ring-1 ring-indigo-500/40 hover:bg-indigo-700"
              >
                Start 7-day trial
              </a>
            </div>

            {/* Pro */}
            <div className="rounded-2xl bg-white/80 p-6 ring-2 ring-indigo-500 dark:bg-slate-900/50">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">Best value</div>
              <h3 className="mt-2 text-xl font-bold">Pro</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">For teams & multi-location.</p>
              <p className="mt-4 text-3xl font-extrabold">$49<span className="text-base font-medium text-slate-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• Everything in Basic</li>
                <li>• Saved templates</li>
                <li>• Multi-language</li>
              </ul>
              <a
                href={STRIPE_PRO}
                target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white shadow ring-1 ring-indigo-500/40 hover:bg-indigo-700"
              >
                Start 7-day trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — short, collapsible */}
      <section id="faq" className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-extrabold md:text-4xl">FAQ</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              { q: "Does this work for negative reviews?", a: "Yes. Choose an apologetic or professional tone—Repute drafts a calm, human response you can tweak." },
              { q: "Which platforms are supported?", a: "Google, Yelp, Facebook, TripAdvisor. Paste the review text to start." },
              { q: "Can I cancel anytime?", a: "Absolutely. Plans are monthly with no contract." },
              { q: "Is my data private?", a: "We don’t sell data. Reviews are processed to generate a draft reply only." },
            ].map((item) => (
              <details key={item.q} className="group rounded-xl bg-white/70 p-5 ring-1 ring-slate-200/70 open:ring-indigo-200 dark:bg-slate-900/40 dark:ring-white/10" open={false}>
                <summary className="cursor-pointer font-semibold">{item.q}</summary>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — big, simple */}
      <section id="cta" className="pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-gradient-to-tr from-indigo-600 to-fuchsia-600 p-10 text-white shadow-2xl md:p-14">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-3xl font-extrabold md:text-4xl">Ready to reply like a pro?</h3>
                <p className="mt-2 text-white/90">Start a 7-day free trial. Upgrade when you’re ready.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href={STRIPE_BASIC}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 hover:bg-white/90"
                >
                  Start trial (Basic)
                </a>
                <a
                  href={STRIPE_PRO}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 ring-1 ring-white/60 hover:bg-white/10"
                >
                  Start trial (Pro)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} Repute</div>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="/dashboard" className="hover:text-slate-900 dark:hover:text-white">Help</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
