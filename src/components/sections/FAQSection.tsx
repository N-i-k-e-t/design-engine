"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";

const faqs = [
  {
    question: "What is Design Engine?",
    answer:
      "Design Engine is an AI-powered product visualization, mockup generation, and manufacturing platform. Upload your artwork once and instantly preview it on apparel, packaging, accessories, and more — with manufacturing-ready outputs.",
  },
  {
    question: "Who is Design Engine for?",
    answer:
      "Design Engine is built for graphic designers, fashion designers, illustrators, artists, apparel brands, factories, manufacturers, print shops, packaging companies, agencies, and anyone who creates or produces physical products.",
  },
  {
    question: "When does Design Engine launch?",
    answer:
      "Design Engine launches on July 22, 2026. Join the waitlist today to get early access and be among the first to experience the platform.",
  },
  {
    question: "Is Design Engine a print-on-demand service?",
    answer:
      "No. Design Engine is not a print-on-demand platform. It's a professional visualization and manufacturing-ready output tool. You maintain full control of your production pipeline — we provide the design intelligence.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "Design Engine supports all major design formats including PNG, JPG, SVG, AI, PSD, PDF, TIFF, and EPS. You can export manufacturing-ready files in multiple formats including AI, PDF, SVG, and TIFF.",
  },
  {
    question: "How does AI placement work?",
    answer:
      "Our AI analyzes your artwork's composition, colors, and layout to intelligently position it on each product — respecting seams, curves, print boundaries, and safe zones automatically.",
  },
  {
    question: "Will there be a free plan?",
    answer:
      "Pricing details will be announced closer to launch. Waitlist members will receive exclusive early-bird pricing and extended trial access. Join the waitlist to be the first to know.",
  },
  {
    question: "Is my design data secure?",
    answer:
      "Absolutely. All uploads are encrypted in transit and at rest. Your designs are never shared, sold, or used for training. You retain 100% ownership of your intellectual property.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="border-b border-white/[0.06] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-text-primary group-hover:text-accent transition-colors duration-300 pr-8">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-6 h-6 rounded-full glass flex items-center justify-center text-text-muted"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 text-sm md:text-base text-text-secondary leading-relaxed pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <SectionWrapper id="faq" bgVariant="secondary">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Design Engine."
      />

      <div className="max-w-3xl mx-auto glass rounded-2xl px-6 md:px-8">
        {faqs.map((faq, i) => (
          <FAQItem key={faq.question} faq={faq} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
