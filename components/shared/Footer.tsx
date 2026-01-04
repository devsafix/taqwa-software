"use client";
import React from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Projects",
      href: "#works",
    },
    {
      name: "Careers",
      href: "/careers",
    },
  ];

  const social = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/taqwasoft",
      icon: Linkedin,
    },
    {
      name: "Github",
      href: "https://github.com/taqwasoft",
      icon: Github,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/taqwasoft",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/taqwasoft",
      icon: Twitter,
    },
  ];

  return (
    <footer className="bg-black pt-16 md:pt-32 pb-12 px-4 md:px-6 border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-zinc-500 to-transparent opacity-20" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12 lg:mb-24">
          {/* Brand Info */}
          <div className="space-y-8 col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center rotate-3 group hover:rotate-12 transition-transform">
                <span className="text-black font-black text-lg">T</span>
              </div>
              <span className="text-2xl font-bold uppercase tracking-tighter text-white">
                Taqwa Software
              </span>
            </Link>
            <p className="text-white/80 max-w-sm text-lg font-light leading-relaxed">
              Excellence in engineering, elegance in design. We build digital
              assets that stand the test of time.
            </p>
            <div className="flex gap-4">
              {social.map(({ href, icon: Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white/90 font-bold text-xs uppercase tracking-[0.2em]">
              Navigation
            </h4>
            <ul className="space-y-4">
              {menu.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white/80 transition-colors flex items-center group text-sm font-medium"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-white/90 font-bold text-xs uppercase tracking-[0.2em]">
              Contact
            </h4>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-white/50 text-sm">Drop us a line</p>
                <p className="text-white/80 font-medium hover:text-zinc-300 cursor-pointer transition-colors">
                  admin@taqwasoftware.com
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-white/50 text-sm">Global HQ</p>
                <p className="text-white/80 font-medium leading-relaxed">
                  Innovation Tower, DIFC <br />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/80 text-xs tracking-wide">
            © {currentYear} TAQWA SOFTWARE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <Link
              href="/privacy-policy"
              className="text-white/80 hover:text-white text-xs transition-colors uppercase tracking-widest"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/80 hover:text-white text-xs transition-colors uppercase tracking-widest"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
