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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

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
    <footer className="relative overflow-hidden bg-[#040814] pb-8 pt-16 md:px-6 md:pt-24">
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
        <div className="grid grid-cols-1 gap-12 border-b border-white/8 pb-14 md:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1.3fr] lg:gap-16 lg:pb-20">
          {/* Brand */}
          <div className="space-y-7 md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className={`group inline-flex items-center gap-1 rounded-lg ${focusRing}`}
            >
              <div className="flex h-8 w-8 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Taqwa Software"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold uppercase tracking-tighter text-white">
                Taqwa Software
              </span>
            </Link>

            <p className="max-w-md text-base leading-7 text-zinc-400">
              Excellence in engineering, elegance in design. We build digital
              products, intelligent systems, and software experiences designed
              to stand the test of time.
            </p>

            {/* Socials */}
            <ul className="flex flex-wrap gap-3">
              {social.map(({ href, icon: Icon, name }) => (
                <li key={name}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-zinc-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_10px_24px_-10px_rgba(96,165,250,0.5)] ${focusRing}`}
                  >
                    <Icon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <FooterHeading>Navigation</FooterHeading>

            <ul className="space-y-1">
              {menu.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`group relative flex items-center rounded-lg py-2 text-[15px] font-medium text-zinc-400 transition-all duration-300 hover:pl-4 hover:text-white ${focusRing}`}
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 h-px w-0 -translate-y-1/2 bg-blue-400 transition-all duration-300 group-hover:w-2.5"
                    />

                    {item.name}

                    <ArrowUpRight className="ml-2 h-3.5 w-3.5 -translate-x-1 translate-y-1 text-blue-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <FooterHeading>Contact</FooterHeading>

            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:admin@taqwasoftware.com"
                className={`group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/3 p-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/6 ${focusRing}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-400 group-hover:text-[#040814]">
                  <Mail className="h-4.5 w-4.5" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold text-zinc-500">
                    Email
                  </span>

                  <span className="mt-0.5 block truncate text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                    admin@taqwasoftware.com
                  </span>
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/3 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <MapPin className="h-4.5 w-4.5" />
                </span>

                <div>
                  <p className="text-xs font-semibold text-zinc-500">
                    Global HQ
                  </p>

                  <p className="mt-0.5 text-sm font-medium leading-6 text-zinc-200">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-1.5 text-center md:items-start md:text-left">
            <p className="text-sm font-semibold text-zinc-300">
              © {currentYear} Taqwa Software
            </p>

            <p className="text-[13px] text-zinc-500">
              Engineering the future, one product at a time.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className={`rounded text-[13px] font-medium text-zinc-400 transition-colors hover:text-white ${focusRing}`}
              >
                Privacy Policy
              </Link>

              <span aria-hidden className="h-3 w-px bg-white/15" />

              <Link
                href="/terms-of-service"
                className={`rounded text-[13px] font-medium text-zinc-400 transition-colors hover:text-white ${focusRing}`}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="mb-6 flex items-center gap-3 text-sm font-semibold tracking-wide text-white">
    {children}
    <span aria-hidden className="h-px flex-1 bg-white/10" />
  </h4>
);

export default Footer;
