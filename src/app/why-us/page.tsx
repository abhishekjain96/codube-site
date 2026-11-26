import React from "react";
import type { Metadata } from "next";
import WhyChooseUs from "@/components/WhyChooseUs";
import FounderSection from "@/components/FounderSection";
import TechStackGrid from "@/components/TechStackGrid";
import CtaBanner from "@/components/CtaBanner";
import { getSiteContent } from "@/lib/storage";

export const metadata: Metadata = {
  title: "Why Choose CODUBE — The Engineering Standard",
  description:
    "Discover why ambitious businesses trust CODUBE. 1st Rank Hackathon Caliber, Type-Safe Next.js 14 Architecture, 100% Code Ownership, and Sub-second Speeds.",
};

export default function WhyUsPage() {
  const content = getSiteContent();

  return (
    <div className="pt-24 bg-white min-h-screen text-slate-900 overflow-x-clip relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
            THE CODUBE STANDARD
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight">
          Engineered for Businesses That{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Demand Results.
          </span>
        </h1>
        <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We combine product thinking, high-competition software engineering, and top-tier conversion design to launch scalable applications that win.
        </p>
      </div>

      {/* Head-to-head comparison matrix */}
      <WhyChooseUs content={content} />

      {/* Founder authority */}
      <FounderSection content={content} />

      {/* Tech Stack */}
      <TechStackGrid content={content} />

      {/* CTA */}
      <CtaBanner content={content} />
    </div>
  );
}
