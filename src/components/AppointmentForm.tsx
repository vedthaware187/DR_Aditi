"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaCheck,
  FaCalendarAlt,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

const WHATSAPP_LINK =
  "https://wa.me/917798756622?text=Hello%20Dr.%20Wad%2C%20I%20would%20like%20to%20book%20an%20appointment.";

const PHONE_NUMBER = "+91 77987 56622";

const CONDITIONS = [
  "Thyroid",
  "PCOD/PCOS",
  "Hair Loss",
  "Skin Disorders",
  "Allergies",
  "Respiratory Problems",
  "Migraine",
  "Digestive Disorders",
  "Joint Pain",
  "Other",
];

const TIME_SLOTS = [
  { value: "morning", label: "Morning 10 AM \u2013 1 PM" },
  { value: "evening-early", label: "Evening 5 \u2013 7 PM" },
  { value: "evening-late", label: "Evening 7 \u2013 9 PM" },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  condition: string;
  date: string;
  time: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  condition?: string;
  date?: string;
  time?: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  condition: "",
  date: "",
  time: "",
  message: "",
};

function getTodayString(): string {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name (at least 2 characters).";
    }
    if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.condition) {
      errs.condition = "Please select a condition.";
    }
    if (!formData.date) {
      errs.date = "Please select a preferred date.";
    }
    if (!formData.time) {
      errs.time = "Please select a preferred time slot.";
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Format WhatsApp message
    const messageLines = [
      "Hello Dr. Wad, I would like to book an appointment.",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      formData.email ? `Email: ${formData.email}` : "",
      `Condition: ${formData.condition}`,
      `Preferred Date: ${formData.date}`,
      `Preferred Time: ${getTimeLabelForValue(formData.time)}`,
      formData.message ? `Message: ${formData.message}` : ""
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/917798756622?text=${encodeURIComponent(messageLines)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  };

  const inputClasses =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white";
  const labelClasses = "block text-sm font-medium text-foreground mb-1.5";
  const errorClasses = "text-red-500 text-sm mt-1";

  const getTimeLabelForValue = (val: string) =>
    TIME_SLOTS.find((s) => s.value === val)?.label ?? val;

  return (
    <section
      id="appointment"
      className="section-padding bg-gradient-to-b from-primary-light to-white"
    >
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
            Book Your{" "}
            <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto text-justify">
            Take the first step toward lasting health. We&apos;ll confirm your
            appointment within 30 minutes.
          </p>
        </motion.div>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left Form (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="md:col-span-1"
                      >
                        <label htmlFor="name" className={labelClasses}>
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={inputClasses}
                          required
                        />
                        {errors.name && (
                          <p className={errorClasses}>{errors.name}</p>
                        )}
                      </motion.div>

                      {/* Phone */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="md:col-span-1"
                      >
                        <label htmlFor="phone" className={labelClasses}>
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          pattern="[0-9]{10}"
                          className={inputClasses}
                          required
                        />
                        {errors.phone && (
                          <p className={errorClasses}>{errors.phone}</p>
                        )}
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="md:col-span-1"
                      >
                        <label htmlFor="email" className={labelClasses}>
                          Email{" "}
                          <span className="text-text-secondary font-normal">
                            (optional)
                          </span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClasses}
                        />
                      </motion.div>

                      {/* Condition */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        className="md:col-span-1"
                      >
                        <label htmlFor="condition" className={labelClasses}>
                          Condition <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="condition"
                          name="condition"
                          value={formData.condition}
                          onChange={handleChange}
                          className={`${inputClasses} ${
                            !formData.condition ? "text-gray-400" : ""
                          }`}
                          required
                        >
                          <option value="">Select your condition</option>
                          {CONDITIONS.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        {errors.condition && (
                          <p className={errorClasses}>{errors.condition}</p>
                        )}
                      </motion.div>

                      {/* Date */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="md:col-span-1"
                      >
                        <label htmlFor="date" className={labelClasses}>
                          Preferred Date{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={getTodayString()}
                          className={inputClasses}
                          required
                        />
                        {errors.date && (
                          <p className={errorClasses}>{errors.date}</p>
                        )}
                      </motion.div>

                      {/* Time */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                        className="md:col-span-1"
                      >
                        <label htmlFor="time" className={labelClasses}>
                          Preferred Time{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`${inputClasses} ${
                            !formData.time ? "text-gray-400" : ""
                          }`}
                          required
                        >
                          <option value="">Select time slot</option>
                          {TIME_SLOTS.map((slot) => (
                            <option key={slot.value} value={slot.value}>
                              {slot.label}
                            </option>
                          ))}
                        </select>
                        {errors.time && (
                          <p className={errorClasses}>{errors.time}</p>
                        )}
                      </motion.div>

                      {/* Message */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="md:col-span-2"
                      >
                        <label htmlFor="message" className={labelClasses}>
                          Your Message{" "}
                          <span className="text-text-secondary font-normal">
                            (optional)
                          </span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us briefly about your condition or any questions..."
                          className={`${inputClasses} resize-none`}
                        />
                      </motion.div>
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.45 }}
                      className="mt-6"
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white py-4 rounded-xl text-lg font-semibold hover:bg-primary-dark transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                        aria-label="Submit appointment booking"
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="w-5 h-5 animate-spin" />
                            Booking...
                          </>
                        ) : (
                          <>
                            <FaCalendarAlt className="w-5 h-5" />
                            Book Appointment
                          </>
                        )}
                      </button>
                    </motion.div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <FaCheckCircle className="w-10 h-10 text-green-500" />
                    </motion.div>

                    <h3 className="font-serif text-2xl font-bold text-primary-dark mb-2">
                      Appointment Request Submitted!
                    </h3>
                    <p className="text-text-secondary mb-8 max-w-md mx-auto text-justify">
                      We&apos;ll confirm your appointment via phone/WhatsApp
                      within 30 minutes.
                    </p>

                    {/* Submission Summary */}
                    <div className="bg-surface rounded-xl p-6 max-w-sm mx-auto mb-8 text-left">
                      <h4 className="font-semibold text-primary-dark mb-3">
                        Booking Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Name:</span>
                          <span className="font-medium text-foreground">
                            {formData.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Date:</span>
                          <span className="font-medium text-foreground">
                            {formData.date}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Time:</span>
                          <span className="font-medium text-foreground">
                            {getTimeLabelForValue(formData.time)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">
                            Condition:
                          </span>
                          <span className="font-medium text-primary">
                            {formData.condition}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={resetForm}
                      className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors cursor-pointer"
                      aria-label="Book another appointment"
                    >
                      Book Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Info Card (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-primary-dark rounded-2xl p-6 md:p-8 text-white h-full">
              {/* Quick Booking */}
              <h3 className="font-serif text-2xl font-bold mb-3">
                Quick Booking?
              </h3>
              <p className="text-white/80 mb-5 leading-relaxed text-justify">
                Prefer WhatsApp? Send us a message and we&apos;ll book your
                appointment instantly.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white text-primary-dark py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                aria-label="Book appointment via WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Booking
              </a>

              {/* Divider */}
              <hr className="border-white/20 my-6" />

              {/* Call */}
              <p className="text-white/70 text-sm mb-3 text-justify">
                Or call us directly:
              </p>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-xl font-semibold hover:text-white/80 transition-colors mb-2"
                aria-label="Call the clinic"
              >
                <FaPhone className="w-5 h-5" />
                {PHONE_NUMBER}
              </a>

              {/* Divider */}
              <hr className="border-white/20 my-6" />

              {/* What to bring */}
              <h4 className="font-semibold text-lg mb-3">What to bring:</h4>
              <ul className="space-y-2 mb-6">
                {[
                  "Investigations done prior (if any)",
                  "Prescription of Current ongoing medications (if any)",
                  "Recent blood work (if any)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/90">
                    <FaCheck className="text-accent w-4 h-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <hr className="border-white/20 my-6" />

              {/* Clinic Hours */}
              <h4 className="font-semibold text-lg mb-3">Clinic Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/90">
                  <span>Mon &ndash; Sat</span>
                  <span>10:00 AM &ndash; 1:00 PM</span>
                </div>
                <div className="flex justify-between text-white/90">
                  <span>Mon &ndash; Sat</span>
                  <span>5:00 PM &ndash; 9:00 PM</span>
                </div>
                <div className="flex justify-between text-white/90">
                  <span>Sunday</span>
                  <span>By Appointment Only</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
