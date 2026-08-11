import type { Metadata } from "next";
import { BookOpen, FileText, Calculator, ListChecks, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Resources & Educational Materials",
  description:
    "Free financial literacy guides, worksheets, and educational materials from the Generational Wealth Project — budgeting, credit, saving, and family financial planning resources for Columbia, SC.",
};

const RESOURCES = [
  {
    icon: Calculator,
    title: "Monthly Budget Worksheet",
    description:
      "A simple, printable worksheet to map your income, fixed expenses, and savings goals in one sitting.",
    tag: "Budgeting",
  },
  {
    icon: FileText,
    title: "How to Read Your Credit Report",
    description:
      "A plain-language walkthrough of every section of your credit report and what actually affects your score.",
    tag: "Credit",
  },
  {
    icon: ListChecks,
    title: "First-Time Homebuyer Checklist",
    description:
      "The financial milestones to hit before you start house hunting — credit, savings, and documentation.",
    tag: "Family Planning",
  },
  {
    icon: BookOpen,
    title: "Money Basics for Teens",
    description:
      "A parent-and-teen guide for starting money conversations early — earning, saving, and first accounts.",
    tag: "Youth",
  },
  {
    icon: Calculator,
    title: "Debt Payoff Planner",
    description:
      "Compare snowball vs. avalanche payoff strategies and build a realistic month-by-month timeline.",
    tag: "Credit",
  },
  {
    icon: FileText,
    title: "Family Financial Values Guide",
    description:
      "Discussion prompts for aligning household financial goals across generations living under one roof.",
    tag: "Family Planning",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-900 py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grain" />
        <div className="container relative">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brass-400">
              <span className="h-px w-6 bg-current" />
              Resources
            </span>
            <h1 className="max-w-2xl text-balance font-display text-4xl font-semibold text-cream-50 sm:text-5xl">
              Free educational materials for the whole community.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream-100/75">
              You don&apos;t need to be enrolled in a program to benefit.
              These guides and worksheets are free for anyone in Columbia
              working toward financial stability.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource, i) => (
              <Reveal key={resource.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-forest-800/10 bg-card p-7 shadow-card">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-800/8 text-forest-800">
                      <resource.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-brass-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brass-700">
                      {resource.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-forest-900">
                    {resource.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-800/70">
                    {resource.description}
                  </p>
                  <a
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-800 underline-grow"
                  >
                    Request this resource
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16">
        <div className="container">
          <Reveal>
            <div className="rounded-3xl border border-forest-800/10 bg-card p-10 text-center shadow-card sm:p-14">
              <SectionHeading
                title="Our resource library is growing every quarter."
                description="Have a topic you'd like us to cover, or want printed copies for your school, church, or organization? Let us know — we'll follow up directly."
                align="center"
                className="mx-auto"
              />
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-transform hover:-translate-y-0.5"
              >
                Request materials
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Prefer a guided experience over self-study?"
        description="Join one of our live classes or workshops — the same material, with real-time support."
        primaryHref="/programs"
        primaryLabel="Browse Programs"
      />
    </>
  );
}
