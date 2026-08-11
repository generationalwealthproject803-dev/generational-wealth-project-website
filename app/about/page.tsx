import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Heart, Scale, Handshake } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind the Generational Wealth Project — a Columbia, SC nonprofit dedicated to closing the financial literacy gap and building lasting community wealth.",
};

const VALUES = [
  {
    icon: Target,
    title: "Practical Over Theoretical",
    description:
      "Every lesson is designed to be used the same week it's taught — real budgets, real credit reports, real decisions.",
  },
  {
    icon: Heart,
    title: "Dignity First",
    description:
      "No judgment about where you're starting from. We meet people with respect, patience, and zero shame.",
  },
  {
    icon: Scale,
    title: "Equity in Access",
    description:
      "Financial education shouldn't be a privilege. Our core programs remain free or low-cost for the community we serve.",
  },
  {
    icon: Handshake,
    title: "Community Rooted",
    description:
      "We build alongside Columbia's churches, schools, and neighborhood leaders — not around them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-900 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grain" />
        <div className="container relative">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brass-400">
              <span className="h-px w-6 bg-current" />
              Our Story
            </span>
            <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold text-cream-50 sm:text-5xl">
              A nonprofit built on a simple belief: financial knowledge is
              inheritance too.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-cream-100/75">
              The Generational Wealth Project was founded in Columbia, South
              Carolina to close a gap that isn&apos;t talked about enough —
              the financial literacy gap that quietly shapes who builds
              wealth and who doesn&apos;t.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="How We Started"
              title="From kitchen-table conversations to a citywide mission."
            />
            <div className="mt-6 space-y-5 text-[1.02rem] leading-relaxed text-ink-800/75">
              <p>
                Generational Wealth Project began with a conversation that
                happens in living rooms across Columbia every day: how do you
                build something lasting when no one ever taught you the
                rules of the game? Credit, budgeting, saving, and investing
                aren&apos;t mysteries — but for too many families, they were
                never explained.
              </p>
              <p>
                We started with small workshops in community spaces, and the
                response told us everything we needed to know: people
                weren&apos;t looking for a lecture. They were looking for a
                partner. Someone to sit with them, explain the &ldquo;why&rdquo;
                behind the numbers, and help them build a plan that fits
                their actual life.
              </p>
              <p>
                Today, that same commitment powers every class, workshop, and
                consultation we offer — delivered by people who understand
                Columbia because we live here too.
              </p>
            </div>
            <Link
              href="/programs"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-800 underline-grow"
            >
              See our programs in action
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={IMAGES.familyPlanning}
                alt="A family reviewing their financial plan together at home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="What Guides Us"
              title="The values behind every program"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-forest-800/10 bg-card p-7 shadow-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-800/8 text-forest-800">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-forest-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-800/70">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={IMAGES.consultation}
                alt="A financial coach in a one-on-one consultation session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Our Approach"
              title="Education. Consultation. Community. Together."
              description="We believe lasting change happens at the intersection of three things: teaching people the fundamentals, giving them personalized support when life gets specific, and showing up consistently in the neighborhoods we serve."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-forest-800/5 p-5">
                <div className="font-display text-lg font-semibold text-forest-900">Educate</div>
                <p className="mt-1 text-sm text-ink-800/65">Classes and workshops that build core financial skills.</p>
              </div>
              <div className="rounded-xl bg-forest-800/5 p-5">
                <div className="font-display text-lg font-semibold text-forest-900">Consult</div>
                <p className="mt-1 text-sm text-ink-800/65">One-on-one coaching tailored to your specific situation.</p>
              </div>
              <div className="rounded-xl bg-forest-800/5 p-5">
                <div className="font-display text-lg font-semibold text-forest-900">Connect</div>
                <p className="mt-1 text-sm text-ink-800/65">Outreach that brings resources into the community directly.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Be Part of the Story"
        title="Help us write the next chapter for Columbia's families."
        description="Whether through a gift, your time, or a referral, your support fuels everything you just read about."
        primaryHref="/get-involved"
        primaryLabel="Get Involved"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
