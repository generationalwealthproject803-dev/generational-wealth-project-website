import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ProgramCardProps {
  id?: string;
  icon: LucideIcon;
  title: string;
  description: string;
  meta: string;
  image?: string;
  href?: string;
}

export function ProgramCard({
  id,
  icon: Icon,
  title,
  description,
  meta,
  image,
  href = "/programs",
}: ProgramCardProps) {
  return (
    <div
      id={id}
      className="group flex flex-col overflow-hidden rounded-2xl border border-forest-800/10 bg-card shadow-card transition-transform duration-300 hover:-translate-y-1"
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-forest-900/0 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-800/8 text-forest-800">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-forest-900">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-800/70">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-forest-800/10 pt-4">
          <span className="text-xs font-medium uppercase tracking-wide text-brass-700">
            {meta}
          </span>
          <Link
            href={href}
            className="group inline-flex items-center gap-1 text-sm font-semibold text-forest-800"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
