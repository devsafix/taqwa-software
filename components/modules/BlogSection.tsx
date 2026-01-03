"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "The Future of AI Agents in Modern SaaS",
    category: "AI & Tech",
    date: "Jan 12, 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    slug: "ai-agents-future",
  },
  {
    title: "Scaling Next.js 16 for Enterprise Applications",
    category: "Engineering",
    date: "Jan 05, 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    slug: "scaling-nextjs",
  },
  {
    title: "Why Minimalist Design Still Dominates in 2026",
    category: "UI/UX Design",
    date: "Dec 28, 2025",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    slug: "minimalist-design",
  },
];

export function BlogSection() {
  return (
    <section
      id="blogs"
      className="py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end items-center gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-white/60 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Insights & Journal
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90">
              Latest from <span className="italic text-white/40">the Lab</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="group flex items-center gap-3 text-white/90 font-bold text-sm tracking-widest uppercase border-b border-white/20 pb-2 hover:border-white transition-all"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              {/* Image wrapper */}
              <div className="relative aspect-video mb-8 overflow-hidden rounded-4xl border border-white/10 bg-white/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/80 uppercase tracking-widest">
                  {post.date}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 px-2">
                <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold text-white/90 leading-tight group-hover:text-white transition-colors">
                  {post.title}
                </h3>

                {/* "Read Article" micro-interaction */}
                <div className="flex items-center gap-2 pt-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-white font-bold text-xs uppercase tracking-tight">
                    Read Article
                  </span>
                  <div className="w-8 h-px bg-white/50" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
