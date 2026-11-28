"use client";

import React from "react";

export default function HeroLiveGraphic() {
  return (
    <div className="w-full max-w-5xl mx-auto select-none overflow-hidden px-1 sm:px-0">
      <svg
        viewBox="0 0 920 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_25px_60px_rgba(15,23,42,0.16)] block"
        role="img"
        aria-label="Codube Live Operations Dashboard and 24/7 WhatsApp AI Receptionist"
      >
        <defs>
          {/* High-Definition Grid Pattern */}
          <pattern id="heroGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#CBD5E1" strokeWidth="0.9" />
          </pattern>

          {/* Chart Area Vibrant Gradient */}
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.02" />
          </linearGradient>

          {/* Codube Ribbon Logo Gradients */}
          <linearGradient id="cLogoTop" x1="0" y1="20" x2="32" y2="4" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="cLogoBot" x1="4" y1="26" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>

          {/* High-Contrast 3D Elevation Filters */}
          <filter id="softShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#0F172A" floodOpacity="0.16" />
          </filter>
          <filter id="phoneShadow" x="-15%" y="-10%" width="135%" height="130%">
            <feDropShadow dx="-10" dy="22" stdDeviation="24" floodColor="#0F172A" floodOpacity="0.26" />
          </filter>
        </defs>

        {/* Embedded SVG Animations */}
        <style>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          @keyframes floatReverse {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(6px); }
          }
          @keyframes pulseDot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.35); }
          }
          @keyframes drawLine {
            0% { stroke-dashoffset: 380; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes msgPop1 {
            0%, 10% { opacity: 0; transform: translateY(8px); }
            18%, 100% { opacity: 1; transform: translateY(0px); }
          }
          @keyframes msgPop2 {
            0%, 30% { opacity: 0; transform: translateY(8px); }
            38%, 100% { opacity: 1; transform: translateY(0px); }
          }
          @keyframes msgPop3 {
            0%, 50% { opacity: 0; transform: translateY(8px); }
            58%, 100% { opacity: 1; transform: translateY(0px); }
          }
          .anim-float-1 { animation: floatSlow 4.5s ease-in-out infinite; }
          .anim-float-2 { animation: floatReverse 5s ease-in-out infinite; }
          .anim-pulse { transform-origin: center; transform-box: fill-box; animation: pulseDot 2s ease-in-out infinite; }
          .anim-chart { stroke-dasharray: 380; animation: drawLine 2.2s ease-out forwards; }
          .anim-msg-1 { animation: msgPop1 6s ease-out infinite; }
          .anim-msg-2 { animation: msgPop2 6s ease-out infinite; }
          .anim-msg-3 { animation: msgPop3 6s ease-out infinite; }
        `}</style>

        {/* High Visibility Solid Canvas Backdrop */}
        <rect width="920" height="500" rx="24" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
        <rect width="920" height="500" rx="24" fill="url(#heroGrid)" opacity="0.6" />

        {/* ================= MAIN BROWSER DASHBOARD CARD ================= */}
        <g transform="translate(35, 45)" filter="url(#softShadow)">
          <rect width="590" height="405" rx="18" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />

          {/* Browser Chrome Header */}
          <path d="M0 18C0 8.05887 8.05887 0 18 0H572C581.941 0 590 8.05887 590 18V44H0V18Z" fill="#F1F5F9" />
          <line x1="0" y1="44" x2="590" y2="44" stroke="#CBD5E1" strokeWidth="1.5" />

          {/* Window Control Buttons */}
          <circle cx="22" cy="22" r="5" fill="#EF4444" />
          <circle cx="38" cy="22" r="5" fill="#F59E0B" />
          <circle cx="54" cy="22" r="5" fill="#10B981" />

          {/* URL Search Pill */}
          <rect x="175" y="10" width="240" height="24" rx="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
          <text x="295" y="26" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="700" fill="#1E293B">
            🔒 https://codube.com/live
          </text>

          {/* Dashboard Header Bar */}
          <g transform="translate(24, 60)">
            {/* 3D Folded C Ribbon Mini */}
            <path d="M6 14 C6 8 11 4 17 2 L26 7 L19 11 L12 7 C9 9 8 12 8 15 L8 21 C8 24 9 27 12 29 L19 25 L26 29 L15 35 C9 33 6 29 6 24 Z" fill="url(#cLogoTop)" />
            <path d="M8 21 L19 15 L26 19 L15 26 Z" fill="url(#cLogoBot)" opacity="0.85" />
            <text x="32" y="25" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="19" fill="#0F172A">Codube</text>
            <circle cx="104" cy="21.5" r="3" fill="#10B981" />

            {/* Live Status Pill */}
            <rect x="122" y="7" width="175" height="26" rx="13" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.2" />
            <circle cx="137" cy="20" r="4.5" fill="#10B981" className="anim-pulse" />
            <text x="148" y="24" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#047857">
              Live Operations • Active
            </text>
          </g>

          {/* Left Analytics Chart Box */}
          <g transform="translate(24, 104)">
            <rect width="335" height="150" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <text x="16" y="26" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#334155">
              TOTAL AI BOOKINGS &amp; INQUIRIES
            </text>
            <text x="16" y="60" fontFamily="system-ui, sans-serif" fontSize="30" fontWeight="900" fill="#0F172A">
              1,428
            </text>

            {/* +28.4% Growth Badge */}
            <rect x="230" y="14" width="94" height="24" rx="12" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1.2" />
            <text x="277" y="30.5" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="800" fill="#047857">
              ↗ +28.4%
            </text>

            {/* Animated Smooth Area & Line Chart */}
            <path
              d="M 16 130 C 65 125, 95 98, 145 105 C 195 112, 235 68, 318 54 L 318 138 L 16 138 Z"
              fill="url(#chartFill)"
            />
            <path
              d="M 16 130 C 65 125, 95 98, 145 105 C 195 112, 235 68, 318 54"
              stroke="#059669"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              className="anim-chart"
            />
            <circle cx="318" cy="54" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2.5" />
          </g>

          {/* Right Side Speed & Integrations Cards */}
          <g transform="translate(372, 104)">
            {/* Speed Card */}
            <rect width="194" height="68" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="12" y="15" width="38" height="38" rx="10" fill="#ECFDF5" stroke="#A7F3D0" />
            <text x="31" y="41" textAnchor="middle" fontSize="19">⚡</text>
            <text x="60" y="33" fontFamily="system-ui, sans-serif" fontSize="17" fontWeight="900" fill="#0F172A">0.2s LCP</text>
            <text x="60" y="49" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="600" fill="#334155">Edge Core Speed</text>

            {/* Lead Capture Card */}
            <rect y="82" width="194" height="68" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="12" y="97" width="38" height="38" rx="10" fill="#EFF6FF" stroke="#BFDBFE" />
            <text x="31" y="123" textAnchor="middle" fontSize="18">📊</text>
            <text x="60" y="115" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="900" fill="#0F172A">Lead in &lt;30s</text>
            <text x="60" y="132" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="600" fill="#334155">Auto Sheets &amp; CRM</text>
          </g>

          {/* Bottom Patient Bookings Table */}
          <g transform="translate(24, 268)">
            <rect width="542" height="118" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <text x="16" y="24" fontFamily="system-ui, sans-serif" fontSize="12.5" fontWeight="800" fill="#0F172A">
              Recent Automated AI Bookings &amp; Consultations
            </text>
            <line x1="0" y1="36" x2="542" y2="36" stroke="#E2E8F0" strokeWidth="1.2" />

            {/* Row 1 */}
            <text x="16" y="59" fontFamily="system-ui, sans-serif" fontSize="12.5" fontWeight="700" fill="#0F172A">Dr. Sharma Cardiology Clinic</text>
            <text x="210" y="59" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="600" fill="#334155">11:00 AM</text>
            <rect x="315" y="43" width="145" height="24" rx="7" fill="#ECFDF5" stroke="#A7F3D0" />
            <text x="387" y="59" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="700" fill="#047857">✓ Confirmed via AI</text>

            <line x1="16" y1="74" x2="526" y2="74" stroke="#F1F5F9" strokeWidth="1.2" />

            {/* Row 2 */}
            <text x="16" y="97" fontFamily="system-ui, sans-serif" fontSize="12.5" fontWeight="700" fill="#0F172A">Dr. Mehta Dental Speciality</text>
            <text x="210" y="97" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="600" fill="#334155">11:45 AM</text>
            <rect x="315" y="81" width="145" height="24" rx="7" fill="#ECFDF5" stroke="#A7F3D0" />
            <text x="387" y="97" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="700" fill="#047857">✓ Confirmed via AI</text>
          </g>
        </g>

        {/* ================= FLOATING IPHONE WHATSAPP AI MOCKUP (RIGHT) ================= */}
        <g transform="translate(635, 30)" filter="url(#phoneShadow)">
          {/* Phone Chassis */}
          <rect width="250" height="440" rx="36" fill="#0F172A" stroke="#475569" strokeWidth="3.5" />
          <rect x="6" y="6" width="238" height="428" rx="30" fill="#EFEAE2" />

          {/* Dynamic Island */}
          <rect x="80" y="12" width="90" height="18" rx="9" fill="#0F172A" />
          <circle cx="152" cy="21" r="3" fill="#1E293B" />

          {/* WhatsApp Header */}
          <rect x="6" y="38" width="238" height="50" fill="#075E54" />
          <circle cx="32" cy="63" r="14" fill="#25D366" />
          <text x="32" y="68" textAnchor="middle" fontSize="14" fill="#FFFFFF">🤖</text>
          <text x="54" y="59" fontFamily="system-ui, sans-serif" fontSize="11.5" fontWeight="800" fill="#FFFFFF">
            Dr. Joy AI Assistant
          </text>
          <text x="54" y="73" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="500" fill="#A7F3D0">
            online • 24/7 Booking Bot
          </text>

          {/* Chat Bubble 1 (AI Greeting - Animated) */}
          <g className="anim-msg-1">
            <rect x="18" y="100" width="186" height="50" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" filter="url(#softShadow)" />
            <text x="28" y="116" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#0F172A">
              Hello! 👋 Welcome to Dr. Joy.
            </text>
            <text x="28" y="131" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#047857">
              Would you like to book a slot?
            </text>
            <text x="194" y="143" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="7.5" fill="#64748B">
              11:00 AM
            </text>
          </g>

          {/* Chat Bubble 2 (Patient Reply - Animated) */}
          <g className="anim-msg-2">
            <rect x="62" y="158" width="172" height="36" rx="10" fill="#DCF8C6" stroke="#86EFAC" strokeWidth="0.8" filter="url(#softShadow)" />
            <text x="72" y="174" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#064E3B">
              Yes, tomorrow at 3 PM please!
            </text>
            <text x="224" y="186" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="7.5" fill="#047857" fontWeight="700">
              11:01 AM ✓✓
            </text>
          </g>

          {/* Chat Bubble 3 (AI Confirmation - Animated) */}
          <g className="anim-msg-3">
            <rect x="18" y="202" width="206" height="68" rx="10" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" filter="url(#softShadow)" />
            <text x="28" y="220" fontFamily="system-ui, sans-serif" fontSize="10.5" fontWeight="900" fill="#047857">
              ✅ Slot Confirmed!
            </text>
            <text x="28" y="235" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="700" fill="#0F172A">
              Dr. Rajesh Sharma • 3:00 PM
            </text>
            <text x="28" y="249" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="500" fill="#334155">
              Location: Al Wasl Rd, Dubai
            </text>
            <text x="214" y="262" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="7.5" fill="#64748B">
              11:01 AM
            </text>
          </g>

          {/* Bottom Message Input Bar */}
          <rect x="6" y="394" width="238" height="40" fill="#F0F2F5" />
          <rect x="16" y="402" width="180" height="24" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
          <text x="28" y="418" fontFamily="system-ui, sans-serif" fontSize="9.5" fontWeight="500" fill="#64748B">
            Type a message...
          </text>
          <circle cx="218" cy="414" r="12" fill="#10B981" />
          <text x="218" y="418" textAnchor="middle" fontSize="11" fill="#FFFFFF">➤</text>
        </g>

        {/* ================= FLOATING BADGE 1 (TOP RIGHT) ================= */}
        <g transform="translate(595, 18)" className="anim-float-1" filter="url(#softShadow)">
          <rect width="205" height="40" rx="12" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="9" fill="#ECFDF5" />
          <text x="20" y="24" textAnchor="middle" fontSize="12">⚡</text>
          <text x="36" y="19" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="900" fill="#0F172A">
            Auto-Synced to Google Sheets
          </text>
          <text x="36" y="32" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="700" fill="#047857">
            ✓ CRM Webhook Live Connected
          </text>
        </g>

        {/* ================= FLOATING BADGE 2 (BOTTOM RIGHT) ================= */}
        <g transform="translate(605, 440)" className="anim-float-2" filter="url(#softShadow)">
          <rect width="180" height="36" rx="18" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
          <circle cx="20" cy="18" r="5" fill="#10B981" className="anim-pulse" />
          <text x="32" y="22.5" fontFamily="system-ui, sans-serif" fontSize="10.5" fontWeight="800" fill="#0F172A">
            24/7 AI Receptionist Active
          </text>
        </g>
      </svg>
    </div>
  );
}
