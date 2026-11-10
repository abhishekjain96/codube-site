"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Linkedin, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";
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
    <footer className="relative bg-[#050806] border-t border-white/[0.07] pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-green opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <CodubeLogo size="md" customLogo={customLogo} />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              A modern software development studio building scalable digital products for businesses, startups and creators.
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-[#bbfb26] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#bbfb26] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#bbfb26] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#bbfb26] transition-colors">
                  Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Company (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/process" className="hover:text-[#bbfb26] transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-[#bbfb26] transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#bbfb26] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Get Product Updates</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe to receive product updates, case studies and tech insights from Codube.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#bbfb26] transition-all"
              />
              <button
                type="submit"
                className="neon-btn px-5 py-2.5 rounded-full text-xs font-bold text-black flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0"
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Codube. All rights reserved.</p>
          <div className="flex items-center gap-6">
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
