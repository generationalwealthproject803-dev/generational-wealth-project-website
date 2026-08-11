"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Status = "idle" | "loading" | "success" | "error";

const SERVICES = [
  "Budgeting &amp; cash-flow review",
  "Credit report &amp; score strategy",
  "Debt payoff planning",
  "Savings &amp; homeownership readiness",
  "Family financial planning",
  "General financial guidance",
];

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
      service,
      preferredTime,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement)?.value,
    };

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
      setService("");
      setPreferredTime("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-forest-800/10 bg-cream-100 p-10 text-center">
        <CheckCircle2 className="h-9 w-9 text-forest-700" />
        <h3 className="font-display text-xl font-semibold text-forest-900">
          Request received
        </h3>
        <p className="max-w-sm text-sm text-ink-800/70">
          Thank you for booking a consultation. Our financial coaching team
          will reach out within 1&ndash;2 business days to confirm your
          appointment.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-forest-800 underline-grow"
        >
          Book another consultation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl border border-forest-800/10 bg-white p-8 shadow-card sm:p-10">
      <div>
        <h3 className="font-display text-xl font-semibold text-forest-900">
          Request your consultation
        </h3>
        <p className="mt-1 text-sm text-ink-800/60">
          Free for individuals and families in the Midlands. Every conversation is confidential.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="c-name">Full name</Label>
          <Input id="c-name" name="name" required placeholder="Jordan Green" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" name="email" type="email" required placeholder="you@email.com" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="c-phone">Phone</Label>
          <Input id="c-phone" name="phone" type="tel" placeholder="(803) 555-0142" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-time">Preferred time</Label>
          <Select value={preferredTime} onValueChange={setPreferredTime}>
            <SelectTrigger id="c-time">
              <SelectValue placeholder="Select a window" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Weekday mornings</SelectItem>
              <SelectItem value="afternoon">Weekday afternoons</SelectItem>
              <SelectItem value="evening">Weekday evenings</SelectItem>
              <SelectItem value="saturday">Saturdays</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-service">What would you like to focus on?</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger id="c-service">
            <SelectValue placeholder="Select a focus area" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s} value={s}>
                <span dangerouslySetInnerHTML={{ __html: s }} />
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-notes">Anything else we should know?</Label>
        <Textarea id="c-notes" name="notes" rows={4} placeholder="Share a bit of context so we can prepare for your session." />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta-500 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-transform hover:-translate-y-0.5 hover:bg-terracotta-600 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Request consultation
      </button>
      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
