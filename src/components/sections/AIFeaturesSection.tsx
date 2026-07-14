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

const features = [
  { title: "Print Preview", desc: "CMYK, spot color, and resolution validation" },
  { title: "Embroidery", desc: "Stitch-accurate digitization previews" },
  { title: "DTF Transfer", desc: "Direct-to-film ready outputs" },
  { title: "DTG Print", desc: "Direct-to-garment color management" },
  { title: "Foil & Laser", desc: "Metallic and laser cut file generation" },
  { title: "Lighting Engine", desc: "Dynamic scene lighting and reflections" },
  { title: "Material Library", desc: "200+ fabric, paper, and surface textures" },
  { title: "Version History", desc: "Track every iteration and revision" },
  { title: "Team Collaboration", desc: "Real-time editing with role permissions" },
  { title: "Brand Kit", desc: "Lock in colors, fonts, and brand guidelines" },
  { title: "Batch Generation", desc: "Generate hundreds of mockups at once" },
  { title: "API Access", desc: "Integrate with your existing workflow" },
  { title: "Marketplace", desc: "Sell and buy premium product templates" },
  { title: "Export Options", desc: "PNG, PDF, SVG, TIFF, and more" },
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
        {heroFeatures.map((feature, i) => (
          <GlassCard key={feature.title} delay={i * 0.1} glow={i === 0 ? "blue" : i === 1 ? "purple" : "none"}>
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

      {/* Feature grid — compact */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.03, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="glass rounded-xl p-4 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300 cursor-default"
          >
            <h4 className="text-sm font-semibold text-text-primary mb-1">
              {feature.title}
            </h4>
            <p className="text-xs text-text-muted leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
