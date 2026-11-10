"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  Code2,
  Zap,
  Award,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Linkedin,
  Instagram,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from "lucide-react";

interface FounderSectionProps {
  content?: any;
}

export default function FounderSection({ content: initialContent }: FounderSectionProps) {
  const [content, setContent] = useState<any>(initialContent);

  // Sync client-side on mount so any new image or text uploaded in Admin shows instantly
  useEffect(() => {
    fetch("/api/admin/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.content) {
          setContent(data.content);
        }
      })
      .catch(() => {});
  }, [initialContent]);

  const founder = content?.founder || {};
  const name = founder.name || "Abhishek Jain";
  const role = founder.role || "Founder & Lead Software Architect";
  const badge =
    founder.badge || "1st Rank Holder — High-Competition Coding Hackathons";
  const headline =
    founder.headline || "Engineering High-Impact Products With Competitive Precision";
  const bio =
    founder.bio ||
    "I am Abhishek Jain, founder of Codube and a software developer. 1st rank holder in highly competitive coding hackathons. I build modern, high-performance digital products that don't just look visually breathtaking, but create real business impact, scale smoothly, and convert visitors into loyal customers.";
  const quote =
    founder.quote ||
    "In competitive hackathons, you learn that speed and precision can never be compromised. At Codube, we bring that exact championship-level rigor to every client product we engineer.";

  // High-resolution real photo priority
  const photo =
    founder.photo ||
    founder.image ||
    "/uploads/1794310118913_founder_photo_aj.png" ||
    "/images/abhishek-photo.png";

  const linkedinUrl =
    founder?.socials?.linkedin ||
    content?.general?.linkedin ||
    "https://www.linkedin.com/in/abhishek-jain96/";

  const instagramUrl =
    founder?.socials?.instagram ||
    content?.general?.instagram ||
    "https://www.instagram.com/codube.ai/";

  const whatsappMessage = encodeURIComponent(
    `Hello Abhishek! I saw your profile on Codube and would like to discuss building a project with you.`
  );

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#040805]" id="founder">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(184,255,0,0.14)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(34,197,94,0.10)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* Cyber Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#B8FF00 1px, transparent 1px), linear-gradient(90deg, #B8FF00 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#B8FF00]/30 backdrop-blur-md shadow-[0_0_20px_rgba(184,255,0,0.2)]">
            <Sparkles className="w-4 h-4 text-[#B8FF00]" />
            <span className="text-xs font-mono font-bold text-[#B8FF00] tracking-widest uppercase">
              FOUNDER SPOTLIGHT &amp; ARCHITECT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
            Meet The Architect Behind{" "}
            <span className="text-[#B8FF00] drop-shadow-[0_0_30px_rgba(184,255,0,0.5)]">CODUBE.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Led by a national coding hackathon champion — building production software with championship-level speed, zero bloat, and enterprise-grade reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: LARGE CINEMATIC FOUNDER PORTRAIT IN ULTRA-TECH FRAME */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative group">
              {/* Outer Cyber Glow Ambient Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#B8FF00]/30 via-emerald-500/15 to-[#B8FF00]/10 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 rounded-[36px]" />

              {/* Outer Illuminated Bezel */}
              <div className="relative rounded-[32px] p-[2px] bg-gradient-to-b from-[#B8FF00]/60 via-white/10 to-[#B8FF00]/25 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                {/* Inner Card Frame */}
                <div className="relative rounded-[30px] overflow-hidden bg-[#070C09] border border-[#B8FF00]/30 p-3 sm:p-4 space-y-4 group-hover:border-[#B8FF00] transition-all duration-300">
                  
                  {/* Top HUD Telemetry Strip */}
                  <div className="flex items-center justify-between px-2 py-1 text-[11px] font-mono border-b border-white/[0.08]">
                    <div className="flex items-center gap-2 text-[#B8FF00] font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse shadow-[0_0_8px_#B8FF00]" />
                      <span>FOUNDER SPOTLIGHT</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B8FF00]" />
                      <span>VERIFIED ARCHITECT</span>
                    </div>
                  </div>

                  {/* PROMINENT TALL FOUNDER IMAGE FRAME */}
                  <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden bg-[#020503] border border-white/10 group-hover:border-[#B8FF00]/60 transition-colors shadow-2xl">
                    {/* Glowing Tech HUD Corner Brackets */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#B8FF00] z-20" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#B8FF00] z-20" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#B8FF00] z-20" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#B8FF00] z-20" />

                    {/* Top Floating Hackathon Trophy Badge */}
                    <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#B8FF00]/60 text-xs font-bold text-[#B8FF00] shadow-[0_0_20px_rgba(184,255,0,0.35)]">
                      <Trophy className="w-3.5 h-3.5 text-[#B8FF00]" />
                      <span>1st Rank Hackathon Winner</span>
                    </div>

                    {/* Real Large Founder Image */}
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      unoptimized
                      priority
                      className="object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Bottom Vignette & Gradient for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070C09] via-[#070C09]/60 to-transparent pointer-events-none" />

                    {/* Glassmorphic Identity Plaque on the Image Bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-5 z-20 space-y-1.5 bg-gradient-to-t from-[#070C09] via-[#070C09]/90 to-transparent">
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                          {name}
                        </h3>
                        <CheckCircle2 className="w-5 h-5 text-[#B8FF00] fill-[#B8FF00]/20" />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-[#B8FF00] tracking-wide">
                        {role}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] text-zinc-300 backdrop-blur-md mt-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active • Taking Ambitious Projects</span>
                      </div>
                    </div>
                  </div>

                  {/* ACTION & SOCIAL HUB BAR */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <a
                      href={`https://wa.me/919672660338?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_25px_rgba(184,255,0,0.5)] transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <MessageCircle className="w-4 h-4 fill-current transition-transform group-hover/btn:scale-110" />
                      <span>Chat with Abhishek</span>
                    </a>

                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-[#B8FF00] hover:bg-[#B8FF00]/10 text-zinc-300 hover:text-[#B8FF00] flex items-center justify-center transition-all shrink-0"
                      title="LinkedIn: Abhishek Jain"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>

                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-[#B8FF00] hover:bg-[#B8FF00]/10 text-zinc-300 hover:text-[#B8FF00] flex items-center justify-center transition-all shrink-0"
                      title="Instagram: @codube.ai"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FOUNDER STORY, CREDENTIALS & METRICS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B8FF00]/30 backdrop-blur-md shadow-[0_0_15px_rgba(184,255,0,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#B8FF00]" />
              <span className="text-xs font-mono font-bold text-zinc-200 tracking-wide">
                {badge}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Engineering High-Impact Products With{" "}
              <span className="text-[#B8FF00] drop-shadow-[0_0_20px_rgba(184,255,0,0.4)]">
                Competitive Precision.
              </span>
            </h2>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {bio}
            </p>

            {/* 4 Credibility Metric Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B8FF00]/40 transition-colors flex items-start gap-3.5 group/card">
                <div className="w-11 h-11 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00] shrink-0 group-hover/card:bg-[#B8FF00] group-hover/card:text-black transition-colors">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">1st Rank Winner</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">High-Competition Coding Hackathons</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B8FF00]/40 transition-colors flex items-start gap-3.5 group/card">
                <div className="w-11 h-11 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00] shrink-0 group-hover/card:bg-[#B8FF00] group-hover/card:text-black transition-colors">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full-Stack Architect</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Next.js 14, Distributed Cloud &amp; AI</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B8FF00]/40 transition-colors flex items-start gap-3.5 group/card">
                <div className="w-11 h-11 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00] shrink-0 group-hover/card:bg-[#B8FF00] group-hover/card:text-black transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">10+ Live Systems</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Proven in real-world healthcare &amp; SaaS</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B8FF00]/40 transition-colors flex items-start gap-3.5 group/card">
                <div className="w-11 h-11 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00] shrink-0 group-hover/card:bg-[#B8FF00] group-hover/card:text-black transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">100% Commitment</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Direct Founder Accountability &amp; Zero Bloat</p>
                </div>
              </div>
            </div>

            {/* Founder Quote Card Styled Like Terminal */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] border-l-4 border-l-[#B8FF00] mt-4 space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#B8FF00]">
                <Terminal className="w-3.5 h-3.5" />
                <span>CHAMPIONSHIP RIGOR // PHILOSOPHY</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_25px_rgba(184,255,0,0.5)] transition-all group"
              >
                <span>Discuss Your Project With Abhishek</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href={`https://wa.me/919672660338?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#B8FF00]/50 transition-all backdrop-blur-md"
              >
                <MessageCircle className="w-4 h-4 text-[#B8FF00]" />
                <span>WhatsApp (+91 96726 60338)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
