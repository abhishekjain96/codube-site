"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run on initial session or allow quick replay
    const hasPreloaded = sessionStorage.getItem("codube_preloaded");
    if (hasPreloaded) {
      setIsLoaded(true);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            sessionStorage.setItem("codube_preloaded", "true");
          }, 400);
          return 100;
        }
        // Accelerating progress curve
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-[#030604] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Ambient background glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(184,255,0,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />

          {/* Center Brand Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Animated Codube Geometric C Symbol */}
            <div className="relative w-24 h-24 mb-8">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_0_25px_rgba(184,255,0,0.45)]"
              >
                {/* Background outline faint track */}
                <path
                  d="M 68 22 L 34 22 C 24 22 18 30 18 40 L 18 60 C 18 70 24 78 34 78 L 68 78 L 78 68 L 42 68 C 36 68 32 64 32 58 L 32 42 C 32 36 36 32 42 32 L 78 32 Z"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Animated Lime Neon Stroke */}
                <motion.path
                  d="M 68 22 L 34 22 C 24 22 18 30 18 40 L 18 60 C 18 70 24 78 34 78 L 68 78 L 78 68 L 42 68 C 36 68 32 64 32 58 L 32 42 C 32 36 36 32 42 32 L 78 32 Z"
                  stroke="#B8FF00"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ ease: "easeInOut" }}
                />

                {/* Shimmer light point */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="2"
                  fill="#B8FF00"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.8, 1],
                  }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </svg>

              {/* Central Core Pulse */}
              <div
                className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#B8FF00]/10 blur-xl pointer-events-none"
                style={{ opacity: progress / 100 }}
              />
            </div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-2xl sm:text-3xl font-black text-white tracking-[0.2em] uppercase"
            >
              CODUBE<span className="text-[#B8FF00]">.</span>
            </motion.h1>

            {/* Brand Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-2 text-[10px] sm:text-xs font-mono font-medium tracking-[0.35em] text-[#B8FF00]/80 uppercase"
            >
              SOFTWARE • AI • AUTOMATION
            </motion.p>

            {/* Minimal Progress Bar & Percentage */}
            <div className="mt-8 w-48 sm:w-56">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                <span className="text-zinc-500 uppercase tracking-widest text-[9px]">SYSTEM INIT</span>
                <span className="font-semibold text-[#B8FF00]">{progress}%</span>
              </div>
              <div className="h-[2px] w-full bg-white/[0.08] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#70FF00] to-[#B8FF00] rounded-full shadow-[0_0_10px_#B8FF00]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
