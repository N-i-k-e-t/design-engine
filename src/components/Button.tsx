"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import MagneticButton from "./MagneticButton";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  icon,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-accent to-accent-purple text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.7)] hover:-translate-y-0.5 border border-white/10",
    secondary:
      "bg-white/[0.05] text-text-primary backdrop-blur-md border border-white/10 hover:bg-white/[0.1] hover:border-white/20 hover:-translate-y-0.5 shadow-sm",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/[0.04]",
    outline:
      "border border-white/10 text-text-primary hover:bg-white/[0.03] hover:border-white/20 hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm font-medium",
    lg: "px-8 py-4 text-base font-medium",
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed
    ${sizes[size]}
    ${variants[variant]}
    ${className}
  `.trim();

  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {icon && !loading && icon}
      {children}
    </>
  );

  const element = href ? (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      {content}
    </motion.a>
  ) : (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );

  return <MagneticButton>{element}</MagneticButton>;
}
