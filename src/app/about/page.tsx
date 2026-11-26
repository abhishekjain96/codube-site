import React from "react";
import type { Metadata } from "next";
import WhyChooseUs from "@/components/WhyChooseUs";
import FounderSection from "@/components/FounderSection";
import TechStackGrid from "@/components/TechStackGrid";
import CtaBanner from "@/components/CtaBanner";
import { getSiteContent } from "@/lib/storage";
import { Trophy, Code2, Users, Rocket, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About CODUBE — Software, AI & Automation Engineering Agency",
  description:
    "We turn ambitious ideas into powerful digital products. Led by Abhishek Jain (1st Rank Hackathon Winner), CODUBE engineers scalable software, modern web apps, and intelligent AI automation.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function AboutPage() {
  const content = getSiteContent();

  const values = [
    {
      title: "Championship Precision",
      desc: "We approach production code with the same speed, rigor, and precision required to win high-stakes national coding hackathons.",
      icon: Trophy,
    },
    {
      title: "Revenue & Product First",
      desc: "Code is a tool to drive real business growth. We prioritize conversion, fast user onboarding, and measurable ROI over vanity features.",
      icon: Rocket,
    },
    {
      title: "Modern Edge Architecture",
      desc: "Built on Next.js 14, TypeScript, Serverless Edge, and modern vector databases. Zero legacy technical debt, 100% future-proof.",
      icon: Code2,
    },
    {
      title: "Transparent & Direct",
      desc: "Direct access to senior developers. No sales middlemen, no bloated agency markups, and complete intellectual property ownership.",
      icon: Users,
    },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen text-slate-900 overflow-x-clip relative">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
            SOFTWARE • AI • AUTOMATION
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight max-w-4xl mx-auto leading-[1.1]">
          We Turn Ambitious Ideas Into{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Powerful Digital Products.
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From custom software and scalable SaaS platforms to intelligent AI automation, CODUBE engineers technology that helps businesses work smarter and grow faster.
        </p>
      </div>

      {/* 1. Core Values */}
      <section className="py-12 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-emerald-500/40 hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Founder Section (Abhishek Jain) */}
      <FounderSection content={content} />

      {/* 3. Tech Stack */}
      <TechStackGrid content={content} />

      {/* 4. CTA */}
      <CtaBanner content={content} />
    </div>
  );
}
