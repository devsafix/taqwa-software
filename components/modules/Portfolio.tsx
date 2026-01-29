"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// 1. Enhanced Data Structure
const projects = [
  {
    id: 1,
    title: "FinFlow Dashboard",
    category: "Web Application",
    description:
      "A comprehensive financial analytics platform with real-time data visualization.",
    longDescription:
      "FinFlow is a next-generation financial management tool designed for modern enterprises. It integrates complex data streams into a singular, intuitive dashboard, allowing for real-time decision making based on live market trends and internal performance metrics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
    liveLink: "https://finflow.taqwasoftware.com",
    githubLink: "#",
    features: [
      "Real-time Data Streaming",
      "Customizable Widgets",
      "Multi-currency Support",
      "Advanced Exporting",
    ],
  },
  {
    id: 2,
    title: "MediCare App",
    category: "Mobile Application",
    description:
      "Healthcare management app connecting patients with providers seamlessly.",
    longDescription:
      "MediCare streamlines the patient-provider relationship through an integrated mobile platform. It handles everything from appointment scheduling and medical record access to secure tele-health consultations.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "Firebase"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "HIPAA Compliant Messaging",
      "Automated Prescriptions",
      "Symptom Checker",
      "Provider Directory",
    ],
  },
  {
    id: 3,
    title: "AI Sales Agent",
    category: "AI Solution",
    description:
      "Intelligent conversational AI that handles customer inquiries 24/7.",
    longDescription:
      "Our AI Sales Agent utilizes Large Language Models (LLMs) to provide human-like interaction for first-tier customer support and lead qualification. It integrates directly with CRMs to capture data without human intervention.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["OpenAI", "Python", "LangChain", "n8n"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "Natural Language Processing",
      "Multi-language Support",
      "CRM Integration",
      "Sentiment Analysis",
    ],
  },
  {
    id: 4,
    title: "LuxeCommerce",
    category: "E-commerce",
    description:
      "A secure and user-friendly platform for online shopping and marketplace.",
    longDescription:
      "E-Commerce Platform is a dynamic web application that offers a wide selection of products, user authentication, secure payment processing, and a user-friendly interface for easy navigation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "TypeScript", "Tailwind", "Prisma"],
    liveLink: "#",
    githubLink: "#",
    features: [
      "User Authentication",
      "Payment Processing",
      "Product Catalog",
      "Order Management",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedProject]);

  return (
    <section id="works" className="py-24 md:py-32 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-white/60 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white/90">
            Featured Work
          </h2>
          <div className="w-12 h-1 bg-white/30 mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-4xl mb-8 bg-white/5 border border-white/10">
                <div className="aspect-4/3 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                  <p className="text-white text-lg font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.description}
                  </p>
                </div>
                <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div className="px-2">
                <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white/90 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 2. The Modal Component */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-zinc-950 border border-white/10 shadow-2xl no-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Image */}
                <div className="relative h-75 lg:h-full min-h-100">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent" />
                </div>

                {/* Right: Details */}
                <div className="p-8 md:p-12 space-y-8">
                  <div>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                      {selectedProject.title}
                    </h2>
                  </div>

                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-white/90 font-bold text-sm uppercase tracking-widest">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-white/50 text-sm"
                        >
                          <CheckCircle2 size={16} className="text-white/40" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href={selectedProject.liveLink}
                      target="_blank"
                      className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105"
                    >
                      Live Preview <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
