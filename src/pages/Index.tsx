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
import { WiFiSection } from "@/components/WiFiSection";
import { CTASection } from "@/components/CTASection";
import { LocationSection } from "@/components/LocationSection";
import { NewsSection } from "@/components/NewsSection";
import { SEO } from "@/components/SEO";
import { EasterSectionDivider } from "@/components/EasterSectionDivider";
import { EventBanner } from "@/components/EventBanner";
import { SalonCountdown } from "@/components/SalonCountdown";
import { useEventTheme } from "@/hooks/useEventTheme";

const Index = () => {
  useEventTheme();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Hôtel Inn Design Paris Place d'Italie - Hôtel 3 étoiles Paris 13ème"
        description="Hôtel 3 étoiles Paris 13ème, métro Place d'Italie. -15% en réservant sur notre site officiel, exclusivité introuvable ailleurs ! Chambres, séminaires, petit-déjeuner."
        canonical="/"
      />
      
      <EventBanner />
      <Header />
      <main>
        <HeroSection />
        <SalonCountdown />
        <NewsSection />
        <EasterSectionDivider />
        <IntroSection />
        <EasterSectionDivider />
        <AboutSection />
        <RoomsSection />
        <EasterSectionDivider />
        <SeminarSection />
        <BreakfastSection />
        <EasterSectionDivider />
        <ServicesSection />
        <CTASection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
