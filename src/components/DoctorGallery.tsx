"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  span: "tall" | "wide" | "normal";
}

const galleryImages: GalleryImage[] = [
  {
    src: "/gallery-1.png",
    alt: "Clinic inauguration with traditional pooja ceremony",
    caption: "Blessed Beginnings",
    span: "large",
  },
  {
    src: "/gallery-2.png",
    alt: "Medical Certifications and Clinic Wall",
    caption: "Certified Expertise",
    span: "tall",
  },
  {
    src: "/gallery-3.png",
    alt: "Dr. Aditi Wad felicitated at a medical event",
    caption: "Recognized for Excellence",
    span: "normal",
  },
  {
    src: "/gallery-4.png",
    alt: "Patient Success Story - Before & After",
    caption: "Transformative Care",
    span: "normal",
  },
  {
    src: "/gallery-5.png",
    alt: "Homoeopathic Medicines Inventory",
    caption: "Authentic Remedies",
    span: "wide",
  },
  {
    src: "/gallery-6.png",
    alt: "Dr. Aditi Wad treating a patient",
    caption: "Personalized Patient Care",
    span: "wide",
  },
  {
    src: "/gallery-7.png",
    alt: "Dr. Aditi Wad consulting",
    caption: "Expert Consultation",
    span: "wide",
  },
  {
    src: "/gallery-8.png",
    alt: "Clinic Environment",
    caption: "Modern Welcoming Clinic",
    span: "tall",
  },
  {
    src: "/gallery-9.jpeg",
    alt: "Dr. Aditi Wad interacting with a patient",
    caption: "Compassionate Care",
    span: "tall",
  },
  {
    src: "/gallery-10.png",
    alt: "Homoeopathic treatment session",
    caption: "Holistic Treatment",
    span: "tall",
  },
  {
    src: "/gallery-11.jpeg",
    alt: "Dedicated attention to patient health",
    caption: "Dedicated Attention",
    span: "large",
  },
  {
    src: "/logo.png",
    alt: "Synergy Clinic Logo",
    caption: "Synergy Clinic",
    span: "normal",
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

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function DoctorGallery() {
  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-bold text-primary-dark sm:text-4xl lg:text-5xl">
            Dr. Wad{" "}
            <span className="gradient-text">in Action</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mt-6 text-lg leading-relaxed text-text-secondary text-justify">
            Beyond the clinic speaking at conferences, leading health camps, and
            contributing to the Homoeopathic community.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] grid-flow-dense"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {galleryImages.map((image) => {
            // Determine grid span classes
            let spanClass = "";
            if (image.span === "wide") {
              spanClass = "sm:col-span-2";
            } else if (image.span === "tall") {
              spanClass = "row-span-2";
            } else if (image.span === "large") {
              spanClass = "sm:col-span-2 row-span-2";
            }

            return (
              <motion.div
                key={image.src}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-500 ${spanClass}`}
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`${
                    image.src.includes('logo') ? 'object-contain p-6 bg-white' : 'object-cover'
                  } transition-transform duration-700 group-hover:scale-110`}
                  sizes={
                    image.span === "wide"
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="glass rounded-xl px-4 py-3">
                    <p className="text-sm font-semibold text-slate-800 sm:text-base text-justify">
                      {image.caption}
                    </p>
                  </div>
                </div>

                {/* Subtle always-visible caption for mobile */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:hidden">
                  <p className="text-xs font-medium text-white text-justify">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
