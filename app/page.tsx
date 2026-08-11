import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  Wallet,
  ShieldCheck,
  Sparkles,
  Users,
  HeartHandshake,
  ClipboardCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatItem } from "@/components/stat-item";
import { ProgramCard } from "@/components/program-card";
import { CtaBand } from "@/components/cta-band";
import { TestimonialCard } from "@/components/testimonial-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { IMAGES } from "@/lib/images";

const PROGRAMS = [
  {
    icon: GraduationCap,
    title: "Financial Literacy Classes",
    description:
      "Foundational courses covering income, saving, credit, and investing — built for every stage of your financial journey.",
    meta: "6-week series",
    image: IMAGES.communityWorkshop,
  },
  {
    icon: Wallet,
    title: "Budgeting Workshops",
    description:
      "Hands-on sessions to build a spending plan that works for your real life, not someone else's spreadsheet.",
    meta: "Monthly · In-person",
    image: IMAGES.budgetingWorkshop,
  },
  {
    icon: ShieldCheck,
    title: "Credit Education",
    description:
      "Understand your credit report, repair inaccuracies, and build a strategy to raise your score with confidence.",
    meta: "4-part series",
    image: IMAGES.creditEducation,
  },
  {
    icon: Sparkles,
    title: "Youth Financial Education",
    description:
      "Age-appropriate money lessons for students — savings habits, earning basics, and the psychology of wealth.",
    meta: "Ages 10–18",
    image: IMAGES.youthEducation,
  },
];

const STATS = [
  { value: "6", label: "Core programs serving Columbia & the Midlands" },
  { value: "100%", label: "Community-centered curriculum, built locally" },
  { value: "1:1", label: "Personalized financial consultation available" },
  { value: "SC", label: "Proudly rooted in Columbia, South Carolina" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-900">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.familyPlanning}
            alt="A family planning their finances together"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/95 to-forest-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent" />
        </div>

        <div className="container relative flex min-h-[88vh] flex-col justify-center py-28 sm:min-h-[85vh]">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brass-400/30 bg-brass-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brass-400">
              A Columbia, SC Nonprofit
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.08] text-cream-50 sm:text-6xl">
              Building wealth that outlives us —{" "}
              <span className="font-display-italic text-brass-400">
                one family at a time.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream-100/80">
              The Generational Wealth Project equips Columbia&apos;s families
              and individuals with financial literacy, credit confidence, and
              one-on-one support — so today&apos;s progress becomes
              tomorrow&apos;s legacy.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/get-involved"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta-500 px-8 py-4 text-sm font-semibold text-cream-50 shadow-card transition-transform hover:-translate-y-0.5 hover:bg-terracotta-600"
              >
                Support Our Mission
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/25 px-8 py-4 text-sm font-semibold text-cream-50 transition-colors hover:bg-cream-100/10"
              >
                Explore Our Programs
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="container relative border-t border-cream-100/10 pb-10 pt-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-cream-100/60 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission intro */}
      <section className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={IMAGES.communityWorkshop}
                alt="Community members at a financial literacy workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Why We Exist"
              title="Wealth isn't just what you earn — it's what you understand, protect, and pass on."
              description="For generations, communities across the Midlands have been left out of the conversations that build lasting wealth — homeownership, credit, investing, estate planning. The Generational Wealth Project closes that gap with practical education, honest conversation, and real support, delivered by people who understand the community we serve."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Free and low-cost programming for individuals and families",
                "Curriculum grounded in real Columbia-area financial realities",
                "One-on-one consultation alongside group learning",
                "A long-term relationship, not a single workshop",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-800/80">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-800/10 text-forest-800">
                    <ClipboardCheck className="h-3 w-3" />
                  </span>
                  <span className="text-[0.95rem] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-800 underline-grow"
            >
              Read our full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Programs preview */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Our Programs"
                title="Education built for every stage of the journey."
                description="From your first budget to your first home, our programming meets you where you are — and helps you get where you're going."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/programs"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-forest-800/20 px-5 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-800/5"
              >
                View all programs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program, i) => (
              <Reveal key={program.title} delay={i * 0.08}>
                <ProgramCard {...program} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation + Outreach split */}
      <section className="py-20 sm:py-28">
        <div className="container grid gap-6 lg:grid-cols-2">
          <Reveal className="group relative overflow-hidden rounded-3xl bg-forest-800 p-10 text-cream-50 sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brass-500/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
            <Users className="h-9 w-9 text-brass-400" />
            <h3 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">
              Financial Consultation
            </h3>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-cream-100/75">
              Sit down with a financial coach for personalized guidance on
              budgeting, credit, debt payoff, or long-term planning — free
              and confidential for individuals and families in the Midlands.
            </p>
            <Link
              href="/consultation"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brass-500 px-6 py-3 text-sm font-semibold text-forest-900 transition-transform hover:-translate-y-0.5"
            >
              Book your session
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="group relative overflow-hidden rounded-3xl bg-terracotta-500 p-10 text-cream-50 sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-cream-50/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
            <HeartHandshake className="h-9 w-9 text-cream-50" />
            <h3 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">
              Community Outreach
            </h3>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-cream-50/85">
              We bring financial education directly into churches, schools,
              and neighborhood centers across Columbia — meeting our
              community where it already gathers.
            </p>
            <Link
              href="/get-involved"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-terracotta-600 transition-transform hover:-translate-y-0.5"
            >
              Partner with us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-forest-900 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grain" />
        <div className="container relative">
          <Reveal>
            <SectionHeading
              eyebrow="Community Voices"
              title="What our neighbors are saying"
              tone="dark"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal delay={0}>
              <TestimonialCard
                quote="I finally understand my credit report instead of being afraid of it. This program gave me a plan, not just information."
                name="Community Member"
                role="Credit Education Participant"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <TestimonialCard
                quote="The budgeting workshop was the first time a financial class actually felt like it was made for people like me."
                name="Community Member"
                role="Budgeting Workshop Graduate"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <TestimonialCard
                quote="My consultation gave our family an actual roadmap toward homeownership. We finally know our next step."
                name="Community Member"
                role="Financial Consultation Client"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Join the Movement"
        title="Your gift funds real financial futures in Columbia."
        description="Every dollar supports free classes, one-on-one consultations, and outreach that reaches families who need it most."
        primaryHref="/get-involved"
        primaryLabel="Make a Donation"
        secondaryHref="/get-involved#volunteer"
        secondaryLabel="Volunteer With Us"
      />

      {/* Newsletter */}
      <section className="bg-forest-900 py-14">
        <div className="container flex flex-col items-start justify-between gap-6 border-t border-cream-100/10 pt-10 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-semibold text-cream-50">
              Stay connected to the mission
            </h3>
            <p className="mt-1 text-sm text-cream-100/60">
              Program updates, financial tips, and outreach news — no spam, ever.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
