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
    description: "Flowing silk gown with cherry blossom patterns, featuring advanced dynamic chiffon physics and soft fold shading.",
    specs: { material: "Silk Chiffon", polycount: "1.4M Polys", resolution: "8K Texture", physics: "Fluid Drape" }
  },
  { 
    name: "Phoenix Rising Silhouette", 
    category: "Haute Couture", 
    image: "/assets/showcase-phoenix.jpeg", 
    color: "from-orange-500/20 to-red-500/20",
    description: "Avant-garde feather-effect fabric draping with high-contrast warm glow lighting contours.",
    specs: { material: "Structured Organza", polycount: "1.8M Polys", resolution: "8K Texture", physics: "Layered Stiff" }
  },
  { 
    name: "Pink Silk Drape", 
    category: "Satin Line", 
    image: "/assets/showcase-pink-silk.jpeg", 
    color: "from-purple-500/20 to-pink-500/20",
    description: "Hyper-reflective satin fabric rendering with liquid-like drape contours and realistic stitching folds.",
    specs: { material: "Liquid Satin", polycount: "1.2M Polys", resolution: "8K Texture", physics: "Soft Shear" }
  },
  { 
    name: "Midnight Eclipse Dress", 
    category: "Couture", 
    image: "/assets/showcase-eclipse.jpeg", 
    color: "from-blue-500/20 to-purple-500/20",
    description: "Deep obsidian velvet textures accented with shimmering celestial maps and high-fidelity panel styling.",
    specs: { material: "Heavy Velvet", polycount: "2.1M Polys", resolution: "16K Texture", physics: "Weighted Fold" }
  },
  { 
    name: "Glacial Ice Gown", 
    category: "Avant-Garde", 
    image: "/assets/showcase-frozen.jpeg", 
    color: "from-cyan-500/20 to-blue-500/20",
    description: "Frost-sheened synthetic fabric panels capturing intricate crystal refraction and translucent structures.",
    specs: { material: "Translucent Vinyl", polycount: "1.6M Polys", resolution: "8K Texture", physics: "Rigid Panel" }
  },
  { 
    name: "Desert Sands Drape", 
    category: "Satin Line", 
    image: "/assets/showcase-desert.jpeg", 
    color: "from-yellow-500/20 to-amber-500/20",
    description: "Sand-textured raw silk dress visualization highlighting multi-directional lighting and natural pleats.",
    specs: { material: "Raw Silk", polycount: "1.3M Polys", resolution: "8K Texture", physics: "Natural Pleat" }
  },
  { 
    name: "Stained Glass Silhouette", 
    category: "Couture", 
    image: "/assets/gallery-stained-glass.jpeg", 
    color: "from-fuchsia-500/20 to-pink-500/20",
    description: "Mosaic pattern mappings resembling cathedral glass window textures draped over a structured silhouette.",
    specs: { material: "Poly-Mesh Blend", polycount: "1.9M Polys", resolution: "16K Texture", physics: "Stiff Shell" }
  },
  { 
    name: "Deep Velvet Wrap", 
    category: "Haute Couture", 
    image: "/assets/showcase-velvet.jpeg", 
    color: "from-violet-500/20 to-purple-500/20",
    description: "Heavy velvet draping simulation capturing deep shadow contrast, soft surface pile, and metallic embroidery.",
    specs: { material: "Velvet Velour", polycount: "2.3M Polys", resolution: "16K Texture", physics: "Deep Fold" }
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16 items-stretch">
        {/* Left Side: Lookbook Thumbnails List */}
        <div className="lg:col-span-5 flex flex-col gap-4 max-h-[620px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {products.map((product, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={product.name}
                onClick={() => setActiveIdx(i)}
                className={`text-left p-4 rounded-2xl transition-all duration-500 border flex items-center gap-4 group relative ${
                  isActive 
                    ? "bg-white/[0.06] border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
                    : "bg-transparent border-transparent hover:bg-white/[0.02]"
                }`}
              >
                {/* Image Thumbnail */}
                <div className={`relative w-20 h-24 rounded-lg overflow-hidden border transition-all duration-500 flex-shrink-0 ${
                  isActive ? "border-accent shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "border-white/10 group-hover:border-white/20"
                }`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1 block">
                    {product.category}
                  </span>
                  <h4 className="text-lg font-bold text-white tracking-tight truncate group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h4>
                  <p className="text-xs text-text-secondary line-clamp-2 mt-1 font-light leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Showcase Viewport with Interactive Spec Panel */}
        <div className="lg:col-span-7 flex flex-col gap-6 h-[620px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex flex-col justify-between"
            >
              {/* Glass Mockup Viewport */}
              <GlassCard 
                hoverEffect={true} 
                glowColor="accent"
                className="w-full flex-1 p-0 overflow-hidden flex flex-col justify-end relative bg-bg-card border border-white/[0.04] rounded-3xl"
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

              {/* Dynamic Tech Spec Panel (Figma Workspace Style) */}
              <div className="grid grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">Fabric Material</span>
                  <span className="text-sm font-semibold text-white">{activeProduct.specs.material}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">Drape Physics</span>
                  <span className="text-sm font-semibold text-white">{activeProduct.specs.physics}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">Texture Res</span>
                  <span className="text-sm font-semibold text-white">{activeProduct.specs.resolution}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">Mesh Count</span>
                  <span className="text-sm font-semibold text-white">{activeProduct.specs.polycount}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
