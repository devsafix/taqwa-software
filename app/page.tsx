import { BlogSection } from "@/components/modules/BlogSection";
import { FAQ } from "@/components/modules/FAQ";
import { HeroSection } from "@/components/modules/HeroSection";
import { TechStack } from "@/components/modules/TechStack";
import { Portfolio } from "@/components/modules/Portfolio";
import { ServicesSection } from "@/components/modules/ServicesSection";
import { StatsSection } from "@/components/modules/StatsSection";
import Newsletter from "@/components/shared/Newsletter";
import { AboutSection } from "@/components/modules/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ServicesSection />
      <Portfolio />
      <FAQ />
      <StatsSection />
      <Newsletter />
      <BlogSection />
    </main>
  );
}
