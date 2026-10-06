"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Play, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-text",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".about-image",
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/5 bg-[#040814] py-20 lg:py-28"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-125 w-125 rounded-full bg-blue-600/8 blur-[140px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-125 w-125 rounded-full bg-cyan-500/6 blur-[140px]" />

      {/* Subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Content */}
          <div className="z-10 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="gsap-text mb-5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-blue-500/40" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="gsap-text text-4xl font-bold uppercase leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              From Idea To <br />
              <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Digital Impact
              </span>
            </h2>

            {/* Small supporting label */}
            <div className="gsap-text mt-7 flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3.5 py-2 backdrop-blur-sm">
              <Sparkles size={13} className="text-blue-400" />

              <span className="text-xs font-medium tracking-wide text-zinc-400">
                Engineering ideas into reality
              </span>
            </div>

            {/* Paragraph Content */}
            <p className="gsap-text mt-8 text-lg font-light leading-relaxed text-zinc-400">
              At{" "}
              <strong className="font-medium text-white">Taqwa Software</strong>
              , we believe that every visionary idea deserves a seamless digital
              experience. We are a team of passionate software engineers, UI/UX
              designers, and AI strategists dedicated to turning complex
              concepts into high-performing web and mobile applications.
              <br />
              <br />
              With innovation at our core, we blend creative design, Agentic AI,
              and robust Odoo ERP systems to deliver solutions that help
              businesses scale, engage users, and stay ahead in the digital
              landscape. Our mission is to make enterprise-grade software
              engineering accessible and impactful.
            </p>

            {/* Concluding Statement */}
            <div className="gsap-text mt-8 flex items-start gap-4 border-l-2 border-blue-500 pl-5">
              <p className="text-sm font-bold uppercase leading-relaxed tracking-widest text-white md:text-base">
                Taqwa Software — Where engineering excellence meets digital
                innovation.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-image relative z-10 mt-10 w-full lg:mt-0">
            {/* Image wrapper */}
            <div className="relative aspect-4/3 w-full">
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <Image
                  src="/office-work.jpg"
                  alt="Taqwa Software Team collaborating"
                  fill
                  className="object-cover opacity-75 mix-blend-luminosity transition-all duration-700 group-hover:scale-105"
                />

                {/* Image overlays */}
                <div className="absolute inset-0 bg-linear-to-tr from-[#040814]/90 via-[#040814]/20 to-transparent" />

                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#040814]/50" />

                {/* Image highlight */}
                <div className="absolute left-8 right-8 top-8 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
              </div>

              {/* Image corner label */}
              <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-[#040814]/60 px-3.5 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  Built With Purpose
                </span>
              </div>

              {/* Play Button Cutout */}
              <div className="absolute -bottom-1 -left-1 rounded-tr-[2.5rem] bg-[#040814] p-4">
                <button
                  aria-label="Play introduction video"
                  className="group flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105 hover:bg-blue-50 md:h-20 md:w-20"
                >
                  <Play
                    className="ml-1 h-6 w-6 transition-transform duration-300 group-hover:scale-110 md:h-8 md:w-8"
                    fill="currentColor"
                  />
                </button>
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-white/10 bg-[#040814]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                    <ArrowUpRight size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Digital Innovation
                    </p>

                    <p className="mt-0.5 text-[11px] text-zinc-400">
                      Built to scale
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
