"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Dynamic branding titles for the homepage loop
const HOME_TITLES = [
  "Codube. | High-Speed Web Platforms & Next.js 14",
  "⚡ Turnkey Launch in 7 Days • Codube.",
  "🤖 24/7 WhatsApp AI Receptionists • Codube.",
  "🚀 Custom Enterprise ERP & SaaS • Codube.",
  "📈 10x More Client Bookings • Codube.",
];

// Contextual titles for subpages
const SECTION_TITLES: Record<string, string[]> = {
  "/tools": [
    "Free AI Growth & Audit Tools • Codube.",
    "⚡ 100% Free Instant Verification • Codube.",
    "🤖 Perplexity & ChatGPT Diagnostic Engines • Codube.",
  ],
  "/services": [
    "Core Engineering & AI Capabilities • Codube.",
    "⚡ Next.js 14 & Cloud Automation • Codube.",
    "🚀 Enterprise Software & 24/7 AI • Codube.",
  ],
  "/about": [
    "About Codube. | Modern Software Studio",
    "⚡ High-Velocity Engineering & AI Studio",
  ],
  "/contact": [
    "Book a Discovery Call • Codube.",
    "⚡ 7-Day Turnkey Delivery Guarantee • Codube.",
    "💬 Chat Directly on WhatsApp • Codube.",
  ],
  "/work": [
    "Client Case Studies & Results • Codube.",
    "⚡ ScanTaker & MedLearnings Systems • Codube.",
  ],
};

// Inactive tab titles (shown when user switches to another tab)
const INACTIVE_TITLES = [
  "👋 We miss you! Come back to Codube.",
  "⚡ Your $999 Turnkey Package Is Waiting...",
  "💬 Let's automate your business • Codube.",
];

export default function DynamicTabTitle() {
  const pathname = usePathname();
  const titleIndexRef = useRef(0);
  const inactiveIndexRef = useRef(0);
  const isTabActiveRef = useRef(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Determine active title list based on current path
    let activeTitles = HOME_TITLES;
    for (const prefix in SECTION_TITLES) {
      if (pathname === prefix || pathname.startsWith(prefix + "/")) {
        activeTitles = SECTION_TITLES[prefix];
        break;
      }
    }

    titleIndexRef.current = 0;

    const updateTitle = () => {
      if (!isTabActiveRef.current) {
        // Tab is in background - show engaging wake-up call
        document.title = INACTIVE_TITLES[inactiveIndexRef.current % INACTIVE_TITLES.length];
        inactiveIndexRef.current += 1;
      } else {
        // Tab is active - cycle through punchy brand titles
        document.title = activeTitles[titleIndexRef.current % activeTitles.length];
        titleIndexRef.current += 1;
      }
    };

    // Set initial title immediately
    updateTitle();

    // Start title loop (cycles every 3 seconds)
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(updateTitle, 3000);

    // Visibility change listener (tab blur/focus)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isTabActiveRef.current = false;
        inactiveIndexRef.current = 0;
        document.title = INACTIVE_TITLES[0];
      } else {
        isTabActiveRef.current = true;
        // Welcome back pulse for 1.6 seconds
        document.title = "🎉 Welcome back to Codube.!";
        setTimeout(() => {
          if (isTabActiveRef.current) {
            updateTitle();
          }
        }, 1600);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pathname]);

  return null;
}
