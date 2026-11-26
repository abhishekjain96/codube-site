import React from "react";

export default function SaasOrchestratorGraphic() {
  return (
    <svg
      viewBox="0 0 512 288"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block select-none"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="saasBgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
        <pattern id="saasGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
        </pattern>
      </defs>

      {/* Background */}
      <rect width="512" height="288" fill="url(#saasBgGrad)" />
      <rect width="512" height="288" fill="url(#saasGrid)" opacity="0.6" />

      {/* Main SaaS Architecture Frame */}
      <g transform="translate(20, 16)">
        <rect width="472" height="256" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

        {/* Top Header */}
        <path d="M0 14C0 6.26801 6.26801 0 14 0H458C465.732 0 472 6.26801 472 14V36H0V14Z" fill="#F8FAFC" />
        <line x1="0" y1="36" x2="472" y2="36" stroke="#E2E8F0" strokeWidth="1" />

        {/* Window Dots */}
        <circle cx="18" cy="18" r="4.5" fill="#F87171" />
        <circle cx="32" cy="18" r="4.5" fill="#FBBF24" />
        <circle cx="46" cy="18" r="4.5" fill="#34D399" />

        <text x="62" y="21.5" fontFamily="system-ui, sans-serif" fontSize="10.5" fill="#0F172A" fontWeight="700">
          Multi-Tenant SaaS Cluster • Global Edge CDN
        </text>

        <rect x="366" y="8" width="94" height="20" rx="10" fill="#ECFDF5" stroke="#A7F3D0" />
        <text x="413" y="21.5" fontFamily="ui-monospace, monospace" fontSize="9" fill="#047857" fontWeight="700" textAnchor="middle">
          AWS &amp; Cloudflare
        </text>

        {/* 3 Isolated Tenant Node Cards */}
        <g transform="translate(18, 50)">
          {/* Tenant A */}
          <g transform="translate(0, 0)">
            <rect width="136" height="74" rx="10" fill="#FFFFFF" stroke="#E2E8F0" />
            <text x="12" y="18" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#64748B" fontWeight="600">
              Tenant A
            </text>
            <text x="12" y="34" fontFamily="system-ui, sans-serif" fontSize="11" fill="#0F172A" fontWeight="700">
              ClinicPro DB
            </text>
            <rect x="12" y="44" width="76" height="16" rx="4" fill="#ECFDF5" />
            <text x="50" y="55" fontFamily="ui-monospace, monospace" fontSize="7.5" fill="#047857" fontWeight="700" textAnchor="middle">
              Isolated AES
            </text>
          </g>

          {/* Tenant B */}
          <g transform="translate(150, 0)">
            <rect width="136" height="74" rx="10" fill="#FFFFFF" stroke="#E2E8F0" />
            <text x="12" y="18" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#64748B" fontWeight="600">
              Tenant B
            </text>
            <text x="12" y="34" fontFamily="system-ui, sans-serif" fontSize="11" fill="#0F172A" fontWeight="700">
              RealtyHub Pro
            </text>
            <rect x="12" y="44" width="84" height="16" rx="4" fill="#EFF6FF" />
            <text x="54" y="55" fontFamily="ui-monospace, monospace" fontSize="7.5" fill="#1D4ED8" fontWeight="700" textAnchor="middle">
              Edge Cache Active
            </text>
          </g>

          {/* Tenant Enterprise */}
          <g transform="translate(300, 0)">
            <rect width="136" height="74" rx="10" fill="#ECFDF5" stroke="#A7F3D0" />
            <text x="12" y="18" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#047857" fontWeight="700">
              Enterprise Tenant
            </text>
            <text x="12" y="34" fontFamily="system-ui, sans-serif" fontSize="11" fill="#064E3B" fontWeight="800">
              Dedicated VPC
            </text>
            <rect x="12" y="44" width="76" height="16" rx="4" fill="#FFFFFF" stroke="#6EE7B7" />
            <text x="50" y="55" fontFamily="ui-monospace, monospace" fontSize="7.5" fill="#047857" fontWeight="700" textAnchor="middle">
              99.99% SLA
            </text>
          </g>
        </g>

        {/* Central Database & Stripe Metrics Card */}
        <g transform="translate(18, 138)">
          <rect width="436" height="64" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />

          {/* Postgres Info */}
          <text x="16" y="22" fontFamily="ui-monospace, monospace" fontSize="9" fill="#64748B">
            High-Concurrency PostgreSQL Engine
          </text>
          <text x="16" y="42" fontFamily="system-ui, sans-serif" fontSize="13" fill="#0F172A" fontWeight="800">
            Sub-12ms Query Latency • Connection Pool Active
          </text>

          {/* Stripe Billing Summary */}
          <line x1="280" y1="10" x2="280" y2="54" stroke="#E2E8F0" strokeWidth="1" />
          <text x="300" y="22" fontFamily="ui-monospace, monospace" fontSize="9" fill="#64748B">
            Stripe Recurring MRR
          </text>
          <text x="300" y="44" fontFamily="system-ui, sans-serif" fontSize="16" fill="#059669" fontWeight="800">
            $48,200<tspan fontSize="10" fill="#64748B" fontWeight="500">/mo</tspan>
          </text>
        </g>

        {/* Real-Time Event Log Bar */}
        <g transform="translate(18, 222)">
          <line x1="0" y1="0" x2="436" y2="0" stroke="#F1F5F9" strokeWidth="1" />
          <circle cx="6" cy="14" r="3" fill="#10B981" />
          <text x="14" y="17" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#475569">
            event: tenant_b.subscription_renewed (200 OK • 14ms)
          </text>
          <text x="436" y="17" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#047857" fontWeight="700" textAnchor="end">
            1,240 Active Subscribers
          </text>
        </g>
      </g>
    </svg>
  );
}
