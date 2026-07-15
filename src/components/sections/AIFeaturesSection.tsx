"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";

const heroFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "AI Placement",
    description: "Intelligent artwork positioning that respects product geometry, seams, and print boundaries automatically.",
    gradient: "from-accent to-blue-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
      </svg>
    ),
    title: "AI Mockups",
    description: "Generate photorealistic product mockups with studio-quality lighting, shadows, and materials.",
    gradient: "from-accent-purple to-pink-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.26a.75.75 0 010-1.28l10.2-6.52a.75.75 0 011.17.62v13.04a.75.75 0 01-1.17.62l-5.1-3.26z" />
      </svg>
    ),
    title: "Manufacturing Ready",
    description: "Export production-grade files with accurate bleeds, safe zones, measurements, and material specs.",
    gradient: "from-emerald-500 to-green-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: "3D Viewer",
    description: "Interact with your products in full 3D — rotate, zoom, and inspect every angle in real-time.",
    gradient: "from-orange-500 to-amber-400",
  },
];

export default function AIFeaturesSection() {
  return (
    <SectionWrapper id="features">
      <SectionHeading
        eyebrow="Features"
        title="Powered by AI. Designed for You."
        subtitle="Every feature is built to eliminate manual work and deliver manufacturing-grade results."
      />

      {/* Hero features — large cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {heroFeatures.map((feature, i) => (
          <GlassCard key={feature.title} delay={i * 0.1} glowColor={i === 0 ? "accent" : i === 1 ? "purple" : "none"}>
            <div className="flex flex-col h-full">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
