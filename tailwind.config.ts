import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#bbfb26", // Neon lime green from the design
          lime: "#bbfb26",
          bright: "#ccff00",
          glow: "#9eff00",
          dark: "#0a0f0b",
          darker: "#060907",
          card: "rgba(13, 19, 15, 0.72)",
          cardHover: "rgba(18, 28, 21, 0.85)",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(187, 251, 38, 0.35)",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        "neon": "0 0 25px -3px rgba(187, 251, 38, 0.35), 0 0 10px -2px rgba(187, 251, 38, 0.2)",
        "neon-lg": "0 0 50px -5px rgba(187, 251, 38, 0.45), 0 0 20px -2px rgba(187, 251, 38, 0.3)",
        "neon-soft": "0 0 35px -5px rgba(34, 197, 94, 0.25)",
        "card-glow": "0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
        "card-active": "0 10px 40px -10px rgba(187, 251, 38, 0.3), inset 0 1px 2px 0 rgba(187, 251, 38, 0.4)",
      },
      backgroundImage: {
        "radial-green": "radial-gradient(circle at center, rgba(187, 251, 38, 0.15) 0%, rgba(10, 15, 11, 0) 70%)",
        "radial-glow": "radial-gradient(ellipse at 50% 0%, rgba(187, 251, 38, 0.22) 0%, rgba(16, 185, 129, 0.12) 35%, transparent 70%)",
        "mesh-dark": "radial-gradient(at 10% 20%, rgba(34, 197, 94, 0.08) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(187, 251, 38, 0.06) 0px, transparent 50%)",
      },
      animation: {
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float": "float 5s ease-in-out infinite",
        "float-delayed": "float 5s ease-in-out 2.5s infinite",
        "rotate-slow": "spin 20s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
