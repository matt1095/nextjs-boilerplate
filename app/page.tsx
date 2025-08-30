"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Rocket,
  Languages,
  Clock4,
  CopyCheck,
  CheckCircle2,
} from "lucide-react";

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

/* ---------- Layout helpers ---------- */
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
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
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500" />
          <span className="text-lg font-semibold tracking-tight">Repute</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#how" className="hover:text-neutral-600">How it works</a>
          <a href="#pricing" className="hover:text-neutral-600">Pricing</a>
          <a href="#faq" className="hover:text-neutral-600">FAQ</a>
        </nav>
        <a
          href="#cta"
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
          Repute drafts warm, on-brand responses to every review—good, bad, or neutral—so
          you protect your reputation in minutes, not hours.
        </motion.p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#cta"
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

        {/* Simple mock “screenshot” */}
        <div className="mx-auto mt-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-3 py-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-2 text-xs text-neutral-500">Repute — Review Reply Draft</span>
          </div>
          <div className="grid gap-0 p-6 sm:grid-cols-2 sm:gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                Pasted review
              </p>
              <div className="mt-2 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
                “Food was great but we waited 35 minutes to be seated…”
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                Draft reply
              </p>
              <div className="mt-2 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
                Thanks for sharing this, Alex—sorry about the wait. That’s not the experience we aim
                for. Please email us at hello@getrepute.ca so we can make it right.
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

/* ---------- Social proof (optional logos) ---------- */
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
    { icon: Messa
