"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  TrendingUp,
  Clock,
  Sparkles,
  ChevronDown,
  MessageCircle,
  Zap,
} from "lucide-react";

interface HeroSectionProps {
  content?: any;
}

const rotatingPhrases = [
  "High-Speed Websites & 24/7 WhatsApp AI Agents.",
  "Automated AI Receptionists That Book Appointments.",
  "Turnkey Digital Platforms Delivered in 7 Days.",
  "Zero-Retainer Systems That 3x Your Bookings.",
];

export default function HeroSection({ content }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Animated text loop effect
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Scroll-driven animation hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030604] pt-28 sm:pt-32 pb-14 px-4"
    >
      {/* 1. FUTURISTIC AMBIENT CYBER LIGHTING (HIGH PERFORMANCE & INSTANT LOAD) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Top Radial Neon Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[550px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(184,255,0,0.16),transparent_70%)] blur-2xl" />

        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[400px] bg-[radial-gradient(circle,rgba(37,211,102,0.08)_0%,transparent_70%)] blur-3xl" />

        {/* Bottom Dark Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030604]/40 to-[#030604]" />

        {/* Subtle Fine Cyber Grid Overlay for Texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#B8FF00 1px, transparent 1px), linear-gradient(90deg, #B8FF00 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      {/* 2. FOREGROUND CONTENT — OUTCOME-DRIVEN HIGH-CONVERTING HERO */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7"
      >
        {/* Target Audience Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#080D0A]/90 border border-[#B8FF00]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(184,255,0,0.25)] select-none max-w-full"
        >
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#B8FF00] animate-pulse shadow-[0_0_10px_#B8FF00] shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono font-bold text-[#B8FF00] tracking-[0.14em] sm:tracking-[0.18em] uppercase truncate">
            FOR CLINICS, REAL ESTATE &amp; GROWING BUSINESSES
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#B8FF00] hidden sm:inline shrink-0" />
        </motion.div>

        {/* Outcome-Driven H1 Headline with Smooth Animated Rotating Phrases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-black tracking-tight text-white leading-[1.2] sm:leading-[1.12] drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)] flex flex-col justify-center items-center">
            <span>Turn Visitors Into Paying Customers with</span>
            <span className="relative inline-block text-[#B8FF00] drop-shadow-[0_0_35px_rgba(184,255,0,0.5)] mt-1.5 min-h-[64px] sm:min-h-[82px] md:min-h-[96px] lg:min-h-[105px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {rotatingPhrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </motion.div>

        {/* High-Converting Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-base md:text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal px-2"
        >
          Stop losing leads to slow replies. We build conversion-engineered websites and automated WhatsApp AI receptionists that book appointments and capture leads while you sleep —{" "}
          <span className="text-white font-semibold underline decoration-[#B8FF00] decoration-2 underline-offset-4">
            delivered in 7 days.
          </span>
        </motion.p>

        {/* Primary & Secondary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto"
        >
          <button
            type="button"
            onClick={() => scrollToSection("ai-simulator")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_35px_rgba(184,255,0,0.65)] transition-all duration-300 active:scale-95 group cursor-pointer"
          >
            <Bot className="w-4 h-4 stroke-[2.5]" />
            <span>Get Your Free AI Demo</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("pricing")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#080D0A]/90 hover:bg-white/10 border border-white/20 hover:border-[#B8FF00]/60 transition-all backdrop-blur-xl group cursor-pointer"
          >
            <Zap className="w-4 h-4 text-[#B8FF00]" />
            <span>View $999 Growth Package</span>
          </button>
        </motion.div>

        {/* Business Outcome Metrics Bar (Zero Developer Jargon) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 sm:pt-5"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-7 py-2.5 sm:py-3.5 px-4 sm:px-8 rounded-2xl bg-[#080D0A]/85 border border-white/[0.1] backdrop-blur-xl text-xs sm:text-sm text-zinc-200 shadow-2xl max-w-full">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#B8FF00]/15 flex items-center justify-center shrink-0">
                <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B8FF00]" />
              </div>
              <span className="font-semibold text-white whitespace-nowrap">3x More Bookings</span>
            </div>

            <span className="text-zinc-700 hidden sm:inline">|</span>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#25D366]" />
              </div>
              <span className="font-semibold text-white whitespace-nowrap">24/7 Instant WhatsApp Reply</span>
            </div>

            <span className="text-zinc-700 hidden sm:inline">|</span>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#B8FF00]/15 flex items-center justify-center shrink-0">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B8FF00]" />
              </div>
              <span className="font-semibold text-white whitespace-nowrap">7-Day Turnaround</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="pt-4 flex flex-col items-center justify-center gap-1.5 text-zinc-500 cursor-pointer"
          onClick={() => scrollToSection("ai-simulator")}
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-400">
            TRY LIVE AI DEMO BELOW
          </span>
          <ChevronDown className="w-4 h-4 text-[#B8FF00]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
