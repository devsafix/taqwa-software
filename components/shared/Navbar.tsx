"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  MonitorSmartphone,
  BrainCircuit,
  Database,
  Code2,
  Smartphone,
  Server,
  Sparkles,
  Building2,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#040814]/85 backdrop-blur-xl py-4" : "bg-transparent py-6"}`}
    >
      <div className="mx-auto w-full container px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="relative z-70 flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <span className="font-black text-black">T</span>
            </div>

            <span className="md:text-2xl text-xl font-bold tracking-tight text-white">
              Taqwa<span className="text-blue-400">Software</span>
            </span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex xl:gap-14">
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 py-3 font-semibold uppercase tracking-wide text-zinc-300 transition-colors hover:text-white">
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === "services" && <MegaMenu type="services" />}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("industries")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 py-3 font-semibold uppercase tracking-wide text-zinc-300 transition-colors hover:text-white">
                Industries
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${activeMenu === "industries" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === "industries" && <MegaMenu type="industries" />}
              </AnimatePresence>
            </div>

            <Link
              href="#projects"
              className="py-3 font-semibold uppercase tracking-wide text-zinc-300 transition-colors hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="#blog"
              className="py-3 font-semibold uppercase tracking-wide text-zinc-300 transition-colors hover:text-white"
            >
              Blog
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link
              target="_blank"
              href="https://wa.me/8801709190412"
              className="group flex items-center gap-3 rounded-full border border-white/25 bg-transparent px-6 py-3 font-bold tracking-wide text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              CONTACT US
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="relative z-70 rounded-full p-2 text-white lg:hidden"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setActiveMenu(null);
            }}
          >
            {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 right-0 top-full max-h-[calc(100vh-80px)] overflow-y-auto border-t border-white/10 bg-[#040814]/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto w-full max-w-175 px-6 py-6">
              <MobileMenuItem
                title="Services"
                open={mobileSubmenu === "services"}
                onClick={() =>
                  setMobileSubmenu(
                    mobileSubmenu === "services" ? null : "services",
                  )
                }
              />

              <AnimatePresence>
                {mobileSubmenu === "services" && (
                  <MobileSubmenu>
                    <MobileLink
                      icon={<MonitorSmartphone size={19} />}
                      title="Web & App Design"
                      description="End-to-end UI/UX & development"
                      href="#"
                      onClick={closeMobileMenu}
                    />
                    <MobileLink
                      icon={<BrainCircuit size={19} />}
                      title="Agentic AI"
                      description="Intelligent automation systems"
                      href="#"
                      onClick={closeMobileMenu}
                    />
                    <MobileLink
                      icon={<Database size={19} />}
                      title="Odoo ERP"
                      description="Scalable business solutions"
                      href="#"
                      onClick={closeMobileMenu}
                    />
                    <MobileLink
                      icon={<Code2 size={19} />}
                      title="Software Development"
                      description="Modern scalable applications"
                      href="#"
                      onClick={closeMobileMenu}
                    />
                  </MobileSubmenu>
                )}
              </AnimatePresence>

              <MobileMenuItem
                title="Industries"
                open={mobileSubmenu === "industries"}
                onClick={() =>
                  setMobileSubmenu(
                    mobileSubmenu === "industries" ? null : "industries",
                  )
                }
              />

              <AnimatePresence>
                {mobileSubmenu === "industries" && (
                  <MobileSubmenu>
                    <MobileLink
                      icon={<Building2 size={19} />}
                      title="Enterprise"
                      description="Digital solutions for organizations"
                      href="#"
                      onClick={closeMobileMenu}
                    />
                    <MobileLink
                      icon={<ShoppingCart size={19} />}
                      title="E-Commerce"
                      description="Scalable online commerce systems"
                      href="#"
                      onClick={closeMobileMenu}
                    />
                    <MobileLink
                      icon={<GraduationCap size={19} />}
                      title="Education"
                      description="Modern education platforms"
                      href="#"
                      onClick={closeMobileMenu}
                    />
                    <MobileLink
                      icon={<HeartPulse size={19} />}
                      title="Healthcare"
                      description="Technology for better healthcare"
                      href="#"
                      onClick={closeMobileMenu}
                    />
                  </MobileSubmenu>
                )}
              </AnimatePresence>

              <Link
                href="#projects"
                onClick={closeMobileMenu}
                className="block border-b border-white/10 py-5 text-base font-semibold uppercase tracking-wide text-white"
              >
                Projects
              </Link>

              <Link
                href="#blog"
                onClick={closeMobileMenu}
                className="block border-b border-white/10 py-5 text-base font-semibold uppercase tracking-wide text-white"
              >
                Blog
              </Link>

              <Link
                target="_blank"
                href="https://wa.me/8801709190412"
                onClick={closeMobileMenu}
                className="mt-6 flex w-full items-center justify-between rounded-full border border-white/25 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                CONTACT US
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MegaMenu = ({ type }: { type: "services" | "industries" }) => {
  const isServices = type === "services";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-23.5 z-60 w-[calc(100vw-48px)] max-w-356.25 -translate-x-1/2"
    >
      <div className="max-h-[calc(100vh-115px)] overflow-y-auto rounded-xl bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-9 lg:p-10">
        {isServices ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
            <div className="min-w-0">
              <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                  Core Departments
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <MegaCard
                  icon={<MonitorSmartphone size={22} />}
                  title="Product Design"
                  description="UX/UI built around product and business goals"
                />
                <MegaCard
                  icon={<MonitorSmartphone size={22} />}
                  title="Web Design"
                  description="End-to-end websites, from design to launch"
                />
                <MegaCard
                  icon={<Sparkles size={22} />}
                  title="Branding"
                  description="Strategy + identity for ambitious digital-first brands"
                />
                <MegaCard
                  icon={<Code2 size={22} />}
                  title="Web Development"
                  description="From MVPs to scalable, robust digital products"
                />
              </div>

              <Link
                href="#"
                className="group mt-8 block overflow-hidden rounded-xl border border-gray-100 bg-linear-to-r from-[#f4f0e9] via-[#f7f5f0] to-[#e6e9ee] p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-[#090d24]">
                        Product Discovery
                      </h3>

                      <span className="rounded bg-[#090d24] px-2 py-1 text-[10px] font-bold text-white">
                        1–2 weeks
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 sm:text-base">
                      Turn an idea into a clear, validated product plan
                    </p>
                  </div>

                  <ArrowUpRight
                    size={25}
                    className="shrink-0 text-[#090d24] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <p className="mb-7 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                  Design
                </p>

                <div className="space-y-5">
                  <MegaTextLink title="SaaS Design" />
                  <MegaTextLink title="Mobile App Design" />
                  <MegaTextLink title="Landing Page Design" />
                  <MegaTextLink title="Website Redesign" />
                  <MegaTextLink title="Rebranding" />
                  <MegaTextLink title="Design Systems" />
                  <MegaTextLink title="UX Audit" />
                </div>
              </div>

              <div>
                <p className="mb-7 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                  Development
                </p>

                <div className="space-y-5">
                  <MegaTextLink title="AI Integration" />
                  <MegaTextLink title="Mobile App Development" />
                  <MegaTextLink title="MVP Development" />
                  <MegaTextLink title="Software Development" />
                  <MegaTextLink title="CMS Development" />
                  <MegaTextLink title="Cloud Development" />
                  <MegaTextLink title="API Development" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                Industries We Serve
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#090d24] sm:text-3xl">
                Technology built around your industry
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <IndustryCard
                icon={<Building2 size={24} />}
                title="Enterprise"
                description="Scalable digital systems for modern organizations."
              />
              <IndustryCard
                icon={<ShoppingCart size={24} />}
                title="E-Commerce"
                description="High-performance commerce experiences."
              />
              <IndustryCard
                icon={<GraduationCap size={24} />}
                title="Education"
                description="Digital platforms for learning and growth."
              />
              <IndustryCard
                icon={<HeartPulse size={24} />}
                title="Healthcare"
                description="Technology designed around better experiences."
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const MegaCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Link
      href="#"
      className="group flex items-start gap-4 rounded-xl p-2 transition-all duration-300 hover:bg-gray-100"
    >
      <div className="mt-0.5 shrink-0 text-[#090d24] transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <div>
        <h3 className="text-base font-bold text-[#090d24] sm:text-lg">
          {title}
        </h3>

        <p className="mt-1.5 max-w-70 text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>
    </Link>
  );
};

const MegaTextLink = ({ title }: { title: string }) => {
  return (
    <Link
      href="#"
      className="group block text-base font-semibold text-[#090d24] transition-colors hover:text-blue-600"
    >
      <span className="inline-flex items-center gap-2">
        {title}

        <ArrowUpRight
          size={14}
          className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        />
      </span>
    </Link>
  );
};

const IndustryCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Link
      href="#"
      className="group rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-[#090d24] transition-colors group-hover:bg-[#090d24] group-hover:text-white">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-[#090d24]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>

      <ArrowUpRight
        size={18}
        className="mt-5 text-gray-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#090d24]"
      />
    </Link>
  );
};

const MobileMenuItem = ({
  title,
  open,
  onClick,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between border-b border-white/10 py-5 text-left text-base font-semibold uppercase tracking-wide text-white"
    >
      {title}

      <ChevronDown
        size={18}
        className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      />
    </button>
  );
};

const MobileSubmenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
    >
      <div className="space-y-2 py-4">{children}</div>
    </motion.div>
  );
};

const MobileLink = ({
  icon,
  title,
  description,
  href,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-white/5"
    >
      <div className="mt-0.5 text-blue-400">{icon}</div>

      <div>
        <div className="font-semibold text-white">{title}</div>
        <div className="mt-1 text-sm text-zinc-500">{description}</div>
      </div>
    </Link>
  );
};

export default Navbar;
