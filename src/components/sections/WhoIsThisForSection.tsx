"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";

const personas = [
  {
    image: "/assets/gallery-forest.jpeg",
    title: "Graphic Designers",
    description: "Map and preview 2D vectors onto any packaging shape or texture with single-click accuracy.",
  },
  {
    image: "/assets/gallery-stained-glass.jpeg",
    title: "Artists & Illustrators",
    description: "Witness intricate prints and digital illustrations wrap smoothly around high-fidelity apparel canvas.",
  },
  {
    image: "/assets/gallery-cherry-blossom.jpeg",
    title: "Fashion Designers",
    description: "Build mockups of entire clothing collections with realistic folds, drape physics, and stitch detail.",
  },
  {
    image: "/assets/gallery-cobalt.jpeg",
    title: "Brands & Startups",
    description: "Scale marketing imagery and launch campaign tests with multi-angle hyper-realistic lifestyle renders.",
  },
  {
    image: "/assets/gallery-starry.jpeg",
    title: "Factories & Manufacturers",
    description: "Access precise tech packs with auto-calculated margins, color separation, and dimensions.",
  },
  {
    image: "/assets/gallery-desert-sands.jpeg",
    title: "Packaging Engineers",
    description: "Generate mockups for custom box designs, bottles, and dielines matching production specs.",
  },
  {
    image: "/assets/gallery-tundra.jpeg",
    title: "Print Houses",
    description: "Ensure final output matches pixel intent with CMYK color spaces, bleed grids, and format exports.",
  },
  {
    image: "/assets/gallery-oceanic.jpeg",
    title: "Agencies & Studios",
    description: "Automate pitch assets and client approvals with customizable global assets and variant generation.",
  },
];

export default function WhoIsThisForSection() {
  return (
    <SectionWrapper id="who-is-this-for">
      <SectionHeading
        eyebrow="Target Audience"
        title="Created for Digital Builders."
        subtitle="From design conception to high-fidelity factory specification sheets, Design Engine works where you do."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {personas.map((persona, i) => (
          <GlassCard 
            key={persona.title} 
            delay={i * 0.05} 
            glowColor="accent"
            hoverEffect={true}
            className="flex flex-col h-full overflow-hidden p-0 rounded-2xl bg-bg-card/45 border border-white/[0.04]"
          >
            <div className="flex flex-col h-full group">
              {/* Persona Image Wrapper */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={persona.image}
                  alt={persona.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-90" />
              </div>
              
              {/* Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">
                    {persona.description}
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
