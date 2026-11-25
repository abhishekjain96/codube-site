"use client";

import React from "react";
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

interface ProcessFlowProps {
  content?: any;
  showHeroGraphic?: boolean;
}

const steps = [
  {
    number: "01",
    title: "Discovery & Blueprint",
    tagline: "Architecture & Requirements",
    description: "Deep dive into your business model, customer workflows, and technical scope to construct a rigid delivery roadmap.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Figma UI/UX Design",
    tagline: "Interactive Conversion Prototype",
    description: "Translating concepts into modern, high-converting prototypes with clear value propositions and responsive layouts.",
    icon: Layout,
  },
  {
    number: "03",
    title: "Agile Development",
    tagline: "Next.js 14 & Type-Safe Code",
    description: "Writing clean, scalable code with TypeScript, Tailwind, and serverless edge functions with zero bloated templates.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & Security QA",
    tagline: "100% Defect-Free Audits",
    description: "Simulating heavy traffic, penetration audits, cross-device testing, and Lighthouse 99+ speed optimization.",
    icon: CheckCircle,
  },
  {
    number: "05",
    title: "Turnkey Launch",
    tagline: "Zero-Downtime Edge Deployment",
    description: "Deploying your platform on Vercel, AWS, and Cloudflare CDN with automated SSL and WhatsApp Cloud API verification.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Growth & 24/7 Support",
    tagline: "Ongoing Performance Monitoring",
    description: "Continuous monitoring, feature iterations, and direct founder-level technical guidance to help your brand scale.",
    icon: TrendingUp,
  },
];

export default function ProcessFlow({
  content,
  showHeroGraphic = false,
}: ProcessFlowProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white" id="process">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
                OUR METHODOLOGY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.14]">
              From Concept to Launch in{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                7 Days.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              A transparent, agile development process engineered to turn your vision into a live, high-converting digital product with zero guesswork.
            </p>
          </div>

          {/* Badges on the right */}
          <div className="flex flex-wrap gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Clear Sprints</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Founder Access</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
              <Rocket className="w-3.5 h-3.5 text-emerald-600" />
              <span>Fast 7-Day Turnaround</span>
            </div>
          </div>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;

            return (
              <div
                key={st.number}
                className="group relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 hover:border-emerald-500/40 shadow-[0_4px_25px_rgba(15,23,42,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-black text-slate-300 group-hover:text-emerald-600 transition-colors">
                      {st.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                      {st.title}
                    </h3>
                    <p className="text-xs font-bold text-emerald-700 mt-0.5">
                      {st.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {st.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Phase 0{idx + 1}</span>
                  <span className="text-emerald-700 font-semibold">Stage Complete ✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-black text-slate-900">Have an idea ready for Phase 01?</h4>
            <p className="text-xs sm:text-sm text-slate-600">Get a complete technical discovery blueprint and guaranteed delivery timeline in 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-slate-950 text-white hover:bg-emerald-600 shadow-sm transition-all shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
