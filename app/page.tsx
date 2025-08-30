"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Rocket,
  Languages,
  CopyCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";

/** 🔗 Stripe Payment Links (TEST mode) */
const CHECKOUT_BASIC_URL = "https://buy.stripe.com/test_fZucN74Y56mwgxb2TBbfO00"; // Basic $29/mo
const CHECKOUT_PRO_URL   = "https://buy.stripe.com/test_00w00lfCJdOY0yd1PxbfO01"; // Pro   $49/mo

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Layout helper ---------- */
function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500" />
          <span className="text-lg font-semibold tracking-tight">Repute</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#how" className="hover:text-neutral-600">How it works</a>
          <a href="#pricing" className="hover:text-neutral-600">Pricing</a>
          <a href="#faq" className="hover:text-neutral-600">FAQ</a>
          <a href="/dashboard" className="hover:text-neutral-600">Dashboard</a>
        </nav>
        <a
          href={CHECKOUT_BASIC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90"
        >
          Start free
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <Section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="-top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/20 to-rose-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium tracking-tight"
        >
          <Sparkles size={14} /> New: Reply to reviews in seconds
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          AI replies for Google & Yelp reviews
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-neutral-600"
        >
          Repute drafts warm, on-brand responses to every review—good, bad, or neutral—so you protect your reputation in minutes, not hours.
        </motion.p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={CHECKOUT_BASIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 text-white shadow-lg hover:shadow-xl"
          >
            Start free
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-100"
          >
            See how it works
          </a>
        </div>

        {/* Mock “screenshot” */}
        <div className="mx-auto mt-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-3 py-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-2 text-xs text-neutral-500">Repute — Review Reply Draft</span>
          </div>
          <div className="grid gap-0 p-6 sm:grid-cols-2 sm:gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Pasted review</p>
              <div className="mt-2 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
                “Food was great but we waited 35 minutes to be seated…”
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Draft reply</p>
              <div className="mt-2 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
                Thanks for sharing this, Alex—sorry about the wait. That’s not the experience we aim for. Please email us at hello@getrepute.ca so we can make it right.
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
                <CopyCheck size={16} /> One-click copy
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Social proof ---------- */
function SocialProof() {
  return (
    <Section className="py-10">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs text-neutral-500">
        <span>Trusted by local salons, restaurants, and gyms</span>
        <span className="hidden sm:inline">•</span>
        <span>Reply in English & French</span>
        <span className="hidden sm:inline">•</span>
        <span>Works with Google, Yelp, Facebook, TripAdvisor</span>
      </div>
    </Section>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  const steps = [
    { icon: MessageSquare, title: "Paste a review", desc: "Drop in any Google/Yelp/Facebook/TripAdvisor review." },
    { icon: Sparkles, title: "Pick the tone", desc: "Friendly, professional, apologetic, cheerful—your call." },
    { icon: CopyCheck, title: "Copy & post", desc: "One click to copy. Edit if you want. All set." },
  ];
  return (
    <Section id="how" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
      </div>
      <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <s.icon size={18} />
            </div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-neutral-300">{s.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ---------- Features ---------- */
function Features() {
  const items = [
    { icon: ShieldCheck, title: "Consistent tone", desc: "On-brand, respectful replies every time." },
    { icon: Rocket, title: "Ridiculously fast", desc: "Clear your weekly reviews in under 5 minutes." },
    { icon: Languages, title: "Multilingual", desc: "Reply in English or French (more soon)." },
    { icon: Clock, title: "Save hours", desc: "Owners and managers win back their time." },
  ];
  return (
    <Section className="border-y border-neutral-200/80 bg-neutral-50">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <it.icon size={18} />
            </div>
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-neutral-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const tiers = [
    {
      name: "Basic",
      price: "$29/mo",
      blurb: "Perfect for single-location businesses.",
      features: ["Unlimited replies", "Tone presets", "Copy to clipboard"],
      url: CHECKOUT_BASIC_URL,
    },
    {
      name: "Pro",
      price: "$49/mo",
      blurb: "For growing teams and multi-location.",
      features: ["Everything in Basic", "Saved templates", "Multi-language"],
      url: CHECKOUT_PRO_URL,
      highlighted: true,
    },
  ];

  return (
    <Section id="pricing">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple pricing</h2>
        <p className="mt-2 text-neutral-600">Start free, cancel anytime.</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-6 shadow-sm ${t.highlighted ? "border-indigo-200 bg-gradient-to-b from-white to-indigo-50" : "border-neutral-200 bg-white"}`}
          >
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="mt-1 text-3xl font-extrabold">{t.price}</p>
            <p className="mt-1 text-sm text-neutral-600">{t.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-600" /> {f}
                </li>
              ))}
            </ul>
            <a
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full rounded-xl bg-neutral-900 px-4 py-2 text-center font-medium text-white hover:opacity-90"
            >
              Start free
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "Does this work for negative reviews?", a: "Yes. Choose an apologetic or professional tone—Repute drafts a calm, human response you can tweak." },
    { q: "Which platforms are supported?", a: "Google, Yelp, Facebook, and TripAdvisor. Paste the review text to start; direct integrations are coming." },
    { q: "Can I cancel anytime?", a: "Absolutely. Plans are monthly with no contract." },
  ];
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
        <div className="mt-6 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          {items.map((it, i) => (
            <details key={i} className="group p-5">
              <summary className="cursor-pointer list-none text-sm font-medium">{it.q}</summary>
              <p className="mt-2 text-sm text-neutral-600">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <Section id="cta" className="py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-8 text-white shadow-lg">
        <h3 className="text-3xl font-bold">Ready to reply like a pro?</h3>
        <p className="mt-2 text-white/90">Start a free trial—no credit card required. Upgrade when you’re ready.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={CHECKOUT_BASIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-5 py-3 font-semibold text-neutral-900 hover:opacity-90"
          >
            Start free (Basic)
          </a>
          <a
            href={CHECKOUT_PRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20"
          >
            Start free (Pro)
          </a>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 text-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-neutral-600">© {new Date().getFullYear()} Repute</p>
        <div className="flex items-center gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#faq">Help</a>
        </div>
      </div>
    </footer>
  );
}
