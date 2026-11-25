"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FREE_TOOLS } from "@/data/toolsData";
import {
  Sparkles,
  Search,
  ArrowRight,
  Cpu,
  Bot,
  Globe,
  TrendingUp,
  FileCode,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ToolsIndexPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTools = FREE_TOOLS.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.keywords.some((k) => k.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || t.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", name: "All 20 Free Tools" },
    { id: "ai", name: "🤖 AI & LLM Visibility" },
    { id: "seo", name: "🔍 SEO & Schema.org" },
    { id: "growth", name: "⚡ WhatsApp & Growth" },
    { id: "dev", name: "💻 Developer Utilities" },
  ];

  return (
    <main className="min-h-screen bg-[#030604] text-white pt-28 pb-24 selection:bg-[#B8FF00] selection:text-black">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,255,0,0.15),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header */}
        <header className="max-w-3xl space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/40 text-[#B8FF00] text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(184,255,0,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#B8FF00]" />
            <span>20 FREE AI &amp; DEVELOPER TOOLS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Free AI Search &amp;{" "}
            <span className="text-[#B8FF00] drop-shadow-[0_0_35px_rgba(184,255,0,0.5)]">
              Engineering Utilities
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
            Free tools built by Codube to help business owners, clinics, and developers audit their AI visibility, generate Schema markup, and convert website traffic into WhatsApp clients. Zero registration required.
          </p>
        </header>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#B8FF00] text-black shadow-[0_0_15px_rgba(184,255,0,0.4)]"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search 20 free tools by name or keyword..."
              className="w-full bg-[#080D0A] border border-white/15 focus:border-[#B8FF00] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="p-6 rounded-3xl bg-[#080D0A] border border-white/10 hover:border-[#B8FF00]/50 hover:bg-gradient-to-b hover:from-[#0E1810] hover:to-[#080D0A] shadow-[0_10px_35px_rgba(0,0,0,0.7)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00] group-hover:bg-[#B8FF00] group-hover:text-black transition-colors">
                    <Cpu className="w-5 h-5" />
                  </div>

                  {tool.badge ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#B8FF00]/15 text-[#B8FF00] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#B8FF00]/30">
                      {tool.badge}
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400 font-mono text-[10px] uppercase">
                      FREE TOOL
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="text-lg font-black text-white group-hover:text-[#B8FF00] transition-colors leading-snug">
                    {tool.name}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {tool.tagline}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-4 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 uppercase">{tool.category}</span>
                <span className="text-[#B8FF00] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="py-20 text-center space-y-3">
            <p className="text-base text-zinc-400">
              No free tools found matching &quot;{search}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
              className="text-xs font-mono text-[#B8FF00] hover:underline"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0E1810] to-[#040805] border-2 border-[#B8FF00]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-widest">
              CUSTOM SOFTWARE &amp; AI AUTOMATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Need a Custom AI Tool Built for Your Business?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
              We design and build bespoke client portals, custom AI agents, and high-speed web platforms tailored to your industry.
            </p>
          </div>

          <a
            href="https://wa.me/919672660338?text=Hi%20Abhishek%2C%20I%20visited%20Codube%20Free%20Tools%20and%20want%20to%20build%20a%20custom%20AI%20solution%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_30px_rgba(184,255,0,0.5)] transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 cursor-pointer shrink-0"
          >
            <span>Talk to Founder Abhishek Jain →</span>
          </a>
        </div>
      </div>
    </main>
  );
}
