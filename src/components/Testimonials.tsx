"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  name: string;
  location: string;
  condition: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ankita M.",
    location: "Wakad",
    condition: "PCOD/PCOS",
    rating: 5,
    quote:
      "After years of hormonal pills, Dr. Wad showed me a better way. My periods are regular now, my skin has cleared up, and I\u2019ve lost 7 kgs without crash dieting. She didn\u2019t just treat my PCOD \u2014 she changed how I think about health.",
  },
  {
    name: "Priya & Rohan D.",
    location: "Pimple Saudagar",
    condition: "Childhood Asthma",
    rating: 5,
    quote:
      "Our 6-year-old had asthma since age 2. Every season meant nebulizers and steroids. After 8 months with Dr. Wad, the attacks dropped dramatically. Today, she plays and dances without wheezing. She hasn\u2019t used a nebulizer in over a year.",
  },
  {
    name: "Neha P.",
    location: "Hinjewadi",
    condition: "Chronic Migraine",
    rating: 5,
    quote:
      "I had 12-15 migraines a month and was living on painkillers. By month 3 with Dr. Wad, I noticed fewer episodes. Today I get maybe one mild headache a month. She gave me back my productivity and my hope.",
  },
  {
    name: "Rahul T.",
    location: "Rahatani",
    condition: "Psoriasis",
    rating: 5,
    quote:
      "Psoriasis covered my elbows, knees and scalp for 12 years. Steroid creams would clear it temporarily but it always came back worse. After one year with Dr. Wad, 80% of my skin cleared. I finally wore short sleeves to work.",
  },
  {
    name: "Sneha R.",
    location: "Pimple Saudagar",
    condition: "Thyroid + Hair Loss",
    rating: 5,
    quote:
      "Hypothyroidism plus severe hair fall \u2014 a devastating combination. Dr. Wad treated both as one condition. My TSH normalized, my Thyronorm was reduced, and my hair? New growth everywhere. My ponytail is thick again.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section-padding bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Real Patients.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto text-justify">
            Hear from families who found lasting relief at Synergy Clinic.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Arrow Left */}
          <button
            onClick={goToPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          {/* Arrow Right */}
          <button
            onClick={goToNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          {/* Card */}
          <div className="overflow-hidden min-h-[320px] md:min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="w-full glass-dark rounded-2xl p-6 md:p-8"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-primary/20 text-3xl mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <FaStar key={i} className="text-gold w-5 h-5" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg italic text-foreground leading-relaxed mb-6 text-justify">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Bottom Row */}
                <div className="flex items-center gap-4 flex-wrap">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                    {current.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-justify">
                      {current.name}
                    </p>
                    <p className="text-text-secondary text-sm text-justify">
                      {current.location}
                    </p>
                  </div>
                  <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                    {current.condition}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
