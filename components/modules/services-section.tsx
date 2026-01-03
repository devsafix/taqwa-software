"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Blocks } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "Bespoke web applications built with cutting-edge technologies, tailored to your unique business needs.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
  },
  {
    icon: Brain,
    title: "AI Agents",
    description:
      "Intelligent automation solutions powered by advanced AI to transform your business operations.",
  },
  {
    icon: Blocks,
    title: "WordPress Solutions",
    description:
      "Custom WordPress themes and plugins engineered for performance, security, and scalability.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Subtle radial glow to separate sections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-white/90 ">
            Our Services
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Comprehensive solutions designed to elevate your digital presence
            through engineering excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 md:p-12 rounded-4xl bg-white/2 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-white/30 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-white/80 group-hover:text-white" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white/90 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/50 leading-relaxed font-light text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
