"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FREE_TOOLS } from "@/data/toolsData";
import {
  Sparkles,
  Search,
  ArrowRight,
  Cpu,
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
    { id: "all", name: "All 40 Free Tools" },
    { id: "ai", name: "🤖 AI & LLM Visibility" },
    { id: "marketing", name: "✍️ AI Copy & Ads" },
    { id: "growth", name: "⚡ WhatsApp & Growth" },
    { id: "seo", name: "🔍 SEO & Schema" },
    { id: "dev", name: "💻 Developer & Code" },
    { id: "social", name: "📱 Viral Social Media" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header */}
        <header className="max-w-3xl space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>40 FREE HIGH-DEMAND AI &amp; DEVELOPER TOOLS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Free AI Search &amp;{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Growth Engineering Utilities
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Free production-grade tools built by Codube to help business owners, clinics, and developers audit their AI visibility, generate high-converting copy, and automate WhatsApp bookings. Zero signups, zero credit cards, 100% free forever.
          </p>
        </header>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search 40 free tools by name, category, or keyword..."
              className="w-full bg-white border border-slate-200 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-2xs"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-lg shadow-[0_4px_25px_rgba(15,23,42,0.03)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Cpu className="w-5 h-5" />
                  </div>

                  {tool.badge ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                      {tool.badge}
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono text-[10px] uppercase">
                      FREE TOOL
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                    {tool.name}
                  </h2>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {tool.tagline}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 uppercase">{tool.category}</span>
                <span className="text-emerald-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="py-20 text-center space-y-3">
            <p className="text-base text-slate-600">
              No free tools found matching &quot;{search}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
              className="text-xs font-mono text-emerald-600 hover:underline"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl p-8 sm:p-12 bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              CUSTOM SOFTWARE &amp; AI AUTOMATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Need a Custom AI Tool Built for Your Business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We design and build bespoke client portals, custom AI agents, and high-speed web platforms tailored to your industry.
            </p>
          </div>

          <a
            href="https://wa.me/919672660338?text=Hi%20Abhishek%2C%20I%20visited%20Codube%20Free%20Tools%20and%20want%20to%20build%20a%20custom%20AI%20solution%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 cursor-pointer shrink-0"
          >
            <span>Talk to Founder Abhishek Jain →</span>
          </a>
        </div>
      </div>
    </main>
  );
}
