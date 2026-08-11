import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { IMAGES } from "@/lib/images";

const COLUMNS = [
  {
    title: "Programs",
    links: [
      { href: "/programs#classes", label: "Financial Literacy Classes" },
      { href: "/programs#budgeting", label: "Budgeting Workshops" },
      { href: "/programs#credit", label: "Credit Education" },
      { href: "/programs#youth", label: "Youth Financial Education" },
      { href: "/programs#family", label: "Family Financial Education" },
    ],
  },
  {
    title: "Organization",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/resources", label: "Educational Materials" },
      { href: "/get-involved", label: "Get Involved" },
      { href: "/consultation", label: "Financial Consultation" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest-900 text-cream-100">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brass-500/10 blur-3xl" />
      <div className="container relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-cream-100/20">
                <Image src={IMAGES.logo} alt="Generational Wealth Project" fill sizes="44px" className="object-cover" />
              </span>
              <span className="font-display text-lg font-semibold text-cream-50">
                Generational Wealth Project
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/70">
              A Columbia, SC nonprofit equipping our community with the
              knowledge, tools, and support to build wealth that lasts beyond
              a single generation.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100/80 transition-colors hover:border-brass-400 hover:text-brass-400"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100/80 transition-colors hover:border-brass-400 hover:text-brass-400"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-brass-400">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-100/75 transition-colors hover:text-cream-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-brass-400">
              Visit &amp; Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-cream-100/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                <span>Columbia, South Carolina</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                <a href="mailto:hello@generationalwealthproject.org" className="hover:text-cream-50">
                  hello@generationalwealthproject.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                <a href="tel:+18035550142" className="hover:text-cream-50">
                  (803) 555-0142
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream-100/10 pt-6 text-xs text-cream-100/50 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Generational Wealth Project. A
            registered 501(c)(3) nonprofit organization.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-cream-100">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-cream-100">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
