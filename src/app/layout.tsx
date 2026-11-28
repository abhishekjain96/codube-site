// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const BASE = "https://www.codube.com";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
  display: "swap",
});

// Zoom allow kiya hai (accessibility + mobile usability)
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "CODUBE — Software Development & AI Automation Agency",
    template: "%s | CODUBE",
  },
  description:
    "We build digital products that move business forward. Custom software, scalable SaaS platforms, websites and WhatsApp AI automation for modern businesses.",
  applicationName: "CODUBE",
  authors: [{ name: "CODUBE Team", url: BASE }],
  creator: "CODUBE",
  publisher: "CODUBE",
  openGraph: {
    title: "CODUBE — Software. AI. Automation.",
    description: "We build digital products that move business forward.",
    url: BASE,
    siteName: "CODUBE",
    images: [
      {
        url: "/images/hero-laptop.png",
        width: 1200,
        height: 630,
        alt: "CODUBE Technology Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODUBE — Software. AI. Automation.",
    description: "We build digital products that move business forward.",
    images: ["/images/hero-laptop.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "CODUBE",
      url: BASE,
      logo: `${BASE}/icon.png`,
      telephone: "+919672660338",
      founder: { "@type": "Person", name: "Abhishek Jain" },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "CODUBE",
      publisher: { "@id": `${BASE}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="bg-[#FAFAFA] text-slate-900 selection:bg-emerald-500 selection:text-white min-h-screen flex flex-col antialiased overflow-x-hidden font-sans">
        <SmoothScroll>
          <MouseGlow />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>

      <GoogleTagManager gtmId="GTM-K3CN3XFQ" />
      <GoogleAnalytics gaId="G-4TR0X39EKM" />
    </html>
  );
}
