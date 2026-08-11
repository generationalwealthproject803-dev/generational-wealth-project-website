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

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [topic, setTopic] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
      topic,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
      setTopic("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-forest-800/10 bg-forest-800/5 p-10 text-center">
        <CheckCircle2 className="h-9 w-9 text-forest-700" />
        <h3 className="font-display text-xl font-semibold text-forest-900">
          Message received
        </h3>
        <p className="max-w-sm text-sm text-ink-800/70">
          Thank you for reaching out. A member of our team will respond
          within 1&ndash;2 business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-forest-800 underline-grow"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Jordan Green" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@email.com" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(803) 555-0142" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="topic">What can we help with?</Label>
          <Select value={topic} onValueChange={setTopic}>
            <SelectTrigger id="topic">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="classes">Financial literacy classes</SelectItem>
              <SelectItem value="consultation">Financial consultation</SelectItem>
              <SelectItem value="donate">Donations &amp; giving</SelectItem>
              <SelectItem value="volunteer">Volunteering</SelectItem>
              <SelectItem value="partner">Community partnership</SelectItem>
              <SelectItem value="other">Something else</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit about what you're looking for..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send message
      </button>
      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
