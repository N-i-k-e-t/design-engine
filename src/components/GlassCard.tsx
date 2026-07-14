"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "accent" | "purple" | "success" | "none";
  hoverEffect?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "none",
  hoverEffect = true,
  delay = 0,
}: GlassCardProps) {
  const glowClasses = {
    accent: "group-hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]",
    purple: "group-hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)]",
    success: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]",
    none: "",
  };

  const borderGlowClasses = {
    accent: "group-hover:border-accent/40",
    purple: "group-hover:border-accent-purple/40",
    success: "group-hover:border-success/40",
    none: "group-hover:border-white/[0.15]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass rounded-2xl p-8 relative overflow-hidden group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hoverEffect ? "hover:-translate-y-2 hover:bg-white/[0.04]" : ""
      } ${hoverEffect ? glowClasses[glowColor] : ""} ${className}`}
    >
      {/* Inner highlight for 3D feel */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none border border-white/[0.05] ${borderGlowClasses[glowColor]} shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-colors duration-500`} />
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
