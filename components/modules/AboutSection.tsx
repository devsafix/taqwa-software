"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate all elements with the 'gsap-text' class
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#040814] py-20 lg:py-24 overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start z-10">
            {/* Eyebrow */}
            <div className="gsap-text flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-400">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="gsap-text text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-[1.1] tracking-tight">
              From Idea To <br />
              <span className="text-transparent bg-clip-text bg-blue-400 animate-gradient-x">
                Digital Impact
              </span>
            </h2>

            {/* Paragraph Content */}
            <p className="gsap-text text-zinc-400 mt-8 text-lg leading-relaxed font-light">
              At{" "}
              <strong className="text-white font-medium">Taqwa Software</strong>
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
            <p className="gsap-text text-white font-bold text-sm md:text-base uppercase tracking-widest mt-8 border-l-2 border-blue-500 pl-4">
              Taqwa Software — Where engineering excellence meets digital
              innovation.
            </p>
          </div>

          {/* Right Column: Image with Play Button Cutout */}
          <div className="relative w-full aspect-4/3 lg:aspect-4/4 xl:aspect-4/3 z-10 mt-10 lg:mt-0">
            {/* Main Image Wrapper */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/10">
              {/* Note: Replace src with your actual office or team image path */}
              <Image
                src="/office-work.jpg"
                alt="Taqwa Software Team collaborating"
                fill
                className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              {/* Subtle gradient overlay to match dark theme */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#040814]/80 to-transparent" />
            </div>

            {/* Overlapping Play Button Container (matches reference design's bottom-left cutout) */}
            <div className="absolute -bottom-1 -left-1 bg-[#040814] p-4 rounded-tr-[2.5rem]">
              <button className="w-16 h-16 md:w-20 md:h-20 bg-white hover:bg-blue-50 text-black rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <Play
                  className="w-6 h-6 md:w-8 md:h-8 ml-1"
                  fill="currentColor"
                />
              </button>
            </div>

            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
