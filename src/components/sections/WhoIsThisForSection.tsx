"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";

const personas = [
  {
    icon: "🎨",
    title: "Graphic Designers",
    description: "Preview your designs on real products in seconds — no photoshoot needed.",
  },
  {
    icon: "🖌️",
    title: "Artists & Illustrators",
    description: "See your artwork come alive on merchandise, prints, and packaging.",
  },
  {
    icon: "👗",
    title: "Fashion Designers",
    description: "Visualize apparel collections with photorealistic garment mockups.",
  },
  {
    icon: "🏭",
    title: "Factories & Manufacturers",
    description: "Receive production-ready files with precise specifications and measurements.",
  },
  {
    icon: "🖨️",
    title: "Print Shops & Presses",
    description: "Get print-ready outputs with accurate bleeds, safe zones, and color profiles.",
  },
  {
    icon: "📦",
    title: "Packaging Companies",
    description: "Generate packaging mockups and dielines with manufacturing precision.",
  },
  {
    icon: "🏢",
    title: "Agencies & Studios",
    description: "Scale client presentations with batch mockup generation and brand kits.",
  },
  {
    icon: "🚀",
    title: "Brands & Startups",
    description: "Launch products faster with instant visualization across every category.",
  },
  {
    icon: "🎓",
    title: "Students",
    description: "Build professional portfolios with industry-standard product presentations.",
  },
];

export default function WhoIsThisForSection() {
  return (
    <SectionWrapper id="who-is-this-for">
      <SectionHeading
        eyebrow="Who is this for"
        title="Built for Every Creative Professional"
        subtitle="Whether you're designing artwork or manufacturing products — Design Engine speaks your language."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {personas.map((persona, i) => (
          <GlassCard key={persona.title} delay={i * 0.05}>
            <div className="flex flex-col h-full">
              <span className="text-3xl mb-4">{persona.icon}</span>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {persona.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {persona.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
