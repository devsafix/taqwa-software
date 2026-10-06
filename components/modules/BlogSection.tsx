"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  X,
  Clock,
  Calendar,
  Share2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPost]);

  return (
    <section
      id="blogs"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Ambient background glows */}
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#040814_82%)]" />

      {/* Top divider */}
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto container px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-center md:text-left"
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-blue-500/40" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                Insights & Journal
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Latest from{" "}
              <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                the Lab
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
              Ideas, experiments, engineering insights, and perspectives from
              the team building modern digital products.
            </p>
          </motion.div>

          {/* View all */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/blog"
              className="group flex items-center gap-3 rounded-full border border-white/8 bg-white/2.5 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/5 hover:text-white"
            >
              View All Posts
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: "easeOut",
              }}
              onClick={() => setSelectedPost(post)}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/8 bg-white/2.5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/20 hover:bg-white/4 hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                {/* Image */}
                <div className="relative aspect-[1.15/1] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover grayscale-[0.3] brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#040814] via-transparent to-transparent" />

                  {/* Blue tint */}
                  <div className="absolute inset-0 bg-blue-950/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Date */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#040814]/60 px-3.5 py-2 backdrop-blur-xl">
                    <Calendar size={11} className="text-blue-400" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/70">
                      {post.date}
                    </span>
                  </div>

                  {/* Number */}
                  <span className="absolute bottom-5 right-5 font-mono text-[10px] tracking-[0.2em] text-white/30">
                    0{index + 1}
                  </span>

                  {/* Read indicator */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                      Read Article
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-400/80">
                      {post.category}
                    </span>

                    <div className="flex items-center gap-1.5 text-zinc-600">
                      <Clock size={12} />

                      <span className="text-[9px] uppercase tracking-[0.12em]">
                        {post.readingTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold leading-tight tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white md:text-2xl">
                    {post.title}
                  </h3>

                  <div className="mt-7 flex items-center justify-between border-t border-white/6 pt-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
                      Explore Insight
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/8 bg-white/3 text-zinc-500 transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Reading Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-[#02040a]/90 backdrop-blur-2xl"
            />

            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="no-scrollbar relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl border border-white/10 bg-[#060a17] shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            >
              {/* Modal image */}
              <div className="relative h-72 w-full overflow-hidden md:h-105">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#060a17] via-[#060a17]/20 to-transparent" />

                {/* Image blue overlay */}
                <div className="absolute inset-0 bg-blue-950/15" />

                {/* Close */}
                <button
                  onClick={() => setSelectedPost(null)}
                  aria-label="Close article"
                  className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <X size={19} />
                </button>
              </div>

              {/* Modal content */}
              <div className="relative z-10 -mt-8 px-7 pb-10 md:-mt-14 md:px-14 md:pb-14">
                {/* Meta */}
                <div className="mb-7 flex flex-wrap items-center gap-5 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={13} className="text-blue-400" />
                    {selectedPost.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-blue-400" />
                    {selectedPost.readingTime}
                  </div>
                </div>

                {/* Title */}
                <h2 className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-tight text-white md:text-6xl">
                  {selectedPost.title}
                </h2>

                {/* Divider */}
                <div className="my-9 h-px bg-linear-to-r from-blue-500/30 via-white/5 to-transparent" />

                {/* Article */}
                <div className="max-w-3xl">
                  <p className="text-base font-light leading-8 text-zinc-400 md:text-xl md:leading-9">
                    {selectedPost.content}
                  </p>

                  <p className="mt-7 text-sm font-light leading-7 text-zinc-600 md:text-base">
                    The digital landscape continues to evolve rapidly. Building
                    products that remain useful, scalable, and intuitive
                    requires a balance between thoughtful engineering,
                    purposeful design, and a clear understanding of the people
                    using them.
                  </p>
                </div>

                {/* Share */}
                <div className="mt-12 flex items-center justify-between border-t border-white/6 pt-7">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                      Share this insight
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Spread the idea.
                    </p>
                  </div>

                  <button
                    aria-label="Share article"
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-zinc-400 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <Share2
                      size={17}
                      className="transition-transform duration-300 group-hover:rotate-6"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
