"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and Python. For mobile development, we work with React Native and Flutter. Our AI solutions leverage OpenAI, custom ML models, and advanced NLP.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    label: "Technology",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A standard website takes 4-8 weeks, while complex web applications may take 3-6 months. We provide detailed timelines during our initial consultation.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    label: "Process",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely. We offer comprehensive support packages including bug fixes, security updates, performance optimization, and feature enhancements. Our team is available 24/7 for critical issues.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    label: "Support",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".service-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-black/50 py-20 md:py-24"
    >
      {/* Light beam under the Project section */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/40 to-transparent" />
      <div className="relative z-10 mx-auto px-6 container">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center justify-center text-center lg:mb-20">
          <div className="service-header mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 py-2 pl-3 pr-4 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 rounded-full bg-blue-500/40 motion-safe:animate-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
              Common Questions
            </span>
          </div>

          <h2 className="service-header max-w-4xl text-balance text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Frequently{" "}
            <span className="bg-linear-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Asked
            </span>
          </h2>

          <p className="service-header mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
            Everything you need to know about our process, technology, and
            approach to building digital products.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`group relative overflow-hidden rounded-3xl border transition-colors duration-500 ${
                    isActive
                      ? "border-blue-400/20 bg-white/4.5 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                      : "border-white/8 bg-white/2 hover:border-white/15 hover:bg-white/[0.035]"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="relative flex w-full items-center justify-between gap-6 p-6 text-left md:p-7"
                  >
                    <div className="flex min-w-0 items-center gap-5">
                      {/* Number */}
                      <span
                        className={`hidden shrink-0 font-mono text-xs tracking-[0.15em] transition-colors duration-300 sm:block ${
                          isActive
                            ? "text-blue-400"
                            : "text-white/20 group-hover:text-white/40"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      {/* Question */}
                      <span
                        className={`text-base font-semibold tracking-tight transition-colors duration-300 md:text-xl ${
                          isActive
                            ? "text-white"
                            : "text-white/60 group-hover:text-white/85"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-blue-400/20 bg-blue-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.2)]"
                          : "border-white/10 bg-white/4 text-white/40 group-hover:border-white/20 group-hover:text-white/70"
                      }`}
                    >
                      {isActive ? <Minus size={17} /> : <Plus size={17} />}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <div className="px-6 pb-7 sm:pl-17 sm:pr-8">
                          <div className="mb-5 h-px bg-linear-to-r from-blue-500/20 via-white/5 to-transparent" />

                          <p className="text-sm font-light leading-7 text-zinc-400 md:text-base">
                            {faq.answer}
                          </p>

                          {/* Category */}
                          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3 py-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
                              {faq.label}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Image Preview */}
          <div className="hidden lg:sticky lg:top-28 lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: -10,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {/* Glow */}
                <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-500/10 blur-[50px]" />

                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                  <Image
                    src={faqs[activeIndex ?? 0]?.image}
                    alt={faqs[activeIndex ?? 0]?.question}
                    fill
                    className="object-cover brightness-75 grayscale-[0.25]"
                  />

                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#040814] via-transparent to-transparent" />

                  <div className="absolute inset-0 bg-linear-to-tr from-blue-950/30 via-transparent to-transparent" />

                  {/* Image top label */}
                  <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-[#040814]/60 px-3.5 py-2 backdrop-blur-xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {faqs[activeIndex ?? 0]?.label}
                    </span>
                  </div>

                  {/* Image bottom information */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                          0{(activeIndex ?? 0) + 1}
                        </p>

                        <h3 className="mt-2 max-w-md text-lg font-semibold text-white">
                          {faqs[activeIndex ?? 0]?.question}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-3xl border-b border-r border-blue-400/20" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
