"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  TrendingUp,
  Clock,
  Sparkles,
  ChevronDown,
  MessageCircle,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface HeroSectionProps {
  content?: any;
}

const typewriterPhrases = [
  "High-Speed Web Platforms That 10x Conversions.",
  "24/7 Automated WhatsApp AI Receptionists.",
  "Turnkey Digital Systems Delivered in 7 Days.",
  "Custom Software & SaaS With 100% IP Ownership.",
];

function useTypewriter(words: string[], typingSpeed = 45, deletingSpeed = 25, pauseDuration = 2400) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[wordIndex];

    if (!isDeleting) {
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
}

export default function HeroSection({ content }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const typedHeadline = useTypewriter(typewriterPhrases);

  // Scroll-driven animation hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 pt-28 sm:pt-36 pb-16 px-4"
    >
      {/* 1. ELEGANT AMBIENT GRADIENT MESH & SUBTLE ARCHITECTURAL GRID */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Top Radial Emerald Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[550px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.14),transparent_70%)] blur-3xl" />

        {/* Ambient Indigo Flare */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[850px] h-[400px] bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)] blur-3xl" />

        {/* Subtle Architectural Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8"
      >
        {/* Target Audience Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 backdrop-blur-xl shadow-sm select-none max-w-full"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981] shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-800 tracking-[0.14em] uppercase truncate">
            FOR CLINICS, REAL ESTATE &amp; MODERN ENTERPRISES
          </span>
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 hidden sm:inline shrink-0" />
        </motion.div>

        {/* Outcome-Driven H1 Headline with Smooth Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-slate-950 leading-[1.2] sm:leading-[1.14]">
            <span className="block text-slate-900">Turn Visitors Into Paying Customers with</span>
            <span className="relative inline-flex items-center justify-center mt-1.5 min-h-[58px] sm:min-h-[78px] md:min-h-[88px] text-center">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                {typedHeadline}
              </span>
              <span className="inline-block w-[3px] h-[0.9em] bg-emerald-500 ml-1.5 animate-pulse align-middle" />
            </span>
          </h1>
        </motion.div>

        {/* High-Converting Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal px-2"
        >
          Stop losing high-value leads to slow replies. We engineer conversion-focused web platforms and intelligent WhatsApp AI agents that book appointments and capture inquiries 24/7 —{" "}
          <span className="text-slate-900 font-bold underline decoration-emerald-500 decoration-2 underline-offset-4">
            delivered turnkey in 7 days with 100% full IP ownership.
          </span>
        </motion.p>

        {/* Primary & Secondary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto"
        >
          <button
            type="button"
            onClick={() => scrollToSection("ai-simulator")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_4px_22px_rgba(16,185,129,0.35)] transition-all duration-300 active:scale-95 group cursor-pointer"
          >
            <Bot className="w-4 h-4 stroke-[2.5]" />
            <span>Try Interactive AI Demo</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("pricing")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow transition-all group cursor-pointer"
          >
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>View $999 Growth Package</span>
          </button>
        </motion.div>

        {/* Business Outcome Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 sm:pt-3"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-7 py-2.5 sm:py-3 px-4 sm:px-8 rounded-2xl bg-white/90 border border-slate-200/80 backdrop-blur-xl text-xs sm:text-sm text-slate-700 shadow-sm max-w-full">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
              </div>
              <span className="font-semibold text-slate-900 whitespace-nowrap">3x More Bookings</span>
            </div>

            <span className="text-slate-300 hidden sm:inline">|</span>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
              </div>
              <span className="font-semibold text-slate-900 whitespace-nowrap">24/7 Instant WhatsApp Reply</span>
            </div>

            <span className="text-slate-300 hidden sm:inline">|</span>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
              </div>
              <span className="font-semibold text-slate-900 whitespace-nowrap">7-Day Turnaround</span>
            </div>
          </div>
        </motion.div>

        {/* 3. MODERN FLOATING APP PREVIEW MOCKUP WITH UNSPLASH IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 sm:pt-8 max-w-4xl mx-auto w-full relative"
        >
          {/* Outer Browser Window Frame */}
          <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden">
            {/* macOS Browser Header */}
            <div className="bg-slate-50/90 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>codube.com/live-production-platform</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active 99.9%</span>
              </div>
            </div>

            {/* Dashboard Screenshot Graphic */}
            <div className="relative w-full h-[220px] sm:h-[340px] md:h-[420px] bg-slate-100 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Codube High-Performance Platform Analytics & Real-Time AI Automation Dashboard"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 1000px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />

              {/* Floating Feature Badges over Screenshot */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap gap-2 sm:gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs sm:text-sm font-bold text-slate-900 shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sub-Second 0.2s LCP Edge Speed</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs sm:text-sm font-bold text-slate-900 shadow-md">
                  <Bot className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Auto-Sync to Google Sheets &amp; CRM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="pt-4 flex flex-col items-center justify-center gap-1.5 text-slate-400 cursor-pointer"
          onClick={() => scrollToSection("ai-simulator")}
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-500 font-semibold">
            TRY LIVE AI DEMO BELOW
          </span>
          <ChevronDown className="w-4 h-4 text-emerald-600" />
        </motion.div>
      </motion.div>
    </div>
  );
}
