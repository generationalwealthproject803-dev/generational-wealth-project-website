interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-cream-100/15 bg-forest-800/40 p-8">
      <blockquote className="font-display text-xl italic leading-relaxed text-cream-50">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-500/20 font-display text-sm font-semibold text-brass-400">
          {name.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-semibold text-cream-50">{name}</div>
          <div className="text-xs text-cream-100/60">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
