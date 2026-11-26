"use client";

import React from "react";

export default function HeroLiveGraphic() {
  return (
    <div className="w-full max-w-5xl mx-auto select-none overflow-hidden px-1 sm:px-0">
      <svg
        viewBox="0 0 920 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_20px_50px_rgba(15,23,42,0.08)] block"
        role="img"
        aria-label="Codube Live Operations Dashboard and 24/7 WhatsApp AI Receptionist"
      >
        <defs>
          {/* Subtle Grid Pattern */}
          <pattern id="heroGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
          </pattern>

          {/* Chart Area Gradient */}
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
          </linearGradient>

          {/* Codube Logo Gradients */}
          <linearGradient id="cLogoTop" x1="0" y1="20" x2="32" y2="4" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="cLogoBot" x1="4" y1="26" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>

          {/* Card Shadow Filter */}
          <filter id="softShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.07" />
          </filter>
          <filter id="phoneShadow" x="-15%" y="-10%" width="135%" height="130%">
            <feDropShadow dx="-8" dy="18" stdDeviation="20" floodColor="#0F172A" floodOpacity="0.16" />
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
            50% { opacity: 0.4; transform: scale(1.35); }
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

        {/* Background Grid */}
        <rect width="920" height="500" rx="24" fill="#F8FAFC" />
        <rect width="920" height="500" rx="24" fill="url(#heroGrid)" opacity="0.7" />

        {/* ================= MAIN BROWSER DASHBOARD CARD ================= */}
        <g transform="translate(35, 45)" filter="url(#softShadow)">
          <rect width="590" height="405" rx="18" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

          {/* Browser Top Bar */}
          <path d="M0 18C0 8.05887 8.05887 0 18 0H572C581.941 0 590 8.05887 590 18V42H0V18Z" fill="#F8FAFC" />
          <line x1="0" y1="42" x2="590" y2="42" stroke="#E2E8F0" strokeWidth="1" />
          <circle cx="22" cy="21" r="5" fill="#FCA5A5" />
          <circle cx="38" cy="21" r="5" fill="#FCD34D" />
          <circle cx="54" cy="21" r="5" fill="#6EE7B7" />

          {/* URL Pill */}
          <rect x="175" y="10" width="240" height="22" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          <text x="295" y="25" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#64748B">
            🔒 https://codube.com
          </text>

          {/* Dashboard Header with Codube Logo */}
          <g transform="translate(24, 58)">
            {/* 3D Folded C Ribbon Mini */}
            <path d="M6 14 C6 8 11 4 17 2 L26 7 L19 11 L12 7 C9 9 8 12 8 15 L8 21 C8 24 9 27 12 29 L19 25 L26 29 L15 35 C9 33 6 29 6 24 Z" fill="url(#cLogoTop)" />
            <path d="M8 21 L19 15 L26 19 L15 26 Z" fill="url(#cLogoBot)" opacity="0.85" />
            <text x="32" y="24" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="18" fill="#0F172A">Codube</text>
            <circle cx="102" cy="21" r="2.5" fill="#10B981" />

            {/* Live Status Pill */}
            <rect x="120" y="7" width="165" height="24" rx="12" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
            <circle cx="134" cy="19" r="4" fill="#10B981" className="anim-pulse" />
            <text x="145" y="23" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#047857">
              Live Operations • Active
            </text>
          </g>

          {/* Left Analytics Chart Box */}
          <g transform="translate(24, 102)">
            <rect width="335" height="150" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
            <text x="16" y="26" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#64748B">
              Total AI Appointments
            </text>
            <text x="16" y="58" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="800" fill="#0F172A">
              1,428
            </text>

            {/* +24% Growth Badge */}
            <rect x="235" y="14" width="86" height="22" rx="11" fill="#ECFDF5" />
            <text x="278" y="29" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#059669">
              +24% this wk
            </text>

            {/* Animated Smooth Area & Line Chart */}
            <path
              d="M 16 130 C 65 125, 95 98, 145 105 C 195 112, 235 68, 318 54 L 318 138 L 16 138 Z"
              fill="url(#chartFill)"
            />
            <path
              d="M 16 130 C 65 125, 95 98, 145 105 C 195 112, 235 68, 318 54"
              stroke="#10B981"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className="anim-chart"
            />
            <circle cx="318" cy="54" r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          </g>

          {/* Right Side Speed & Integrations Cards */}
          <g transform="translate(372, 102)">
            {/* Speed Card */}
            <rect width="194" height="68" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.2" />
            <rect x="12" y="15" width="38" height="38" rx="10" fill="#ECFDF5" />
            <text x="31" y="40" textAnchor="middle" fontSize="18">⚡</text>
            <text x="60" y="32" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="800" fill="#0F172A">0.2s LCP</text>
            <text x="60" y="49" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#64748B">Edge Core Speed</text>

            {/* Lead Capture Card */}
            <rect y="82" width="194" height="68" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.2" />
            <rect x="12" y="97" width="38" height="38" rx="10" fill="#EFF6FF" />
            <text x="31" y="122" textAnchor="middle" fontSize="17">📊</text>
            <text x="60" y="114" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#0F172A">Lead in &lt;30s</text>
            <text x="60" y="131" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#64748B">Auto Sheet Sync</text>
          </g>

          {/* Bottom Patient Bookings Table */}
          <g transform="translate(24, 266)">
            <rect width="542" height="120" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
            <text x="16" y="24" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#0F172A">
              Recent Automated Bookings
            </text>
            <line x1="0" y1="36" x2="542" y2="36" stroke="#F1F5F9" strokeWidth="1" />

            {/* Row 1 */}
            <text x="16" y="58" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#1E293B">Dr. Sharma Clinic</text>
            <text x="190" y="58" fontFamily="Inter, sans-serif" fontSize="12" fill="#64748B">11:00 AM</text>
            <rect x="300" y="43" width="135" height="22" rx="6" fill="#ECFDF5" />
            <text x="367" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#059669">✓ Confirmed via AI</text>

            <line x1="16" y1="74" x2="526" y2="74" stroke="#F1F5F9" strokeWidth="1" />

            {/* Row 2 */}
            <text x="16" y="96" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#1E293B">Dr. Mehta Dental</text>
            <text x="190" y="96" fontFamily="Inter, sans-serif" fontSize="12" fill="#64748B">11:45 AM</text>
            <rect x="300" y="81" width="135" height="22" rx="6" fill="#ECFDF5" />
            <text x="367" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#059669">✓ Confirmed via AI</text>
          </g>
        </g>

        {/* ================= FLOATING IPHONE WHATSAPP AI MOCKUP (RIGHT) ================= */}
        <g transform="translate(635, 30)" filter="url(#phoneShadow)">
          {/* Phone Chassis */}
          <rect width="250" height="440" rx="36" fill="#0F172A" stroke="#334155" strokeWidth="3" />
          <rect x="6" y="6" width="238" height="428" rx="30" fill="#EFEAE2" />

          {/* Dynamic Island */}
          <rect x="80" y="12" width="90" height="18" rx="9" fill="#0F172A" />
          <circle cx="152" cy="21" r="3" fill="#1E293B" />

          {/* WhatsApp Header */}
          <rect x="6" y="38" width="238" height="48" fill="#075E54" />
          <circle cx="32" cy="62" r="14" fill="#25D366" />
          <text x="32" y="67" textAnchor="middle" fontSize="14" fill="#FFFFFF">🤖</text>
          <text x="54" y="58" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF">
            Dr. Joy AI Assistant
          </text>
          <text x="54" y="72" fontFamily="Inter, sans-serif" fontSize="9" fill="#A7F3D0">
            online • 24/7 Booking Bot
          </text>

          {/* Chat Bubble 1 (AI Greeting - Animated) */}
          <g className="anim-msg-1">
            <rect x="18" y="98" width="180" height="48" rx="10" fill="#FFFFFF" filter="url(#softShadow)" />
            <text x="28" y="114" fontFamily="Inter, sans-serif" fontSize="9.5" fill="#1E293B">
              Hello! 👋 Welcome to Dr. Joy.
            </text>
            <text x="28" y="128" fontFamily="Inter, sans-serif" fontSize="9.5" fontWeight="600" fill="#065F46">
              Would you like to book a slot?
            </text>
            <text x="188" y="140" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="7" fill="#94A3B8">
              11:00 AM
            </text>
          </g>

          {/* Chat Bubble 2 (Patient Reply - Animated) */}
          <g className="anim-msg-2">
            <rect x="64" y="156" width="168" height="34" rx="10" fill="#DCF8C6" filter="url(#softShadow)" />
            <text x="74" y="172" fontFamily="Inter, sans-serif" fontSize="9.5" fill="#1E293B">
              Yes, tomorrow at 3 PM please!
            </text>
            <text x="222" y="184" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="7" fill="#059669">
              11:01 AM ✓✓
            </text>
          </g>

          {/* Chat Bubble 3 (AI Confirmation - Animated) */}
          <g className="anim-msg-3">
            <rect x="18" y="200" width="200" height="66" rx="10" fill="#FFFFFF" stroke="#10B981" strokeWidth="1" filter="url(#softShadow)" />
            <text x="28" y="217" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" fill="#047857">
              ✅ Slot Confirmed!
            </text>
            <text x="28" y="232" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#1E293B">
              Dr. Rajesh Sharma • 3:00 PM
            </text>
            <text x="28" y="246" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#64748B">
              Location: Al Wasl Rd, Dubai
            </text>
            <text x="208" y="259" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="7" fill="#94A3B8">
              11:01 AM
            </text>
          </g>

          {/* Bottom Message Input Bar */}
          <rect x="6" y="394" width="238" height="40" fill="#F0F2F5" />
          <rect x="16" y="402" width="180" height="24" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          <text x="28" y="418" fontFamily="Inter, sans-serif" fontSize="9" fill="#94A3B8">
            Type a message...
          </text>
          <circle cx="218" cy="414" r="12" fill="#10B981" />
          <text x="218" y="418" textAnchor="middle" fontSize="11" fill="#FFFFFF">➤</text>
        </g>

        {/* ================= FLOATING BADGE 1 (TOP RIGHT) ================= */}
        <g transform="translate(600, 18)" className="anim-float-1" filter="url(#softShadow)">
          <rect width="190" height="38" rx="12" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="1.2" />
          <circle cx="20" cy="19" r="8" fill="#ECFDF5" />
          <text x="20" y="23" textAnchor="middle" fontSize="11">⚡</text>
          <text x="36" y="18" fontFamily="Inter, sans-serif" fontSize="9.5" fontWeight="800" fill="#0F172A">
            Auto-Synced to Google Sheets
          </text>
          <text x="36" y="30" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#059669">
            ✓ CRM Webhook Connected
          </text>
        </g>

        {/* ================= FLOATING BADGE 2 (BOTTOM RIGHT) ================= */}
        <g transform="translate(610, 442)" className="anim-float-2" filter="url(#softShadow)">
          <rect width="170" height="34" rx="17" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
          <circle cx="18" cy="17" r="4.5" fill="#10B981" className="anim-pulse" />
          <text x="30" y="21" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#0F172A">
            24/7 AI Booking Active
          </text>
        </g>
      </svg>
    </div>
  );
}
