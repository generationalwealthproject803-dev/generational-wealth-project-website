import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Users,
  Building2,
  Megaphone,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { DonationTiers } from "@/components/donation-tiers";
import { GivebutterForm } from "@/components/givebutter-form";
import { CtaBand } from "@/components/cta-band";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Get Involved — Donate, Volunteer & Partner",
  description:
    "Support the Generational Wealth Project through donations, volunteering, and community partnerships in Columbia, SC. Help fund financial literacy programs and outreach.",
};

const VOLUNTEER_ROLES = [
  {
    title: "Workshop Facilitator",
    description: "Lead or co-lead a class using our prepared curriculum. Financial background helpful, not required.",
  },
  {
    title: "Financial Coach",
    description: "Licensed or experienced financial professionals providing one-on-one consultations.",
  },
  {
    title: "Community Outreach Volunteer",
    description: "Help set up events, greet participants, and support outreach at partner locations.",
  },
  {
    title: "Administrative & Marketing Support",
    description: "Assist with scheduling, communications, social media, and program coordination.",
  },
];

const PARTNER_TYPES = [
  {
    icon: Building2,
    title: "Corporate Sponsors",
    description: "Fund a program series, sponsor materials, or provide employee financial wellness sessions.",
  },
  {
    icon: Megaphone,
    title: "Churches & Schools",
    description: "Host a workshop or class series on-site for your congregation, students, or staff.",
  },
  {
    icon: Users,
    title: "Community Organizations",
    description: "Co-host outreach events and cross-promote resources to reach more families together.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-900 py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grain" />
        <div className="container relative">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brass-400">
              <span className="h-px w-6 bg-current" />
              Get Involved
            </span>
            <h1 className="max-w-2xl text-balance font-display text-4xl font-semibold text-cream-50 sm:text-5xl">
              There's a place for you in this mission.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream-100/75">
              Whether you give, volunteer your time, or open your doors to
              our outreach team — every contribution moves a Columbia family
              closer to financial stability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta-500/10 text-terracotta-500">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <SectionHeading
              eyebrow="Donate"
              title="Fund the classes, coaching, and outreach families depend on."
              description="The Generational Wealth Project is a 501(c)(3) nonprofit — your donation is tax-deductible and goes directly toward free and low-cost programming across Columbia."
              className="mt-5"
            />
            <div className="mt-8 space-y-4">
              {[
                "Recurring monthly gifts sustain year-round programming",
                "In-kind donations of materials and venue space welcome",
                "Corporate matching gifts double your impact",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-ink-800/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-10">
              <DonationTiers />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <GivebutterForm />
          </Reveal>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="bg-cream-100 py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={IMAGES.budgetingWorkshop}
                alt="A volunteer facilitator leading a workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-800/10 text-forest-800">
              <Users className="h-5 w-5" />
            </div>
            <SectionHeading
              eyebrow="Volunteer"
              title="Share your time, your skills, or your story."
              description="Our programs run on the generosity of volunteers who believe financial education changes lives — from seasoned financial professionals to community members who simply want to help."
              className="mt-5"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {VOLUNTEER_ROLES.map((role) => (
                <div key={role.title} className="rounded-xl border border-forest-800/10 bg-card p-5">
                  <h3 className="font-display text-base font-semibold text-forest-900">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-800/65">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-cream-50 transition-transform hover:-translate-y-0.5"
            >
              Apply to volunteer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Community Outreach / Partnerships */}
      <section id="outreach" className="py-20 sm:py-28">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Community Outreach & Partnerships"
              title="We bring the classroom to you."
              description="Our outreach team partners with churches, schools, employers, and neighborhood organizations across the Midlands to deliver financial education where people already are."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {PARTNER_TYPES.map((partner, i) => (
              <Reveal key={partner.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-forest-800/10 bg-card p-7 text-center shadow-card">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-800/8 text-forest-800">
                    <partner.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-forest-900">
                    {partner.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-800/70">
                    {partner.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-forest-800/20 px-7 py-3.5 text-sm font-semibold text-forest-800 hover:bg-forest-800/5"
            >
              Start a partnership conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Every Contribution Counts"
        title="Not sure which path is right for you?"
        description="Reach out and we'll help you find the best way to make an impact — whether that's a gift, your time, or a partnership."
        primaryHref="/contact"
        primaryLabel="Contact Our Team"
      />
    </>
  );
}
