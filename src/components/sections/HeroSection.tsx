"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";
import CountdownTimer from "../CountdownTimer";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* ===== Background Video ===== */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          poster="/assets/hero-bg.jpeg"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Luxury dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050709] via-[#050709]/90 to-[#050709]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050709] via-transparent to-[#050709]/80" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-accent/[0.05] blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent-purple/[0.05] blur-[120px] animate-[float_10s_ease-in-out_infinite_2s]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[11px] font-medium text-accent uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                Pre-Launch — July 22, 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tighter leading-[1.05]"
            >
              <span className="text-white drop-shadow-sm">Design Once.</span>
              <br />
              <span className="gradient-text-accent">Visualize Everywhere.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed"
            >
              Create photorealistic product previews, manufacturing-ready outputs
              and AI-powered mockups — all from a single design.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 md:mt-10 flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="#waitlist">
                Join Early Access
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#how-it-works"
                icon={
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                }
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 md:mt-16"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
                Launching in
              </p>
              <CountdownTimer />
            </motion.div>
          </div>

          {/* Right — Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-accent">
              <Image
                src="/assets/hero-bg.jpeg"
                alt="AI-powered fashion visualization — Design Engine"
                width={700}
                height={500}
                className="rounded-2xl object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs text-text-secondary">AI-Generated Product Visualization</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
