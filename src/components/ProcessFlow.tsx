"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  Layout,
  Code2,
  CheckCircle,
  Rocket,
  TrendingUp,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";
import ProcessVisuals from "./ProcessVisuals";

interface ProcessFlowProps {
  content?: any;
  showHeroGraphic?: boolean;
}

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    tagline: "Architecture Blueprint & Requirements",
    description: "Deep dive into your business model, target audience, and system requirements to formulate a rigid technical roadmap.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design & Prototype",
    tagline: "Figma 60fps Interactive UI/UX",
    description: "Translating concepts into modern, high-converting Figma prototypes with glassmorphic tokens and micro-interactions.",
    icon: Layout,
  },
  {
    number: "03",
    title: "Development",
    tagline: "Next.js 14 & Type-Safe Architecture",
    description: "Writing clean, scalable, and type-safe code using Next.js, Node.js, and modern cloud databases with zero technical debt.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & QA",
    tagline: "Rigorous 100% Bug-Free Audits",
    description: "Simulating heavy traffic, penetration testing, cross-browser validation, and edge-case testing for bulletproof security.",
    icon: CheckCircle,
  },
  {
    number: "05",
    title: "Deployment",
    tagline: "Zero-Downtime Edge Launch",
    description: "Deploying your product on AWS, Vercel, and Cloudflare Edge CDN with automated SSL, caching, and CI/CD pipelines.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Support & Growth",
    tagline: "24/7 Monitoring & Scaling",
    description: "Continuous performance audits, feature enhancements, and direct founder-level technical guidance to help your platform scale.",
    icon: TrendingUp,
  },
];

export default function ProcessFlow({
  content,
  showHeroGraphic = false,
}: ProcessFlowProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const processData = content?.process || {
    badge: "OUR METHODOLOGY",
    heading: "From Idea to Launch",
    headingHighlight: "Launch",
    subheading:
      "A simple, transparent and result-driven development process that turns your idea into a real, scalable product.",
    heroImage: "/images/process-laptop.png",
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#030604]" id="process">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(184,255,0,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B8FF00]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-[#B8FF00] tracking-widest uppercase">
                {processData.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              From Idea to{" "}
              <span className="text-[#B8FF00] drop-shadow-[0_0_25px_rgba(184,255,0,0.4)]">
                {processData.headingHighlight || "Launch"}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              {processData.subheading}
            </p>
          </div>

          {/* Badges on the right */}
          <div className="flex flex-wrap gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-300">
              <Zap className="w-3.5 h-3.5 text-[#B8FF00]" />
              <span>Clear &amp; Structured</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-300">
              <Users className="w-3.5 h-3.5 text-[#B8FF00]" />
              <span>Direct Founder Access</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-300">
              <Rocket className="w-3.5 h-3.5 text-[#B8FF00]" />
              <span>Fast 2-6 Wk Sprints</span>
            </div>
          </div>
        </div>

        {/* 6 Step Cards with Interactive Selection */}
        <div className="relative mb-12">
          {/* Neon connecting dotted line (visible on desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] border-t-2 border-dashed border-[#B8FF00]/30 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-4 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={st.number}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[250px] ${
                    isActive
                      ? "bg-[#080D0A] border-[#B8FF00] shadow-[0_15px_35px_rgba(184,255,0,0.2)] -translate-y-2"
                      : "bg-[#080D0A]/70 border-white/[0.08] hover:border-[#B8FF00]/40 hover:-translate-y-1"
                  }`}
                >
                  <div className="space-y-3">
                    {/* Number Badge Pill on Top */}
                    <div className="flex items-center justify-center">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-black transition-all duration-300 ${
                          isActive
                            ? "bg-[#B8FF00] text-black shadow-[0_0_15px_#B8FF00] scale-110"
                            : "bg-white/[0.06] text-zinc-300 border border-white/10 group-hover:border-[#B8FF00]/50"
                        }`}
                      >
                        {st.number}
                      </div>
                    </div>

                    {/* Step Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl mx-auto flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#B8FF00]/20 text-[#B8FF00] border border-[#B8FF00]/40 shadow-[0_0_15px_rgba(184,255,0,0.25)]"
                          : "bg-white/[0.04] text-zinc-400 border border-white/10 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm font-bold text-white text-center tracking-tight leading-snug group-hover:text-[#B8FF00] transition-colors">
                      {st.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[11px] text-zinc-400 text-center leading-relaxed font-normal line-clamp-3">
                      {st.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="pt-3 border-t border-white/[0.05] text-center">
                    <span
                      className={`text-[10px] font-mono tracking-wider transition-colors ${
                        isActive ? "text-[#B8FF00] font-bold" : "text-zinc-500"
                      }`}
                    >
                      Step 0{idx + 1} of 06
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE FRAMED STAGE SHOWING ACTIVE STEP MOCKUP */}
        <div className="rounded-3xl p-4 sm:p-6 bg-[#080D0A] border border-[#B8FF00]/30 shadow-2xl">
          <div className="flex items-center justify-between pb-3 px-2 border-b border-white/[0.08] text-xs font-mono">
            <span className="text-[#B8FF00] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-ping" />
              ACTIVE PHASE ARCHITECTURE VISUAL
            </span>
            <span className="text-zinc-400 text-[11px]">Click or hover any step above to inspect</span>
          </div>

          <div className="pt-4">
            <ProcessVisuals stepIndex={activeStep} />
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-[#080D0A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Have an idea ready for Phase 01?</h4>
            <p className="text-xs text-zinc-400">Get a complete technical discovery blueprint and milestone estimate in 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_20px_rgba(184,255,0,0.4)] transition-all shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
