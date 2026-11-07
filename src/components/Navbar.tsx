"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, ShieldCheck } from "lucide-react";
import CodubeLogo from "./CodubeLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  useEffect(() => {
    // Fetch custom logo from content
    fetch("/api/admin/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.content?.general?.customLogo) {
          setCustomLogo(data.content.general.customLogo);
        }
      })
      .catch(() => {});
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#030604]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <CodubeLogo size="md" customLogo={customLogo} />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-all duration-200 py-1 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8FF00] rounded-full shadow-[0_0_8px_#B8FF00]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Let's Talk Button & Admin Link */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/admin"
                className="p-2 text-zinc-500 hover:text-[#B8FF00] transition-colors rounded-full hover:bg-white/5"
                title="Admin Studio"
              >
                <ShieldCheck className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_25px_rgba(184,255,0,0.5)] transition-all duration-300 active:scale-95"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/admin"
                className="p-2 text-zinc-500 hover:text-[#B8FF00]"
                title="Admin"
              >
                <ShieldCheck className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#B8FF00]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030604]/95 backdrop-blur-2xl lg:hidden pt-24 px-6 flex flex-col justify-between pb-10">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-[#B8FF00] bg-white/[0.04]"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#B8FF00]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] shadow-[0_0_20px_rgba(184,255,0,0.4)] transition-all"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </Link>

            <div className="text-center text-xs text-zinc-500 pt-2">
              hello@codube.com • +91 96726 60338
            </div>
          </div>
        </div>
      )}
    </>
  );
}
