"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    amount: "$25",
    impact: "Provides printed workbooks and materials for one class participant.",
  },
  {
    amount: "$75",
    impact: "Sponsors a seat in a full budgeting workshop series for one adult.",
    featured: true,
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
  const [selected, setSelected] = useState<string>(TIERS[1].amount);
  const [custom, setCustom] = useState("");

  return (
    <div className="rounded-3xl border border-forest-800/10 bg-white p-8 shadow-card sm:p-10">
      <h3 className="font-display text-xl font-semibold text-forest-900">
        Choose your impact
      </h3>
      <p className="mt-1 text-sm text-ink-800/60">
        Every gift — recurring or one-time — directly funds programming for
        Columbia families.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {TIERS.map((tier) => (
          <button
            key={tier.amount}
            type="button"
            onClick={() => {
              setSelected(tier.amount);
              setCustom("");
            }}
            className={cn(
              "flex flex-col items-start rounded-2xl border p-5 text-left transition-colors",
              selected === tier.amount
                ? "border-terracotta-500 bg-terracotta-500/5"
                : "border-forest-800/10 hover:border-forest-800/25"
            )}
          >
            <div className="flex w-full items-center justify-between">
              <span className="font-display text-2xl font-semibold text-forest-900">
                {tier.amount}
              </span>
              {selected === tier.amount && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-terracotta-500 text-cream-50">
                  <Check className="h-3 w-3" />
                </span>
              )}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink-800/60">
              {tier.impact}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-5">
        <label htmlFor="custom-amount" className="text-xs font-medium uppercase tracking-wide text-ink-800/50">
          Or enter a custom amount
        </label>
        <div className="mt-2 flex items-center overflow-hidden rounded-full border border-forest-800/15">
          <span className="pl-5 text-ink-800/50">$</span>
          <input
            id="custom-amount"
            type="number"
            min="1"
            placeholder="100"
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value);
              setSelected("");
            }}
            className="w-full bg-transparent px-2 py-3 text-sm text-ink-800 focus:outline-none"
          />
        </div>
      </div>

      <button
        type="button"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta-500 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-card transition-transform hover:-translate-y-0.5 hover:bg-terracotta-600"
      >
        Donate {custom ? `$${custom}` : selected} Now
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-xs text-ink-800/45">
        Secure online giving is coming soon. For now, please use the button
        above to reach our team and complete your gift by card, check, or
        bank transfer.
      </p>
    </div>
  );
}
