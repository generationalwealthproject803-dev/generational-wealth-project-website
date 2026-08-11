import type { Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GivebutterScript } from "@/components/givebutter-script";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://generationalwealthproject.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Generational Wealth Project | Financial Empowerment in Columbia, SC",
    template: "%s | Generational Wealth Project",
  },
  description:
    "Generational Wealth Project is a Columbia, SC nonprofit building financial literacy and lasting wealth in our community through classes, budgeting workshops, credit education, youth and family programs, one-on-one financial consultation, and community outreach.",
  keywords: [
    "financial literacy Columbia SC",
    "generational wealth",
    "credit education",
    "budgeting workshop",
    "youth financial education",
    "nonprofit Columbia South Carolina",
    "financial consultation",
    "community outreach",
  ],
  authors: [{ name: "Generational Wealth Project" }],
  openGraph: {
    title: "Generational Wealth Project | Financial Empowerment in Columbia, SC",
    description:
      "Building financial literacy and lasting wealth in Columbia, SC through education, consultation, and community outreach.",
    url: siteUrl,
    siteName: "Generational Wealth Project",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generational Wealth Project",
    description:
      "Building financial literacy and lasting wealth in Columbia, SC.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${libreFranklin.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <GivebutterScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Generational Wealth Project",
              description:
                "Nonprofit organization building financial literacy and generational wealth in Columbia, SC through education, consultation, and community outreach.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Columbia",
                addressRegion: "SC",
                addressCountry: "US",
              },
              areaServed: "Columbia, South Carolina",
            }),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
