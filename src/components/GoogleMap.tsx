"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaDirections,
} from "react-icons/fa";

const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=Fortuna+Business+Center,+Pimple+Saudagar,+Pune&t=&z=15&ie=UTF8&iwloc=B&output=embed";

const GOOGLE_MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Fortuna+Business+Center,+Pimple+Saudagar,+Pune";

const WHATSAPP_LINK =
  "https://wa.me/917798756622?text=Hello%20Dr.%20Wad%2C%20I%20would%20like%20to%20book%20an%20appointment.";

const PHONE_NUMBER = "+91 77987 56622";

const clinicHours = [
  { day: "Mon \u2013 Sat", time: "10:00 AM \u2013 1:00 PM" },
  { day: "Mon \u2013 Sat", time: "5:00 PM \u2013 9:00 PM" },
  { day: "Sunday", time: "By Appointment Only" },
];

export default function GoogleMap() {
  return (
    <section id="contact" className="section-padding bg-background transition-colors duration-300">
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
            Visit Us in{" "}
            <span className="gradient-text">Pimple Saudagar, Pune</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto text-justify">
            Conveniently located and easily accessible from across Pune.
          </p>
        </motion.div>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map 60% */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-[450px]">
              <iframe
                src={MAPS_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr Wad's synergy Homeopathy clinic location on Google Maps"
              />
            </div>
          </motion.div>

          {/* Contact Card 40% */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-surface rounded-2xl p-6 md:p-8 h-full">
              {/* Clinic Name */}
              <h3 className="font-serif text-xl font-bold text-primary-dark mb-6">
                Dr Wad&apos;s synergy Homeopathy clinic
              </h3>

              {/* Contact Details */}
              <div className="space-y-4 mb-6">
                <a
                  href="https://maps.google.com/maps?q=Dr.Wad%27s+Synergy+Homoeopathic+Clinic+Fortuna+Business+Center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-text-secondary hover:text-primary transition-colors"
                >
                  <FaMapMarkerAlt className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                  <span className="flex flex-col text-left">
                    <span className="font-semibold text-primary-dark">Clinic Address</span>
                    <span>Fortuna Business Center, Office 707, 7th Floor, Rahatani Road, Kokane Chowk, Near Shivar Chowk, Above Hotel Radhakrishna, Pimple Saudagar, Maharashtra 411027</span>
                  </span>
                </a>

                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
                >
                  <FaPhone className="text-primary w-5 h-5 shrink-0" />
                  <span>{PHONE_NUMBER}</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-[#25D366] transition-colors"
                >
                  <FaWhatsapp className="text-[#25D366] w-5 h-5 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="mailto:draditiwad@gmail.com"
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
                >
                  <FaEnvelope className="text-primary w-5 h-5 shrink-0" />
                  <span>draditiwad@gmail.com</span>
                </a>
              </div>



              {/* Divider */}
              <hr className="border-gray-200 my-6" />

              {/* Clinic Hours */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaClock className="text-primary w-4 h-4" />
                  <h4 className="font-semibold text-primary-dark">
                    Clinic Hours
                  </h4>
                </div>
                <div className="space-y-2">
                  {clinicHours.map((slot, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-sm text-text-secondary"
                    >
                      <span>{slot.day}</span>
                      <span className="font-medium">{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-200 my-6" />

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={GOOGLE_MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                  aria-label="Get directions to clinic on Google Maps"
                >
                  <FaDirections className="w-4 h-4" />
                  Get Directions
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:bg-[#1da851] transition-colors"
                  aria-label="Chat with us on WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp Us
                </a>

                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
                  aria-label="Call the clinic now"
                >
                  <FaPhone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
