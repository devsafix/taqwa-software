"use client"

export function MarqueeSection() {
  const industries = ["FinTech", "Healthcare", "E-Commerce", "SaaS", "AI & ML", "Blockchain", "EdTech", "Enterprise"]

  return (
    <section className="py-16 border-y border-border overflow-hidden bg-card/50">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={index}
                className="inline-flex items-center px-8 text-2xl md:text-3xl lg:text-4xl font-serif text-muted-foreground"
              >
                {industry}
                <span className="mx-8 text-accent">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground uppercase tracking-widest">
        Trusted by leading companies across industries
      </p>
    </section>
  )
}
