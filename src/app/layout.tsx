import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Engine — AI-Powered Product Visualization & Manufacturing Platform",
  description:
    "Upload once, visualize everywhere. Create photorealistic product previews, manufacturing-ready outputs, and AI-powered mockups from a single design. Launching July 22, 2026.",
  keywords: [
    "product visualization",
    "AI mockups",
    "manufacturing platform",
    "product design",
    "apparel mockups",
    "packaging design",
    "3D visualization",
    "print-ready files",
  ],
  openGraph: {
    title: "Design Engine — Upload Once. Visualize Everywhere.",
    description:
      "The AI Operating System for Product Design. Create photorealistic previews and manufacturing-ready outputs from a single design.",
    type: "website",
    locale: "en_US",
    siteName: "Design Engine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Engine — Upload Once. Visualize Everywhere.",
    description:
      "The AI Operating System for Product Design. Launching July 22, 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
