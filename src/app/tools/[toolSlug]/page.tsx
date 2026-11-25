import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { FREE_TOOLS, getToolBySlug } from "@/data/toolsData";
import ToolRunnerClient from "./ToolRunnerClient";
import { ChevronRight, Sparkles } from "lucide-react";

interface PageProps {
  params: {
    toolSlug: string;
  };
}

export async function generateStaticParams() {
  return FREE_TOOLS.map((t) => ({ toolSlug: t.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tool = getToolBySlug(params.toolSlug);
  if (!tool) return {};

  const canonicalUrl = `https://codube.io/tools/${tool.id}`;

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: canonicalUrl,
      siteName: "Codube",
      images: [
        {
          url: "/images/hero-laptop.png",
          width: 1200,
          height: 630,
          alt: `${tool.name} - Codube Free Tools`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metaTitle,
      description: tool.metaDescription,
      images: ["/images/hero-laptop.png"],
    },
  };
}

export default function DynamicToolPage({ params }: PageProps) {
  const tool = getToolBySlug(params.toolSlug);

  if (!tool) {
    notFound();
  }

  // Related tools from same or different categories
  const otherTools = FREE_TOOLS.filter((t) => t.id !== tool.id).slice(0, 4);

  // JSON-LD structured data for WebApplication
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.metaDescription,
    url: `https://codube.io/tools/${tool.id}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Codube",
      url: "https://codube.io",
      founder: {
        "@type": "Person",
        name: "Abhishek Jain",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#030604] text-white pt-28 pb-20 selection:bg-[#B8FF00] selection:text-black">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,255,0,0.14),transparent_70%)] blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-zinc-400">
              <li>
                <Link href="/" className="hover:text-[#B8FF00] transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3 h-3 text-zinc-600" />
              <li>
                <Link href="/tools" className="hover:text-[#B8FF00] transition-colors">
                  Free Tools
                </Link>
              </li>
              <ChevronRight className="w-3 h-3 text-zinc-600" />
              <li className="text-[#B8FF00] font-semibold truncate max-w-[240px] sm:max-w-none">
                {tool.shortName}
              </li>
            </ol>
          </nav>

          {/* Tool Header */}
          <header className="space-y-4 mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/40 text-[#B8FF00] text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(184,255,0,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#B8FF00]" />
              <span>100% FREE AI &amp; DEVELOPER UTILITY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
              {tool.name}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              {tool.description}
            </p>
          </header>

          {/* Interactive Client Component for Form & Output */}
          <ToolRunnerClient tool={tool} />

          {/* Educational Content Section */}
          <section className="mt-16 pt-12 border-t border-white/10 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-widest">
                BEST PRACTICES &amp; KNOWLEDGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {tool.educationalContent.heading}
              </h2>
              {tool.educationalContent.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#080D0A] border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-[#B8FF00]">
                Pro Engineering Tips for {tool.shortName}:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {tool.educationalContent.tips.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B8FF00] font-bold">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Explore Other Free Tools */}
          <section className="mt-16 pt-10 border-t border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-white">
                Explore More Free Engineering &amp; AI Tools
              </h3>
              <Link
                href="/tools"
                className="text-xs font-mono text-[#B8FF00] hover:underline"
              >
                View All 20 Tools →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherTools.map((t) => (
                <Link
                  key={t.id}
                  href={`/tools/${t.id}`}
                  className="p-4 rounded-xl bg-[#080D0A] border border-white/10 hover:border-[#B8FF00]/50 hover:bg-white/[0.02] transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-[#B8FF00] uppercase">
                      {t.category}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#B8FF00] transition-colors leading-snug">
                      {t.name}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-2">
                      {t.tagline}
                    </p>
                  </div>
                  <div className="pt-3 text-[11px] font-mono text-zinc-400 group-hover:text-[#B8FF00] flex items-center gap-1">
                    <span>Try Free</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
