"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 17, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

function CountUpAnimation({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Skip the animation for visitors who prefer reduced motion.
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCount(target);
            return;
          }

          let start = 0;
          const end = target;
          const duration = 2000;
          const increment = end / (duration / 16);

          const handleCount = () => {
            start += increment;

            if (start < end) {
              setCount(Math.floor(start));
              frameId.current = requestAnimationFrame(handleCount);
            } else {
              setCount(end);
            }
          };

          handleCount();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, [target]);

  return (
    <div
      ref={ref}
      className="relative z-10 text-6xl font-bold tabular-nums tracking-tighter text-white md:text-7xl xl:text-8xl"
    >
      {/* Screen readers get the final value, not every animation frame */}
      <span className="sr-only">
        {target}
        {suffix}
      </span>

      <span aria-hidden>
        {count}
        <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          {suffix}
        </span>
      </span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-black/50 py-20 lg:py-24">
      {/* ───────── Background ───────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Layered color mesh */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(45% 40% at 94% 55%, rgba(6,182,212,0.15), transparent 70%)
            `,
          }}
        />

        {/* Vertical column lines, fading toward the top and bottom */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 120px)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 25%, #000 75%, transparent)",
            maskImage:
              "linear-gradient(to bottom, transparent, #000 25%, #000 75%, transparent)",
          }}
        />

        {/* Horizontal light band behind the stats */}
        <div className="absolute inset-x-0 top-[58%] h-64 -translate-y-1/2 bg-linear-to-r from-transparent via-blue-500/15 to-transparent blur-3xl" />

        {/* Top divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center md:mb-20"
        >
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 py-2 pl-3 pr-4 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 rounded-full bg-blue-500/40 motion-safe:animate-ping" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
              Our Performance
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-balance text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Delivering{" "}
            <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
            Measurable results, long-term partnerships, and a commitment to
            building digital products that create real business impact.
          </p>
        </motion.div>

        {/* Stats panel */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative flex min-h-65 flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#070d20] p-8 text-center transition-colors duration-500 hover:bg-[#0a1330] lg:min-h-80"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/0 blur-[70px] transition-all duration-700 group-hover:bg-blue-500/25" />

              {/* Index */}
              <div className="absolute left-6 top-6 font-mono text-xs tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-blue-300">
                0{index + 1}
              </div>

              {/* Number */}
              <CountUpAnimation target={stat.value} suffix={stat.suffix} />

              {/* Accent bar */}
              <span
                aria-hidden
                className="relative mt-6 h-0.5 w-8 rounded-full bg-linear-to-r from-blue-400 to-cyan-300 opacity-60 transition-all duration-500 group-hover:w-16 group-hover:opacity-100"
              />

              {/* Label */}
              <p className="relative z-10 mt-5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 group-hover:text-white md:text-[13px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex items-center justify-center"
        >
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-5 py-3 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)] motion-safe:animate-pulse" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
              Built for performance. Designed for growth.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
