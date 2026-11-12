"use client";

import React from "react";
import Link from "next/link";
import {
  Trophy,
  Activity,
  Zap,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  ExternalLink,
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
      subtitle: "Proven Engineering Speed & Zero Bugs",
      icon: Trophy,
      description:
        "Competitive hackathons require building complete, zero-defect platforms under extreme 24-hour time limits. At Codube, we bring that exact championship precision to your business website and AI receptionist.",
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
        "Unlike agencies that only show Figma mockups, we run real-world production platforms handling thousands of patients, doctors, and diagnostic centers every single day.",
      metrics: [
        "ScanTaker: Complete MRI & CT scan booking network in Jaipur",
        "MedLearnings: Medical LMS powering 5,000+ verified physicians",
        "Mission-critical uptime, automated slot tokens & instant WhatsApp dispatch",
      ],
    },
    {
      id: "speed-ownership",
      number: "03",
      badge: "RISK-FREE BUSINESS PARTNERSHIP",
      title: "7-Day Delivery & 100% IP Ownership",
      subtitle: "Zero Hostage Code • Transparent Pricing",
      icon: Zap,
      description:
        "Traditional agencies trap business owners in 3-month retainers and keep the code hostage. With Codube, your turnkey website + WhatsApp AI agent goes live in 7 days, and you own 100% of the intellectual property.",
      metrics: [
        "Transparent fixed pricing starting at ₹14,999 (No hidden charges)",
        "100% full GitHub source code & cloud credentials belong to you",
        "Official WhatsApp Cloud API verification with your business name",
      ],
    },
  ];

  const comparisonRows = [
    {
      feature: "Turnaround Time",
      freelancer: "3 to 6 weeks (Ghosting risk)",
      agency: "2 to 3 months (Slow approvals)",
      codube: "3 to 7 Days Guaranteed",
    },
    {
      feature: "Transparent Pricing",
      freelancer: "Hourly bills that keep rising",
      agency: "₹1.5 Lakh - ₹4 Lakh + monthly retainer",
      codube: "Fixed ₹14,999 - ₹19,999 One-Time",
    },
    {
      feature: "24/7 WhatsApp AI Bot",
      freelancer: "❌ Rarely supported or fragile",
      agency: "❌ Add-on tool requiring extra monthly SaaS",
      codube: "✅ Included & Custom-Trained for Your Brand",
    },
    {
      feature: "Engineering Quality",
      freelancer: "Often uses slow bloated templates",
      agency: "Delegated to junior intern developers",
      codube: "Built by 1st Rank National Hackathon Winner",
    },
    {
      feature: "Code & Asset Ownership",
      freelancer: "Messy handoff with missing keys",
      agency: "Platform lock-in (They control hosting)",
      codube: "100% Full Ownership Transferred Day 1",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#040805] overflow-hidden" id="proof">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,255,0,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,211,102,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B8FF00]/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B8FF00]" />
            <span className="text-xs font-mono font-semibold text-[#B8FF00] tracking-widest uppercase">
              AUTHENTIC PROOF &amp; ACCOUNTABILITY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Why Businesses Choose Codube Over{" "}
            <span className="text-[#B8FF00] drop-shadow-[0_0_25px_rgba(184,255,0,0.4)]">
              Freelancers &amp; Traditional Agencies.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Most digital agencies outsource client work to interns or trap businesses in endless retainers. At Codube, you get championship-level engineering speed, zero fluff, and verified results.
          </p>
        </div>

        {/* 3 CONCRETE PROOF PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
          {proofPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="relative rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-white/10 hover:border-[#B8FF00]/50 transition-all duration-300 shadow-[0_15px_45px_rgba(0,0,0,0.8)] flex flex-col justify-between group"
              >
                {/* Number & Icon Tag */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <span className="text-2xl font-mono font-black text-zinc-600 group-hover:text-[#B8FF00] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00] group-hover:bg-[#B8FF00] group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#B8FF00]/10 text-[#B8FF00] border border-[#B8FF00]/25">
                    {pillar.badge}
                  </span>

                  <h3 className="text-xl font-black text-white tracking-tight">{pillar.title}</h3>
                  <h4 className="text-xs font-bold text-[#B8FF00]">{pillar.subtitle}</h4>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  <div className="pt-2 space-y-2.5">
                    {pillar.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8FF00] shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* HEAD-TO-HEAD COMPARISON MATRIX */}
        <div className="rounded-3xl bg-[#080D0A] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden text-left">
          <div className="mb-8 space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#B8FF00] tracking-widest uppercase">
              HONEST COMPARISON MATRIX
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Freelancers vs Traditional Agencies vs CODUBE
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              See the exact difference between unreliable freelancers, bloated agencies, and our high-performance studio.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400">
                  <th className="py-3 px-4 text-left font-bold uppercase tracking-wider text-[11px]">
                    Decision Factor
                  </th>
                  <th className="py-3 px-4 text-left font-bold uppercase tracking-wider text-[11px] text-zinc-400">
                    Freelancers
                  </th>
                  <th className="py-3 px-4 text-left font-bold uppercase tracking-wider text-[11px] text-zinc-400">
                    Traditional Agencies
                  </th>
                  <th className="py-3 px-4 text-left font-bold uppercase tracking-wider text-[11px] text-[#B8FF00] bg-[#B8FF00]/10 rounded-t-xl">
                    CODUBE (Product Studio)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        <span>{row.freelancer}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-white font-semibold bg-[#B8FF00]/5">
                      <div className="flex items-center gap-1.5 text-[#B8FF00]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8FF00] shrink-0" />
                        <span>{row.codube}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Action strip */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#B8FF00]" />
              <span>Full source code IP ownership &amp; commercial NDA provided with every project.</span>
            </div>

            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] transition-all"
            >
              <span>Explore Fixed Packages →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
