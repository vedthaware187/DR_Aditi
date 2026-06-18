"use client";

import { FaInstagram, FaFacebookF, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Doctor", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const treatmentLinks = [
  "Thyroid",
  "PCOD / PCOS",
  "Hair Loss",
  "Skin Disorders",
  "Migraine",
  "Allergies",
];

const socialLinks = [
  {
    icon: <FaInstagram className="text-lg" />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <FaFacebookF className="text-lg" />,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: <FaYoutube className="text-lg" />,
    href: "https://youtube.com",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Gradient Accent Line */}
      <div
        className="h-0.5 w-full bg-gradient-to-r from-primary via-accent to-primary"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Clinic Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <a href="#hero" className="flex items-center gap-2 group" aria-label="Home">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Dr Wad's synergy Homeopathy clinic Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="font-serif text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Dr.Wad&apos;S Synergy Homeopathic Clinic
              </span>
            </a>
            <p className="font-serif text-lg text-primary font-bold italic text-justify">
              &quot;Healing in Harmony Wellness for Life&quot;
            </p>
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              Trusted Homoeopathic care for families across Pune. Personalized,
              evidence-based treatments for chronic and acute conditions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Treatments
            </h3>
            <ul className="space-y-3">
              {treatmentLinks.map((treatment) => (
                <li key={treatment}>
                  <a
                    href="#treatments"
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917798756622"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                >
                  <FaPhone className="text-primary text-sm flex-shrink-0" />
                  +91 77987 56622
                </a>
              </li>
              <li>
                <a
                  href="mailto:draditiwad@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                >
                  <FaEnvelope className="text-primary text-sm flex-shrink-0" />
                  draditiwad@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="text-primary text-sm flex-shrink-0 mt-0.5" />
                  <span>Fortuna Business Center, Office 707, 7th Floor, Rahatani Road, Kokane Chowk, Near Shivar Chowk, Above Hotel Radhakrishna, Pimple Saudagar, Maharashtra 411027</span>
                </div>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left text-justify">
              © 2026 Dr Wad&apos;s synergy Homeopathy clinic. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
