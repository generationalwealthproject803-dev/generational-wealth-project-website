import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CtaBand({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-forest-800">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-grain" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brass-500/20 blur-3xl" />
      <div className="container relative flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          {eyebrow && (
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brass-400">
              <span className="h-px w-6 bg-current" />
              {eyebrow}
            </span>
          )}
          <h2 className="text-balance font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-balance text-[1.05rem] leading-relaxed text-cream-100/75">
              {description}
            </p>
          )}
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href={primaryHref}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta-500 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-card transition-transform hover:-translate-y-0.5 hover:bg-terracotta-600"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/25 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-cream-100/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
