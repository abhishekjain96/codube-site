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
    <footer className="relative bg-[#0B0F17] text-slate-300 border-t border-slate-800 pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="[&_span]:!text-white">
              <CodubeLogo size="md" customLogo={customLogo} />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A modern software development studio building conversion-engineered websites, custom full-stack software, and 24/7 WhatsApp AI automation for ambitious brands worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/abhishek-jain96/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200"
                aria-label="LinkedIn"
                title="Abhishek Jain LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/codube.ai/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200"
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
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#ai-simulator" className="hover:text-emerald-400 transition-colors">
                  AI Demo
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-emerald-400 transition-colors">
                  Pricing ($999 Kit)
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-emerald-400 transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span>Free AI Tools</span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950 font-mono text-[9px] font-black uppercase">
                    FREE
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/directory" className="hover:text-emerald-400 transition-colors">
                  Master HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Core Capabilities</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/services/web-development" className="hover:text-emerald-400 transition-colors">
                  Conversion Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/business-automation" className="hover:text-emerald-400 transition-colors">
                  24/7 WhatsApp AI Receptionists
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software" className="hover:text-emerald-400 transition-colors">
                  Healthcare &amp; Clinic Software
                </Link>
              </li>
              <li>
                <Link href="/services/saas-development" className="hover:text-emerald-400 transition-colors">
                  Multi-Tenant SaaS Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/ai-development" className="hover:text-emerald-400 transition-colors">
                  Autonomous AI Agents &amp; RAG
                </Link>
              </li>
            </ul>
          </div>

          {/* Operational Hubs & Direct Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Founder Desk</h4>
            <div className="text-sm text-slate-400 space-y-2">
              <p>
                <strong className="text-white">Founder &amp; Architect:</strong> Abhishek Jain (1st Rank Hackathon Winner)
              </p>
              <p>
                <strong className="text-white">WhatsApp / Phone:</strong>{" "}
                <a href="https://wa.me/919672660338" className="text-emerald-400 hover:underline">
                  +91 96726 60338
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:hello@codube.com" className="text-emerald-400 hover:underline">
                  hello@codube.com
                </a>
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Jaipur (HQ) • Delhi NCR • Dubai • New York</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} CODUBE (Codube.com). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/directory" className="hover:text-slate-400 transition-colors">
              Sitemap Directory
            </Link>
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
