const TIERS = [
  {
    amount: "$25",
    impact: "Provides printed workbooks and materials for one class participant.",
  },
  {
    amount: "$75",
    impact: "Sponsors a seat in a full budgeting workshop series for one adult.",
  },
  {
    amount: "$150",
    impact: "Funds a complete one-on-one financial consultation package.",
  },
  {
    amount: "$500",
    impact: "Brings a full outreach session to a school, church, or community center.",
  },
];

export function DonationTiers() {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold text-forest-900">
        What your gift makes possible
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {TIERS.map((tier) => (
          <div
            key={tier.amount}
            className="rounded-2xl border border-forest-800/10 bg-card p-5"
          >
            <span className="font-display text-2xl font-semibold text-forest-900">
              {tier.amount}
            </span>
            <p className="mt-2 text-xs leading-relaxed text-ink-800/60">
              {tier.impact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
