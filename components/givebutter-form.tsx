import { GIVEBUTTER_CAMPAIGN_CODE, GIVEBUTTER_CAMPAIGN_URL } from "@/lib/givebutter";

export function GivebutterForm() {
  return (
    <div className="rounded-3xl border border-forest-800/10 bg-white p-6 shadow-card sm:p-8">
      <h3 className="font-display text-xl font-semibold text-forest-900">
        Give securely online
      </h3>
      <p className="mt-1 text-sm text-ink-800/60">
        Processed securely through Givebutter. One-time or recurring, any amount, fully tax-deductible.
      </p>
      <div className="mt-6">
        <givebutter-giving-form
          campaign={GIVEBUTTER_CAMPAIGN_CODE}
          show-goal-bar="true"
          theme-color="#123527"
        ></givebutter-giving-form>
      </div>
      <a
        href={GIVEBUTTER_CAMPAIGN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-forest-800 underline-grow"
      >
        View our full campaign page &amp; other ways to give
      </a>
    </div>
  );
}
