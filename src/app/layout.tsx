import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Engine — AI-Powered Fabric & Apparel Visualization Platform",
  description:
    "Upload once, drape everywhere. Create photorealistic 3D apparel mockups, simulate fabric textures, and generate manufacturing-ready apparel tech packs from a single design.",
  keywords: [
    "apparel visualization",
    "fabric design",
    "AI mockups",
    "manufacturing platform",
    "fashion design",
    "apparel mockups",
    "3D visualization",
    "print-ready files",
    "couture simulation",
  ],
  openGraph: {
    title: "Design Engine — Upload Once. Drape Everywhere.",
    description:
      "The AI Operating System for Apparel & Fabric Design. Create photorealistic garment previews and manufacturing-ready tech packs from a single design.",
    type: "website",
    locale: "en_US",
    siteName: "Design Engine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Engine — Upload Once. Drape Everywhere.",
    description:
      "The AI Operating System for Apparel & Fabric Design. Launching July 22, 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import CursorGlow from "@/components/CursorGlow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="bg-bg-primary text-text-primary font-sans antialiased overflow-x-hidden selection:bg-accent/30 selection:text-white">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
