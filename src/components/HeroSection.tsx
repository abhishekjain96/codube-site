"use client";

import React, { useRef } from "react";
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
} from "lucide-react";

interface HeroSectionProps {
  content?: any;
}

export default function HeroSection({ content }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-driven animation hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Dynamic scroll response: video scales and fades slightly as you scroll down
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.85, 0.4, 0.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030604] pt-24 pb-12"
    >
      {/* 1. FULL-SCREEN 3D CINEMATIC VIDEO BACKGROUND */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        <video
          src="/media/hero/codube_3d_brand_animation.mp4"
          poster="/images/hero-laptop.png"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-105 contrast-110"
        />

        {/* Cinematic Vignette & Ambient Radial Glow Overlays */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030604]/55 to-[#030604] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030604] via-transparent to-[#030604]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030604]/85 via-transparent to-[#030604] pointer-events-none" />

        {/* Ambient Lime Cyber Aura in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(184,255,0,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      </motion.div>

      {/* Subtle fine cyber grid overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(#B8FF00 1px, transparent 1px), linear-gradient(90deg, #B8FF00 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 2. FOREGROUND CONTENT — OUTCOME-DRIVEN HIGH-CONVERTING HERO */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 pb-12 space-y-7"
      >
        {/* Target Audience Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#080D0A]/90 border border-[#B8FF00]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(184,255,0,0.25)] select-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#B8FF00] animate-pulse shadow-[0_0_10px_#B8FF00]" />
          <span className="text-[11px] sm:text-xs font-mono font-bold text-[#B8FF00] tracking-[0.18em] uppercase">
            FOR CLINICS, REAL ESTATE &amp; GROWING BUSINESSES
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#B8FF00] hidden sm:inline" />
        </motion.div>

        {/* Outcome-Driven H1 Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight text-white leading-[1.08] drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)]">
            Turn Visitors Into Paying Customers with{" "}
            <span className="text-[#B8FF00] drop-shadow-[0_0_35px_rgba(184,255,0,0.5)]">
              High-Speed Websites &amp; 24/7 WhatsApp AI Agents.
            </span>
          </h1>
        </motion.div>

        {/* High-Converting Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3"
        >
          <button
            type="button"
            onClick={() => scrollToSection("ai-simulator")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_35px_rgba(184,255,0,0.65)] transition-all duration-300 active:scale-95 group cursor-pointer"
          >
            <Bot className="w-4 h-4 stroke-[2.5]" />
            <span>Get Your Free AI Demo</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("pricing")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold text-white bg-[#080D0A]/90 hover:bg-white/10 border border-white/20 hover:border-[#B8FF00]/60 transition-all backdrop-blur-xl group cursor-pointer"
          >
            <Zap className="w-4 h-4 text-[#B8FF00]" />
            <span>View ₹19,999 Growth Package</span>
          </button>
        </motion.div>

        {/* Business Outcome Metrics Bar (Zero Developer Jargon) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-5"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-7 py-3.5 px-6 sm:px-8 rounded-2xl bg-[#080D0A]/85 border border-white/[0.1] backdrop-blur-xl text-xs sm:text-sm text-zinc-200 shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#B8FF00]/15 flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5 text-[#B8FF00]" />
              </div>
              <span className="font-bold text-white">3x More Bookings</span>
            </div>

            <span className="text-zinc-700 hidden sm:inline">|</span>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#B8FF00]/15 flex items-center justify-center">
                <MessageCircle className="w-3.5 h-3.5 text-[#B8FF00]" />
              </div>
              <span className="font-bold text-white">24/7 Instant WhatsApp Reply</span>
            </div>

            <span className="text-zinc-700 hidden sm:inline">|</span>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#B8FF00]/15 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 text-[#B8FF00]" />
              </div>
              <span className="font-bold text-white">7-Day Launch</span>
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
