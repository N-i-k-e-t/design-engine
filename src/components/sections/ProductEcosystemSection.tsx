"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";

const products = [
  { 
    name: "Oversized T-Shirt", 
    category: "Apparel", 
    image: "/assets/showcase-spiderman-studio.jpeg", 
    color: "from-blue-500/20 to-purple-500/20",
    description: "Relaxed streetwear fit mapping fabric folds, cotton grain texture, and shoulder seam drop." 
  },
  { 
    name: "Heavyweight Hoodie", 
    category: "Apparel", 
    image: "/assets/showcase-pink-silk.jpeg", 
    color: "from-purple-500/20 to-pink-500/20",
    description: "Thick fleece texture rendering with realistic double-lined hood drape and pocket seams." 
  },
  { 
    name: "Structured Sweatshirt", 
    category: "Apparel", 
    image: "/assets/gallery-cobalt.jpeg", 
    color: "from-cyan-500/20 to-blue-500/20",
    description: "French terry knit weave rendering with ribbed collar and cuff edge detailing." 
  },
  { 
    name: "Utility Bomber Jacket", 
    category: "Outerwear", 
    image: "/assets/gallery-forest.jpeg", 
    color: "from-green-500/20 to-teal-500/20",
    description: "Nylon sheen simulation with hardware metal zippers, pocket flaps, and elastic waistbands." 
  },
  { 
    name: "Avant-Garde Garment", 
    category: "Couture", 
    image: "/assets/gallery-cherry-blossom.jpeg", 
    color: "from-rose-500/20 to-red-500/20",
    description: "Flowing fabric drape simulation capturing complex folds, light translucent weaves, and designer cuts." 
  },
  { 
    name: "Streetwear Cargo Pants", 
    category: "Bottoms", 
    image: "/assets/gallery-oceanic.jpeg", 
    color: "from-teal-500/20 to-cyan-500/20",
    description: "Heavy canvas cotton simulation with pocket stitches, strap buckles, and natural leg drape." 
  },
  { 
    name: "Cropped Graphic Top", 
    category: "Apparel", 
    image: "/assets/gallery-mythical.jpeg", 
    color: "from-emerald-500/20 to-green-500/20",
    description: "Ribbed crop top model capturing dynamic chest fit, side seams, and elastic stretch mapping." 
  },
  { 
    name: "Puffer Jacket", 
    category: "Outerwear", 
    image: "/assets/gallery-gothic.jpeg", 
    color: "from-slate-500/20 to-gray-500/20",
    description: "Insulated down jacket visualization simulating realistic volume panels, zipper lines, and synthetic nylon sheen." 
  },
];

export default function ProductEcosystemSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProduct = products[activeIdx];

  return (
    <SectionWrapper id="products" bgVariant="secondary">
      <SectionHeading
        eyebrow="Apparel Collection"
        title="One Design. The Entire Line."
        subtitle="Instantly map your artwork across our hyper-realistic 3D apparel catalog with fabric drape and fold physics."
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
                    <span className="text-text-muted text-xs font-mono">3D Fabric Simulation</span>
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
