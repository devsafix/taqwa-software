"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

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

  const preview = faqs[activeIndex ?? 0];

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative isolate overflow-hidden bg-black/50 py-20 lg:py-24"
    >
      {/* ───────── Background ───────── */}
      <div aria-hidden className="pointer-events-none absolute -z-10 inset-0">
        {/* Layered color mesh, strongest behind the image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(40% 35% at 10% 100%, rgba(6,182,212,0.12), transparent 70%)
            `,
          }}
        />

        {/* Concentric rings radiating from the image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 80% 54%, transparent 0px, transparent 95px, rgba(255,255,255,0.08) 96px, transparent 97px)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 75% at 80% 54%, #000 0%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 65% 75% at 80% 54%, #000 0%, transparent 100%)",
          }}
        />

        {/* Light beam under the previous section */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>

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
                  className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-500 ${
                    isActive
                      ? "border-blue-400/30 bg-linear-to-br from-blue-500/10 via-white/4 to-white/2 shadow-[0_25px_70px_-20px_rgba(37,99,235,0.35)]"
                      : "border-white/10 bg-white/3 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={`faq-question-${index}`}
                      aria-expanded={isActive}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      className={`relative flex w-full items-center justify-between gap-6 rounded-3xl p-6 text-left md:p-7 ${focusRing}`}
                    >
                      <span className="flex min-w-0 items-center gap-5">
                        {/* Number */}
                        <span
                          className={`hidden shrink-0 font-mono text-sm tracking-[0.15em] transition-colors duration-300 sm:block ${
                            isActive
                              ? "text-blue-400"
                              : "text-white/30 group-hover:text-white/50"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        {/* Question */}
                        <span
                          className={`text-base font-semibold tracking-tight transition-colors duration-300 md:text-xl ${
                            isActive
                              ? "text-white"
                              : "text-white/70 group-hover:text-white"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </span>

                      {/* Icon */}
                      <span
                        aria-hidden
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "rotate-180 border-blue-300/30 bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.45)]"
                            : "border-white/10 bg-white/4 text-white/50 group-hover:border-white/25 group-hover:text-white"
                        }`}
                      >
                        {isActive ? <Minus size={17} /> : <Plus size={17} />}
                      </span>
                    </button>
                  </h3>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <div className="px-6 pb-7 sm:pl-17 sm:pr-8">
                          <div className="mb-5 h-px bg-linear-to-r from-blue-400/30 via-white/8 to-transparent" />

                          <p className="text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
                            {faq.answer}
                          </p>

                          {/* Category */}
                          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-200">
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
                className="group relative"
              >
                {/* Glow */}
                <div className="absolute -inset-6 rounded-[3rem] bg-blue-500/15 blur-[60px]" />

                {/* Gradient frame */}
                <div className="relative rounded-3xl bg-linear-to-br from-white/30 via-white/5 to-blue-400/40 p-px shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)]">
                  <div className="relative aspect-4/3 overflow-hidden rounded-[calc(1.5rem-1px)] bg-zinc-900">
                    <Image
                      src={preview.image}
                      alt={preview.question}
                      fill
                      sizes="(min-width: 1024px) 45vw, 0px"
                      className="object-cover brightness-75 grayscale-[0.25] transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Blue duotone tint */}
                    <div className="absolute inset-0 bg-[#1d4ed8]/20 mix-blend-color" />

                    {/* Image overlays */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#040814] via-[#040814]/30 to-transparent" />

                    <div className="absolute inset-0 bg-linear-to-tr from-blue-950/30 via-transparent to-transparent" />

                    {/* Image highlight */}
                    <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

                    {/* Image top label */}
                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-[#040814]/60 px-3.5 py-2 backdrop-blur-xl">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />

                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                        {preview.label}
                      </span>
                    </div>

                    {/* Image bottom information */}
                    <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-5">
                      <div>
                        <p className="font-mono text-xs tracking-[0.2em] text-blue-300">
                          0{(activeIndex ?? 0) + 1}
                        </p>

                        <h3 className="mt-2 max-w-md text-lg font-semibold leading-snug text-white">
                          {preview.question}
                        </h3>
                      </div>

                      {/* Step indicators */}
                      <div className="flex shrink-0 items-center gap-1.5 pb-1.5">
                        {faqs.map((faq, i) => (
                          <button
                            key={faq.label}
                            type="button"
                            aria-label={`Show question ${i + 1}: ${faq.label}`}
                            onClick={() => setActiveIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${focusRing} ${
                              (activeIndex ?? 0) === i
                                ? "w-7 bg-blue-400"
                                : "w-1.5 bg-white/30 hover:bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-3xl border-b border-r border-blue-400/30" />
                <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-3xl border-l border-t border-blue-400/20" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
