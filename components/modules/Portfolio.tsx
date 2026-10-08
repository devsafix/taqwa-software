"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

/* ───────────────────────── Data ───────────────────────── */

type StoreKey = "play" | "appstore";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  /** Put the screenshot in /public/projects and match the file name here. */
  image: string;
  features: string[];
  links: { store: StoreKey; href: string }[];
  /** Extra tags shown next to the platform tags (Android / iOS). */
  extraTags?: string[];
  /** Optional note about our part in the project. */
  contribution?: string;
};

const storeMeta: Record<StoreKey, { label: string; platform: string }> = {
  play: { label: "Google Play", platform: "Android" },
  appstore: { label: "App Store", platform: "iOS" },
};

const projects: Project[] = [
  {
    id: 1,
    title: "Endak",
    category: "Service Marketplace",
    description:
      "Endak is a service marketplace that helps users find and connect with service providers in their area.",
    image: "/projects/endak.jpg",
    features: [
      "Users can browse different service categories and find the right service for their needs.",
      "Users can view service details, send requests, and communicate with providers through the app.",
      "Service providers can manage their services and respond to customer requests.",
      "The app is designed to make finding and requesting local services simple and convenient.",
    ],
    links: [
      {
        store: "play",
        href: "https://play.google.com/store/apps/details?id=com.appendak.app",
      },
      {
        store: "appstore",
        href: "https://apps.apple.com/us/app/endak-%D8%B9%D9%86%D8%AF%D9%83/id6758876126",
      },
    ],
  },
  {
    id: 2,
    title: "Towqi Vet",
    category: "Veterinary Care Platform",
    description:
      "Towqi Vet makes it easier for animal owners to get veterinary care without the usual hassle.",
    image: "/projects/towqi-vet.jpg",
    features: [
      "Owners can add and manage their animals and find suitable veterinary services through the app.",
      "Owners can request a vet visit based on their needs and communicate with the veterinarian directly.",
      "The app also helps keep animal information organized for easier access when needed.",
      "From regular checkups to on-site veterinary services, everything is managed from one place.",
    ],
    links: [
      {
        store: "play",
        href: "https://play.google.com/store/apps/details?id=com.app.tuqi",
      },
      {
        store: "appstore",
        href: "https://apps.apple.com/us/app/towqi-vet-animal-care/id6751596650",
      },
    ],
  },
  {
    id: 3,
    title: "Milo22",
    category: "Digital Business Card & Networking App",
    description:
      "Milo22 is a digital networking app that helps professionals create and share their business identity in a simple way.",
    image: "/projects/milo22.jpg",
    features: [
      "Users can create digital business cards and customize them based on their personal or professional needs.",
      "The app also includes tools for scanning physical business cards and saving the information digitally.",
      "Users can organize their contacts and keep important business information in one place.",
      "Sharing a professional profile becomes quick and easy, without relying on traditional paper cards.",
    ],
    links: [
      {
        store: "play",
        href: "https://play.google.com/store/apps/details?id=co.miloapp22.app&hl=en",
      },
      {
        store: "appstore",
        href: "https://apps.apple.com/us/app/milo-card-scanner/id6788605621",
      },
    ],
  },
  {
    id: 4,
    title: "Sougk",
    category: "Online Marketplace",
    description:
      "Sougk is a marketplace app where users can discover products and services and connect with sellers.",
    image: "/projects/sougk.jpg",
    features: [
      "Users can browse different listings, check product details, and find what they are looking for.",
      "The app provides a simple way for sellers to showcase their products and reach potential buyers.",
      "Users can interact with listings and manage their marketplace activities from the app.",
      "The overall experience is designed to make buying and selling more convenient.",
    ],
    extraTags: ["Flutter"],
    contribution:
      "Flutter mobile application, focusing on the UI, user flows, and core marketplace features.",
    links: [
      {
        store: "play",
        href: "https://play.google.com/store/apps/details?id=com.sougk.sd",
      },
    ],
  },
  {
    id: 5,
    title: "Dokaniyo",
    category: "Smart POS & Business Management",
    description:
      "Dokaniyo is a business management app built to help shop owners manage their daily operations from one place.",
    image: "/projects/dokanio.jpeg",
    features: [
      "Covers sales, purchases, products, customers, suppliers, and inventory management.",
      "Users can create sales, manage stock, and share digital receipts with their customers.",
      "The app also provides reports for sales, purchases, outstanding amounts, and overall business performance.",
      "Features like profit and loss tracking, low-stock alerts, and multiple user access make daily management easier.",
    ],
    links: [
      {
        store: "play",
        href: "https://play.google.com/store/apps/details?id=com.nestcloude.dokaniyo",
      },
    ],
  },
  {
    id: 6,
    title: "Lia Pizza",
    category: "Food Ordering App",
    description:
      "Lia Pizza is a food ordering app that makes it easy for customers to explore the menu and order their favorite meals.",
    image: "/projects/liapizza.jpeg",
    features: [
      "Users can browse different food items, check details, and add their choices to the cart.",
      "The app provides a simple checkout process for placing orders quickly.",
      "Customers can manage their orders and keep track of their order status from the app.",
      "The interface is designed to keep the ordering process straightforward and convenient.",
    ],
    links: [
      {
        store: "play",
        href: "https://play.google.com/store/apps/details?id=com.nestcloude.liapizzaes",
      },
    ],
  },
  {
    id: 7,
    title: "Likidy",
    category: "Marketplace & Service Platform",
    description:
      "Likidy is a marketplace where people can buy, sell, and exchange services in one place.",
    image: "/projects/likity.jpeg",
    features: [
      "Instead of relying on calls or separate messaging apps, users can send offers and negotiate directly through the app.",
      "Each offer can be accepted, rejected, or countered, with the full negotiation history kept in one place.",
      "Users can also chat, share photos, explore nearby listings, and follow other users.",
      "The platform includes reviews and a free-giveaway section to make transactions more useful and trustworthy.",
    ],
    links: [
      {
        store: "play",
        href: "https://play.google.com/store/apps/details?id=com.likidibuysell.app&hl=en&pli=1",
      },
    ],
  },
  {
    id: 8,
    title: "employEEZone",
    category: "Workplace & Career Support App",
    description:
      "employEEZone is designed to help employees handle everyday workplace situations with more confidence.",
    image: "/projects/emploe.jpeg",
    features: [
      "Brings practical HR guidance, workplace scenarios, and useful communication resources into one app.",
      "Users can keep a journal of workplace experiences and organize important interactions for future reference.",
      "The app also includes communication templates, career advice, job search tools, and interview resources.",
      "Employees can explore workplace policies and get help from an AI assistant or an HR professional when needed.",
    ],
    links: [
      {
        store: "play",
        href: "https://play.google.com/store/apps/details?id=com.employeezone.app&hl=en",
      },
    ],
  },
  {
    id: 9,
    title: "Prime Pilates",
    category: "Pilates & Fitness Booking App",
    description:
      "A modern fitness platform built for Prime Pilates, designed to make studio management simple and convenient.",
    image: "/projects/prime.jpeg",
    features: [
      "Users can explore Pilates classes, view schedules, and discover available sessions.",
      "The app supports both group and private session bookings with a smooth booking experience.",
      "Members can easily manage their reservations and keep track of their upcoming sessions.",
      "A clean and intuitive interface provides a seamless experience across the application.",
      "Developed with a focus on performance, usability, and reliable class & booking management.",
    ],
    links: [
      {
        store: "play",
        href: "https://play.google.com/store/apps/details?id=com.prime.pilates.app&hl=en",
      },
      {
        store: "appstore",
        href: "https://apps.apple.com/in/app/prime-pilates/id6741531586?l=bn",
      },
    ],
  },
];

