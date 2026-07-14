"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "purple" | "none";
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "none",
  delay = 0,
}: GlassCardProps) {
  const glowClass =
    glow === "blue"
      ? "glow-blue"
      : glow === "purple"
      ? "glow-purple"
      : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        hover
          ? {
              y: -8,
              transition: { duration: 0.3 },
            }
          : undefined
      }
      className={`glass rounded-2xl p-6 ${glowClass} ${
        hover
          ? "cursor-pointer hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
