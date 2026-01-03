"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Blocks } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group p-8 h-full bg-card hover:bg-accent/5 transition-all duration-300 border-border hover:border-accent/50 cursor-pointer">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
