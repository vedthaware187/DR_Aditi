"use client";

import { motion } from "framer-motion";
import {
  FaUserMd,
  FaUsers,
  FaHeart,
  FaHospital,
  FaChartLine,
  FaMapMarkerAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: FaUserMd,
    title: "MD-Qualified Expertise",
    description:
      "Dr. Wad holds an MD in Homoeopathy and PGDCR — qualifications that fewer than 5% of homoeopathic practitioners in Pune possess.",
  },
  {
    icon: FaUsers,
    title: "2000+ Patients Treated",
    description:
      "From acute conditions to decade-long chronic diseases, our track record speaks for itself.",
  },
  {
    icon: FaHeart,
    title: "Personalized Care",
    description:
      "45-60 minute first consultations. We understand your symptoms, your story, your stress, and your life.",
  },
  {
    icon: FaHospital,
    title: "Modern, Welcoming Clinic",
    description:
      "A clean, technology-enabled clinic in Rahatani that respects both your time and your comfort.",
  },
  {
    icon: FaChartLine,
    title: "Transparent Progress",
    description:
      "Regular reviews, clear milestones, and honest conversations. You always know where you stand.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Conveniently Located",
    description:
      "In the heart of Rahatani, accessible from Pimple Saudagar, Wakad, Aundh & Hinjewadi. Ample parking.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
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
            Why Families Across Pune{" "}
            <span className="gradient-text">Trust Dr. Wad</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Over 2,000 patients — from Rahatani to across Pune — have chosen
            Synergy Clinic.
          </p>
        </motion.div>

        {/* Feature Blocks */}
        <div className="space-y-12 lg:space-y-20">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={feature.title}
                className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Icon Circle */}
                <div className="flex shrink-0 items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
                    <feature.icon className="text-3xl text-white" />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`text-center lg:text-left ${
                    !isEven ? "lg:text-right" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://wa.me/919XXXXXXXXX?text=Hi%20Dr.%20Wad%2C%20I%20would%20like%20to%20visit%20the%20clinic."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Synergy Clinic — book via WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
          >
            Visit Synergy Clinic
          </a>
        </motion.div>
      </div>
    </section>
  );
}
