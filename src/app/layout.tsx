import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

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

export const viewport: Viewport = {
  themeColor: "#030604",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codube.io"),
  title: "CODUBE — Premium Software Development & AI Automation Agency",
  description:
    "We Build Digital Products That Move Business Forward. Custom software, scalable SaaS platforms, and intelligent AI automation for modern enterprises.",
  keywords: [
    "Codube",
    "Software Development Agency",
    "AI Automation",
    "SaaS Product Development",
    "Web Application Development",
    "Custom Software Engineering",
    "Next.js Enterprise Studio",
  ],
  authors: [{ name: "CODUBE Team", url: "https://codube.io" }],
  openGraph: {
    title: "CODUBE — SOFTWARE. AI. AUTOMATION.",
    description: "We Build Digital Products That Move Business Forward.",
    url: "https://codube.io",
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
    title: "CODUBE — SOFTWARE. AI. AUTOMATION.",
    description: "We Build Digital Products That Move Business Forward.",
    images: ["/images/hero-laptop.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable} dark`}>
      <body className="bg-[#030604] text-white selection:bg-[#B8FF00] selection:text-black min-h-screen flex flex-col antialiased overflow-x-hidden">
        <Preloader />
        <SmoothScroll>
          <MouseGlow />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
