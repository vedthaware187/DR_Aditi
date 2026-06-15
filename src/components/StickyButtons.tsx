"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhone, FaCalendarAlt } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/917798756622?text=Hi%20Dr.%20Wad!%20I%27d%20like%20to%20book%20an%20appointment.";
const PHONE_URL = "tel:+917798756622";

export default function StickyButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Buttons */}
      <AnimatePresence>
        {visible && (
          <>
            {/* WhatsApp Button Bottom Right */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 pulse-ring group"
              style={{ backgroundColor: "#25D366" }}
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp className="text-white text-2xl" />
              {/* Tooltip */}
              <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Chat with us
              </span>
            </motion.a>

            {/* Phone Button Bottom Left */}
            <motion.a
              href={PHONE_URL}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              className="hidden md:flex fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-primary items-center justify-center shadow-lg hover:scale-110 hover:bg-primary-dark transition-all duration-200 group"
              aria-label="Call us"
            >
              <FaPhone className="text-white text-lg" />
              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Call now
              </span>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] border-t border-gray-100">
        <div className="grid grid-cols-3 h-16">
          {/* Call */}
          <a
            href={PHONE_URL}
            className="flex flex-col items-center justify-center gap-1 text-primary hover:bg-primary/5 transition-colors active:bg-primary/10"
            aria-label="Call us"
          >
            <FaPhone className="text-lg" />
            <span className="text-xs font-medium">Call</span>
          </a>

          {/* Book */}
          <a
            href="#appointment"
            className="flex flex-col items-center justify-center gap-1 text-primary hover:bg-primary/5 transition-colors active:bg-primary/10 border-x border-gray-100"
            aria-label="Book appointment"
          >
            <FaCalendarAlt className="text-lg" />
            <span className="text-xs font-medium">Book</span>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 hover:bg-green-50 transition-colors active:bg-green-100"
            style={{ color: "#25D366" }}
            aria-label="WhatsApp us"
          >
            <FaWhatsapp className="text-xl" />
            <span className="text-xs font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
