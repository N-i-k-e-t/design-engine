"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

const stats = [
  { value: "10,000+", label: "Waitlist Signups" },
  { value: "50+", label: "Industries Served" },
  { value: "13+", label: "Product Categories" },
  { value: "July 22", label: "Launch Date" },
];

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

        {/* Divider */}
        <div className="section-divider" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
