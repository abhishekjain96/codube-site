import React from "react";

export default function WhatsAppAIGraphic() {
  return (
    <svg
      viewBox="0 0 512 288"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block select-none"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="waHeaderGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="waBgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0FDF4" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="512" height="288" fill="url(#waBgGrad)" />

      {/* WhatsApp Window Frame */}
      <g transform="translate(24, 16)">
        <rect width="464" height="256" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

        {/* WhatsApp App Header */}
        <path d="M0 16C0 7.16344 7.16344 0 16 0H448C456.837 0 464 7.16344 464 16V46H0V16Z" fill="url(#waHeaderGrad)" />

        {/* Avatar & Online Status */}
        <circle cx="26" cy="23" r="14" fill="#FFFFFF" opacity="0.2" />
        <text x="26" y="27" fontFamily="system-ui, sans-serif" fontSize="12" fill="#FFFFFF" fontWeight="800" textAnchor="middle">
          WA
        </text>
        <circle cx="37" cy="33" r="4" fill="#34D399" stroke="#047857" strokeWidth="1.5" />

        {/* Contact Info */}
        <text x="50" y="20" fontFamily="system-ui, sans-serif" fontSize="12" fill="#FFFFFF" fontWeight="700">
          Codube AI Receptionist
        </text>
        <text x="50" y="34" fontFamily="system-ui, sans-serif" fontSize="8.5" fill="#D1FAE5">
          Official Meta Cloud API • Replies in &lt;2s
        </text>

        {/* Status Pill */}
        <rect x="374" y="13" width="76" height="20" rx="10" fill="#FFFFFF" opacity="0.2" />
        <text x="412" y="26.5" fontFamily="ui-monospace, monospace" fontSize="9" fill="#FFFFFF" fontWeight="700" textAnchor="middle">
          ● 24/7 ACTIVE
        </text>

        {/* Chat Feed Area */}
        <g transform="translate(18, 58)">
          {/* Incoming Customer Message Bubble */}
          <g transform="translate(80, 0)">
            <rect width="348" height="38" rx="12" fill="#F1F5F9" />
            <text x="14" y="18" fontFamily="system-ui, sans-serif" fontSize="10.5" fill="#0F172A">
              Hi! Do you have an appointment slot tomorrow at 11:00 AM?
            </text>
            <text x="334" y="30" fontFamily="ui-monospace, monospace" fontSize="8" fill="#94A3B8" textAnchor="end">
              10:59 AM
            </text>
          </g>

          {/* Instant AI Reply Bubble */}
          <g transform="translate(0, 48)">
            <rect width="390" height="98" rx="14" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
            <text x="14" y="20" fontFamily="system-ui, sans-serif" fontSize="10.5" fill="#064E3B" fontWeight="600">
              Hello! Yes, <tspan fill="#047857" fontWeight="800">Dr. Priya Mehta</tspan> has 11:00 AM open tomorrow.
            </text>
            <text x="14" y="36" fontFamily="system-ui, sans-serif" fontSize="10" fill="#065F46">
              I have held slot #08 for you. Please confirm below:
            </text>

            {/* Interactive Confirmation Pill */}
            <rect x="14" y="46" width="260" height="26" rx="8" fill="#FFFFFF" stroke="#6EE7B7" strokeWidth="1" />
            <circle cx="28" cy="59" r="4.5" fill="#10B981" />
            <text x="40" y="62.5" fontFamily="system-ui, sans-serif" fontSize="10" fill="#047857" fontWeight="700">
              ✓ Slot #08 Confirmed • 11:00 AM (Dr. Mehta)
            </text>

            <text x="14" y="86" fontFamily="system-ui, sans-serif" fontSize="9" fill="#059669">
              Calendar invite and location pin dispatched via WhatsApp.
            </text>

            <text x="376" y="90" fontFamily="ui-monospace, monospace" fontSize="8" fill="#059669" fontWeight="700" textAnchor="end">
              11:00 AM ✓✓
            </text>
          </g>

          {/* Bottom Auto-Sync Notification Pill */}
          <g transform="translate(0, 156)">
            <rect width="428" height="26" rx="8" fill="#FFFFFF" stroke="#E2E8F0" />
            <circle cx="16" cy="13" r="3.5" fill="#10B981" />
            <text x="26" y="16.5" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#475569">
              ⚡ Lead synced to Clinic ERP &amp; Google Sheets in 1.4 seconds (Zero Staff Drop-off)
            </text>
            <text x="414" y="16.5" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#047857" fontWeight="700" textAnchor="end">
              100% Automated
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
