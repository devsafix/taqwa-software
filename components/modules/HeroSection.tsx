"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore - Vanta doesn't have official TS types
import GLOBE from "vanta/dist/vanta.globe.min";
import gsap from "gsap";
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  MonitorSmartphone,
} from "lucide-react";

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const bottomCardsRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  // Initialize Full-Screen Vanta Globe
  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fafff,
          color2: 0xffffff,
          backgroundColor: 0x040814,
          size: 1.1,
        }),
      );
    }

    // Cleanup Vanta instance on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // GSAP Animations
  useEffect(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.3,
        },
      );
    }

    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 1.35,
        },
      );
    }

    if (bottomCardsRef.current) {
      gsap.fromTo(
        bottomCardsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 1,
        },
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#040814] pt-24 pb-10">
      {/* 1. Full-Screen Vanta Background Layer */}
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0 pointer-events-auto"
      />

      {/* 2. Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black opacity-70" />

      {/* 3. Main Content Layer (Z-10) */}
      <div className="container mx-auto w-full px-6 relative z-10 grow flex flex-col items-center justify-center pointer-events-none">
        {/* Headline Container (Centered Vertically) */}
        <div className="text-center w-full md:mt-auto mt-10 mb-auto">
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white/95 max-w-7xl mx-auto uppercase drop-shadow-2xl"
          >
            <div className="overflow-hidden inline-block">
              <span className="word inline-block">Engineering</span>
            </div>{" "}
            <div className="overflow-hidden inline-block">
              <span className="word inline-block">software</span>
            </div>{" "}
            <div className="overflow-hidden inline-block">
              <span className="word inline-block">&</span>
            </div>{" "}
            <div className="overflow-hidden inline-block">
              <span className="word inline-block">AI</span>
            </div>{" "}
            <br className="hidden md:block" />
            <div className="overflow-hidden inline-block">
              <span className="word inline-block">solutions</span>
            </div>{" "}
            <div className="overflow-hidden inline-block">
              <span className="word inline-block">for</span>
            </div>{" "}
            <div className="overflow-hidden inline-block">
              <span className="word inline-block">the</span>
            </div>{" "}
            <div className="overflow-hidden inline-block">
              <span className="word inline-block">top</span>
            </div>{" "}
            <div className="overflow-hidden inline-block">
              <span className="word inline-block">1%</span>
            </div>
          </h1>

          <p
            ref={descriptionRef}
            className="text-white/95 font-medium text-base md:text-lg lg:text-xl max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            We build high-performance software, intelligent AI systems, and
            scalable digital solutions that help ambitious businesses move
            faster and stay ahead.
          </p>
        </div>

        {/* Bottom Feature Navigation Cards */}
        {/* 'pointer-events-auto' allows these cards to be clickable over the background */}
        <div
          ref={bottomCardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto mt-auto pointer-events-auto"
        >
          {/* Card 1 */}
          <div className="flex items-center justify-between group cursor-pointer border border-white/10 bg-[#040814]/40 backdrop-blur-md hover:bg-white/5 p-6 rounded-xl transition-colors duration-300">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                <MonitorSmartphone size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold text-xl md:text-2xl group-hover:text-blue-400 transition-colors">
                  Web & App
                </h3>
                <p className="text-zinc-400 text-sm md:text-base mt-1">
                  Design, Websites, Apps
                </p>
              </div>
            </div>
            <ArrowUpRight className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-6 h-6" />
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-between group cursor-pointer border border-white/10 bg-[#040814]/40 backdrop-blur-md hover:bg-white/5 p-6 rounded-xl transition-colors duration-300">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 transform group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold text-xl md:text-2xl group-hover:text-cyan-400 transition-colors">
                  Agentic AI
                </h3>
                <p className="text-zinc-400 text-sm md:text-base mt-1">
                  Smart Automation, LLMs
                </p>
              </div>
            </div>
            <ArrowUpRight className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-6 h-6" />
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-between group cursor-pointer border border-white/10 bg-[#040814]/40 backdrop-blur-md hover:bg-white/5 p-6 rounded-xl transition-colors duration-300">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 transform group-hover:scale-110 transition-transform duration-300">
                <Database size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold text-xl md:text-2xl group-hover:text-purple-400 transition-colors">
                  Enterprise
                </h3>
                <p className="text-zinc-400 text-sm md:text-base mt-1">
                  Odoo ERP, Backend
                </p>
              </div>
            </div>
            <ArrowUpRight className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
