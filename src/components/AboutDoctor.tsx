"use client";

import { motion } from "framer-motion";
import {
  FaUserMd,
  FaGraduationCap,
  FaFlask,
  FaAward,
  FaCalendarCheck,
} from "react-icons/fa";
import Image from "next/image";

const credentials = [
  {
    icon: FaGraduationCap,
    label: "MD in Homoeopathy",
  },
  {
    icon: FaAward,
    label: "10+ Years Experience",
  },
];

export default function AboutDoctor() {
  return (
    <section id="about" className="section-padding bg-background transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-bold text-primary-dark sm:text-4xl lg:text-5xl">
            Meet Your Doctor
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Image Area (40% → 2/5) */}
          <motion.div
            className="relative lg:col-span-2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Decorative shapes */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-primary/10" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-accent/20" />

            {/* Image placeholder */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-light to-surface">
              <Image
                src="/doctor_portrait_hd_400dpi.jpg"
                alt="Dr. Aditi A. Wad"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Content (60% → 3/5) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            {/* Name */}
            <h3 className="font-serif text-2xl font-bold text-primary-dark sm:text-3xl">
              Dr. Aditi A. Wad
            </h3>

            {/* Credentials */}
            <p className="mt-2 text-lg font-medium text-primary text-justify">
              BHMS · MD (Homoeopathy) · PGDCR
            </p>

            {/* Credential Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="glass flex items-center gap-2 rounded-xl px-4 py-2.5"
                >
                  <cred.icon className="text-lg text-primary" />
                  <span className="text-sm font-medium text-slate-700">
                    {cred.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bio paragraphs */}
            <p className="mt-8 text-base leading-relaxed text-text-secondary sm:text-lg text-justify">
              Dr. Aditi A. Wad is not just a Homoeopathic Physician, She is a
              healer who listens. With over a decade of clinical experience and
              an MD in Homoeopathy, Dr. Wad brings together deep academic
              expertise and genuine compassion to every consultation. She founded
              Dr Wad&apos;s synergy Homeopathy clinic in Pimple Saudagar, Pune, with
              a simple but powerful belief: every patient deserves a treatment as
              unique as they are.
            </p>

            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg text-justify">
              Her approach is rooted in classical Homoeopathy understanding not
              just your symptoms, but your life history, your lifestyle, your stress,
              your sleep, your diet, your emotional well-being every detail matters.
            </p>

            {/* Quote */}
            <blockquote className="mt-8 border-l-4 border-primary bg-primary/5 rounded-r-2xl py-6 pl-8 pr-6 shadow-sm">
              <p className="font-serif text-xl italic font-medium text-primary-dark sm:text-2xl text-justify leading-snug">
                &ldquo;I don&apos;t treat diseases. I treat people. When we
                understand the person behind the symptoms, real healing
                begins.&rdquo;
              </p>
              <footer className="mt-4 text-base font-bold text-primary tracking-wide">
                — Dr. Aditi A. Wad
              </footer>
            </blockquote>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/917798756622?text=Hi%20Dr.%20Wad%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a consultation with Dr. Aditi Wad via WhatsApp"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
              >
                <FaCalendarCheck className="text-lg" />
                Book a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
