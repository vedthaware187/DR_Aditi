"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaSearch,
  FaChild,
  FaFingerprint,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Benefit {
  icon: IconType;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: FaShieldAlt,
    title: "No Side Effects",
    description:
      "Homoeopathic medicines are natural, non-toxic, and non-addictive. Safe for infants, pregnant women, and the elderly.",
  },
  {
    icon: FaSearch,
    title: "Root Cause Treatment",
    description:
      "We don't suppress symptoms. We find the origin of your condition and address it systematically for lasting results.",
  },
  {
    icon: FaChild,
    title: "Safe for All Ages",
    description:
      "From newborns to senior citizens — gentle medicine that works without compromising safety at any stage of life.",
  },
  {
    icon: FaFingerprint,
    title: "Personalized Medicine",
    description:
      "No two patients are alike. Every prescription is custom-designed based on your unique constitution and medical history.",
  },
  {
    icon: FaClipboardCheck,
    title: "Treats Chronic Conditions",
    description:
      "Especially effective for conditions that conventional medicine struggles with — PCOD, thyroid, skin, allergies & more.",
  },
  {
    icon: FaUsers,
    title: "Complements Other Treatments",
    description:
      "Homoeopathy works alongside conventional medicine. You never have to choose between getting better and staying safe.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhyHomeopathy() {
  return (
    <section
      id="why-homeopathy"
      className="section-padding bg-gradient-to-b from-white to-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="gradient-text">Homoeopathic Treatment?</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            A 200-year-old science backed by millions of successful cases
            worldwide.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="glass-dark group rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              {/* Icon Circle */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <benefit.icon className="text-2xl text-primary" />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="mt-2 leading-relaxed text-text-secondary">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://wa.me/919XXXXXXXXX?text=Hi%20Dr.%20Wad%2C%20I%20want%20to%20explore%20homoeopathic%20treatment."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore homoeopathic treatment via WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
          >
            Explore Treatment Options
          </a>
        </motion.div>
      </div>
    </section>
  );
}
