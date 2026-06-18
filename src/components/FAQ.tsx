"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is Homoeopathy scientifically proven?",
    answer:
      "Homoeopathy has been practiced for over 200 years and is recognized by the Indian government under AYUSH. Dr. Wad holds an MD in Homoeopathy \u2014 a rigorous postgraduate medical degree \u2014 and a PGDCR, ensuring evidence-informed practice. Thousands of clinical studies and millions of successful cases support its effectiveness.",
  },
  {
    question: "How long does Homoeopathic treatment take?",
    answer:
      "It depends on the condition. Acute issues (cold, fever) resolve in 1\u20133 days. Recent chronic conditions (under 1 year) take 3\u20136 months. Long-standing chronic conditions may take 6\u201318 months. Dr. Wad will give you a realistic timeline at your first consultation.",
  },
  {
    question: "Can I take Homoeopathy with my current medication?",
    answer:
      "Yes, absolutely. Homoeopathic medicines don\u2019t interfere with allopathic medications. Many patients start Homoeopathy alongside conventional treatment and gradually reduce allopathic dosage under medical supervision.",
  },
  {
    question: "Is Homoeopathy safe for children and pregnant women?",
    answer:
      "Yes. Homoeopathic medicines are natural, highly diluted, and free of toxic side effects. They\u2019re safe for newborns, children, pregnant women, breastfeeding mothers, and elderly patients.",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "Your first visit lasts 45\u201360 minutes. Dr. Wad will ask detailed questions about your symptoms, medical history, lifestyle, emotional health, sleep, and diet. Please bring recent medical reports, lab results, and a list of current medications.",
  },
  {
    question: "Do I need to follow dietary restrictions?",
    answer:
      "Dr. Wad provides specific dietary guidance based on your condition. Common recommendations include avoiding strong substances (raw onion, garlic, camphor, coffee) close to taking medicine. Restrictions are minimal and clearly explained.",
  },
  {
    question: "How are follow-up consultations handled?",
    answer:
      "Follow-ups are every 3\u20136 weeks, either in-person at our Pimple Saudagar clinic or via WhatsApp for minor updates. This flexibility ensures treatment stays on track even if you\u2019re busy or traveling.",
  },
  {
    question: "What if Homoeopathy doesn\u2019t work for me?",
    answer:
      "Dr. Wad is transparent. If she assesses that your condition requires conventional intervention, she\u2019ll tell you honestly and refer you appropriately. Your health always comes first.",
  },
  {
    question: "How much does treatment cost?",
    answer:
      "Consultation and medicine fees are reasonable and transparent. There are no hidden charges. Specific fees are shared during booking.",
  },
  {
    question: "Is online consultation available?",
    answer:
      "Yes! Follow-up patients can use WhatsApp consultations. First visits are recommended in-person. For patients outside Pune, video consultations can be arranged.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section-padding bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto text-justify">
            Honest answers to the questions we hear most often.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-white rounded-xl mb-3 overflow-hidden shadow-sm transition-all duration-300 ${
                  isOpen ? "border-l-4 border-primary" : "border-l-4 border-transparent"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full p-6 flex items-center justify-between text-left cursor-pointer group"
                >
                  <span
                    className={`font-medium text-lg pr-4 transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                    }`}
                  >
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-primary"
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-text-secondary leading-relaxed text-justify">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
