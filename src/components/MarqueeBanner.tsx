"use client";

import React from "react";
import { Sparkles, Zap, Flame, ShieldCheck } from "lucide-react";

interface MarqueeBannerProps {
  customItems?: { text: string; highlight?: boolean }[];
}

const defaultRow1 = [
  { text: "NEXT-GEN WEB APPLICATIONS", highlight: true, icon: Zap },
  { text: "24/7 WHATSAPP AI RECEPTIONISTS", highlight: false, icon: Sparkles },
  { text: "SAAS PLATFORMS AT SCALE", highlight: true, icon: Flame },
  { text: "SUB-SECOND EDGE PERFORMANCE", highlight: false, icon: Sparkles },
  { text: "TURNKEY 7-DAY DELIVERY", highlight: true, icon: ShieldCheck },
  { text: "100% FULL CODE OWNERSHIP", highlight: false, icon: Zap },
  { text: "HIGH-CONVERTING NEXT.JS 14", highlight: true, icon: Flame },
  { text: "ENTERPRISE SCALABLE BACKENDS", highlight: false, icon: ShieldCheck },
];

const programmingLanguages = [
  { name: "React 18", color: "#0891b2", tag: "Frontend" },
  { name: "Next.js 14 (App Router)", color: "#0f172a", tag: "Full-Stack" },
  { name: "TypeScript", color: "#2563eb", tag: "Language" },
  { name: "Node.js", color: "#16a34a", tag: "Runtime" },
  { name: "Python", color: "#d97706", tag: "AI & Data" },
  { name: "PostgreSQL", color: "#2563eb", tag: "SQL DB" },
  { name: "MongoDB", color: "#059669", tag: "NoSQL DB" },
  { name: "AWS Cloud", color: "#ea580c", tag: "Infra" },
  { name: "Gemini AI & LLMs", color: "#7c3aed", tag: "AI Models" },
  { name: "Docker", color: "#0284c7", tag: "DevOps" },
  { name: "Tailwind CSS", color: "#06b6d4", tag: "Styling" },
  { name: "Redis", color: "#e11d48", tag: "Cache" },
];

export default function MarqueeBanner({ customItems }: MarqueeBannerProps) {
  const row1 = customItems || defaultRow1;

  return (
    <div className="relative py-8 md:py-10 overflow-hidden bg-slate-50 border-y border-slate-200 select-none">
      {/* Background ambient line glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Row 1: Leftward sliding marquee with Highlight Text & Badges */}
      <div className="flex w-max space-x-5 animate-marquee hover:[animation-play-state:paused]">
        {[...row1, ...row1, ...row1].map((item, idx) => {
          const Icon = (item as any).icon || Sparkles;
          return (
            <div
              key={`row1-${idx}`}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wider transition-all whitespace-nowrap ${
                item.highlight
                  ? "bg-emerald-600 text-white shadow-sm border border-emerald-600"
                  : "bg-white text-slate-700 border border-slate-200 shadow-2xs hover:border-emerald-400"
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  item.highlight ? "text-white fill-current" : "text-emerald-600"
                }`}
              />
              <span>{item.text}</span>
              <span className={`text-xs ${item.highlight ? "text-white/70" : "text-emerald-600"}`}>✦</span>
            </div>
          );
        })}
      </div>

      {/* Row 2: Rightward sliding marquee with Tech Stack */}
      <div className="flex w-max space-x-3.5 mt-3.5 animate-marquee-reverse hover:[animation-play-state:paused]">
        {[...programmingLanguages, ...programmingLanguages, ...programmingLanguages].map(
          (lang, idx) => (
            <div
              key={`lang-${idx}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:border-emerald-500 transition-colors whitespace-nowrap shadow-2xs"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: lang.color }}
              />
              <span>{lang.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-sans font-medium">
                {lang.tag}
              </span>
            </div>
          )
        )}
      </div>

      {/* Gradient mask for edge fading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10" />
    </div>
  );
}
