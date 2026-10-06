// import { BlogSection } from "@/components/modules/BlogSection";
import { FAQ } from "@/components/modules/FAQ";
import { HeroSection } from "@/components/modules/HeroSection";
import { Portfolio } from "@/components/modules/Portfolio";
import { ServicesSection } from "@/components/modules/ServicesSection";
// import { StatsSection } from "@/components/modules/StatsSection";
import { AboutSection } from "@/components/modules/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <Portfolio /> */}
      {/* <StatsSection /> */}
      <FAQ />
      {/* <BlogSection /> */}
    </main>
  );
}
