"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2, Sparkles } from "lucide-react";

interface TestimonialsSectionProps {
  content?: any;
}

const defaultTestimonials = [
  {
    id: "1",
    name: "Dr. Vikram Singhania",
    role: "Director & Radiologist",
    company: "ScanTaker Healthcare Network",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Codube completely transformed our diagnostic booking system. Turnaround time dropped by 70%, and our Jaipur MRI & CT scan centers are running at peak appointment efficiency.",
    project: "ScanTaker Platform",
  },
  {
    id: "2",
    name: "Dr. Ananya Deshmukh",
    role: "Dean of Clinical Education",
    company: "MedLearnings Academy",
    avatar: "https://images.unsplash.com/photo-1594824813590-b89565553702?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Abhishek Jain and his team engineered an LMS that handles 5,000+ healthcare professionals streaming high-definition medical webinars without a single glitch. Fast, secure, and world-class.",
    project: "MedLearnings LMS",
  },
  {
    id: "3",
    name: "Rohan Mehta",
    role: "Co-Founder & VP Tech",
    company: "HealthTech Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Working with a 1st rank hackathon winner shows in the code quality. Zero legacy bloat, sub-second load times on mobile, and 99% on-time milestone delivery.",
    project: "Enterprise Web Portal",
  },
  {
    id: "4",
    name: "Pooja Agarwal",
    role: "Head of Growth",
    company: "AutomateNow SaaS",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "The WhatsApp automation & CRM integration built by Codube eliminated 80% of our manual sales overhead. Client inquiries convert twice as fast now.",
    project: "Business Automation",
  },
  {
    id: "5",
    name: "Kunal Verma",
    role: "CTO",
    company: "Pulse Diagnostic Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "The dark neon theme with 60fps animations blew our clients away. The best agency experience we've had in 5 years of building software.",
    project: "Custom Software Suite",
  },
];

export default function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const list = content?.testimonials || defaultTestimonials;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="testimonials">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(187,251,38,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#bbfb26]/30 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(187,251,38,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-[#bbfb26]" />
          <span className="text-xs font-semibold text-zinc-300 tracking-wide uppercase">
            Client Trust &amp; Testimonials
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          What Founders &amp; Leaders{" "}
          <span className="text-[#bbfb26] drop-shadow-[0_0_20px_rgba(187,251,38,0.4)]">
            Say About Us.
          </span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
          Hear from leaders who launched and scaled their production systems with Codube.
        </p>
      </div>

      {/* Infinite Animated Marquee Loop for Testimonials */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Left and Right Edge Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#070a08] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#070a08] to-transparent z-10" />

        {/* Sliding Row (Duplicate 3 times for seamless loop) */}
        <div className="flex w-max space-x-6 animate-marquee hover:[animation-play-state:paused] py-4">
          {[...list, ...list, ...list].map((item, idx) => (
            <div
              key={`testimonial-${idx}`}
              className="w-[340px] sm:w-[420px] rounded-3xl glass-panel p-6 sm:p-7 border-white/10 hover:border-[#bbfb26]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shrink-0 shadow-[0_15px_35px_rgba(0,0,0,0.5)] bg-[#0d1410]/85"
            >
              <div className="space-y-4">
                {/* Header: Stars & Project Tag */}
                <div className="flex items-center justify-between">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#bbfb26] text-[#bbfb26] drop-shadow-[0_0_6px_rgba(187,251,38,0.6)]"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono font-bold text-[#bbfb26] px-2.5 py-0.5 rounded-full bg-[#bbfb26]/10 border border-[#bbfb26]/30">
                    {item.project}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Client Info at bottom */}
              <div className="pt-5 mt-4 border-t border-white/[0.08] flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#bbfb26]/40 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-bold text-white flex items-center gap-1.5 truncate">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#bbfb26] shrink-0" />
                  </div>
                  <div className="text-xs text-zinc-400 truncate">
                    {item.role} • {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
