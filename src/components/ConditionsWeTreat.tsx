"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeartbeat,
  FaFemale,
  FaCut,
  FaHandHoldingHeart,
  FaWind,
  FaBrain,
  FaAppleAlt,
  FaBone,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { GiLungs } from "react-icons/gi";
import type { IconType } from "react-icons";

interface Condition {
  icon: IconType;
  title: string;
  description: string;
  wikiQuery: string;
}

const conditions: Condition[] = [
  {
    icon: FaHeartbeat,
    title: "Thyroid Disorders",
    description: "Hypothyroidism, Hyperthyroidism & Hashimoto's restore thyroid balance naturally.",
    wikiQuery: "Thyroid_disease"
  },
  {
    icon: FaFemale,
    title: "PCOD / PCOS",
    description: "Regulate cycles, balance hormones & manage PCOD without birth control pills.",
    wikiQuery: "Polycystic_ovary_syndrome"
  },
  {
    icon: FaCut,
    title: "Hair Loss",
    description: "Treat the root cause of hair fall thyroid, PCOD, stress or nutritional gaps.",
    wikiQuery: "Hair_loss"
  },
  {
    icon: FaHandHoldingHeart,
    title: "Skin Disorders",
    description: "Eczema, Psoriasis, Acne & Vitiligo heal your skin from the inside out.",
    wikiQuery: "Skin_condition"
  },
  {
    icon: FaWind,
    title: "Allergies",
    description: "Stop managing allergies. Retrain your immune system to respond normally.",
    wikiQuery: "Allergy"
  },
  {
    icon: GiLungs,
    title: "Respiratory",
    description: "Asthma, Bronchitis, Sinusitis breathe easy without lifelong inhalers.",
    wikiQuery: "Respiratory_disease"
  },
  {
    icon: FaBrain,
    title: "Migraine",
    description: "Reduce migraine frequency by 50-80% address triggers, not just pain.",
    wikiQuery: "Migraine"
  },
  {
    icon: FaAppleAlt,
    title: "Digestive",
    description: "IBS, GERD, Bloating restore gut health and digestive comfort.",
    wikiQuery: "Gastrointestinal_disease"
  },
  {
    icon: FaBone,
    title: "Joint Pain",
    description: "Arthritis, Spondylosis, Sciatica move without pain, live without limits.",
    wikiQuery: "Arthralgia"
  },
  {
    icon: FaFemale,
    title: "Gynaecological Issues",
    description: "Menstrual Irregularities, Fibroids, Menopause transition smoothly with natural care.",
    wikiQuery: "Gynaecology"
  },
  {
    icon: FaWind,
    title: "Tonsillitis & Throat",
    description: "Recurrent Tonsillitis, Pharyngitis prevent frequent throat infections.",
    wikiQuery: "Tonsillitis"
  },
  {
    icon: FaHeartbeat,
    title: "Long-Standing Illnesses",
    description: "Chronic Diseases, Metabolic Issues, Immunity find deep, lasting healing.",
    wikiQuery: "Chronic_condition"
  }
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
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [wikiData, setWikiData] = useState<{ title: string; extract: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (selectedCondition) {
      setIsLoading(true);
      setError(false);
      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${selectedCondition.wikiQuery}`)
        .then(res => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then(data => {
          setWikiData({ title: data.title, extract: data.extract });
          setIsLoading(false);
        })
        .catch(err => {
          console.error(err);
          setError(true);
          setIsLoading(false);
        });
    } else {
      setWikiData(null);
    }
  }, [selectedCondition]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedCondition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCondition]);

  return (
    <section id="treatments" className="section-padding bg-surface relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-bold text-primary-dark sm:text-4xl lg:text-5xl">
            Conditions We Treat with{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mt-6 text-lg leading-relaxed text-text-secondary text-justify">
            Homoeopathy excels where other systems struggle chronic conditions
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
              className="group cursor-pointer rounded-2xl border-2 border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg flex flex-col"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <condition.icon className="text-2xl text-primary" />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-semibold text-primary-dark">
                {condition.title}
              </h3>

              {/* Description */}
              <p className="mt-2 flex-grow text-text-secondary leading-relaxed text-justify">
                {condition.description}
              </p>

              {/* Learn More button */}
              <button
                onClick={() => setSelectedCondition(condition)}
                aria-label={`Learn more about ${condition.title} treatment`}
                className="mt-4 self-start inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-dark hover:underline"
              >
                Learn More →
              </button>
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
          <p className="mb-6 text-lg text-text-secondary text-justify">
            Don&apos;t see your condition?{" "}
            <span className="font-semibold text-primary-dark">
              Homoeopathy treats the person, not just the disease.
            </span>
          </p>
          <a
            href="https://wa.me/917798756622?text=Hi%20Dr.%20Wad%2C%20I%20have%20a%20question%20about%20my%20condition."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask about your condition via WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
          >
            Ask About Your Condition
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCondition && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCondition(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-[101] flex flex-col max-h-[85vh]"
            >
              {/* Modal Header */}
              <div className="bg-primary-light p-6 pb-4 flex items-center justify-between border-b border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                    <selectedCondition.icon className="text-xl" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary-dark">
                    {selectedCondition.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCondition(null)}
                  className="p-2 text-primary hover:bg-white/50 rounded-full transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-10">
                    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
                    <p className="text-text-secondary animate-pulse">Fetching live information...</p>
                  </div>
                ) : error ? (
                  <div className="py-6 text-center">
                    <p className="text-red-500 mb-2">Failed to load information.</p>
                    <p className="text-text-secondary text-sm">Please check your internet connection.</p>
                  </div>
                ) : wikiData ? (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-primary-dark">{wikiData.title}</h4>
                    <p className="text-text-secondary leading-relaxed text-justify">
                      {wikiData.extract}
                    </p>
                    <p className="text-xs text-gray-400 mt-4 italic">Source: Wikipedia</p>
                  </div>
                ) : null}

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-primary-dark mb-2">How Homoeopathy Helps</h4>
                  <p className="text-text-secondary leading-relaxed text-justify">
                    {selectedCondition.description} Dr. Wad uses a holistic approach to treat the root cause of {selectedCondition.title.toLowerCase()} for lasting, natural relief without side effects.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 pt-0 mt-auto bg-white">
                <a
                  href={`https://wa.me/917798756622?text=${encodeURIComponent(`Hi Dr. Wad, I would like to know more about homoeopathic treatment for ${selectedCondition.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3.5 rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  <FaWhatsapp className="text-lg" />
                  Consult Dr. Wad
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
