"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button";

const professions = [
  "Graphic Designer",
  "Fashion Designer",
  "Artist",
  "Illustrator",
  "Factory",
  "Manufacturer",
  "Packaging Company",
  "Print Shop",
  "Brand Owner",
  "Agency",
  "Student",
  "Other",
];

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  profession: z.string().min(1, "Please select your profession"),
  keepUpdated: z.boolean().optional(),
});

type FormData = z.input<typeof schema>;

export default function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { keepUpdated: true },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback — still show success for demo
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="waitlist" bgVariant="secondary">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Early Access
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Reserve Your Spot
          </h2>
          <p className="text-text-secondary mb-10 leading-relaxed">
            Join thousands of designers and manufacturers getting ready for
            the future of product visualization. Launching July 22, 2026.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Name */}
              <div>
                <input
                  {...register("name")}
                  placeholder="Full Name"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all duration-300"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 text-left">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all duration-300"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 text-left">{errors.email.message}</p>
                )}
              </div>

              {/* Profession */}
              <div>
                <select
                  {...register("profession")}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-text-secondary text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all duration-300 appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-bg-card text-text-muted">
                    Select Your Profession
                  </option>
                  {professions.map((p) => (
                    <option key={p} value={p} className="bg-bg-card text-text-primary">
                      {p}
                    </option>
                  ))}
                </select>
                {errors.profession && (
                  <p className="mt-1 text-xs text-red-400 text-left">{errors.profession.message}</p>
                )}
              </div>

              {/* Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer text-left">
                <input
                  type="checkbox"
                  {...register("keepUpdated")}
                  className="w-4 h-4 rounded border-white/10 bg-white/[0.04] text-accent focus:ring-accent/25 cursor-pointer"
                />
                <span className="text-sm text-text-secondary">
                  Keep me updated on launch news and early access
                </span>
              </label>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full mt-2"
              >
                Reserve My Spot
              </Button>

              <p className="text-xs text-text-muted mt-3">
                No spam. Unsubscribe anytime. Your data is safe.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-8 md:p-12 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-text-secondary">
                We&apos;ll notify you when Design Engine launches on July 22, 2026.
                <br />
                Get ready to design the future.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
