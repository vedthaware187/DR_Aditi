"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaStethoscope,
  FaClipboardList,
  FaChartLine,
  FaHeart,
  FaCalendarCheck,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Step {
  number: number;
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: FaStethoscope,
    title: "Deep Understanding",
    subtitle: "Your First Consultation (45-60 min)",
    description:
      "Dr. Wad spends quality time understanding your complete health picture — physical symptoms, emotional patterns, lifestyle, and medical history.",
  },
  {
    number: 2,
    icon: FaClipboardList,
    title: "Personalized Treatment Plan",
    subtitle: "Designed for You",
    description:
      "A custom protocol including constitutional medicine, dietary guidance, and lifestyle modifications — with a clear timeline and realistic expectations.",
  },
  {
    number: 3,
    icon: FaChartLine,
    title: "Monitored Progress",
    subtitle: "Regular Follow-Ups",
    description:
      "Every 3-6 weeks, we assess your response, adjust treatment if needed, and track measurable improvements through lab reports and symptom scores.",
  },
  {
    number: 4,
    icon: FaHeart,
    title: "Lasting Wellness",
    subtitle: "Beyond Symptom Relief",
    description:
      "Our ultimate goal is to strengthen your body so it stays healthy. When you no longer need us — that's our greatest success.",
  },
];

function TimelineCard({
  step,
  index,
}: {
  step: Step;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center">
      {/* Desktop layout */}
      <div className="hidden w-full items-center lg:flex">
        {/* Left content area */}
        <div className="flex w-1/2 justify-end pr-12">
          {isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="text-lg text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-primary">
                {step.subtitle}
              </p>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ) : (
            <div />
          )}
        </div>

        {/* Center number circle (on timeline) */}
        <motion.div
          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg shadow-primary/30"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
        >
          {step.number}
        </motion.div>

        {/* Right content area */}
        <div className="flex w-1/2 pl-12">
          {!isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="text-lg text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-primary">
                {step.subtitle}
              </p>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Mobile layout — timeline on left, cards on right */}
      <div className="flex w-full items-start gap-6 lg:hidden">
        {/* Number circle */}
        <motion.div
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/30"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            type: "spring",
            stiffness: 200,
          }}
        >
          {step.number}
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 rounded-2xl bg-white p-5 shadow-md"
        >
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <step.icon className="text-base text-primary" />
          </div>
          <h3 className="font-serif text-lg font-bold text-slate-900">
            {step.title}
          </h3>
          <p className="mt-1 text-sm font-semibold text-primary">
            {step.subtitle}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {step.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function TreatmentProcess() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="section-padding bg-surface">
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
            Your <span className="gradient-text">Healing Journey</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Treatment at Synergy Clinic is not a prescription — it&apos;s a
            partnership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Desktop center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-slate-200 lg:block">
            <motion.div
              className="w-full rounded-full bg-gradient-to-b from-primary to-accent"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile left line */}
          <div className="absolute left-[19px] top-0 h-full w-0.5 bg-slate-200 lg:hidden">
            <motion.div
              className="w-full rounded-full bg-gradient-to-b from-primary to-accent"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <TimelineCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-6 font-serif text-xl text-slate-900 sm:text-2xl">
            Start Your Healing Journey
          </p>
          <a
            href="https://wa.me/919XXXXXXXXX?text=Hi%20Dr.%20Wad%2C%20I%20would%20like%20to%20book%20my%20first%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your first consultation via WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
          >
            <FaCalendarCheck className="text-lg" />
            Book Your First Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
