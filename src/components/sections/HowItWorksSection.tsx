"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";

const steps = [
  {
    number: "01",
    title: "Upload Artwork",
    description: "Drop in your design — PNG, SVG, AI, PSD, or any format. One file is all you need.",
    icon: "📤",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our AI analyzes your design's colors, composition, and optimal placement for each product.",
    icon: "🧠",
  },
  {
    number: "03",
    title: "Auto Placement",
    description: "Artwork is intelligently positioned on each product — respecting seams, curves, and print areas.",
    icon: "🎯",
  },
  {
    number: "04",
    title: "Generate Products",
    description: "Instantly preview your design across T-shirts, packaging, bottles, and 10+ more products.",
    icon: "✨",
  },
  {
    number: "05",
    title: "Manufacturing Files",
    description: "Generate production-ready files with bleeds, specifications, and factory-grade outputs.",
    icon: "🏭",
  },
  {
    number: "06",
    title: "Export & Share",
    description: "Download high-res mockups, share with clients, or send directly to your manufacturer.",
    icon: "🚀",
  },
];

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="how-it-works" bgVariant="secondary">
      <SectionHeading
        eyebrow="How it works"
        title="Six Steps to Perfect Products"
        subtitle="From artwork upload to factory-ready files — in minutes, not days."
      />

      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[1px] bg-white/[0.06]">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-accent to-accent-purple"
          />
        </div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-start gap-6 md:gap-8 pl-4"
            >
              {/* Node */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-bg-primary border border-white/[0.08] flex items-center justify-center">
                  <span className="text-lg">{step.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="glass rounded-2xl p-5 md:p-6 flex-1 hover:bg-white/[0.08] transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-accent tabular-nums">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
