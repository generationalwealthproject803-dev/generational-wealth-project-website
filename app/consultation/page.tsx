import type { Metadata } from "next";
import Image from "next/image";
import { Check, Clock, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ConsultationForm } from "@/components/consultation-form";
import { CtaBand } from "@/components/cta-band";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Financial Consultation",
  description:
    "Book a free, confidential one-on-one financial consultation with the Generational Wealth Project in Columbia, SC. Get personalized support on budgeting, credit, debt, and planning.",
};

const STEPS = [
  {
    title: "Tell us what you need",
    description: "Submit the form below with a bit of context about your situation and goals.",
  },
  {
    title: "We match you with a coach",
    description: "A member of our financial coaching team reaches out within 1–2 business days.",
  },
  {
    title: "Meet — in person or virtually",
    description: "Sessions run 45–60 minutes and are completely confidential.",
  },
  {
    title: "Leave with a real plan",
    description: "Walk away with concrete next steps, not just general advice.",
  },
];

const FOCUS_AREAS = [
  "Budgeting & cash-flow review",
  "Credit report & score strategy",
  "Debt payoff planning",
  "Savings & homeownership readiness",
  "Family financial planning",
  "General financial guidance",
];

export default function ConsultationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-900 py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grain" />
        <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brass-400">
              <span className="h-px w-6 bg-current" />
              Financial Consultation
            </span>
            <h1 className="text-balance font-display text-4xl font-semibold text-cream-50 sm:text-5xl">
              Sometimes you don&apos;t need a class. You need a plan for your
              exact situation.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream-100/75">
              Our one-on-one financial consultations pair you with a real
              person who listens first, then helps you build a plan around
              your income, your debts, and your goals — free, confidential,
              and judgment-free.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-cream-100/75">
                <ShieldCheck className="h-4 w-4 text-brass-400" /> 100% confidential
              </div>
              <div className="flex items-center gap-2 text-sm text-cream-100/75">
                <Clock className="h-4 w-4 text-brass-400" /> 45–60 minute sessions
              </div>
              <div className="flex items-center gap-2 text-sm text-cream-100/75">
                <Users className="h-4 w-4 text-brass-400" /> In-person or virtual
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={IMAGES.consultation}
                alt="One-on-one financial consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="What We Cover"
              title="Bring the real questions. We'll work through them together."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-forest-800/15 bg-cream-100 px-5 py-2.5 text-sm font-medium text-forest-800"
              >
                <Check className="h-3.5 w-3.5 text-brass-600" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="A simple, human process from first message to real plan."
            />
            <ol className="mt-8 space-y-6">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-800 font-display text-sm font-semibold text-cream-50">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-forest-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-800/70">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <ConsultationForm />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Not Sure Where to Start?"
        title="Explore our classes and workshops alongside consultation."
        description="Many of our participants combine group learning with one-on-one support for the fastest progress."
        primaryHref="/programs"
        primaryLabel="View Programs"
        secondaryHref="/contact"
        secondaryLabel="Ask a Question"
      />
    </>
  );
}
