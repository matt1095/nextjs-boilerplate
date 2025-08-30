"use client";
import { useMemo, useState } from "react";

export default function Page() {
  // --- Demo state ---
  const [langFR, setLangFR] = useState(false);
  const [tone, setTone] = useState<"friendly" | "professional" | "apologetic" | "cheerful">("friendly");
  const [yearly, setYearly] = useState(false);

  // 🔗 Your Stripe links
  const STRIPE_BASIC = "https://buy.stripe.com/test_fZucN74Y56mwgxb2TBbfO00";
  const STRIPE_PRO   = "https://buy.stripe.com/test_00w00lfCJdOY0yd1PxbfO01";

  // Contact email used in demo reply text (change if you want)
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

  const priceBasic = yearly ? "$290" : "$29";
  const pricePro = yearly ? "$490" : "$49";
  const priceSuffix = yearly ? "/yr" : "/mo";

  function copyReply() {
    navigator.clipboard.writeText(reply).catch(() => alert("Copy failed"));
  }

  return (
    <main className="bg-white text-slate-800 dark:bg-[#0a0c16] dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="group inline-flex items-center gap-2">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M12 3c5 0 9 3.582 9 8.002C21 16.42 17 21 12 21c-1.61 0-3.128-.4-4.43-1.107l-3.38.952a1 1 0 0 1-1.23-1.23l.952-3.38A8.77 8.77 0 0 1 3 11.002C3 6.582 7 3 12 3Zm3.75 7.25h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5Z"/></svg>
            </span>
            <span className="text-xl font-extrabold tracking-tight">Repute</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#how">How it works</a>
            <a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#pricing">Pricing</a>
            <a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#faq">FAQ</a>
            <a className="text-slate-500 hover:text-slate-900 dark:hover:text-white" href="/dashboard">Dashboard</a>
            <a className="inline-flex items-center rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 shadow ring-1 ring-indigo-500/40" href="#cta">Start free</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-60">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-indigo-400 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-fuchsia-400 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-28 md:pb-16 lg:flex lg:items-center lg:gap-16">
          <div className="flex-1">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">New • Reply to reviews in seconds</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">AI replies for Google & Yelp reviews</h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">Repute drafts warm, on-brand responses to every review—good, bad, or neutral—so you protect your reputation in minutes, not hours.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={STRIPE_BASIC}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-indigo-600 hover:bg-indigo-700 shadow ring-1 ring-indigo-500/40"
              >
                Start free — Basic
              </a>
              <a
                href={STRIPE_PRO}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 ring-1 ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-white/5"
              >
                Start free — Pro
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full px-3 py-1 border border-slate-200/60 dark:border-white/10">Trusted by local salons, restaurants & gyms</span>
              <span className="rounded-full px-3 py-1 border border-slate-200/60 dark:border-white/10">EN & FR replies</span>
              <span className="rounded-full px-3 py-1 border border-slate-200/60 dark:border-white/10">Google • Yelp • Facebook • TripAdvisor</span>
            </div>
          </div>

          {/* Product demo */}
          <div className="flex-1 mt-12 lg:mt-0">
            <div className="rounded-2xl shadow-2xl ring-1 ring-slate-200/60 dark:ring-white/10 backdrop-blur bg-white/70 dark:bg-slate-900/50">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/60 dark:border-white/10">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-semibold">Repute — Review Reply Draft</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                    <span>EN</span>
                    <input type="checkbox" checked={langFR} onChange={(e)=>setLangFR(e.target.checked)} className="peer sr-only" />
                    <span className="relative inline-flex w-10 h-5 items-center rounded-full bg-slate-300 peer-checked:bg-indigo-600 transition">
                      <span className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white peer-checked:translate-x-5 transition" />
                    </span>
                    <span>FR</span>
                  </label>
                  <select value={tone} onChange={(e)=>setTone(e.target.value as any)} className="rounded-lg border border-slate-300/70 bg-transparent px-2 py-1 text-xs">
                    <option value="friendly">Friendly</option>
                    <option value="professional">Professional</option>
                    <option value="apologetic">Apologetic</option>
                    <option value="cheerful">Cheerful</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-slate-200/60 dark:border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pasted review</p>
                  <div className="mt-2 rounded-xl bg-white/70 dark:bg-slate-900/50 ring-1 ring-slate-200/70 dark:ring-white/10 p-4 text-sm">“Food was great but we waited 35 minutes to be seated…”</div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Draft reply</p>
                  <div className="mt-2 rounded-xl bg-white/70 dark:bg-slate-900/50 ring-1 ring-slate-200/70 dark:ring-white/10 p-4 text-sm min-h-[96px] whitespace-pre-wrap">{reply}</div>
                  <div className="mt-4 flex items-center gap-2">
                    <button onClick={copyReply} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:opacity-90">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                      One-click copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Demo only. Actual app generates replies based on the full review and tone.</p>
          </div>
        </div>
      </section>

      {/* Logos / social proof */}
      <section className="mx-auto max-w-7xl px-6 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs uppercase tracking-wider text-slate-500">
          <div className="rounded-xl ring-1 ring-slate-200/60 dark:ring-white/10 px-3 py-2">Salons</div>
          <div className="rounded-xl ring-1 ring-slate-200/60 dark:ring-white/10 px-3 py-2">Restaurants</div>
          <div className="rounded-xl ring-1 ring-slate-200/60 dark:ring-white/10 px-3 py-2">Gyms</div>
          <div className="rounded-xl ring-1 ring-slate-200/60 dark:ring-white/10 px-3 py-2">Spas</div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Paste a review", desc: "Drop in any Google, Yelp, Facebook, or TripAdvisor review." },
            { title: "Pick the tone", desc: "Friendly, professional, apologetic, cheerful—your call." },
            { title: "Copy & post", desc: "One click to copy. Edit if you want. All set." },
          ].map((s, i) => (
            <div key={s.title} className="rounded-2xl ring-1 ring-slate-200/70 dark:ring-white/10 p-6 bg-white/70 dark:bg-slate-900/40">
              <div className="w-10 h-10 rounded-xl grid place-items-center bg-indigo-600 text-white">{i + 1}</div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { t: "Consistent tone", d: "On-brand, respectful replies every time." },
            { t: "Ridiculously fast", d: "Clear your weekly reviews in under 5 minutes." },
            { t: "Multilingual", d: "Reply in English or French (more soon)." },
            { t: "Save hours", d: "Owners and managers win back their time." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl ring-1 ring-slate-200/70 dark:ring-white/10 p-6 bg-white/70 dark:bg-slate-900/40">
              <h3 className="font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Simple pricing</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Start free, cancel anytime.</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span>Monthly</span>
            <label className="inline-flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" checked={yearly} onChange={(e)=>setYearly(e.target.checked)} className="peer sr-only" />
              <span className="relative inline-flex w-10 h-5 items-center rounded-full bg-slate-300 peer-checked:bg-indigo-600 transition">
                <span className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white peer-checked:translate-x-5 transition" />
              </span>
            </label>
            <span>
              Yearly <span className="ml-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-2 py-0.5 text-[11px]">2 months free</span>
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl ring-1 ring-slate-200/70 dark:ring-white/10 p-6 bg-white/70 dark:bg-slate-900/40">
            <h3 className="text-xl font-bold">Basic</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Perfect for single-location businesses.</p>
            <p className="mt-4 text-3xl font-extrabold">
              <span>{priceBasic}</span><span className="text-base font-medium text-slate-500">{priceSuffix}</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Unlimited replies</li>
              <li>• Tone presets</li>
              <li>• Copy to clipboard</li>
            </ul>
            <a
              href={STRIPE_BASIC}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 shadow ring-1 ring-indigo-500/40"
            >
              Start free
            </a>
          </div>

          <div className="rounded-2xl ring-2 ring-indigo-500 p-6 bg-white/80 dark:bg-slate-900/50">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 px-3 py-1 text-xs font-semibold">Best value</div>
            <h3 className="mt-2 text-xl font-bold">Pro</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">For growing teams & multi-location.</p>
            <p className="mt-4 text-3xl font-extrabold">
              <span>{pricePro}</span><span className="text-base font-medium text-slate-500">{priceSuffix}</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Everything in Basic</li>
              <li>• Saved templates</li>
              <li>• Multi-language</li>
            </ul>
            <a
              href={STRIPE_PRO}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 shadow ring-1 ring-indigo-500/40"
            >
              Start free
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">FAQ</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            { q: "Does this work for negative reviews?", a: "Yes. Choose an apologetic or professional tone—Repute drafts a calm, human response you can tweak." },
            { q: "Which platforms are supported?", a: "Google, Yelp, Facebook, and TripAdvisor. Paste the review text to start; direct integrations are coming." },
            { q: "Can I cancel anytime?", a: "Absolutely. Plans are monthly with no contract." },
            { q: "Is my data private?", a: "We don’t sell data. Reviews are processed to generate a draft reply and are not used to train public models." },
          ].map((item) => (
            <details key={item.q} className="group rounded-xl ring-1 ring-slate-200/70 dark:ring-white/10 p-5 bg-white/70 dark:bg-slate-900/40" open>
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white p-8 md:p-12 shadow-2xl">
          <div className="md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">Ready to reply like a pro?</h2>
              <p className="mt-2 text-white/90">Start a free trial—no credit card required. Upgrade when you’re ready.</p>
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
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 ring-1 ring-white/60 hover:bg-white/10"
              >
                Start free (Pro)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
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
