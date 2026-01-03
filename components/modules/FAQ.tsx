"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and Python. For mobile development, we work with React Native and Flutter. Our AI solutions leverage OpenAI, custom ML models, and advanced NLP.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A standard website takes 4-8 weeks, while complex web applications may take 3-6 months. We provide detailed timelines during our initial consultation.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely. We offer comprehensive support packages including bug fixes, security updates, performance optimization, and feature enhancements. Our team is available 24/7 for critical issues.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-white/60 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-6xl mb-8 font-bold tracking-tighter text-white/90">
            Frequently Asked
          </h2>
          <div className="w-12 h-1 bg-white/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                  activeIndex === index
                    ? "bg-white/4 border-white/20"
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <span
                    className={`font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-white"
                        : "text-white/60 group-hover:text-white/80"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-white text-black"
                        : "bg-white/5 text-white/40"
                    }`}
                  >
                    {activeIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-8 pb-8 text-white/60 text-lg font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Sticky Image with Polish */}
          <div className="hidden lg:block sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-4xl overflow-hidden aspect-4/3 border border-white/10"
              >
                <Image
                  src={faqs[activeIndex ?? 0]?.image}
                  alt="FAQ Preview"
                  fill
                  className="w-full h-full object-cover grayscale-[0.3] brightness-75"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
