import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Bot, Cpu, ArrowRight, ShieldCheck, FileCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Free AI & Web Engineering Tools | Codube",
  description:
    "Free tools engineered by Codube to help business owners, clinics, and startups check their AI search visibility, generate llms.txt files, and optimize their web presence.",
  alternates: {
    canonical: "https://codube.io/tools",
  },
};

export default function ToolsIndexPage() {
  return (
    <main className="min-h-screen bg-[#030604] text-white pt-28 pb-20 selection:bg-[#B8FF00] selection:text-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <header className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/40 text-[#B8FF00] text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(184,255,0,0.25)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREE DEVELOPER &amp; AI TOOLS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Free Engineering Tools for Growth Brands
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            Engineered by Codube to give business owners, clinics, and founders an unfair advantage in modern web speed and Generative AI search.
          </p>
        </header>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/tools/ai-geo-generator"
            className="p-6 sm:p-8 rounded-3xl bg-[#080D0A] border border-[#B8FF00]/30 hover:border-[#B8FF00] shadow-[0_0_40px_rgba(184,255,0,0.12)] transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00] group-hover:bg-[#B8FF00] group-hover:text-black transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#B8FF00]/20 text-[#B8FF00] font-mono text-[11px] font-bold uppercase tracking-wider">
                  FREE TOOL
                </span>
              </div>

              <h2 className="text-2xl font-black text-white group-hover:text-[#B8FF00] transition-colors">
                AI GEO Generator &amp; LLM Visibility Checker
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Check whether ChatGPT, Perplexity, and Claude can discover your business. Instantly audit your AI visibility score and generate a valid, compliant <code className="text-[#B8FF00]">llms.txt</code> file in seconds.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-2 text-xs font-mono text-[#B8FF00] font-bold group-hover:translate-x-1 transition-transform">
              <span>Open Tool &amp; Scan Website</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
