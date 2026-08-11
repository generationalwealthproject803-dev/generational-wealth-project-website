import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Generational Wealth Project in Columbia, SC — questions about programs, consultations, donations, volunteering, or partnerships.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="We'd love to hear from you."
            description="Questions about a program, want to book a consultation, or looking to give, volunteer, or partner with us? Send a message and our team will follow up personally."
          />
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-800/8 text-forest-800">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-base font-semibold text-forest-900">Location</div>
                <p className="text-sm text-ink-800/65">Columbia, South Carolina</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-800/8 text-forest-800">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-base font-semibold text-forest-900">Email</div>
                <a href="mailto:hello@generationalwealthproject.org" className="text-sm text-ink-800/65 hover:text-forest-800">
                  hello@generationalwealthproject.org
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-800/8 text-forest-800">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-base font-semibold text-forest-900">Phone</div>
                <a href="tel:+18035550142" className="text-sm text-ink-800/65 hover:text-forest-800">
                  (803) 555-0142
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-800/8 text-forest-800">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-base font-semibold text-forest-900">Response Time</div>
                <p className="text-sm text-ink-800/65">We typically reply within 1–2 business days.</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-forest-800/10 bg-white p-8 shadow-card sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
