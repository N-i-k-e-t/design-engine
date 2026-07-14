"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";

const phases = [
  {
    status: "current",
    label: "Pre-Launch",
    date: "Now",
    description: "Building the waitlist, collecting feedback, and perfecting the platform.",
    features: ["Waitlist open", "Early access invites", "Community building"],
  },
  {
    status: "upcoming",
    label: "Beta",
    date: "July 2026",
    description: "Early access for waitlist members. Test, explore, and shape the product.",
    features: ["Core product features", "AI mockup generation", "Basic exports"],
  },
  {
    status: "upcoming",
    label: "Public Launch",
    date: "Q3 2026",
    description: "Full platform launch with all features and manufacturing capabilities.",
    features: ["Manufacturing outputs", "3D viewer", "Team collaboration"],
  },
  {
    status: "future",
    label: "Marketplace",
    date: "Q4 2026",
    description: "Buy and sell product templates, mockup packs, and design assets.",
    features: ["Template marketplace", "Designer profiles", "Revenue sharing"],
  },
  {
    status: "future",
    label: "Enterprise",
    date: "2027",
    description: "Custom solutions for factories, brands, and large-scale operations.",
    features: ["Custom API", "White-label options", "Dedicated support"],
  },
];

export default function RoadmapSection() {
  return (
    <SectionWrapper id="roadmap">
      <SectionHeading
        eyebrow="Roadmap"
        title="The Journey Ahead"
        subtitle="We're building Design Engine in public. Here's what's coming."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Horizontal line (desktop) */}
        <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[1px] bg-white/[0.06]" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Node */}
              <div className="flex lg:justify-center mb-4 lg:mb-8">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    phase.status === "current"
                      ? "border-accent bg-accent/20 shadow-lg shadow-accent/30"
                      : phase.status === "upcoming"
                      ? "border-accent-purple/50 bg-accent-purple/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {phase.status === "current" && (
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  )}
                </div>
              </div>

              {/* Card */}
              <div
                className={`glass rounded-xl p-5 h-full ${
                  phase.status === "current"
                    ? "border-accent/20 glow-blue"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    {phase.date}
                  </span>
                  {phase.status === "current" && (
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-accent/10 text-accent rounded-full">
                      Now
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {phase.label}
                </h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {phase.description}
                </p>
                <ul className="space-y-1.5">
                  {phase.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-text-muted">
                      <span className={`w-1 h-1 rounded-full ${
                        phase.status === "current" ? "bg-accent" : "bg-text-muted/50"
                      }`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
