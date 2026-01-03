'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and Python. For mobile development, we work with React Native and Flutter. Our AI solutions leverage OpenAI, custom ML models, and advanced NLP.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A standard website takes 4-8 weeks, while complex web applications may take 3-6 months. We provide detailed timelines during our initial consultation.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely. We offer comprehensive support packages including bug fixes, security updates, performance optimization, and feature enhancements. Our team is available 24/7 for critical issues.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile methodology with clear phases: Discovery, Design, Development, Testing, and Launch. You'll have regular updates, demos, and the flexibility to provide feedback throughout the process.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "We offer both fixed-price and time-and-materials pricing models. After understanding your requirements, we provide a detailed proposal with transparent pricing, milestones, and deliverables.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Common Questions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`premium-card overflow-hidden ${
                  activeIndex === index ? "border-primary/50" : ""
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    {activeIndex === index ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Image */}
          <div className="hidden lg:block sticky top-32">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden aspect-4/3"
            >
              <Image
                src={faqs[activeIndex ?? 0]?.image}
                alt="FAQ illustration"
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
