"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LAUNCH_DATE = new Date("2026-07-22T00:00:00").getTime();

interface TimeUnit {
  value: number;
  label: string;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: "Days" },
    { value: 0, label: "Hours" },
    { value: 0, label: "Minutes" },
    { value: 0, label: "Seconds" },
  ]);

  useEffect(() => {
    const calculate = () => {
      const now = Date.now();
      const diff = Math.max(0, LAUNCH_DATE - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft([
        { value: days, label: "Days" },
        { value: hours, label: "Hours" },
        { value: minutes, label: "Minutes" },
        { value: seconds, label: "Seconds" },
      ]);
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 md:gap-4">
      {timeLeft.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="glass rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold tabular-nums text-text-primary">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-[10px] md:text-xs font-medium uppercase tracking-widest text-text-muted">
            {unit.label}
          </span>
          {i < timeLeft.length - 1 && (
            <span className="hidden" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
