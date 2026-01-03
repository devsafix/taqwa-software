"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".word");
      gsap.from(words, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5,
      });
    }
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-2 bg-accent border border-accent/20 rounded-full text-sm text-white/70"
        >
          Crafting Digital Excellence
        </motion.div>

        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight text-balance"
        >
          <span className="word inline-block">Building</span>{" "}
          <span className="word inline-block">the</span>{" "}
          <span className="word inline-block">future</span>
          <br />
          <span className="word inline-block">of</span>{" "}
          <span className="word inline-block">software</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We transform visionary ideas into exceptional digital experiences
          through innovative technology and elegant design
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="text-base px-8" onClick={scrollToWork}>
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
