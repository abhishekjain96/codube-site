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
    "Discover why visionary founders trust CODUBE over traditional agencies. 1st Rank Hackathon Caliber, Type-Safe Architecture, 100% Code Ownership, and Sub-second Speeds.",
};

export default function WhyUsPage() {
  const content = getSiteContent();

  return (
    <div className="pt-20 bg-[#030604] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B8FF00]/30 backdrop-blur-md mb-4">
          <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse" />
          <span className="text-xs font-mono font-semibold text-[#B8FF00] tracking-widest uppercase">
            THE CODUBE STANDARD
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Engineered for Businesses That{" "}
          <span className="text-[#B8FF00] drop-shadow-[0_0_25px_rgba(184,255,0,0.4)]">
            Demand Results.
          </span>
        </h1>
        <p className="mt-4 text-base text-zinc-400 max-w-2xl mx-auto">
          We combine product thinking, high-competition software engineering, and top-tier UI design to launch scalable applications that win.
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
