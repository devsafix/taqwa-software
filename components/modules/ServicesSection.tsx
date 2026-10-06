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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#02040a] py-28"
    >
      {/* Ambient blue glow - top left */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-150 w-150 rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Ambient cyan glow - right */}
      <div className="pointer-events-none absolute -right-50 top-1/3 h-150 w-150 rounded-full bg-cyan-500/8 blur-[150px]" />

      {/* Bottom ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-100 w-150 rounded-full bg-blue-700/5 blur-[130px]" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center fade over grid */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#02040a_78%)]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center justify-center text-center">
          <div className="service-header mb-5 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-blue-500/40" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400/80">
              What We Do
            </span>
          </div>

          <h2 className="service-header max-w-4xl text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Our{" "}
            <span className="bg-linear-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="service-header mt-6 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
            From digital products to intelligent automation, we build technology
            that turns ambitious ideas into scalable, high-impact solutions.
          </p>

          {/* Small decorative line */}
          <div className="service-header mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-linear-to-r from-transparent to-blue-500/50" />
            <span className="h-1 w-1 rounded-full bg-blue-500" />
            <span className="h-px w-10 bg-linear-to-l from-transparent to-blue-500/50" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative min-h-85 overflow-hidden rounded-xl border border-white/8 bg-white/[0.035] p-7 pt-8 backdrop-blur-xl transition-colors duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:bg-white/5.5 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/0 blur-[60px] transition-all duration-500 group-hover:bg-blue-500/15" />

                {/* Top shine */}
                <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-blue-400/60">
                    0{index + 1}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-blue-400 transition-all duration-500 group-hover:border-blue-400/30 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative pr-5 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-100">
                  {service.title}
                </h3>

                {/* Items */}
                <ul className="mt-6 space-y-3.5">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-5 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400"
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/3 text-blue-400/60 transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10">
                        <Check size={9} strokeWidth={2.5} />
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
        <div className="service-header mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/8 bg-white/2.5 px-7 py-6 backdrop-blur-xl md:flex-row md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400/70">
              Have a project in mind?
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Let&apos;s build something exceptional together.
            </p>
          </div>

          <button className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300">
            Start a conversation
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
