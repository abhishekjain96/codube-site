"use client";

import React from "react";
import {
  Check,
  X,
  Trophy,
  Zap,
  ShieldCheck,
  Code2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Database,
  Server,
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
      codube: "2 to 6 Weeks Rapid Sprints with live weekly staging",
      traditional: "4 to 9 Months slow development with endless delays",
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
      codube: "100% Repository & Full Intellectual Property Transfer",
      traditional: "Proprietary lock-in with ongoing monthly vendor fees",
      highlight: true,
    },
    {
      feature: "Communication Channel",
      codube: "Direct WhatsApp / Slack with Lead Developer (Abhishek Jain)",
      traditional: "Account managers acting as communication bottlenecks",
      highlight: false,
    },
    {
      feature: "Performance & SEO",
      codube: "Sub-second edge loading, 95+ Lighthouse score guaranteed",
      traditional: "Slow, unoptimized pages with 3-5s mobile loading times",
      highlight: false,
    },
  ];

  const standards = [
    {
      icon: Trophy,
      title: "Championship-Level Rigor",
      tag: "Competitive Precision",
      desc: "Founded by a 1st rank hackathon winner, we engineer every algorithm and interface with the precision of high-stakes competitive coding.",
    },
    {
      icon: Cpu,
      title: "Zero Legacy Technical Debt",
      tag: "Modern Architecture",
      desc: "No patched-up spaghetti code. Every system is built modularly with strict TypeScript interfaces, clean APIs, and cloud-native resilience.",
    },
    {
      icon: TrendingUp,
      title: "Revenue-Driven Engineering",
      tag: "Business First",
      desc: "We don't build software just to check boxes. We build platforms that streamline bookings, convert visitors into buyers, and cut overhead.",
    },
    {
      icon: ShieldCheck,
      title: "Direct Founder Accountability",
      tag: "100% Transparency",
      desc: "No sales middlemen. Your technical architecture is personally reviewed and guided by founder Abhishek Jain from day one.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#030604]" id="why-us">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(184,255,0,0.07)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B8FF00]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse" />
            <span className="text-xs font-mono font-semibold text-[#B8FF00] tracking-widest uppercase">
              THE CODUBE ADVANTAGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Visionary Founders{" "}
            <span className="text-[#B8FF00] drop-shadow-[0_0_25px_rgba(184,255,0,0.4)]">
              Partner With Us.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Traditional agencies bill for hours. We deliver high-performing digital assets engineered to dominate your market.
          </p>
        </div>

        {/* 1. VISUAL ARCHITECTURE COMPARISON FRAME */}
        <div className="mb-20 rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-[#B8FF00]/30 shadow-2xl">
          <div className="text-center mb-8 space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF00]">
              TECHNICAL ARCHITECTURE BREAKDOWN
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Bloated Agency Monolith vs. CODUBE Clean Edge Stack
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left: Traditional Agency Stack */}
            <div className="rounded-2xl p-6 bg-red-950/10 border border-red-500/20 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-red-500/20">
                  <span className="text-xs font-mono font-bold text-red-400">TRADITIONAL AGENCY ARCHITECTURE</span>
                  <span className="text-[10px] font-mono text-zinc-500">SLOW &amp; FRAGILE</span>
                </div>

                <div className="space-y-2.5 text-xs text-zinc-300">
                  <div className="p-3 rounded-xl bg-black/40 border border-red-500/10 flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">Bloated WordPress / PHP Templates</div>
                      <div className="text-[11px] text-zinc-400">40+ conflicting plugins causing database lockups and crashes.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-red-500/10 flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">3.8s - 5.2s Mobile Load Delay</div>
                      <div className="text-[11px] text-zinc-400">Losing over 50% of visitors before the landing page finishes loading.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-red-500/10 flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">Vendor Lock-In &amp; License Fees</div>
                      <div className="text-[11px] text-zinc-400">You don&apos;t own your code; forced monthly retainers just to change text.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-red-500/20 text-center font-mono text-xs text-red-400">
                RESULT: HIGH LATENCY &amp; CONSTANT TECHNICAL DEBT
              </div>
            </div>

            {/* Right: CODUBE Modern Architecture */}
            <div className="rounded-2xl p-6 bg-[#B8FF00]/[0.03] border border-[#B8FF00]/40 shadow-[0_0_30px_rgba(184,255,0,0.15)] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#B8FF00]/20">
                  <span className="text-xs font-mono font-bold text-[#B8FF00] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-ping" />
                    CODUBE PRODUCTION ARCHITECTURE
                  </span>
                  <span className="text-[10px] font-mono text-[#B8FF00] font-bold">100/100 LIGHTHOUSE</span>
                </div>

                <div className="space-y-2.5 text-xs text-zinc-300">
                  <div className="p-3 rounded-xl bg-black/60 border border-[#B8FF00]/20 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#B8FF00] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">Next.js 14 App Router &amp; Strict TypeScript</div>
                      <div className="text-[11px] text-zinc-300">Clean modular code with zero external bloat and sub-second edge compilation.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 border border-[#B8FF00]/20 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#B8FF00] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">0.2s Sub-Second LCP Performance</div>
                      <div className="text-[11px] text-zinc-300">Instant page switches, 60fps micro-animations, and top Google SEO ranking.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 border border-[#B8FF00]/20 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#B8FF00] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">100% Repository Transfer &amp; Full IP Ownership</div>
                      <div className="text-[11px] text-zinc-300">You own the full GitHub repo, cloud infrastructure, and all intellectual property.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#B8FF00]/20 text-center font-mono text-xs text-[#B8FF00] font-bold">
                RESULT: ENTERPRISE GRADE SPEED &amp; HIGHER REVENUE
              </div>
            </div>
          </div>
        </div>

        {/* 2. Head-to-Head Comparison Matrix Table */}
        <div className="mb-20">
          <div className="rounded-3xl border border-white/[0.1] bg-[#080D0A]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-12 bg-white/[0.03] border-b border-white/[0.08] p-4 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <div className="col-span-4 text-zinc-400">Metric / Capability</div>
              <div className="col-span-4 text-[#B8FF00] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
                CODUBE
              </div>
              <div className="col-span-4 text-zinc-500">Typical Agency</div>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {comparisonItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm transition-colors ${
                    item.highlight ? "bg-white/[0.015]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="col-span-4 font-semibold text-white pr-2">
                    {item.feature}
                  </div>
                  <div className="col-span-4 pr-3 flex items-start gap-2 text-zinc-200">
                    <Check className="w-4 h-4 text-[#B8FF00] shrink-0 mt-0.5" />
                    <span className="font-medium text-white">{item.codube}</span>
                  </div>
                  <div className="col-span-4 flex items-start gap-2 text-zinc-500">
                    <X className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                    <span>{item.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Four Engineering Standards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {standards.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-6 bg-[#0B120D] border border-white/[0.08] hover:border-[#B8FF00]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#B8FF00] mb-5 group-hover:bg-[#B8FF00] group-hover:text-black group-hover:shadow-[0_0_20px_#B8FF00] transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#B8FF00]/80 mb-1">
                  {st.tag}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4. Bottom Banner with CTA */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0B120D] to-[#080D0A] border border-[#B8FF00]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ready to build with competitive precision?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Get an exact architectural proposal and milestone timeline in under 2 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_25px_rgba(184,255,0,0.4)] transition-all shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
