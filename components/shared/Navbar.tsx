"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  MonitorSmartphone,
  BrainCircuit,
  Database,
  Code2,
  Sparkles,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

type MenuKey = "services";

/** How long (ms) the menu stays open after the cursor leaves it. */
const CLOSE_DELAY = 160;

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  // Open instantly, and cancel any pending close.
  const openMenu = useCallback(
    (menu: MenuKey) => {
      clearCloseTimer();
      setActiveMenu(menu);
    },
    [clearCloseTimer],
  );

  // Close with a small grace period so crossing the gap between the
  // trigger and the mega menu never makes the menu flicker shut.
  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setActiveMenu(null), CLOSE_DELAY);
  }, [clearCloseTimer]);

  const closeMenuNow = useCallback(() => {
    clearCloseTimer();
    setActiveMenu(null);
  }, [clearCloseTimer]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearCloseTimer();
        setActiveMenu(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  const solidBackground = isScrolled || activeMenu !== null || mobileMenuOpen;

  return (
    <MotionConfig reducedMotion="user">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solidBackground
            ? "bg-[#040814]/90 backdrop-blur-xl"
            : "bg-transparent"
        } ${isScrolled ? "py-4" : "py-6"} ${
          isScrolled || activeMenu !== null
            ? "shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : ""
        }`}
      >
        <div className="mx-auto w-full container px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`relative z-70 flex items-center gap-2 rounded-md ${focusRing}`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <span className="font-black text-black">T</span>
              </div>

              <span className="md:text-2xl text-xl font-bold tracking-tight text-white">
                Taqwa<span className="text-blue-400">Software</span>
              </span>
            </Link>

            <div className="hidden items-center gap-10 lg:flex xl:gap-14">
              <NavLink href="/#about">About</NavLink>
              <div
                className="relative"
                onMouseEnter={() => openMenu("services")}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === "services"}
                  onFocus={() => openMenu("services")}
                  className={`group relative flex items-center gap-1.5 py-3 font-semibold uppercase tracking-wide transition-colors duration-200 ${focusRing} ${
                    activeMenu === "services"
                      ? "text-white"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      activeMenu === "services"
                        ? "rotate-180 text-blue-400"
                        : ""
                    }`}
                  />
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 bottom-1.5 h-0.5 origin-left rounded-full bg-blue-400 transition-transform duration-300 ${
                      activeMenu === "services" ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === "services" && (
                    <MegaMenu onNavigate={closeMenuNow} />
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="/#projects">Projects</NavLink>
              <NavLink href="/#faq">Faq</NavLink>
            </div>

            <div className="hidden lg:block">
              <Link
                target="_blank"
                href="https://wa.me/8801709190412"
                className={`group flex items-center gap-3 rounded-full border border-white/25 bg-transparent px-6 py-3 font-bold tracking-wide text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10 ${focusRing}`}
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
              aria-expanded={mobileMenuOpen}
              className={`relative z-70 rounded-full p-2 text-white transition-colors hover:bg-white/10 lg:hidden ${focusRing}`}
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                closeMenuNow();
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
              className="absolute left-0 right-0 top-full max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#040814]/98 backdrop-blur-2xl lg:hidden"
            >
              <div className="mx-auto w-full max-w-175 px-6 py-6">
                <Link
                  href="/#about"
                  onClick={closeMobileMenu}
                  className="block border-b border-white/10 py-5 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-blue-400"
                >
                  About
                </Link>

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

                <Link
                  href="/#projects"
                  onClick={closeMobileMenu}
                  className="block border-b border-white/10 py-5 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-blue-400"
                >
                  Projects
                </Link>

                {/* <Link
                  href="#blog"
                  onClick={closeMobileMenu}
                  className="block border-b border-white/10 py-5 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-blue-400"
                >
                  Blog
                </Link> */}

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
    </MotionConfig>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className={`group relative py-3 font-semibold uppercase tracking-wide text-zinc-300 transition-colors duration-200 hover:text-white ${focusRing}`}
  >
    {children}
    <span
      aria-hidden
      className="absolute inset-x-0 bottom-1.5 h-0.5 origin-left scale-x-0 rounded-full bg-blue-400 transition-transform duration-300 group-hover:scale-x-100"
    />
  </Link>
);

const MegaMenu = ({ onNavigate }: { onNavigate: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.985 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      onClick={(e) => {
        // Close after any link inside the menu is used.
        if ((e.target as HTMLElement).closest("a")) onNavigate();
      }}
      className="fixed inset-x-0 top-23.5 z-60 mx-auto w-[calc(100vw-48px)] max-w-356.25"
    >
      {/* Invisible hover bridge: fills the gap between the trigger and the
          panel so the pointer never "leaves" while travelling down. */}
      <div aria-hidden className="absolute inset-x-0 -top-10 h-10" />

      <div className="max-h-[calc(100dvh-115px)] overflow-y-auto overscroll-contain rounded-3xl bg-white p-5 shadow-[0_40px_100px_-20px_rgba(4,8,20,0.55)] ring-1 ring-black/5 sm:p-7 lg:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          <div className="min-w-0">
            <MegaHeading>Core Departments</MegaHeading>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <MegaCard
                icon={<Sparkles size={22} />}
                title="Product Design"
                description="UX/UI built around product and business goals"
              />
              <MegaCard
                icon={<MonitorSmartphone size={22} />}
                title="Web Development"
                description="End-to-end websites, from design to launch"
              />
              <MegaCard
                icon={<Smartphone size={22} />}
                title="App Development"
                description="Native and cross-platform mobile applications"
              />
              <MegaCard
                icon={<Code2 size={22} />}
                title="Enterprise & ERP Solutions"
                description="Scalable business solutions for growing companies"
              />
            </div>

            <Link
              href="https://wa.me/8801709190412"
              target="_blank"
              className={`group relative mt-6 block overflow-hidden rounded-2xl bg-[#090d24] p-6 text-white transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(9,13,36,0.5)] ${focusRing}`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-blue-500/25 blur-3xl transition-all duration-500 group-hover:bg-blue-400/35"
              />

              <div className="relative flex items-center justify-between gap-5">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold">Product Discovery</h3>

                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold text-blue-200 ring-1 ring-white/15">
                      1–2 weeks
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 sm:text-base">
                    Turn an idea into a clear, validated product plan
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#090d24] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 rounded-2xl bg-slate-100 p-6 sm:grid-cols-2 lg:p-7">
            <div>
              <MegaHeading>Design</MegaHeading>

              <ul className="space-y-1">
                <MegaTextLink title="SaaS Design" />
                <MegaTextLink title="Mobile App Design" />
                <MegaTextLink title="Landing Page Design" />
                <MegaTextLink title="Website Redesign" />
                <MegaTextLink title="Rebranding" />
                <MegaTextLink title="Design Systems" />
                <MegaTextLink title="UX Audit" />
              </ul>
            </div>

            <div>
              <MegaHeading>Development</MegaHeading>

              <ul className="space-y-1">
                <MegaTextLink title="Web Development" />
                <MegaTextLink title="Mobile App Development" />
                <MegaTextLink title="MVP Development" />
                <MegaTextLink title="Software Development" />
                <MegaTextLink title="AI Integration" />
                <MegaTextLink title="CMS Development" />
                <MegaTextLink title="API Development" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MegaHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
    {children}
  </p>
);

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
      className={`group flex items-start gap-4 rounded-2xl p-4 ring-1 ring-transparent transition-all duration-300 hover:bg-slate-50 hover:ring-slate-200 ${focusRing}`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#090d24]/5 text-[#090d24] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#090d24] group-hover:text-white">
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="flex items-center gap-1.5 text-base font-bold text-[#090d24] sm:text-lg">
          {title}
          <ArrowUpRight
            size={15}
            className="-translate-x-1 text-blue-600 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </h3>

        <p className="mt-1 max-w-70 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </Link>
  );
};

const MegaTextLink = ({ title }: { title: string }) => {
  return (
    <li
      className={`group -mx-3 flex items-center justify-between rounded-lg px-3 py-2 text-[15px] font-semibold text-[#090d24] transition-colors duration-200 hover:text-blue-600 ${focusRing}`}
    >
      {title}
    </li>
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
      aria-expanded={open}
      onClick={onClick}
      className={`flex w-full items-center justify-between border-b border-white/10 py-5 text-left text-base font-semibold uppercase tracking-wide transition-colors ${
        open ? "text-blue-400" : "text-white"
      }`}
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
      <div className="space-y-1 py-4">{children}</div>
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
      className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5 active:bg-white/10"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
        {icon}
      </div>

      <div className="min-w-0">
        <div className="font-semibold text-white">{title}</div>
        <div className="mt-0.5 text-sm text-zinc-400">{description}</div>
      </div>
    </Link>
  );
};

export default Navbar;
