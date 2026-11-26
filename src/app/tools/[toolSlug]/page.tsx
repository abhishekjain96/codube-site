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

  const canonicalUrl = `https://codube.com/tools/${tool.id}`;

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
    url: `https://codube.com/tools/${tool.id}`,
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
      url: "https://codube.com",
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

      <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 pt-28 pb-20 relative overflow-x-clip">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.08),transparent_70%)] blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-slate-500">
              <li>
                <Link href="/" className="hover:text-emerald-600 transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <li>
                <Link href="/tools" className="hover:text-emerald-600 transition-colors">
                  Free Tools
                </Link>
              </li>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <li className="text-emerald-700 font-semibold truncate max-w-[240px] sm:max-w-none">
                {tool.shortName}
              </li>
            </ol>
          </nav>

          {/* Tool Header */}
          <header className="space-y-4 mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% FREE AI &amp; DEVELOPER UTILITY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              {tool.name}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              {tool.description}
            </p>
          </header>

          {/* Interactive Client Component for Form & Output */}
          <ToolRunnerClient tool={tool} />

          {/* Educational Content Section */}
          <section className="mt-16 pt-12 border-t border-slate-200 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
                BEST PRACTICES &amp; KNOWLEDGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                {tool.educationalContent.heading}
              </h2>
              {tool.educationalContent.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono text-emerald-700">
                Pro Engineering Tips for {tool.shortName}:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {tool.educationalContent.tips.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Explore Other Free Tools */}
          <section className="mt-16 pt-10 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-950">
                Explore More Free Engineering &amp; AI Tools
              </h3>
              <Link
                href="/tools"
                className="text-xs font-mono text-emerald-600 hover:underline font-bold"
              >
                View All 40 Tools →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherTools.map((t) => (
                <Link
                  key={t.id}
                  href={`/tools/${t.id}`}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold">
                      {t.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {t.tagline}
                    </p>
                  </div>
                  <div className="pt-3 text-[11px] font-mono text-slate-500 group-hover:text-emerald-600 flex items-center gap-1 font-bold">
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
