"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";

const steps = [
  { title: "Upload Artwork", desc: "Drag and drop your vectors, images, or patterns. No complicated prep required." },
  { title: "AI Analysis", desc: "Our engine instantly reads the geometry, lighting, and material constraints of the target product." },
  { title: "Auto Placement", desc: "The artwork is intelligently mapped over seams, folds, and curves for photorealistic physics." },
  { title: "Generate Mockups", desc: "Create thousands of variations instantly across entire product ecosystems." },
  { title: "Manufacturing Files", desc: "Automatically export production-ready tech packs with bleed, safe zones, and print specs." },
  { title: "Export", desc: "Push directly to Shopify, manufacturers, or download high-res assets for campaigns." },
];

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="how-it-works" bgVariant="secondary">
      <SectionHeading
        eyebrow="The Engine"
        title="From Artwork to Reality."
        subtitle="The entire product design pipeline, fully automated."
      />

      <div ref={containerRef} className="relative max-w-5xl mx-auto mt-24 pb-24">
        {/* Glow Line Background */}
        <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] md:-translate-x-1/2" />
        
        {/* Animated Glow Line Progress */}
        <motion.div 
          className="absolute left-[27px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-accent via-accent-purple to-accent md:-translate-x-1/2"
          style={{ height: lineHeight }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_rgba(59,130,246,1)]" />
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center gap-8 md:gap-24 ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row pl-16 md:pl-0`}
              >
                {/* Node marker (mobile only, desktop handled by center line) */}
                <div className="absolute left-6 w-3 h-3 rounded-full bg-bg-card border-2 border-white/20 md:hidden" />

                {/* Content Box */}
                <div className={`flex-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
                  <div className={`glass p-8 md:p-10 rounded-3xl inline-block w-full md:w-5/6 relative group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:bg-white/[0.04]`}>
                    
                    {/* Inner highlight for 3D feel */}
                    <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />
                    
                    <div className="text-accent font-mono text-xs uppercase tracking-widest mb-4 opacity-80">
                      Phase 0{i + 1}
                    </div>
                    <h3 className="text-3xl font-semibold text-text-primary mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Empty space for grid alignment on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
