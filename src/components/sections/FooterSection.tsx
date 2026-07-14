"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { label: "Roadmap", href: "#roadmap" },
    { label: "Features", href: "#features" },
    { label: "Manufacturing", href: "#manufacturing" },
    { label: "FAQ", href: "#faq" },
  ],
  community: [
    { label: "Discord", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter / X", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-bg-primary border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                  <path d="M2 4L8 1L14 4V12L8 15L2 12V4Z" fill="currentColor" fillOpacity="0.9"/>
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight text-text-primary">
                Design Engine
              </span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm mb-6">
              The AI Operating System for Product Design.
              Upload once, visualize everywhere, manufacture confidently.
            </p>

            {/* Newsletter */}
            {!subscribed ? (
              <form onSubmit={handleNewsletter} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/50 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-purple text-white text-sm font-medium hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-sm text-success flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Subscribed! We&apos;ll keep you posted.
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © 2026 Design Engine. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.a
            href="#hero"
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-xs text-text-muted hover:text-text-primary transition-colors duration-300"
          >
            Back to top
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
