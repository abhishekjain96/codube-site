import React from "react";

export default function WebPlatformGraphic() {
  return (
    <svg
      viewBox="0 0 512 288"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block select-none"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="wpEmeraldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="wpBgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
        <pattern id="wpGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
        </pattern>
      </defs>

      {/* Background with Grid */}
      <rect width="512" height="288" fill="url(#wpBgGrad)" />
      <rect width="512" height="288" fill="url(#wpGrid)" opacity="0.6" />

      {/* Main Browser Window Frame */}
      <g transform="translate(20, 16)">
        <rect width="472" height="256" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

        {/* Chrome Top Bar */}
        <path d="M0 14C0 6.26801 6.26801 0 14 0H458C465.732 0 472 6.26801 472 14V36H0V14Z" fill="#F8FAFC" />
        <line x1="0" y1="36" x2="472" y2="36" stroke="#E2E8F0" strokeWidth="1" />

        {/* Window Dots */}
        <circle cx="18" cy="18" r="4.5" fill="#F87171" />
        <circle cx="32" cy="18" r="4.5" fill="#FBBF24" />
        <circle cx="46" cy="18" r="4.5" fill="#34D399" />

        {/* URL Address Bar */}
        <rect x="70" y="8" width="220" height="20" rx="10" fill="#FFFFFF" stroke="#E2E8F0" />
        <circle cx="82" cy="18" r="3" fill="#10B981" />
        <text x="92" y="22" fontFamily="ui-monospace, monospace" fontSize="9.5" fill="#475569" fontWeight="500">
          https://codube.com/live
        </text>

        {/* Speed Benchmark Pill */}
        <rect x="370" y="8" width="90" height="20" rx="10" fill="#ECFDF5" stroke="#A7F3D0" />
        <text x="415" y="21.5" fontFamily="ui-monospace, monospace" fontSize="9" fill="#047857" fontWeight="700" textAnchor="middle">
          ⚡ 0.2s LCP • 100
        </text>

        {/* Window Content Area */}
        <g transform="translate(18, 48)">
          {/* Left Column: Metric Cards */}
          <g transform="translate(0, 0)">
            {/* Live Visitors Card */}
            <rect width="200" height="74" rx="10" fill="#FFFFFF" stroke="#E2E8F0" />
            <circle cx="16" cy="18" r="3" fill="#10B981" />
            <text x="26" y="21" fontFamily="system-ui, sans-serif" fontSize="10" fill="#64748B" fontWeight="600">
              Active Visitors Right Now
            </text>
            <text x="16" y="44" fontFamily="system-ui, sans-serif" fontSize="18" fill="#0F172A" fontWeight="800">
              4,820
            </text>
            <text x="75" y="44" fontFamily="ui-monospace, monospace" fontSize="10" fill="#059669" fontWeight="700">
              ↗ +38.4%
            </text>
            {/* Sparkline Curve */}
            <path d="M16 62 Q 55 58 90 60 T 140 50 T 186 42" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Conversion Funnel Progress Card */}
          <g transform="translate(0, 84)">
            <rect width="200" height="66" rx="10" fill="#FFFFFF" stroke="#E2E8F0" />
            <text x="14" y="20" fontFamily="system-ui, sans-serif" fontSize="10" fill="#64748B" fontWeight="600">
              Next.js 14 Conversion Lift
            </text>
            <text x="14" y="38" fontFamily="ui-monospace, monospace" fontSize="12" fill="#047857" fontWeight="800">
              +42% Form Submissions
            </text>
            {/* Progress Bar */}
            <rect x="14" y="48" width="172" height="6" rx="3" fill="#F1F5F9" />
            <rect x="14" y="48" width="145" height="6" rx="3" fill="url(#wpEmeraldGrad)" />
          </g>

          {/* Right Column: High-Converting Hero Preview */}
          <g transform="translate(216, 0)">
            <rect width="220" height="150" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />

            {/* Wireframe Headline */}
            <rect x="16" y="16" width="140" height="10" rx="3" fill="#0F172A" />
            <rect x="16" y="32" width="188" height="8" rx="3" fill="#94A3B8" />
            <rect x="16" y="44" width="150" height="8" rx="3" fill="#CBD5E1" />

            {/* Feature Checkpoints */}
            <circle cx="20" cy="66" r="3.5" fill="#10B981" />
            <text x="28" y="69" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155" fontWeight="600">
              Sub-second First Contentful Paint
            </text>

            <circle cx="20" cy="82" r="3.5" fill="#10B981" />
            <text x="28" y="85" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155" fontWeight="600">
              Sticky WhatsApp Appointment Trigger
            </text>

            <circle cx="20" cy="98" r="3.5" fill="#10B981" />
            <text x="28" y="101" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#334155" fontWeight="600">
              Turnkey Deployment in 7 Days
            </text>

            {/* Call to Action Button */}
            <rect x="16" y="114" width="188" height="24" rx="6" fill="#059669" />
            <text x="110" y="129.5" fontFamily="system-ui, sans-serif" fontSize="9.5" fill="#FFFFFF" fontWeight="700" textAnchor="middle">
              Launch High-Converting Platform →
            </text>
          </g>
        </g>

        {/* Bottom Guarantee Strip */}
        <g transform="translate(18, 222)">
          <line x1="0" y1="0" x2="436" y2="0" stroke="#F1F5F9" strokeWidth="1" />
          <circle cx="6" cy="14" r="3" fill="#10B981" />
          <text x="14" y="17" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#64748B">
            100% Full Source Code Ownership
          </text>
          <text x="436" y="17" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#047857" fontWeight="700" textAnchor="end">
            Zero Monthly Plugin Fees
          </text>
        </g>
      </g>
    </svg>
  );
}
