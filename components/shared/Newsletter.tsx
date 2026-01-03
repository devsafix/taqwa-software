"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24 md:py-32 px-4 relative">
      {/* Subtle radial glow to separate sections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-linear-to-br from-zinc-900 to-black border border-zinc-800 p-8 md:p-16 overflow-hidden text-center md:text-left"
        >
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Stay updated on the <br />{" "}
                <span className="text-zinc-500 italic">Next Big Thing</span>.
              </h2>
            </div>

            <div className="lg:w-1/2 w-full">
              <form className="group relative flex items-center">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-black/50 border border-zinc-800 rounded-full pl-6 pr-32 py-4 text-white focus:ring-2 focus:ring-zinc-700 outline-none transition-all"
                />
                <button className="absolute right-2 bg-white text-black p-2 md:px-6 md:py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-zinc-200 cursor-pointer">
                  <span className="hidden md:block">Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
