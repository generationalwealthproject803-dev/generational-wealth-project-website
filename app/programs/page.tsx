import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Wallet,
  ShieldCheck,
  Sparkles,
  Home as HomeIcon,
  BookOpen,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore our financial literacy classes, budgeting workshops, credit education, youth and family financial education, and educational materials in Columbia, SC.",
};

const PROGRAMS = [
  {
    id: "classes",
    icon: GraduationCap,
    title: "Financial Literacy Classes",
    tagline: "Your foundation for financial confidence",
    description:
      "A structured, six-week course covering the fundamentals every adult needs — income and cash flow, saving strategy, understanding credit, debt basics, and an introduction to investing. Designed for total beginners and anyone ready for a refresher.",
    image: IMAGES.communityWorkshop,
    format: "6-week series · In-person & virtual options",
    outcomes: [
      "A personal spending and savings plan",
      "Working knowledge of credit fundamentals",
      "A clear next step for your financial goals",
    ],
  },
  {
    id: "budgeting",
    icon: Wallet,
    title: "Budgeting Workshops",
    tagline: "A budget that survives real life",
    description:
      "Hands-on, single-session workshops focused entirely on building a budget you'll actually follow. We work with your real numbers — irregular income, shared expenses, debt payments — to design a system, not just a spreadsheet.",
    image: IMAGES.budgetingWorkshop,
    format: "Monthly · 2-hour sessions",
    outcomes: [
      "A completed monthly budget you leave with",
      "Tools to track spending without stress",
      "Strategies for irregular or variable income",
    ],
  },
  {
    id: "credit",
    icon: ShieldCheck,
    title: "Credit Education",
    tagline: "Understand it. Protect it. Improve it.",
    description:
      "A four-part series demystifying credit reports and scores. Learn how to read your report, dispute inaccuracies, understand what's actually driving your score, and build a realistic plan to raise it over time.",
    image: IMAGES.creditEducation,
    format: "4-part series · Includes a free credit report review",
    outcomes: [
      "How to read and dispute your credit report",
      "A personalized credit-building action plan",
      "Awareness of common credit traps and scams",
    ],
  },
  {
    id: "youth",
    icon: Sparkles,
    title: "Youth Financial Education",
    tagline: "Money lessons before the mistakes",
    description:
      "Interactive, age-appropriate programming for students ages 10–18 covering earning, saving, needs vs. wants, and the basics of credit and entrepreneurship — delivered in schools, after-school programs, and community centers.",
    image: IMAGES.youthEducation,
    format: "Flexible scheduling for schools & youth groups",
    outcomes: [
      "Foundational money habits built early",
      "Confidence talking about money at home",
      "Introductory understanding of saving and credit",
    ],
  },
  {
    id: "family",
    icon: HomeIcon,
    title: "Family Financial Education",
    tagline: "Plan together. Build together.",
    description:
      "Sessions designed for households, not individuals — helping families align on shared financial goals, navigate joint budgeting, plan for major milestones like homeownership, and build healthy money conversations across generations.",
    image: IMAGES.familyPlanning,
    format: "Cohort-based · Whole-family welcome",
    outcomes: [
      "A shared family financial roadmap",
      "Tools for talking to kids and elders about money",
      "Milestone planning for homeownership and education",
    ],
  },
  {
    id: "materials",
    icon: BookOpen,
    title: "Educational Materials",
    tagline: "Take the knowledge home",
    description:
      "Every program is paired with plain-language guides, worksheets, and reference materials you can revisit anytime — plus a growing library of free resources available to the wider community, program participant or not.",
    image: IMAGES.consultation,
    format: "Free digital & print resources",
    outcomes: [
      "Printable budgeting and goal-tracking worksheets",
      "Plain-language credit and savings guides",
      "A resource library that grows every quarter",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-900 py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grain" />
        <div className="container relative">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brass-400">
              <span className="h-px w-6 bg-current" />
              Our Programs
            </span>
            <h1 className="max-w-2xl text-balance font-display text-4xl font-semibold text-cream-50 sm:text-5xl">
              Six paths to a stronger financial future.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream-100/75">
              Whichever stage you're at — just starting out, rebuilding
              credit, planning for your kids, or planning for your family —
              there's a program built for where you are right now.
            </p>
          </Reveal>
        </div>
      </section>

      {PROGRAMS.map((program, i) => (
        <section
          key={program.id}
          id={program.id}
          className={i % 2 === 0 ? "bg-background py-20 sm:py-24" : "bg-cream-100 py-20 sm:py-24"}
        >
          <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-800/10 text-forest-800">
                <program.icon className="h-5 w-5" />
              </div>
              <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-brass-700">
                {program.tagline}
              </span>
              <h2 className="mt-2 font-display text-2xl font-semibold text-forest-900 sm:text-3xl">
                {program.title}
              </h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-800/75">
                {program.description}
              </p>
              <p className="mt-4 text-sm font-medium text-forest-800/70">
                {program.format}
              </p>
              <ul className="mt-6 space-y-3">
                {program.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-sm text-ink-800/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" />
                    {outcome}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-cream-50 transition-transform hover:-translate-y-0.5"
              >
                Register your interest
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand
        eyebrow="Need Personalized Guidance?"
        title="Some questions need a one-on-one conversation."
        description="Book a free financial consultation and get support tailored specifically to your situation."
        primaryHref="/consultation"
        primaryLabel="Book a Consultation"
        secondaryHref="/get-involved"
        secondaryLabel="Support These Programs"
      />
    </>
  );
}
