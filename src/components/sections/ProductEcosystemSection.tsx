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
    description: "Photorealistic fabric renders featuring precise thread weave mappings, shadow folds, and seam contours." 
  },
  { 
    name: "Premium Hoodie", 
    category: "Apparel", 
    image: "/assets/showcase-pink-silk.jpeg", 
    color: "from-purple-500/20 to-pink-500/20",
    description: "Garment visualization supporting heavyweight cotton textures, custom embroidery, and drawstring physics." 
  },
  { 
    name: "Classic Cap", 
    category: "Accessories", 
    image: "/assets/showcase-desert.jpeg", 
    color: "from-green-500/20 to-teal-500/20",
    description: "Structured headwear mapping with front panel alignments, visor seam lines, and custom color accents." 
  },
  { 
    name: "Steel Flask", 
    category: "Bottles", 
    image: "/assets/product-render-2.jpeg", 
    color: "from-cyan-500/20 to-blue-500/20",
    description: "Metallic shaders capturing soft light reflections, brushed aluminum materials, and laser-engraved prints." 
  },
  { 
    name: "Eco Packaging Box", 
    category: "Packaging", 
    image: "/assets/product-render-1.jpeg", 
    color: "from-rose-500/20 to-red-500/20",
    description: "Cardboard kraft folding mockups containing correct paperboard thicknesses, seam alignments, and UV print masks." 
  },
  { 
    name: "Streetwear Sneakers", 
    category: "Footwear", 
    image: "/assets/product-render-3.jpeg", 
    color: "from-teal-500/20 to-cyan-500/20",
    description: "Multi-material athletic footwear visualization mapping panel textures, custom soles, and detailed stitch lines." 
  },
  { 
    name: "Leather Journal", 
    category: "Merchandise", 
    image: "/assets/showcase-frozen.jpeg", 
    color: "from-emerald-500/20 to-green-500/20",
    description: "Hardcover notebook simulation with debossed logo stamps, fine leather texture shaders, and page bindings." 
  },
  { 
    name: "Exhibition Poster", 
    category: "Prints", 
    image: "/assets/showcase-patterned.jpeg", 
    color: "from-fuchsia-500/20 to-pink-500/20",
    description: "High-resolution graphic presentation on premium matte papers, frame shadows, and natural lighting." 
  },
  { 
    name: "Luxury Velvet Box", 
    category: "Packaging", 
    image: "/assets/showcase-velvet.jpeg", 
    color: "from-violet-500/20 to-purple-500/20",
    description: "High-end product packaging featuring deep pile velvet shaders, embossed gold foil accents, and hinge physics." 
  },
];

export default function ProductEcosystemSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProduct = products[activeIdx];

  return (
    <SectionWrapper id="products" bgVariant="secondary">
      <SectionHeading
        eyebrow="Product Ecosystem"
        title="One Upload. Every Product."
        subtitle="Instantly manifest your designs across our hyper-realistic 3D product library in seconds."
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
                    <span className="text-text-muted text-xs font-mono">3D High-Fidelity Mockup</span>
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
