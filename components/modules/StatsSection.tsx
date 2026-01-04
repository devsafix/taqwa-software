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
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="text-6xl md:text-8xl font-bold tracking-tighter text-white"
    >
      {count}
      {suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 md:py-32 px-4 relative">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-white/60 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Our Performance
          </span>
          <h2 className="text-4xl md:text-6xl mb-8 font-bold tracking-tighter text-white/90">
            Delivering Excellence
          </h2>
          <div className="w-12 h-1 bg-white/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-10 rounded-4xl bg-white/2 border border-white/5 flex flex-col items-center justify-center text-center group hover:border-white/20 transition-all duration-500"
            >
              <CountUpAnimation target={stat.value} suffix={stat.suffix} />
              <p className="text-white/50 mt-4 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">
                {stat.label}
              </p>

              {/* Subtle decorative glow behind number */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-3xl rounded-full transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
