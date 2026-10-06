"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const end = target;
          const duration = 2000;
          const increment = end / (duration / 16);

          const handleCount = () => {
            start += increment;

            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(handleCount);
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

    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="relative z-10 text-6xl font-bold tracking-tighter text-white transition-all duration-500 md:text-8xl"
    >
      {count}
      <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {suffix}
      </span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#040814] py-20 md:py-24">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-48 top-1/3 h-125 w-125 rounded-full bg-blue-600/8 blur-[140px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-125 w-125 rounded-full bg-cyan-500/6 blur-[140px]" />

      {/* Technical grid */}
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

      {/* Center fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#040814_80%)]" />

      {/* Top divider */}
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent" />

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
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-blue-500/40" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              Our Performance
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Delivering{" "}
            <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
            Measurable results, long-term partnerships, and a commitment to
            building digital products that create real business impact.
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-linear-to-r from-transparent to-blue-500/50" />
            <span className="h-1 w-1 rounded-full bg-blue-500" />
            <span className="h-px w-10 bg-linear-to-l from-transparent to-blue-500/50" />
          </div>
        </motion.div>

        {/* Stats */}
        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-1/2 hidden h-px bg-linear-to-r from-transparent via-blue-500/15 to-transparent lg:block" />

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative"
            >
              <div className="relative flex min-h-65 flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/8 bg-white/2.5 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/20 hover:bg-white/4.5 hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)]">
                {/* Card glow */}
                <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/0 blur-[60px] transition-all duration-700 group-hover:bg-blue-500/15" />

                {/* Index */}
                <div className="absolute left-6 top-6 font-mono text-[10px] tracking-[0.2em] text-white/15 transition-colors duration-300 group-hover:text-blue-400/50">
                  0{index + 1}
                </div>

                {/* Number */}
                <CountUpAnimation target={stat.value} suffix={stat.suffix} />

                {/* Label */}
                <p className="relative z-10 mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300 md:text-xs">
                  {stat.label}
                </p>
              </div>
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
          <div className="flex items-center gap-3 rounded-full border border-white/8 bg-white/2.5 px-5 py-2.5 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Built for performance. Designed for growth.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
