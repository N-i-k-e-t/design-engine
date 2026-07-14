"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

const showcaseImages = [
  "/assets/product-render-1.jpeg",
  "/assets/product-render-2.jpeg",
  "/assets/product-render-3.jpeg",
  "/assets/gallery-stained-glass.jpeg",
];

export default function TrustSection() {
  return (
    <SectionWrapper bgVariant="secondary" className="py-16 md:py-24">
      <div className="space-y-16">
        {/* Showcase Strip */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-medium uppercase tracking-[0.2em] text-text-muted mb-8"
          >
            Powered by AI — Built for Professionals
          </motion.p>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {showcaseImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex-shrink-0 relative w-72 h-44 rounded-xl overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Design Engine showcase ${i + 1}`}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
