"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bgVariant?: "primary" | "secondary";
  noPadding?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  bgVariant = "primary",
  noPadding = false,
}: SectionWrapperProps) {
  const bg = bgVariant === "secondary" ? "bg-bg-secondary" : "bg-bg-primary";

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${bg} ${
        noPadding ? "" : "py-24 md:py-32 lg:py-40"
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={noPadding ? "" : "max-w-7xl mx-auto px-6 lg:px-8"}
      >
        {children}
      </motion.div>
    </section>
  );
}
