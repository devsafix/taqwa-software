"use client";

import { useEffect, useRef } from "react";
import {
  Smartphone,
  Globe,
  BrainCircuit,
  Layout,
  Database,
  LineChart,
  ArrowUpRight,
  Check,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

const services = [
  {
    title: "Website & ERP Solutions",
    items: [
      "Responsive Website Design",
      "Web Application Development",
      "Odoo ERP & CRM Solutions",
      "E-commerce Platforms",
      "Landing Pages & Microsites",
    ],
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    items: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Development",
      "Native and Hybrid Development",
      "App Maintenance & Scaling",
    ],
    icon: Smartphone,
  },
  {
    title: "Agentic AI Development",
    items: [
      "AI Integration for Apps",
      "Intelligent Chatbots",
      "Autonomous AI Agents",
      "Machine Learning Solutions",
      "Predictive Analytics & Automation",
    ],
    icon: BrainCircuit,
  },
  {
    title: "UX/UI Design",
    items: [
      "User Experience Design",
      "User Interface Design",
      "Interaction Design",
      "Prototyping & Wireframing",
      "Design Systems",
    ],
    icon: Layout,
  },
  {
    title: "CMS Development",
    items: [
      "Custom CMS Development",
      "WordPress Websites",
      "Headless CMS Solutions",
      "Shopify E-commerce",
      "Theme Development",
    ],
    icon: Database,
  },
  {
    title: "Digital Strategy & Consulting",
    items: [
      "Product Strategy & Planning",
      "Market Research & Analysis",
      "Growth Strategies",
      "Technology Consulting",
      "Digital Transformation",
    ],
    icon: LineChart,
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Cursor-following spotlight: only updates CSS variables, no re-render.
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-black/50 py-20 lg:py-24"
    >
      {/* ───────── Background ───────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Line grid, masked so it only shows around the content */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, #000 10%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, #000 10%, transparent 100%)",
          }}
        />

        {/* Light beam under the About section */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center justify-center text-center lg:mb-20">
          <div className="service-header mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 py-2 pl-3 pr-4 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 rounded-full bg-blue-500/40 motion-safe:animate-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
              What We Do
            </span>
          </div>

          <h2 className="service-header max-w-4xl text-balance text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Our{" "}
            <span className="bg-linear-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="service-header mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
            From digital products to intelligent automation, we build technology
            that turns ambitious ideas into scalable, high-impact solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                onMouseMove={handleMouseMove}
                style={{ "--mx": "50%", "--my": "0%" } as React.CSSProperties}
                className="group relative flex min-h-85 flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/6 to-white/2 p-7 backdrop-blur-xl transition-[translate,border-color,box-shadow] duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-[0_30px_80px_-20px_rgba(37,99,235,0.35)] sm:p-8"
              >
                {/* Cursor spotlight */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 bg-[radial-gradient(420px_circle_at_var(--mx)_var(--my),rgba(59,130,246,0.18),transparent_65%)] group-hover:opacity-100" />

                {/* Watermark icon */}
                <Icon
                  aria-hidden
                  strokeWidth={0.8}
                  className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 text-white/3 transition-colors duration-500 group-hover:text-blue-400/10"
                />

                {/* Icon + Number */}
                <div className="relative mb-8 flex items-center justify-between">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-blue-500/20 to-blue-500/5 text-blue-300 transition-all duration-500 group-hover:scale-105 group-hover:border-blue-400/40 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_40px_rgba(59,130,246,0.45)]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="font-mono text-sm tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-blue-300">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative pr-4 text-xl font-bold tracking-tight text-white sm:text-[22px]">
                  {service.title}
                </h3>

                <div className="relative mt-5 h-px w-full bg-linear-to-r from-white/15 via-white/5 to-transparent" />

                {/* Items */}
                <ul className="relative mt-6 space-y-3.5">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-5 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200 sm:text-[15px]"
                    >
                      <span className="mt-px flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 transition-all duration-300 group-hover:border-blue-400/50 group-hover:text-white">
                        <Check size={10} strokeWidth={3} />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA / statement */}
        <div className="service-header relative mt-16 overflow-hidden rounded-3xl bg-linear-to-r from-white/25 via-white/8 to-blue-400/30 p-px lg:mt-20">
          <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[calc(1.5rem-1px)] bg-black/90 px-7 py-8 text-center md:flex-row md:px-10 md:text-left">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[90px]"
            />

            <div className="relative">
              <p className="text-xl font-bold tracking-tight text-white md:text-2xl">
                Have a project in mind?
              </p>

              <p className="mt-2 text-sm text-zinc-400 md:text-base">
                Let&apos;s build something exceptional together.
              </p>
            </div>

            <button
              type="button"
              className={`group relative flex items-center gap-4 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-bold text-[#040814] transition-all duration-300 hover:bg-blue-50 hover:shadow-[0_0_40px_rgba(96,165,250,0.45)] ${focusRing}`}
            >
              Start a conversation
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#040814] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
