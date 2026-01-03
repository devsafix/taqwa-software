"use client";

export function MarqueeSection() {
  const industries = [
    "FinTech",
    "Healthcare",
    "E-Commerce",
    "SaaS",
    "AI & ML",
    "Blockchain",
    "EdTech",
    "Enterprise",
  ];

  return (
    <section className="py-10 overflow-hidden relative">
      {/* Gradient Masks for smooth fade-in/out */}
      <div className="absolute hidden md:block inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute hidden md:block  inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-10">
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...industries, ...industries, ...industries].map(
              (industry, index) => (
                <div
                  key={index}
                  className="inline-flex items-baseline px-6 md:px-12 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-600 hover:text-white/70 transition-colors cursor-default"
                >
                  {industry}
                  <span className="md:mx-12 mx-6 w-3 h-3 rounded-full bg-zinc-600 border border-zinc-600" />
                </div>
              )
            )}
          </div>
        </div>

        <p className="text-center hidden md:block text-[10px] md:text-xs text-white/70 font-bold uppercase tracking-[0.4em]">
          Engineered for global industry leaders
        </p>
      </div>
    </section>
  );
}
