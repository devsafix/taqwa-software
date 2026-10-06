"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Play,
  ArrowUpRight,
  Sparkles,
  Code2,
  PenTool,
  BrainCircuit,
  Database,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

const expertise = [
  { icon: Code2, label: "Software Engineering" },
  { icon: PenTool, label: "UI/UX Design" },
  { icon: BrainCircuit, label: "Agentic AI" },
  { icon: Database, label: "Odoo ERP" },
];

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
      id="about"
      className="relative isolate overflow-hidden bg-black/50 py-20 lg:py-32"
    >
      {/* ───────── Background ───────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Dot matrix that fades out toward the edges */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 65% at 50% 45%, #000 15%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 50% 45%, #000 15%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-24">
          {/* ───────── Left Column: Content ───────── */}
          <div className="z-10 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="gsap-text mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 py-2 pl-3 pr-4 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 rounded-full bg-blue-500/40 motion-safe:animate-ping" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-300">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="gsap-text text-balance text-4xl font-bold uppercase leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl">
              From Idea To <br />
              <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text pb-1 text-transparent">
                Digital Impact
              </span>
            </h2>

            {/* Paragraph Content */}
            <div className="gsap-text mt-8 max-w-xl space-y-5 text-lg font-light leading-8 text-zinc-400">
              <p>
                At{" "}
                <strong className="font-medium text-white">
                  Taqwa Software
                </strong>
                , we believe that every visionary idea deserves a seamless
                digital experience. We are a team of passionate software
                engineers, UI/UX designers, and AI strategists dedicated to
                turning complex concepts into high-performing web and mobile
                applications.
              </p>

              <p>
                With innovation at our core, we blend creative design, Agentic
                AI, and robust Odoo ERP systems to deliver solutions that help
                businesses scale, engage users, and stay ahead in the digital
                landscape. Our mission is to make enterprise-grade software
                engineering accessible and impactful.
              </p>
            </div>

            {/* Concluding Statement */}
            <div className="gsap-text relative mt-9 w-full max-w-xl overflow-hidden rounded-2xl border border-white/8 bg-linear-to-r from-blue-500/10 via-white/3 to-transparent py-5 pl-6 pr-5">
              <p className="text-sm font-bold uppercase leading-relaxed tracking-widest text-white md:text-base">
                Taqwa Software — Where engineering excellence meets digital
                innovation.
              </p>
            </div>
          </div>

          {/* ───────── Right Column ───────── */}
          <div className="about-image relative z-10 w-full py-10">
            {/* Orbit rings behind the image */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
            >
              <div className="absolute aspect-square w-[118%] rounded-full border border-white/6" />
              <div className="absolute aspect-square w-full rounded-full border border-blue-400/15" />

              <div className="absolute aspect-square w-[118%] motion-safe:animate-[spin_90s_linear_infinite]">
                <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              </div>

              <div className="absolute h-3/4 w-3/4 rounded-full bg-blue-600/25 blur-[100px]" />
            </div>

            {/* Image wrapper */}
            <div className="group relative aspect-4/3 w-full">
              {/* Gradient frame */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-white/30 via-white/5 to-blue-400/40 p-px shadow-[0_40px_100px_-20px_rgba(37,99,235,0.35)]">
                <div className="relative h-full w-full overflow-hidden rounded-[calc(2.5rem-1px)] bg-zinc-900">
                  <Image
                    src="/office-work.jpg"
                    alt="Taqwa Software Team collaborating"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover opacity-80 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Blue duotone tint */}
                  <div className="absolute inset-0 bg-[#1d4ed8]/30 mix-blend-color" />

                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-linear-to-tr from-[#040814]/90 via-[#040814]/20 to-transparent" />

                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#040814]/60" />

                  {/* Image highlight */}
                  <div className="absolute left-8 right-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

                  {/* Play Button */}
                  <button
                    type="button"
                    aria-label="Play introduction video"
                    className={`group/play absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-[0_0_40px_rgba(59,130,246,0.45)] transition-all duration-300 hover:scale-105 hover:bg-blue-50 md:bottom-8 md:left-8 md:h-20 md:w-20 ${focusRing}`}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-white/60 motion-safe:animate-ping"
                    />

                    <Play
                      className="ml-1 h-6 w-6 transition-transform duration-300 group-hover/play:scale-110 md:h-8 md:w-8"
                      fill="currentColor"
                    />
                  </button>
                </div>
              </div>

              {/* Image corner label */}
              <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-[#040814]/60 px-3.5 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Built With Purpose
                </span>
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/12 bg-[#0a1124]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1 sm:block lg:-right-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/15 text-blue-300">
                    <ArrowUpRight size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Digital Innovation
                    </p>

                    <p className="mt-0.5 text-xs text-zinc-400">
                      Built to scale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
