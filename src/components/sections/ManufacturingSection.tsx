"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";

const specs = [
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    title: "Seam Placement",
    description: "Auto-detect fabric seams, collars, and hems to prevent artwork from overlapping critical stitch lines.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4v16M16 4v16M4 8h16M4 16h16" />
      </svg>
    ),
    title: "Bleed & Seams",
    description: "Generate precise wrap-around bleed boundaries for seamless edge-to-edge sublimation printing.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5M7.5 12h12.75M7.5 7.5h12.75M7.5 16.5h12.75" />
      </svg>
    ),
    title: "Drape Dimensions",
    description: "Automatically scale and adjust graphic placement relative to garment sizing (XS to XXL) for visual balance.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0-15A2.25 2.25 0 0114.25 6.75M12 4.5A2.25 2.25 0 009.75 6.75m4.5 0A2.25 2.25 0 0116.5 9m-6.75-2.25A2.25 2.25 0 007.5 9m9 0V18a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 017.5 18V9" />
      </svg>
    ),
    title: "Stitch Digitization",
    description: "Calculate precise stitch counts, direction mapping, and thread density vectors for quality custom embroidery.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Pattern Measurement",
    description: "Tailor pattern dimensions down to millimeter and pixel coordinates for flawless dye-sub production.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: "Weave Simulation",
    description: "Simulate surface drape, lighting reflections, and ink absorption profiles on organic cotton, silk, and heavy fleece.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Couture Tech Packs",
    description: "Generate complete factory-grade tech packs containing hex codes, placement matrices, and seam guidelines.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Vector Output",
    description: "Export production-ready vector assets (SVG, AI, and print-ready TIFF) with embedded ICC color profiles.",
  },
];

export default function ManufacturingSection() {
  return (
    <SectionWrapper id="manufacturing" bgVariant="secondary">
      <SectionHeading
        eyebrow="Manufacturing"
        title="Pre-Visualize Every Thread"
        subtitle="Experience the exact fabric weights, weave textures, and color designs through AI before your garment physically exists in the real world."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {specs.map((spec, i) => (
          <GlassCard 
            key={spec.title} 
            delay={i * 0.05}
            glowColor="accent"
            hoverEffect={true}
            className="flex flex-col h-full bg-bg-card/45 border border-white/[0.04] p-8 rounded-2xl group"
          >
            <div className="flex flex-col h-full">
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/25 transition-all duration-500">
                {spec.icon}
              </div>
              
              <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {spec.title}
              </h3>
              
              <p className="text-sm text-text-secondary leading-relaxed font-light">
                {spec.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
