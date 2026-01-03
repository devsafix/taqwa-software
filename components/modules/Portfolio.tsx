"use client";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "FinFlow Dashboard",
    category: "Web Application",
    description:
      "A comprehensive financial analytics platform with real-time data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "MediCare App",
    category: "Mobile Application",
    description:
      "Healthcare management app connecting patients with providers seamlessly.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "AI"],
  },
  {
    title: "AI Sales Agent",
    category: "AI Solution",
    description:
      "Intelligent conversational AI that handles customer inquiries 24/7.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["OpenAI", "Python", "NLP"],
  },
  {
    title: "LuxeCommerce",
    category: "E-commerce",
    description:
      "Premium e-commerce platform with personalized shopping experiences.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "Headless CMS"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
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
  return (
    <section id="works" className="py-24 md:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-white/60 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white/90">
            Featured Work
          </h2>
          <div className="w-12 h-1 bg-white/30 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="group cursor-pointer"
            >
              {/* Image Container */}
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

                {/* Clean Overlay for Text */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                  <p className="text-white text-lg font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.description}
                  </p>
                </div>

                {/* The Floating Arrow */}
                <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              {/* Content Information */}
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
    </section>
  );
}
