"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPlus } from "react-icons/fa";
import Image from "next/image";

const trustBadges = [
  { icon: "⭐", text: "4.9 Google Rating" },
  { icon: "👨‍👩‍👧‍👦", text: "2000+ Patients" },
  { icon: "🎓", text: "MD (Homoeopathy)" },
  { icon: "⏱️", text: "10+ Years Exp." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50/30"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gold/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-20 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left Column Text Content (60%) */}
          <motion.div
            className="lg:col-span-3 space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUpVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                ✨ Trusted Homoeopathic Care in Pune
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpVariants}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              <span className="text-primary-dark">Synergy</span>
              <br />
              <span className="gradient-text">Clinic</span>
            </motion.h1>

            <motion.div variants={fadeUpVariants} className="mt-6 mb-2">
              <span className="text-xl md:text-2xl font-bold text-primary font-serif">
                &quot;Healing in Harmony Wellness for Life&quot;
              </span>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUpVariants}
              className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed"
            >
              Expert Homoeopathic treatment by Dr. Aditi A. Wad BHMS,
              MD(Hom), PGDCR helping families across Pune find lasting
              relief, naturally and safely.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#appointment"
                className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-semibold text-base shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
              >
                Book Appointment
              </a>
              <a
                href="https://wa.me/917798756622?text=Hi%20Dr.%20Wad!%20I%27d%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold text-base border-2 border-primary/20 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all duration-200"
                aria-label="WhatsApp Us"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-foreground/80"
                >
                  <span className="text-base">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column Visual (40%) */}
          <motion.div
            className="lg:col-span-2 flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Main Blob */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="blob w-full h-full bg-gradient-to-br from-primary to-accent opacity-90 flex items-center justify-center">
                {/* Doctor Placeholder */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/doctor_portrait_hd_400dpi.jpg"
                    alt="Dr. Aditi Wad"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 256px"
                    priority
                  />
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gold/20 animate-float"
                style={{ animationDelay: "0s" }}
                aria-hidden="true"
              />
              <div
                className="absolute top-1/4 -left-6 w-8 h-8 rounded-full bg-primary/20 animate-float"
                style={{ animationDelay: "1s" }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-2 right-1/4 w-6 h-6 rounded-full bg-accent/30 animate-float"
                style={{ animationDelay: "2s" }}
                aria-hidden="true"
              />
              <div
                className="absolute top-8 right-8 text-primary/20 animate-float"
                style={{ animationDelay: "0.5s" }}
                aria-hidden="true"
              >
                <FaPlus className="text-2xl" />
              </div>
              <div
                className="absolute bottom-12 -left-2 text-accent/20 animate-float"
                style={{ animationDelay: "1.5s" }}
                aria-hidden="true"
              >
                <FaPlus className="text-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
