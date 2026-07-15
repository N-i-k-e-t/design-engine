"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";

const products = [
  { 
    name: "Cherry Blossom Couture", 
    category: "Gowns", 
    image: "/assets/gallery-cherry-blossom.jpeg", 
    color: "from-pink-500/20 to-rose-500/20",
    description: "Flowing silk gown with cherry blossom patterns, featuring advanced dynamic chiffon physics and soft fold shading." 
  },
  { 
    name: "Phoenix Rising Silhouette", 
    category: "Haute Couture", 
    image: "/assets/showcase-phoenix.jpeg", 
    color: "from-orange-500/20 to-red-500/20",
    description: "Avant-garde feather-effect fabric draping with high-contrast warm glow lighting contours." 
  },
  { 
    name: "Pink Silk Drape", 
    category: "Satin Line", 
    image: "/assets/showcase-pink-silk.jpeg", 
    color: "from-purple-500/20 to-pink-500/20",
    description: "Hyper-reflective satin fabric rendering with liquid-like drape contours and realistic stitching folds." 
  },
  { 
    name: "Midnight Eclipse Dress", 
    category: "Couture", 
    image: "/assets/showcase-eclipse.jpeg", 
    color: "from-blue-500/20 to-purple-500/20",
    description: "Deep obsidian velvet textures accented with shimmering celestial maps and high-fidelity panel styling." 
  },
  { 
    name: "Glacial Ice Gown", 
    category: "Avant-Garde", 
    image: "/assets/showcase-frozen.jpeg", 
    color: "from-cyan-500/20 to-blue-500/20",
    description: "Frost-sheened synthetic fabric panels capturing intricate crystal refraction and translucent structures." 
  },
  { 
    name: "Desert Sands Drape", 
    category: "Satin Line", 
    image: "/assets/showcase-desert.jpeg", 
    color: "from-yellow-500/20 to-amber-500/20",
    description: "Sand-textured raw silk dress visualization highlighting multi-directional lighting and natural pleats." 
  },
  { 
    name: "Stained Glass Silhouette", 
    category: "Couture", 
    image: "/assets/gallery-stained-glass.jpeg", 
    color: "from-fuchsia-500/20 to-pink-500/20",
    description: "Mosaic pattern mappings resembling cathedral glass window textures draped over a structured silhouette." 
  },
  { 
    name: "Deep Velvet Wrap", 
    category: "Haute Couture", 
    image: "/assets/showcase-velvet.jpeg", 
    color: "from-violet-500/20 to-purple-500/20",
    description: "Heavy velvet draping simulation capturing deep shadow contrast, soft surface pile, and metallic embroidery." 
  },
];

export default function ProductEcosystemSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProduct = products[activeIdx];

  return (
    <SectionWrapper id="products" bgVariant="secondary">
      <SectionHeading
        eyebrow="Couture Showcase"
        title="One Design. Infinite Silhouette."
        subtitle="Drape digital artwork over hyper-realistic 3D women's haute couture gowns with photorealistic fabric physics."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
        {/* Left Side: Product Selector List */}
        <div className="lg:col-span-5 flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {products.map((product, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={product.name}
                onClick={() => setActiveIdx(i)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                  isActive 
                    ? "bg-white/[0.06] border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.2)]" 
                    : "bg-transparent border-transparent hover:bg-white/[0.02]"
                }`}
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-text-muted mb-1 block">
                    {product.category}
                  </span>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {product.name}
                  </h4>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isActive ? "bg-accent border-accent text-white" : "bg-white/5 border-white/10 text-text-muted"
                }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Interactive Mockup Showcase */}
        <div className="lg:col-span-7 h-[500px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <GlassCard 
                hoverEffect={true} 
                glowColor="accent"
                className="w-full h-full p-0 overflow-hidden flex flex-col justify-end relative bg-bg-card border border-white/[0.04] rounded-3xl"
              >
                {/* 3D Showcase Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden group">
                  <Image
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  {/* Glass reflections overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary via-transparent to-white/[0.03] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
                </div>

                {/* Info Overlay */}
                <div className="relative z-10 p-8 md:p-10 pointer-events-none">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest">
                      {activeProduct.category}
                    </span>
                    <span className="text-text-muted text-xs font-mono">3D Silk & Chiffon Simulation</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-white mb-3">
                    {activeProduct.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed font-light text-sm max-w-xl">
                    {activeProduct.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
