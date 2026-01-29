"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Clock, Calendar, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// 1. Enhanced Blog Data Structure
const blogs = [
  {
    title: "The Future of AI Agents in Modern SaaS",
    category: "AI & Tech",
    date: "Jan 12, 2026",
    readingTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    slug: "ai-agents-future",
    content:
      "Artificial Intelligence is shifting from passive tools to active agents. In this deep dive, we explore how autonomous agents are redefining the SaaS landscape by handling complex workflows without human intervention...",
  },
  {
    title: "Scaling Next.js 16 for Enterprise Applications",
    category: "Engineering",
    date: "Jan 05, 2026",
    readingTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    slug: "scaling-nextjs",
    content:
      "With the release of Next.js 16, enterprise-level scaling has become more streamlined. We examine the latest caching strategies, server actions, and architectural patterns required to maintain performance at scale...",
  },
  {
    title: "Why Minimalist Design Still Dominates in 2026",
    category: "UI/UX Design",
    date: "Dec 28, 2025",
    readingTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    slug: "minimalist-design",
    content:
      "Minimalism isn't just about 'less.' It's about 'better.' We discuss how the 'OLED-first' design philosophy and high-end micro-interactions are keeping minimalism relevant in a world of visual clutter...",
  },
];

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<(typeof blogs)[0] | null>(
    null,
  );

  // Maintain scroll consistency
  useEffect(() => {
    if (selectedPost) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedPost]);

  return (
    <section
      id="blogs"
      className="py-24 md:py-32 px-4 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end items-center gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center md:text-left"
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
              View All Posts{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative aspect-video mb-8 overflow-hidden rounded-4xl border border-white/10 bg-white/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/80 uppercase tracking-widest">
                  {post.date}
                </div>
              </div>
              <div className="space-y-4 px-2">
                <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold text-white/90 leading-tight group-hover:text-white transition-colors">
                  {post.title}
                </h3>
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

      {/* 2. Blog Reading Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] bg-zinc-950 border border-white/10 shadow-2xl no-scrollbar"
            >
              {/* Modal Header Image */}
              <div className="relative w-full h-75 md:h-100">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-white/10 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body Content */}
              <div className="p-8 md:p-16 -mt-20 relative z-10">
                <div className="flex flex-wrap items-center gap-6 mb-8 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} /> {selectedPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} /> {selectedPost.readingTime}
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-10 leading-[0.9]">
                  {selectedPost.title}
                </h2>

                <div className="prose prose-invert max-w-none">
                  <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8">
                    {selectedPost.content}
                  </p>
                  <div className="w-full h-px bg-white/5 my-12" />
                  <div className="flex justify-between items-center">
                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
                      Share this Insight
                    </span>
                    <button className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                      <Share2 size={18} />
                    </button>
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
