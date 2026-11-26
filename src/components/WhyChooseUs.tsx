"use client";

import React from "react";
import {
  Check,
  X,
  Trophy,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface WhyChooseUsProps {
  content?: any;
}

export default function WhyChooseUs({ content }: WhyChooseUsProps) {
  const comparisonItems = [
    {
      feature: "Engineering Caliber",
      codube: "1st Rank Hackathon Winner & Senior Full-Stack Architects",
      traditional: "Junior outsourced developers or rotated contractors",
      highlight: true,
    },
    {
      feature: "Time to Market / MVP",
      codube: "1 to 3 Weeks Turnkey Delivery with daily progress updates",
      traditional: "3 to 6 Months slow delivery with endless delays",
      highlight: true,
    },
    {
      feature: "Technology Stack",
      codube: "Next.js 14, TypeScript, Tailwind, Node, Edge Serverless",
      traditional: "Outdated WordPress, PHP, or heavy bloated templates",
      highlight: false,
    },
    {
      feature: "Code Ownership & IP",
      codube: "100% Full GitHub Repository & IP Ownership Transferred",
      traditional: "Vendor lock-in with ongoing mandatory monthly retainers",
      highlight: true,
    },
    {
      feature: "Communication Channel",
      codube: "Direct WhatsApp with Lead Architect Abhishek Jain",
      traditional: "Account managers acting as communication bottlenecks",
      highlight: false,
    },
    {
      feature: "Performance & PageSpeed",
      codube: "Sub-second 0.2s edge loading, 95+ Core Web Vitals",
      traditional: "Slow, unoptimized pages with 3-5s mobile loading times",
      highlight: false,
    },
  ];

  const standards = [
    {
      icon: Trophy,
      title: "Championship-Level Rigor",
      tag: "Competitive Precision",
      desc: "Founded by a 1st rank national hackathon winner, we engineer every interface with high-stakes competitive precision.",
    },
    {
      icon: Cpu,
      title: "Zero Legacy Technical Debt",
      tag: "Modern Architecture",
      desc: "No patched-up spaghetti code. Every system is built modularly with strict TypeScript, clean APIs, and edge resilience.",
    },
    {
      icon: TrendingUp,
      title: "Revenue-Driven Engineering",
      tag: "Business First",
      desc: "We don't build software just to check boxes. We build platforms that streamline bookings and turn traffic into revenue.",
    },
    {
      icon: ShieldCheck,
      title: "Direct Founder Accountability",
      tag: "100% Transparency",
      desc: "No middlemen. Your technical architecture is personally engineered and reviewed by founder Abhishek Jain from day one.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-slate-50 border-y border-slate-200" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
              THE CODUBE ADVANTAGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Why Visionary Founders{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Partner With Us.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Traditional agencies bill for hours and delay launches. We build and launch high-performing digital assets engineered to move your business forward.
          </p>
        </div>

        {/* 1. Comparison Matrix Table */}
        <div className="mb-16">
          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 p-4 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
              <div className="col-span-4">Metric / Capability</div>
              <div className="col-span-4 text-emerald-700 flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                CODUBE
              </div>
              <div className="col-span-4 text-slate-400">Typical Agency</div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm transition-colors ${
                    item.highlight ? "bg-emerald-50/30" : "hover:bg-slate-50/60"
                  }`}
                >
                  <div className="col-span-4 font-bold text-slate-900 pr-2">
                    {item.feature}
                  </div>
                  <div className="col-span-4 pr-3 flex items-start gap-2 text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">{item.codube}</span>
                  </div>
                  <div className="col-span-4 flex items-start gap-2 text-slate-500">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Four Engineering Standards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {standards.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-6 bg-white border border-slate-200 hover:border-emerald-500/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold">
                  {st.tag}
                </div>
                <h3 className="text-base font-bold text-slate-950">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3. Bottom Banner with CTA */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ready to build with championship precision?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Get an exact architectural proposal and milestone timeline in under 2 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shrink-0 cursor-pointer shadow-sm"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
