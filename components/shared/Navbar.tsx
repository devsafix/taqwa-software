"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95, y: -20 },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 px-6 ${
            isScrolled
              ? "bg-zinc-900/40 backdrop-blur-md border border-zinc-700 shadow-2xl py-4"
              : "bg-transparent py-2"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-black font-black text-sm">T</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-white uppercase">
              Taqwa<span className="text-zinc-500">Software</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Services", "Works", "Blogs"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest font-semibold text-zinc-300/80 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link target="_blank" href={"https://wa.me/8801709190412"}>
              <button className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
                LETS TALK
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 hover:bg-zinc-800 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-24 left-4 right-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl md:hidden z-50 overflow-hidden"
          >
            {/* Background Accent for Menu */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />

            <div className="flex flex-col gap-6 relative z-10">
              {["Home", "Services", "Works", "Blogs"].map((item) => (
                <motion.div key={item} variants={itemVariants}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="md:text-2xl text-xl font-bold text-white/60 hover:text-white transition-colors block"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-4">
                <Link target="_blank" href={"https://wa.me/8801709190412"}>
                  <button className="w-full py-4 bg-white text-black font-bold rounded-2xl">
                    LETS TALK
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
