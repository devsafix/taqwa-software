import { BlogSection } from "@/components/modules/BlogSection";
import { FAQ } from "@/components/modules/FAQ";
import { HeroSection } from "@/components/modules/hero-section";
import { MarqueeSection } from "@/components/modules/marquee-section";
import { Portfolio } from "@/components/modules/Portfolio";
import { ServicesSection } from "@/components/modules/services-section";
import { StatsSection } from "@/components/modules/stats-section";
import Newsletter from "@/components/shared/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <Portfolio />
      <FAQ />
      <StatsSection />
      <Newsletter />
      <BlogSection />
    </main>
  );
}
