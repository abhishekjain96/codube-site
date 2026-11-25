"use client";

import React from "react";
import Link from "next/link";
import {
  Trophy,
  Activity,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface TestimonialsSectionProps {
  content?: any;
}

export default function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const proofPillars = [
    {
      id: "hackathon",
      number: "01",
      badge: "NATIONAL CHAMPIONSHIP RIGOR",
      title: "1st Rank National Hackathon Winner",
      subtitle: "Proven Engineering Speed & Zero Defect Code",
      icon: Trophy,
      description:
        "Competitive hackathons require engineering complete, zero-defect platforms under extreme 24-hour time limits. At Codube, we bring that exact championship precision to your business website and AI receptionist.",
      metrics: [
        "1st Place out of 500+ elite software developers",
        "Sub-second mobile speed (0.2s LCP) with zero bloated templates",
        "Every line engineered directly by founder Abhishek Jain",
      ],
    },
    {
      id: "healthcare",
      number: "02",
      badge: "MISSION-CRITICAL SYSTEMS",
      title: "Live Production Healthcare Systems",
      subtitle: "Creator of ScanTaker.com & MedLearnings",
      icon: Activity,
      description:
        "Unlike agencies that only show Figma mockups, we run real-world production platforms handling thousands of patients, doctors, and diagnostic centers every single day with 99.9% uptime.",
      metrics: [
        "ScanTaker: Complete MRI & CT scan booking network in Jaipur",
        "MedLearnings: Medical LMS powering 5,000+ verified physicians",
        "Mission-critical uptime, automated slot tokens & instant WhatsApp dispatch",
      ],
    },
    {
      id: "speed-ownership",
      number: "03",
      badge: "RISK-FREE PARTNERSHIP",
      title: "7-Day Delivery & 100% IP Ownership",
      subtitle: "Zero Hostage Code • Transparent Pricing",
      icon: Zap,
      description:
        "Traditional agencies trap business owners in 3-month retainers and keep code hostage. With Codube, your turnkey website + WhatsApp AI agent goes live in 7 days, and you own 100% of the source code and intellectual property.",
      metrics: [
        "Transparent fixed pricing starting at $499 (No hidden charges)",
        "100% full GitHub source code & cloud credentials transferred to you",
        "Official Meta WhatsApp Cloud API verification under your business name",
      ],
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden" id="proof">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
              AUTHENTIC PROOF &amp; ACCOUNTABILITY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Why Visionary Founders Choose Codube For{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              High-Stakes Launches.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Most digital agencies outsource client work to rotating contractors or trap businesses in endless retainers. At Codube, you get championship-level engineering speed, zero fluff, and verified results.
          </p>
        </div>

        {/* 3 CONCRETE PROOF PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {proofPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-emerald-500/50 transition-all duration-300 shadow-[0_4px_25px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 flex flex-col justify-between group"
              >
                {/* Number & Icon Tag */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="text-2xl font-mono font-black text-slate-300 group-hover:text-emerald-600 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {pillar.badge}
                  </span>

                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{pillar.title}</h3>
                  <h4 className="text-xs font-bold text-emerald-600">{pillar.subtitle}</h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  <div className="pt-2 space-y-2.5 border-t border-slate-100">
                    {pillar.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">100% Code Ownership &amp; Mutual NDA Transfer</div>
              <div className="text-xs text-slate-500">Every project includes full GitHub repository transfer and clean commercial IP documentation.</div>
            </div>
          </div>
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-slate-950 text-white hover:bg-emerald-600 shadow-sm hover:shadow transition-all shrink-0"
          >
            <span>Explore 7-Day Packages ($999)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
