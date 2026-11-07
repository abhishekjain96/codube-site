"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Zap,
  Smartphone,
  Cloud,
  Bot,
  Layers,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Trophy,
  TrendingUp,
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

  const heroData = content?.hero || {
    badge: "SOFTWARE • AI • AUTOMATION",
    titleLine1: "We Build Digital Products",
    titleHighlight: "That Move Business Forward.",
    subtitle:
      "From custom software and scalable SaaS platforms to intelligent AI automation, we build technology that helps businesses work smarter and grow faster.",
    primaryCta: "Start Your Project",
    secondaryCta: "Explore Our Work",
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030604] pt-20"
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
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030604]/50 to-[#030604] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030604] via-transparent to-[#030604]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030604]/80 via-transparent to-[#030604] pointer-events-none" />

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

      {/* 2. FOREGROUND CONTENT — CENTERED, MAJESTIC & HIGH-CONVERTING */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16 space-y-7"
      >
        {/* Brand Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#080D0A]/85 border border-[#B8FF00]/40 backdrop-blur-xl shadow-[0_0_20px_rgba(184,255,0,0.25)] select-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#B8FF00] animate-pulse shadow-[0_0_10px_#B8FF00]" />
          <span className="text-xs font-mono font-bold text-[#B8FF00] tracking-[0.25em] uppercase">
            {heroData.badge}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#B8FF00]" />
        </motion.div>

        {/* Oversized Brand Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight text-white leading-[1.04] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            {heroData.titleLine1 || "We Build Digital Products"}{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#B8FF00] drop-shadow-[0_0_35px_rgba(184,255,0,0.5)]">
              {heroData.titleHighlight || "That Move Business Forward."}
            </span>
          </h1>
        </motion.div>

        {/* Supporting Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
        >
          {heroData.subtitle}
        </motion.p>

        {/* Primary & Secondary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 pt-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_35px_rgba(184,255,0,0.6)] transition-all duration-300 active:scale-95 group"
          >
            <span>{heroData.primaryCta}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold text-white bg-[#080D0A]/85 hover:bg-white/10 border border-white/15 hover:border-[#B8FF00]/50 transition-all backdrop-blur-xl group"
          >
            <div className="w-6 h-6 rounded-full bg-[#B8FF00]/20 border border-[#B8FF00]/40 flex items-center justify-center text-[#B8FF00] group-hover:bg-[#B8FF00] group-hover:text-black transition-colors">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span>{heroData.secondaryCta}</span>
          </Link>
        </motion.div>

        {/* Floating Live Trust Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 p-3 sm:px-6 rounded-2xl bg-[#080D0A]/70 border border-white/[0.08] backdrop-blur-xl text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#B8FF00]" />
              <span className="font-semibold text-white">1st Rank Hackathon Winner</span>
              <span className="text-zinc-500 hidden sm:inline">•</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B8FF00]" />
              <span className="font-semibold text-white">99% On-Time Delivery</span>
              <span className="text-zinc-500 hidden sm:inline">•</span>
            </div>

            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#B8FF00]" />
              <span className="font-semibold text-white">10+ Production Systems Live</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="pt-6 flex flex-col items-center justify-center gap-2 text-zinc-500 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 0.9,
              behavior: "smooth",
            });
          }}
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-400">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-4 h-4 text-[#B8FF00]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
