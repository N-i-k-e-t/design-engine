"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";

const specs = [
  {
    icon: "🎯",
    title: "Safe Zone",
    description: "Automatic safe area detection ensures your design stays within printable boundaries.",
  },
  {
    icon: "📐",
    title: "Bleed & Margins",
    description: "Precise bleed generation with industry-standard 3mm margins for flawless production.",
  },
  {
    icon: "📏",
    title: "Print Area",
    description: "Dynamic print area mapping that adapts to garment sizes and product dimensions.",
  },
  {
    icon: "🧵",
    title: "Embroidery Specs",
    description: "Thread count, stitch type, and density calculations for embroidery-ready files.",
  },
  {
    icon: "📋",
    title: "Measurements",
    description: "Exact dimensions in cm, inches, and pixels — tailored to each product template.",
  },
  {
    icon: "🧶",
    title: "Fabric & Materials",
    description: "Material-aware rendering that shows how your design looks on cotton, polyester, and more.",
  },
  {
    icon: "⚙️",
    title: "Factory Specifications",
    description: "Complete tech packs with color codes, placement guides, and production notes.",
  },
  {
    icon: "📁",
    title: "Production Files",
    description: "Export factory-ready files in AI, PDF, SVG, and TIFF with embedded profiles.",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {specs.map((spec, i) => (
          <GlassCard key={spec.title} delay={i * 0.06}>
            <span className="text-2xl mb-3 block">{spec.icon}</span>
            <h3 className="text-base font-semibold text-text-primary mb-2">
              {spec.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {spec.description}
            </p>
          </GlassCard>
        ))}
      </div>

      {/* Manufacturing visual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-16 glass rounded-2xl p-8 md:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="font-semibold text-text-primary mb-1">Design</h4>
            <p className="text-sm text-text-muted">Upload your artwork</p>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-accent/50 via-accent to-accent-purple/50 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent animate-pulse" />
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-purple/5 flex items-center justify-center mb-4">
              <span className="text-2xl">🏭</span>
            </div>
            <h4 className="font-semibold text-text-primary mb-1">Manufacture</h4>
            <p className="text-sm text-text-muted">Factory-ready outputs</p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
