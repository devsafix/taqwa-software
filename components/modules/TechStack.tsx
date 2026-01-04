"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "n8n",
  "Vercel",
  "Hostinger",
  "AWS",
  "TypeScript",
  "Prisma",
  "Tailwind CSS",
];

export function TechStack() {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Subtle top divider to maintain section flow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-white/60 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Our Core Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/90">
              Powered by Modern{" "}
              <span className="italic text-white/40">Innovation</span>
            </h2>
          </motion.div>

          {/* Technology Grid/Flex Wrapper */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.3)" }}
                className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group cursor-default"
              >
                <span className="text-sm md:text-lg font-bold tracking-tight text-white/60 group-hover:text-white transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-[10px] md:text-xs text-white/60 font-bold uppercase tracking-[0.4em] text-center"
          >
            Engineered for performance, scalability, and security
          </motion.p>
        </div>
      </div>

      {/* Background Ambient Glow (matches Hero consistency) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-white/2 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
