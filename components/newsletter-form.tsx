"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm font-medium text-brass-400">
        <CheckCircle2 className="h-4 w-4" />
        You&apos;re on the list &mdash; welcome!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <input
        type="email"
        name="email"
        required
        placeholder="you@email.com"
        className="w-full rounded-full border border-cream-100/20 bg-cream-100/5 px-5 py-3 text-sm text-cream-50 placeholder:text-cream-100/40 focus:border-brass-400 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brass-500 px-5 py-3 text-sm font-semibold text-forest-900 transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-xs text-terracotta-400">Please try again.</p>
      )}
    </form>
  );
}
