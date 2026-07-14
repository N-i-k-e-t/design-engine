"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";

const products = [
  { name: "Oversized T-Shirt", icon: "👕", color: "from-blue-500/20 to-purple-500/20" },
  { name: "Hoodie", icon: "🧥", color: "from-purple-500/20 to-pink-500/20" },
  { name: "Cap", icon: "🧢", color: "from-green-500/20 to-teal-500/20" },
  { name: "Bottle", icon: "🍶", color: "from-cyan-500/20 to-blue-500/20" },
  { name: "Mug", icon: "☕", color: "from-amber-500/20 to-orange-500/20" },
  { name: "Packaging", icon: "📦", color: "from-rose-500/20 to-red-500/20" },
  { name: "Shopping Bag", icon: "🛍️", color: "from-violet-500/20 to-purple-500/20" },
  { name: "Phone Case", icon: "📱", color: "from-indigo-500/20 to-blue-500/20" },
  { name: "Notebook", icon: "📓", color: "from-emerald-500/20 to-green-500/20" },
  { name: "Sticker", icon: "🏷️", color: "from-yellow-500/20 to-amber-500/20" },
  { name: "Poster", icon: "🖼️", color: "from-fuchsia-500/20 to-pink-500/20" },
  { name: "Shoes", icon: "👟", color: "from-teal-500/20 to-cyan-500/20" },
  { name: "Jacket", icon: "🧥", color: "from-slate-500/20 to-gray-500/20" },
];

export default function ProductEcosystemSection() {
  return (
    <SectionWrapper id="products" bgVariant="secondary">
      <SectionHeading
        eyebrow="Product Ecosystem"
        title="One Upload. Every Product."
        subtitle="Upload your design once and instantly visualize it across 13+ product categories — with photorealistic accuracy."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              y: -12,
              rotateX: 5,
              rotateY: -5,
              transition: { duration: 0.3 },
            }}
            className="group cursor-pointer"
            style={{ perspective: "800px" }}
          >
            <div className="glass rounded-2xl p-5 md:p-6 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500 hover:shadow-xl hover:shadow-accent/[0.08]">
              {/* Product placeholder */}
              <div className={`aspect-square rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500`}>
                <span className="text-4xl md:text-5xl">{product.icon}</span>
              </div>
              <p className="text-sm font-medium text-text-primary text-center">
                {product.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
