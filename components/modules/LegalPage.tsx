"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  related: { label: string; href: string };
};

const CONTACT_EMAIL = "admin@taqwasoftware.com";

export function LegalPage({
  eyebrow,
  titleLead,
  titleAccent,
  updated,
  intro,
  sections,
  related,
}: LegalPageProps) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const ids = sections.map((s) => s.id).join(",");

  // Highlight the section currently being read
  useEffect(() => {
    const elements = ids
      .split(",")
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  const goTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    el.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  const tocList = (
    <ul className="space-y-1">
      {sections.map((section, index) => {
        const isActive = active === section.id;

        return (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => goTo(e, section.id)}
              aria-current={isActive ? "true" : undefined}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all duration-300 ${focusRing} ${
                isActive
                  ? "bg-blue-500/10 font-semibold text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span
                className={`font-mono text-xs tracking-wider transition-colors ${
                  isActive ? "text-blue-400" : "text-zinc-600"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.title}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <main className="relative isolate overflow-hidden bg-black/50 pb-24 pt-36 lg:pb-32 lg:pt-44">
      {/* ───────── Background ───────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(50% 35% at 50% 0%, rgba(37,99,235,0.26), transparent 70%),
              radial-gradient(40% 30% at 0% 45%, rgba(99,102,241,0.14), transparent 70%),
              radial-gradient(40% 30% at 100% 70%, rgba(6,182,212,0.12), transparent 70%)
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 45% at 50% 15%, #000 10%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 45% at 50% 15%, #000 10%, transparent 100%)",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* ───────── Header ───────── */}
        <header className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center lg:mb-20">
          <Link
            href="/"
            className={`group mb-8 inline-flex items-center gap-2 rounded-full text-sm font-medium text-zinc-400 transition-colors hover:text-white ${focusRing}`}
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 py-2 pl-3 pr-4 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 rounded-full bg-blue-500/40 motion-safe:animate-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
              {eyebrow}
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            {titleLead}{" "}
            <span className="bg-linear-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              {titleAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
            {intro}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-sm">
            <CalendarDays size={14} className="text-blue-400" />
            Last updated: {updated}
          </div>
        </header>

        {/* ───────── Body ───────── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {/* Mobile: collapsible */}
            <details className="group rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl lg:hidden">
              <summary
                className={`flex cursor-pointer list-none items-center justify-between rounded-2xl px-5 py-4 text-sm font-semibold text-white ${focusRing}`}
              >
                On this page
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <nav
                aria-label="Table of contents"
                className="border-t border-white/10 p-3"
              >
                {tocList}
              </nav>
            </details>

            {/* Desktop */}
            <nav
              aria-label="Table of contents"
              className="hidden rounded-3xl border border-white/10 bg-white/3 p-4 backdrop-blur-xl lg:block"
            >
              <p className="mb-3 px-3 pt-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                On this page
              </p>

              {tocList}
            </nav>
          </aside>

          {/* Content */}
          <div className="min-w-0">
            <div className="rounded-3xl bg-linear-to-br from-white/25 via-white/5 to-blue-400/30 p-px shadow-[0_40px_100px_-30px_rgba(37,99,235,0.35)]">
              <div className="divide-y divide-white/8 rounded-[calc(1.5rem-1px)] bg-[#070d20]/95 p-6 backdrop-blur-xl sm:p-10 lg:p-12">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    aria-labelledby={`${section.id}-title`}
                    className="scroll-mt-28 py-10 first:pt-0 last:pb-0"
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 font-mono text-xs tracking-wider text-blue-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2
                        id={`${section.id}-title`}
                        className="text-xl font-bold tracking-tight text-white md:text-2xl"
                      >
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-4 text-[15px] leading-7 text-zinc-400 md:text-base md:leading-8 [&_a]:font-medium [&_a]:text-blue-300 [&_a]:underline-offset-4 hover:[&_a]:underline [&_strong]:font-semibold [&_strong]:text-zinc-200 [&_ul]:space-y-2.5 [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-3 [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-blue-400 [&_li]:before:content-['']">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            {/* Questions card */}
            <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/4 p-7 text-center backdrop-blur-xl md:flex-row md:p-8 md:text-left">
              <div>
                <p className="text-xl font-bold tracking-tight text-white">
                  Have a question?
                </p>

                <p className="mt-2 text-sm text-zinc-400 md:text-base">
                  Reach us any time at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-blue-300 underline-offset-4 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={related.href}
                  className={`group flex items-center gap-3 rounded-full border border-white/25 py-2 pl-5 pr-2 text-sm font-bold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10 ${focusRing}`}
                >
                  {related.label}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
