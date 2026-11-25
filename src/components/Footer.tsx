"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Linkedin, Instagram, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import CodubeLogo from "./CodubeLogo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  React.useEffect(() => {
    fetch("/api/admin/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.content?.general?.customLogo) {
          setCustomLogo(data.content.general.customLogo);
        }
      })
      .catch(() => {});
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="relative bg-[#050806] border-t border-white/[0.07] pt-16 pb-12 overflow-hidden text-left">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-green opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <CodubeLogo size="md" customLogo={customLogo} />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              A modern software development studio building conversion-engineered websites, custom full-stack software, and 24/7 WhatsApp AI automation for ambitious brands worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/abhishek-jain96/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#B8FF00] hover:border-[#B8FF00]/50 hover:bg-[#B8FF00]/10 transition-all duration-200"
                aria-label="LinkedIn"
                title="Abhishek Jain LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/codube.ai/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#B8FF00] hover:border-[#B8FF00]/50 hover:bg-[#B8FF00]/10 transition-all duration-200"
                aria-label="Instagram"
                title="Codube Instagram @codube.ai"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company &amp; Work</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-[#B8FF00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#ai-simulator" className="hover:text-[#B8FF00] transition-colors">
                  AI Demo
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#B8FF00] transition-colors">
                  Pricing ($999 Kit)
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#B8FF00] transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#B8FF00] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/directory" className="hover:text-[#B8FF00] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B8FF00] font-semibold">Master Directory</span>
                  <span className="px-1.5 py-0.2 rounded bg-[#B8FF00]/20 text-[#B8FF00] font-mono text-[9px] font-bold">
                    INDEX
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-[#B8FF00] transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B8FF00] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Free AI Tools & Utilities (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Free AI Tools</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link
                  href="/tools"
                  className="hover:text-[#B8FF00] transition-colors flex items-center gap-1.5 group font-medium text-white"
                >
                  <span className="text-[#B8FF00] font-bold">All 40 Free Tools</span>
                  <span className="px-1.5 py-0.2 rounded bg-[#B8FF00] text-black font-mono text-[9px] font-black">
                    40 FREE
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tools/ai-geo-generator" className="hover:text-[#B8FF00] transition-colors text-xs text-zinc-400">
                  AI GEO &amp; Visibility
                </Link>
              </li>
              <li>
                <Link href="/tools/llms-txt-generator" className="hover:text-[#B8FF00] transition-colors text-xs text-zinc-400">
                  llms.txt Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/whatsapp-link-generator" className="hover:text-[#B8FF00] transition-colors text-xs text-zinc-400">
                  WhatsApp Link Builder
                </Link>
              </li>
              <li>
                <Link href="/tools/schema-markup-generator" className="hover:text-[#B8FF00] transition-colors text-xs text-zinc-400">
                  Schema Markup Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/website-speed-audit" className="hover:text-[#B8FF00] transition-colors text-xs text-zinc-400">
                  Speed &amp; LCP Estimator
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Get Product Insights</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe to receive architecture breakdown notes, AI automation blueprints, and tech case studies from Abhishek Jain.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#B8FF00] transition-all"
              />
              <button
                type="submit"
                className="neon-btn px-5 py-2.5 rounded-full text-xs font-bold text-black flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Joined!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 2-LEVEL MASTER SITEMAP & LOCATIONS DIRECTORY HUB */}
        <div className="pt-10 pb-8 border-b border-white/[0.08]">
          <Link
            href="/directory"
            className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#0C150E] via-[#080D0A] to-[#0C150E] border-2 border-[#B8FF00]/40 hover:border-[#B8FF00] hover:shadow-[0_0_35px_rgba(184,255,0,0.2)] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B8FF00]/15 border border-[#B8FF00]/40 flex items-center justify-center text-[#B8FF00] shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#B8FF00] transition-colors">
                    Master HTML Sitemap &amp; Locations Directory
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#B8FF00] text-black font-mono text-[10px] font-black uppercase">
                    1,840+ NODES
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
                  Explore our structured 2-level directory indexing 1,792 localized services across Jaipur, Indian metros, and global healthcare hubs, plus 40 free AI developer tools.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8FF00] text-black text-xs font-bold font-mono group-hover:bg-[#ccff00] transition-all shrink-0">
              <span>Browse Full Directory →</span>
            </div>
          </Link>

          {/* Clean Curated Hub Highlights (Safe Link Density) */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-left">
            <div>
              <span className="font-mono text-[#B8FF00] font-bold uppercase tracking-wider block mb-2">
                📍 Jaipur Corridors
              </span>
              <ul className="space-y-1.5 text-zinc-400">
                <li><Link href="/services/website-development-company-in-jaipur" className="hover:text-[#B8FF00] transition-colors">Web Development Jaipur</Link></li>
                <li><Link href="/services/ai-chatbot-development-company-in-malviya-nagar-jaipur" className="hover:text-[#B8FF00] transition-colors">AI Chatbots Malviya Nagar</Link></li>
                <li><Link href="/services/whatsapp-ai-agent-development-in-vaishali-nagar-jaipur" className="hover:text-[#B8FF00] transition-colors">WhatsApp AI Vaishali Nagar</Link></li>
                <li><Link href="/services/clinic-website-and-appointment-system-in-tonk-road-jaipur" className="hover:text-[#B8FF00] transition-colors">Clinic AI Tonk Road</Link></li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[#B8FF00] font-bold uppercase tracking-wider block mb-2">
                🇮🇳 Top Indian Metros
              </span>
              <ul className="space-y-1.5 text-zinc-400">
                <li><Link href="/services/website-development-company-in-delhi-ncr" className="hover:text-[#B8FF00] transition-colors">Web Studio Delhi NCR</Link></li>
                <li><Link href="/services/ai-chatbot-development-company-in-bangalore" className="hover:text-[#B8FF00] transition-colors">AI Agency Bangalore</Link></li>
                <li><Link href="/services/whatsapp-ai-agent-development-in-mumbai" className="hover:text-[#B8FF00] transition-colors">WhatsApp Bot Mumbai</Link></li>
                <li><Link href="/services/saas-product-development-company-in-pune" className="hover:text-[#B8FF00] transition-colors">SaaS Engineers Pune</Link></li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[#B8FF00] font-bold uppercase tracking-wider block mb-2">
                🌍 Global Technology Hubs
              </span>
              <ul className="space-y-1.5 text-zinc-400">
                <li><Link href="/services/website-development-company-in-dubai" className="hover:text-[#B8FF00] transition-colors">Web Development Dubai</Link></li>
                <li><Link href="/services/clinic-website-and-appointment-system-in-dubai" className="hover:text-[#B8FF00] transition-colors">Clinic AI Booking Dubai</Link></li>
                <li><Link href="/services/website-development-company-in-london" className="hover:text-[#B8FF00] transition-colors">Web Studio London</Link></li>
                <li><Link href="/services/saas-product-development-company-in-new-york" className="hover:text-[#B8FF00] transition-colors">SaaS Engineering New York</Link></li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[#B8FF00] font-bold uppercase tracking-wider block mb-2">
                🛠️ Master Directory Hub
              </span>
              <ul className="space-y-1.5 text-zinc-400">
                <li><Link href="/tools/ai-geo-generator" className="hover:text-[#B8FF00] transition-colors">AI GEO &amp; Visibility Audit</Link></li>
                <li><Link href="/tools/llms-txt-generator" className="hover:text-[#B8FF00] transition-colors">Official llms.txt Builder</Link></li>
                <li><Link href="/tools/whatsapp-link-generator" className="hover:text-[#B8FF00] transition-colors">WhatsApp Link Generator</Link></li>
                <li><Link href="/directory" className="text-[#B8FF00] font-bold hover:underline transition-colors">Browse All 1,840+ Index →</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Codube. All rights reserved. Engineered by Abhishek Jain.</p>
          <div className="flex items-center gap-6">
            <Link href="/directory" className="text-[#B8FF00] hover:underline transition-colors font-medium">
              Master Directory (1,840+ Index)
            </Link>
            <span>|</span>
            <Link href="/tools" className="text-zinc-400 hover:text-[#B8FF00] transition-colors font-medium">
              40 Free AI Tools Hub
            </Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
