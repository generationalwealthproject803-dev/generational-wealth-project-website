"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/lib/images";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/consultation", label: "Consultation" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-cream-50/95 shadow-[0_1px_0_0_rgba(18,53,39,0.08)] backdrop-blur-md"
          : "bg-cream-50/60 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-forest-800/10">
            <Image src={IMAGES.logo} alt="Generational Wealth Project" fill sizes="44px" className="object-cover" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[1.05rem] font-semibold tracking-tight text-forest-800">
              Generational Wealth
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-brass-700">
              Project &middot; Columbia, SC
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "underline-grow text-[0.9rem] font-medium text-ink-800/80 transition-colors hover:text-forest-800",
                pathname === link.href && "text-forest-800"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/consultation"
            className="rounded-full border border-forest-800/20 px-5 py-2.5 text-sm font-semibold text-forest-800 transition-colors hover:border-forest-800/40 hover:bg-forest-800/5"
          >
            Book a Consultation
          </Link>
          <Link
            href="/get-involved"
            className="group inline-flex items-center gap-2 rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-card transition-transform hover:-translate-y-0.5 hover:bg-terracotta-600"
          >
            Donate
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-800/15 text-forest-800 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden bg-cream-50 transition-[grid-template-rows] duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-6 pb-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-800 hover:bg-forest-800/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <Link
                href="/consultation"
                className="rounded-full border border-forest-800/20 px-5 py-3 text-center text-sm font-semibold text-forest-800"
              >
                Book a Consultation
              </Link>
              <Link
                href="/get-involved"
                className="rounded-full bg-terracotta-500 px-5 py-3 text-center text-sm font-semibold text-cream-50"
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
