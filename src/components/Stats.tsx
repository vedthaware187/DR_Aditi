"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUsers, FaClock, FaStar } from "react-icons/fa";

interface StatItem {
  icon: React.ReactNode;
  target: number;
  suffix: string;
  label: string;
  isDecimal?: boolean;
}

const stats: StatItem[] = [
  {
    icon: <FaCalendarAlt className="text-2xl text-primary" />,
    target: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: <FaUsers className="text-2xl text-primary" />,
    target: 2000,
    suffix: "+",
    label: "Happy Patients",
  },
  {
    icon: <FaClock className="text-2xl text-primary" />,
    target: 15000,
    suffix: "+",
    label: "Consultation Hours",
  },
  {
    icon: <FaStar className="text-2xl text-gold" />,
    target: 4.9,
    suffix: "",
    label: "Google Rating",
    isDecimal: true,
  },
];

function useCountUp(
  target: number,
  isDecimal: boolean,
  shouldStart: boolean,
  duration = 2000
) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    let rafId: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = eased * target;

      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [shouldStart, target, isDecimal, duration]);

  return count;
}

function StatCard({
  stat,
  isVisible,
  isLast,
}: {
  stat: StatItem;
  isVisible: boolean;
  isLast: boolean;
}) {
  const count = useCountUp(stat.target, !!stat.isDecimal, isVisible);

  const displayValue = stat.isDecimal ? count.toFixed(1) : count.toLocaleString();

  return (
    <div
      className={`flex flex-col items-center gap-3 py-6 md:py-8 px-4 ${
        !isLast ? "md:border-r md:border-gray-200" : ""
      }`}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        {stat.icon}
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-primary">
          {displayValue}
          {stat.suffix}
        </div>
        <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
      </div>
    </div>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    []
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <div className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl mx-auto glass rounded-2xl shadow-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
