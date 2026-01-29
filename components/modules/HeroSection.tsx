"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".word");
      gsap.from(words, {
        opacity: 0,
        y: 100,
        rotateX: -45,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5,
      });
    }
  }, []);

  const scrollToWork = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110 opacity-40 brightness-75"
        >
          <source src="/loopbg.mp4" type="video/mp4" />
        </video>
        {/* Subtle Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* 2. Ambient Glow (kept for consistency) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/5 rounded-full blur-[120px] pointer-events-none z-1" />

      {/* 3. Hero Content Container */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">
            Available for New Projects
          </span>
        </motion.div>

        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter text-white perspective-1000"
        >
          <span className="word inline-block">Building</span>{" "}
          <span className="word inline-block">the</span>{" "}
          <span className="word inline-block text-zinc-400">future</span>
          <br />
          <span className="word inline-block">of</span>{" "}
          <span className="word inline-block">software</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          We transform visionary ideas into exceptional digital experiences
          through innovative technology and elegant engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="md:h-14 h-12 px-10 bg-white/90 text-black hover:bg-white/95 rounded-full font-bold md:text-base cursor-pointer transition-all duration-200 shadow-2xl shadow-white/10"
            onClick={scrollToWork}
          >
            Sample Works
            <ArrowDown className="h-5 w-5" />
          </Button>
          <Link target="_blank" href={"https://wa.me/8801709190412"}>
            <Button
              size="lg"
              variant="outline"
              className="md:h-14 h-12 px-10 border-zinc-700 text-white/90 hover:bg-zinc-900 rounded-full font-bold md:text-base bg-transparent transition-all backdrop-blur-sm"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* 4. Bottom Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-bold">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
