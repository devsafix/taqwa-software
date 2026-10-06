"use client";

import React from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ArrowUpRight,
  Mail,
  MapPin,
  ArrowUp,
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
    <footer className="relative overflow-hidden border-t border-white/6 bg-[#040814] px-4 pb-8 pt-16 md:px-6 md:pt-24">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute -left-60 bottom-0 h-125 w-125 rounded-full bg-blue-600/8 blur-[140px]" />

      <div className="pointer-events-none absolute -right-60 top-20 h-125 w-125 rounded-full bg-cyan-500/6 blur-[140px]" />

      {/* Technical Grid */}
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

      {/* Center Fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#040814_82%)]" />

      <div className="relative z-10 mx-auto container px-6">
        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 gap-14 border-b border-white/6 pb-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:pb-20">
          {/* Brand */}
          <div className="space-y-7 md:col-span-2 lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-11 w-11 rotate-3 items-center justify-center rounded-xl bg-white transition-all duration-300 group-hover:rotate-12 group-hover:bg-blue-400">
                <span className="text-lg font-black text-black">T</span>
              </div>

              <span className="text-2xl font-bold uppercase tracking-tighter text-white">
                Taqwa Software
              </span>
            </Link>

            <p className="max-w-md text-base font-light leading-7 text-zinc-500">
              Excellence in engineering, elegance in design. We build digital
              products, intelligent systems, and software experiences designed
              to stand the test of time.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {social.map(({ href, icon: Icon, name }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-white/2.5 text-zinc-500 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

              <h4 className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                Navigation
              </h4>
            </div>

            <ul className="space-y-4">
              {menu.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-sm font-medium text-zinc-500 transition-colors duration-300 hover:text-white"
                  >
                    {item.name}

                    <ArrowUpRight className="ml-2 h-3 w-3 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <h4 className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                Contact
              </h4>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="group">
                <div className="mb-2 flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-blue-400/70" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600">
                    Email
                  </p>
                </div>

                <a
                  href="mailto:admin@taqwasoftware.com"
                  className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  admin@taqwasoftware.com
                </a>
              </div>

              {/* Location */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400/70" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600">
                    Global HQ
                  </p>
                </div>

                <p className="text-sm font-medium leading-6 text-zinc-400">
                  Innovation Tower, DIFC
                  <br />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-7 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">
              © {currentYear} Taqwa Software
            </p>

            <p className="text-[9px] uppercase tracking-[0.12em] text-zinc-500">
              Engineering the future, one product at a time.
            </p>
          </div>

          <div className="flex items-center gap-7">
            <Link
              href="/privacy-policy"
              className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
