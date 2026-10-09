import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden bg-[#040814] px-6 pb-20 pt-36">
      {/* ───────── Background ───────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Layered color mesh */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(50% 45% at 50% 40%, rgba(37,99,235,0.26), transparent 70%),
              radial-gradient(40% 35% at 5% 85%, rgba(6,182,212,0.14), transparent 70%),
              radial-gradient(40% 35% at 95% 15%, rgba(99,102,241,0.18), transparent 70%)
            `,
          }}
        />

        {/* Dot matrix that fades out toward the edges */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, #000 15%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, #000 15%, transparent 100%)",
          }}
        />

        {/* Top light beam */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 py-2 pl-3 pr-4 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute h-2.5 w-2.5 rounded-full bg-blue-500/40 motion-safe:animate-ping" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
            Error 404
          </span>
        </div>

        {/* Big 404 with orbit rings */}
        <div className="relative flex items-center justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute flex items-center justify-center"
          >
            <div className="absolute aspect-square w-88 rounded-full border border-white/6 sm:w-lg lg:w-2xl" />
            <div className="absolute aspect-square w-60 rounded-full border border-blue-400/15 sm:w-88 lg:w-116" />

            <div className="absolute aspect-square w-88 motion-safe:animate-[spin_90s_linear_infinite] sm:w-lg lg:w-2xl">
              <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            </div>
          </div>

          <h1
            aria-label="404"
            className="relative select-none bg-linear-to-b from-white via-blue-100 to-blue-500/30 bg-clip-text text-[8rem] font-black leading-none tracking-tighter text-transparent sm:text-[12rem] lg:text-[16rem]"
          >
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="mt-6 text-balance text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
          Page{" "}
          <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Not Found
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
          The page you&apos;re looking for may have been moved, renamed, or
          never existed. Let&apos;s get you back on track.
        </p>

        {/* Divider */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-12 bg-linear-to-r from-transparent to-blue-500/60" />
          <span className="h-1.5 w-1.5 rotate-45 bg-blue-400" />
          <span className="h-px w-12 bg-linear-to-l from-transparent to-blue-500/60" />
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className={`group flex items-center gap-4 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-bold text-[#040814] transition-all duration-300 hover:bg-blue-50 hover:shadow-[0_0_40px_rgba(96,165,250,0.45)] ${focusRing}`}
          >
            <div className="flex items-center gap-2">
              <Home size={16} />
              Back to Home
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#040814] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