const getTags = (project: Project) => [
  ...project.links.map((l) => storeMeta[l.store].platform),
  ...(project.extraTags ?? []),
];

/* ───────────────────────── Animation ───────────────────────── */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ───────────────────────── Image with fallback ───────────────────────── */

function ProjectImage({
  src,
  alt,
  title,
  sizes,
  className,
}: {
  src: string;
  alt: string;
  title: string;
  sizes: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  // Until the real image is added to /public, show a designed placeholder.
  if (!src || failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-600/25 via-[#0a1330] to-indigo-700/25">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <span
          aria-hidden
          className="relative select-none text-[9rem] font-black leading-none text-white/8"
        >
          {title.charAt(0)}
        </span>

        <Smartphone
          aria-hidden
          className="absolute h-10 w-10 text-blue-300/70"
          strokeWidth={1.5}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/* ───────────────────────── Modal ───────────────────────── */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Nothing on the server, and nothing until we are in the browser
  if (!mounted) return null;

  // Rendered into <body> so no parent stacking context can cover it
  return createPortal(
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#02040a]/90 backdrop-blur-xl"
          />

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl rounded-[2.5rem] bg-linear-to-br from-white/25 via-white/5 to-blue-400/30 p-px shadow-[0_40px_120px_-20px_rgba(37,99,235,0.45)]"
          >
            {/* Close Button */}
            <button
              type="button"
              autoFocus
              aria-label="Close project details"
              onClick={onClose}
              className={`absolute right-5 top-5 z-50 rounded-full border border-white/15 bg-[#040814]/70 p-3 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black md:right-6 md:top-6 ${focusRing}`}
            >
              <X size={20} />
            </button>

            <div className="no-scrollbar max-h-[calc(90dvh-2px)] overflow-y-auto overscroll-contain rounded-[calc(2.5rem-1px)] bg-[#070d20]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Image */}
                <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-136">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-[#1d4ed8]/10 mix-blend-color" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#070d20] via-transparent to-transparent" />
                </div>

                {/* Right: Details */}
                <div className="space-y-8 p-7 sm:p-10 lg:p-12">
                  <div>
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      {project.category}
                    </span>

                    <h2
                      id="project-modal-title"
                      className="mt-3 text-balance text-4xl font-bold tracking-tighter text-white md:text-5xl"
                    >
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-lg leading-8 text-zinc-300">
                    {project.description}
                  </p>

                  {/* Platform tags */}
                  <div className="flex flex-wrap gap-2">
                    {getTags(project).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white">
                      Key Features
                      <span aria-hidden className="h-px flex-1 bg-white/10" />
                    </h4>

                    <ul className="space-y-3">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-[15px] leading-6 text-zinc-300"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-blue-400"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.contribution && (
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-r from-blue-500/10 via-white/3 to-transparent py-4 pl-6 pr-5">
                      <span
                        aria-hidden
                        className="absolute inset-y-0 left-0 w-0.75 bg-linear-to-b from-blue-400 to-cyan-400"
                      />

                      <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300">
                        Our Contribution
                      </p>

                      <p className="text-sm leading-6 text-zinc-200">
                        {project.contribution}
                      </p>
                    </div>
                  )}

                  {/* Store links */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.links.map((link, i) => (
                      <a
                        key={link.store}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/link flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-bold transition-all duration-300 ${focusRing} ${
                          i === 0
                            ? "bg-white text-[#040814] hover:bg-blue-50 hover:shadow-[0_0_40px_rgba(96,165,250,0.45)]"
                            : "border border-white/25 text-white hover:border-white/50 hover:bg-white/10"
                        }`}
                      >
                        {storeMeta[link.store].label}

                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover/link:rotate-45 ${
                            i === 0
                              ? "bg-[#040814] text-white"
                              : "bg-white text-black"
                          }`}
                        >
                          <ExternalLink size={16} />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

/* ───────────────────────── Section ───────────────────────── */

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock background scroll and allow Escape to close while the modal is open
  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedProject]);

  return (
    <section
      id="portfolio"
      className="relative isolate overflow-hidden bg-black/50 py-20 lg:py-24"
    >
      {/* ───────── Background ───────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Layered color mesh */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(45% 30% at 15% 12%, rgba(37,99,235,0.22), transparent 70%),
              radial-gradient(40% 30% at 88% 35%, rgba(99,102,241,0.16), transparent 70%),
              radial-gradient(40% 30% at 10% 70%, rgba(6,182,212,0.12), transparent 70%),
              radial-gradient(45% 25% at 85% 95%, rgba(29,78,216,0.2), transparent 70%)
            `,
          }}
        />

        {/* Diagonal hatch, masked toward the center */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 22px)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, #000 10%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, #000 10%, transparent 100%)",
          }}
        />

        {/* Top divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:mb-24"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 py-2 pl-3 pr-4 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 rounded-full bg-blue-500/40 motion-safe:animate-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
              Our Portfolio
            </span>
          </div>

          <h2 className="text-balance text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-linear-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={projectVariants}
              className="group"
            >
              {/* Image frame */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative cursor-pointer rounded-3xl bg-linear-to-br from-white/25 via-white/5 to-blue-400/30 p-px transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_80px_-20px_rgba(37,99,235,0.45)]"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-[calc(1.5rem-1px)] bg-zinc-900">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  {/* Blue tint + base shade */}
                  <div className="absolute inset-0 bg-[#1d4ed8]/10 mix-blend-color" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#040814]/70 via-transparent to-transparent" />

                  {/* Top highlight */}
                  <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

                  {/* Index */}
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#040814]/60 px-3 py-1.5 font-mono text-xs tracking-[0.2em] text-white/80 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Hover description */}
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#040814]/95 via-[#040814]/50 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-7">
                    <p className="translate-y-4 text-sm leading-6 text-zinc-100 transition-transform duration-500 group-hover:translate-y-0 md:text-base md:leading-7">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-5 top-5 flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-2xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="px-2 pt-7">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-blue-300/90">
                  {project.category}
                </span>

                <h3 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-[28px]">
                  {project.title}
                </h3>

                <div className="mb-6 flex flex-wrap gap-2">
                  {getTags(project).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className={`group/btn inline-flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-5 text-sm font-semibold text-white transition-colors duration-300 hover:text-blue-300 ${focusRing}`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover/btn:rotate-45 group-hover/btn:border-white group-hover/btn:bg-white group-hover/btn:text-black">
                    <ArrowUpRight size={16} />
                  </span>
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
