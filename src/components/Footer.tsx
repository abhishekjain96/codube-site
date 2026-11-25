"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Linkedin, Instagram, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, MapPin, Sparkles, Globe, Cpu } from "lucide-react";
import CodubeLogo from "./CodubeLogo";
import { SEO_SERVICES, SEO_LOCATIONS, buildSeoSlug } from "@/data/seoData";
import { FREE_AI_TOOLS } from "@/data/toolsData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const [showDirectory, setShowDirectory] = useState(true);

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

  const jaipurLocations = SEO_LOCATIONS.filter((l) => l.region === "jaipur");
  const indiaLocations = SEO_LOCATIONS.filter((l) => l.region === "india");
  const globalLocations = SEO_LOCATIONS.filter((l) => l.region === "global");

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

        {/* COMPACT GLOBAL & LOCAL SEO DIRECTORY (500+ Programmatic Locations) */}
        <div className="pt-10 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#B8FF00]" />
              <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                Services &amp; Locations Directory (Google Ranking Index)
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowDirectory(!showDirectory)}
              className="text-[11px] font-mono text-zinc-400 hover:text-[#B8FF00] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>{showDirectory ? "Collapse" : "Expand All Locations"}</span>
              {showDirectory ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          {showDirectory && (
            <div className="space-y-6 pt-2 animate-in fade-in duration-300">
              {/* Category 1: Jaipur & Rajasthan Local Markets */}
              <div>
                <span className="text-[11px] font-mono text-[#B8FF00] font-semibold uppercase tracking-wider block mb-2">
                  📍 Jaipur &amp; Rajasthan Tech Corridors
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {jaipurLocations.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/services/${buildSeoSlug("website-development-company", loc.id)}`}
                      className="text-[11px] text-zinc-500 hover:text-[#B8FF00] hover:underline transition-colors"
                    >
                      Web Development in {loc.city}
                    </Link>
                  ))}
                  {jaipurLocations.slice(0, 5).map((loc) => (
                    <Link
                      key={`ai-${loc.id}`}
                      href={`/services/${buildSeoSlug("ai-chatbot-development-company", loc.id)}`}
                      className="text-[11px] text-zinc-500 hover:text-[#B8FF00] hover:underline transition-colors"
                    >
                      AI Chatbots {loc.city}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Category 2: Tier 1 & Indian Metros */}
              <div>
                <span className="text-[11px] font-mono text-[#B8FF00] font-semibold uppercase tracking-wider block mb-2">
                  🇮🇳 Tier 1 &amp; National Technology Hubs
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {indiaLocations.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/services/${buildSeoSlug("website-development-company", loc.id)}`}
                      className="text-[11px] text-zinc-500 hover:text-[#B8FF00] hover:underline transition-colors"
                    >
                      Website Development in {loc.city}
                    </Link>
                  ))}
                  {indiaLocations.slice(0, 6).map((loc) => (
                    <Link
                      key={`wa-${loc.id}`}
                      href={`/services/${buildSeoSlug("whatsapp-ai-agent-development", loc.id)}`}
                      className="text-[11px] text-zinc-500 hover:text-[#B8FF00] hover:underline transition-colors"
                    >
                      WhatsApp AI Agent in {loc.city}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Category 3: Global Markets (Dubai, USA, UK, Canada, Australia) */}
              <div>
                <span className="text-[11px] font-mono text-[#B8FF00] font-semibold uppercase tracking-wider block mb-2">
                  🌍 Global Technology &amp; Healthcare Markets
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {globalLocations.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/services/${buildSeoSlug("website-development-company", loc.id)}`}
                      className="text-[11px] text-zinc-500 hover:text-[#B8FF00] hover:underline transition-colors"
                    >
                      Web Developers in {loc.city}
                    </Link>
                  ))}
                  {globalLocations.map((loc) => (
                    <Link
                      key={`clinic-${loc.id}`}
                      href={`/services/${buildSeoSlug("clinic-website-and-appointment-system", loc.id)}`}
                      className="text-[11px] text-zinc-500 hover:text-[#B8FF00] hover:underline transition-colors"
                    >
                      Clinic AI Booking in {loc.city}
                    </Link>
                  ))}
                  {globalLocations.slice(0, 6).map((loc) => (
                    <Link
                      key={`saas-${loc.id}`}
                      href={`/services/${buildSeoSlug("saas-product-development-company", loc.id)}`}
                      className="text-[11px] text-zinc-500 hover:text-[#B8FF00] hover:underline transition-colors"
                    >
                      SaaS Development in {loc.city}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Category 4: High-Demand Core Specialized Services */}
              <div>
                <span className="text-[11px] font-mono text-[#B8FF00] font-semibold uppercase tracking-wider block mb-2">
                  ⚡ Specialized Core Services
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {SEO_SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${buildSeoSlug(s.id, "jaipur")}`}
                      className="text-[11px] text-zinc-500 hover:text-[#B8FF00] hover:underline transition-colors"
                    >
                      {s.name} (Jaipur)
                    </Link>
                  ))}
                  {SEO_SERVICES.map((s) => (
                    <Link
                      key={`global-${s.id}`}
                      href={`/services/${buildSeoSlug(s.id, "dubai")}`}
                      className="text-[11px] text-zinc-500 hover:text-[#B8FF00] hover:underline transition-colors"
                    >
                      {s.name} (Dubai)
                    </Link>
                  ))}
                </div>
              </div>

              {/* Category 5: 40 Free Viral AI & Developer Tools */}
              <div>
                <span className="text-[11px] font-mono text-[#B8FF00] font-semibold uppercase tracking-wider block mb-2">
                  🛠️ 40 Free High-Traffic AI &amp; Developer Tools
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  <Link
                    href="/tools"
                    className="text-[11px] text-[#B8FF00] font-bold hover:underline transition-colors"
                  >
                    ⚡ All 40 Free Tools Hub →
                  </Link>
                  {FREE_AI_TOOLS.map((tool) => (
                    <Link
                      key={tool.id}
                      href={`/tools/${tool.id}`}
                      className="text-[11px] text-zinc-400 hover:text-[#B8FF00] hover:underline transition-colors"
                    >
                      {tool.shortName}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Codube. All rights reserved. Engineered by Abhishek Jain.</p>
          <div className="flex items-center gap-6">
            <Link href="/tools" className="text-[#B8FF00] hover:underline transition-colors font-medium">
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
