// Hotel Inn Paris - Homepage
import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SEO } from "@/components/SEO";
import { EventBanner } from "@/components/EventBanner";
import { useEventTheme } from "@/hooks/useEventTheme";

// Lazy load below-the-fold sections
const IntroSection = lazy(() => import("@/components/IntroSection").then(m => ({ default: m.IntroSection })));
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const RoomsSection = lazy(() => import("@/components/RoomsSection").then(m => ({ default: m.RoomsSection })));
const SeminarSection = lazy(() => import("@/components/SeminarSection").then(m => ({ default: m.SeminarSection })));
const BreakfastSection = lazy(() => import("@/components/BreakfastSection").then(m => ({ default: m.BreakfastSection })));
const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const WiFiSection = lazy(() => import("@/components/WiFiSection").then(m => ({ default: m.WiFiSection })));
const CTASection = lazy(() => import("@/components/CTASection").then(m => ({ default: m.CTASection })));
const LocationSection = lazy(() => import("@/components/LocationSection").then(m => ({ default: m.LocationSection })));
const NewsSection = lazy(() => import("@/components/NewsSection").then(m => ({ default: m.NewsSection })));
const EasterSectionDivider = lazy(() => import("@/components/EasterSectionDivider").then(m => ({ default: m.EasterSectionDivider })));
const SalonCountdown = lazy(() => import("@/components/SalonCountdown").then(m => ({ default: m.SalonCountdown })));

const SectionFallback = () => <div className="min-h-[200px]" />;

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
        <Suspense fallback={<SectionFallback />}>
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
          <WiFiSection />
          <CTASection />
          <LocationSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
