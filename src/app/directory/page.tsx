import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import DirectoryClient from "./DirectoryClient";
import { Sparkles, ChevronRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Master HTML Directory & Services Index (1,840+ Pages) | Codube",
  description:
    "Crawlable Master HTML Sitemap Directory for Codube. Browse all 1,840+ software development services, local city hubs, and free AI developer tools across Jaipur, India, and global markets.",
  keywords: [
    "codube sitemap directory",
    "website development directory",
    "ai chatbot directory",
    "software services index",
    "codube master directory",
  ],
  alternates: {
    canonical: "https://codube.com/directory",
  },
  openGraph: {
    title: "Master HTML Directory & Services Index | Codube",
    description:
      "Crawlable Master HTML Sitemap Directory for Codube. Browse all 1,840+ software development services, city hubs, and free AI tools.",
    url: "https://codube.com/directory",
    siteName: "Codube",
    images: [
      {
        url: "/images/hero-laptop.png",
        width: 1200,
        height: 630,
        alt: "Codube Master Directory Index",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master HTML Directory & Services Index | Codube",
    description:
      "Crawlable Master HTML Sitemap Directory for Codube. Browse all 1,840+ services, locations, and free AI tools.",
    images: ["/images/hero-laptop.png"],
  },
};

export default function DirectoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Codube Master HTML Sitemap & Services Directory",
    description:
      "Complete 2-level crawlable index of 1,840+ software development services, local technology corridors, and free AI developer utilities.",
    url: "https://codube.com/directory",
    publisher: {
      "@type": "Organization",
      name: "Codube",
      url: "https://codube.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#030604] text-white pt-28 pb-24 selection:bg-[#B8FF00] selection:text-black">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,255,0,0.14),transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-zinc-400">
              <li>
                <Link href="/" className="hover:text-[#B8FF00] transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3 h-3 text-zinc-600" />
              <li className="text-[#B8FF00] font-semibold">Master HTML Directory</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="max-w-3xl space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/40 text-[#B8FF00] text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(184,255,0,0.25)]">
              <Layers className="w-3.5 h-3.5 text-[#B8FF00]" />
              <span>MASTER 2-LEVEL CRAWLABLE SITEMAP DIRECTORY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Services, Locations &amp;{" "}
              <span className="text-[#B8FF00] drop-shadow-[0_0_35px_rgba(184,255,0,0.5)]">
                AI Tools Directory
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              Explore Codube&apos;s comprehensive network of high-speed website engineering, 24/7 WhatsApp AI automation services, and free developer utilities across Jaipur, India, the UAE, and global technology hubs.
            </p>
          </header>

          {/* Interactive Client Component */}
          <DirectoryClient />
        </div>
      </main>
    </>
  );
}
