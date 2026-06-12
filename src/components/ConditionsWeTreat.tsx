"use client";

import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaFemale,
  FaCut,
  FaHandHoldingHeart,
  FaWind,
  FaBrain,
  FaAppleAlt,
  FaBone,
} from "react-icons/fa";
import { GiLungs } from "react-icons/gi";
import type { IconType } from "react-icons";

interface Condition {
  icon: IconType;
  title: string;
  description: string;
}

const conditions: Condition[] = [
  {
    icon: FaHeartbeat,
    title: "Thyroid Disorders",
    description:
      "Hypothyroidism, hyperthyroidism & Hashimoto's — restore thyroid balance naturally.",
  },
  {
    icon: FaFemale,
    title: "PCOD / PCOS",
    description:
      "Regulate cycles, balance hormones & manage PCOD without birth control pills.",
  },
  {
    icon: FaCut,
    title: "Hair Loss",
    description:
      "Treat the root cause of hair fall — thyroid, PCOD, stress or nutritional gaps.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Skin Disorders",
    description:
      "Eczema, psoriasis, acne & vitiligo — heal your skin from the inside out.",
  },
  {
    icon: FaWind,
    title: "Allergies",
    description:
      "Stop managing allergies. Retrain your immune system to respond normally.",
  },
  {
    icon: GiLungs,
    title: "Respiratory",
    description:
      "Asthma, bronchitis, sinusitis — breathe easy without lifelong inhalers.",
  },
  {
    icon: FaBrain,
    title: "Migraine",
    description:
      "Reduce migraine frequency by 50-80% — address triggers, not just pain.",
  },
  {
    icon: FaAppleAlt,
    title: "Digestive",
    description:
      "IBS, GERD, bloating — restore gut health and digestive comfort.",
  },
  {
    icon: FaBone,
    title: "Joint Pain",
    description:
      "Arthritis, spondylosis, sciatica — move without pain, live without limits.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ConditionsWeTreat() {
  return (
    <section id="treatments" className="section-padding bg-surface">
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
            Conditions We Treat with{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Homoeopathy excels where other systems struggle — chronic conditions
            that haven&apos;t responded to conventional treatment.
          </p>
        </motion.div>

        {/* Conditions Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {conditions.map((condition) => (
            <motion.div
              key={condition.title}
              variants={cardVariants}
              className="group cursor-pointer rounded-2xl border-2 border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <condition.icon className="text-2xl text-primary" />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {condition.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-text-secondary leading-relaxed">
                {condition.description}
              </p>

              {/* Learn More link */}
              <a
                href="https://wa.me/919XXXXXXXXX?text=Hi%20Dr.%20Wad%2C%20I%20would%20like%20to%20know%20more%20about%20treatment%20for%20"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Learn more about ${condition.title} treatment`}
                className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-dark hover:underline"
              >
                Learn More →
              </a>
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
          <p className="mb-6 text-lg text-text-secondary">
            Don&apos;t see your condition?{" "}
            <span className="font-semibold text-slate-900">
              Homoeopathy treats the person, not just the disease.
            </span>
          </p>
          <a
            href="https://wa.me/919XXXXXXXXX?text=Hi%20Dr.%20Wad%2C%20I%20have%20a%20question%20about%20my%20condition."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask about your condition via WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
          >
            Ask About Your Condition
          </a>
        </motion.div>
      </div>
    </section>
  );
}
