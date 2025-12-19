// Hotel Inn Paris - Homepage
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { AboutSection } from "@/components/AboutSection";
import { RoomsSection } from "@/components/RoomsSection";
import { SeminarSection } from "@/components/SeminarSection";
import { BreakfastSection } from "@/components/BreakfastSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { LocationSection } from "@/components/LocationSection";
import { NewsSection } from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <IntroSection />
        <AboutSection />
        <RoomsSection />
        <SeminarSection />
        <BreakfastSection />
        <ServicesSection />
        <CTASection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
