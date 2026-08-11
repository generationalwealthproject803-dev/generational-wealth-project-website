interface StatItemProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="border-l-2 border-brass-500/40 pl-5">
      <div className="font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm leading-snug text-ink-800/65">{label}</div>
    </div>
  );
}
