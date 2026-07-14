"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";

const galleryItems = [
  { src: "/assets/gallery-stained-glass.jpeg", label: "Stained Glass Couture", span: "col-span-2 row-span-2", category: "Design Breakdown" },
  { src: "/assets/product-render-1.jpeg", label: "360° Product Render", span: "col-span-2 row-span-1", category: "Product Render" },
  { src: "/assets/showcase-pink-silk.jpeg", label: "Pink Silk Visualization", span: "col-span-1 row-span-2", category: "Lifestyle" },
  { src: "/assets/gallery-cobalt.jpeg", label: "Cobalt Gold Halo", span: "col-span-1 row-span-1", category: "Concept" },
  { src: "/assets/showcase-velvet.jpeg", label: "Green Velvet Render", span: "col-span-1 row-span-1", category: "Lifestyle" },
  { src: "/assets/gallery-oceanic.jpeg", label: "Oceanic Theme Design", span: "col-span-1 row-span-1", category: "Concept" },
  { src: "/assets/product-render-2.jpeg", label: "Multi-Angle Mockup", span: "col-span-2 row-span-1", category: "Product Render" },
  { src: "/assets/gallery-gothic.jpeg", label: "Gothic Cathedral Gown", span: "col-span-1 row-span-1", category: "Design" },
  { src: "/assets/showcase-phoenix.jpeg", label: "Phoenix Gown", span: "col-span-1 row-span-1", category: "Lifestyle" },
  { src: "/assets/gallery-cherry-blossom.jpeg", label: "Cherry Blossom Theme", span: "col-span-1 row-span-1", category: "Concept" },
  { src: "/assets/product-render-3.jpeg", label: "Production Ready View", span: "col-span-1 row-span-1", category: "Manufacturing" },
];

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title="See What's Possible"
        subtitle="Every image below was generated using AI-powered product visualization — the same technology powering Design Engine."
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium text-accent">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          AI-generated visualizations
        </span>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className={`${item.span} relative overflow-hidden rounded-2xl group cursor-pointer`}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[10px] uppercase tracking-widest text-accent/80 mb-1 block">
                {item.category}
              </span>
              <span className="text-sm font-medium text-white">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Showcase strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-12"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted mb-6 text-center">
          Lifestyle Visualizations
        </p>
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { src: "/assets/showcase-desert.jpeg", label: "Desert Courtyard" },
            { src: "/assets/showcase-eclipse.jpeg", label: "Solar Eclipse" },
            { src: "/assets/showcase-frozen.jpeg", label: "Frozen Tundra" },
            { src: "/assets/showcase-patterned.jpeg", label: "Patterned Gown" },
            { src: "/assets/showcase-spiderman.jpeg", label: "Pop Culture" },
            { src: "/assets/showcase-spiderman-studio.jpeg", label: "Studio Render" },
            { src: "/assets/gallery-forest.jpeg", label: "Forest Moss" },
            { src: "/assets/gallery-tundra.jpeg", label: "Tundra Theme" },
            { src: "/assets/gallery-starry.jpeg", label: "Starry Aesthetic" },
            { src: "/assets/gallery-desert-sands.jpeg", label: "Desert Sands" },
            { src: "/assets/gallery-mythical.jpeg", label: "Ancient Mythical" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex-shrink-0 relative w-48 h-64 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="192px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs font-medium text-white">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
