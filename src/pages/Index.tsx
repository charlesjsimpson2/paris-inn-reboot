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

const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hôtel Inn Design Paris Place d'Italie",
  "url": "https://hotel-inn-paris.fr",
  "image": "https://hotel-inn-paris.fr/og-image.jpg",
  "description": "Hôtel 3 étoiles à Paris 13e, 70 chambres lumineuses et insonorisées à 2 min du métro Place d'Italie (lignes 5, 6, 7). Wi-Fi gratuit, climatisation, chambres PMR disponibles.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "178 boulevard Vincent Auriol",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France",
    "postalCode": "75013",
    "addressCountry": "FR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 48.8346, "longitude": 2.3612 },
  "telephone": "+33144240101",
  "email": "hid.paris13@gmail.com",
  "starRating": { "@type": "Rating", "ratingValue": "3" },
  "numberOfRooms": 70,
  "priceRange": "€€",
  "checkinTime": "15:00",
  "checkoutTime": "11:00",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratuit", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Climatisation", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Chauffage", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "TV écran plat", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Espace bureau", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Plateau de courtoisie", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Salle d'eau privative", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Chambres accessibles PMR", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Chambres insonorisées", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Chambres communicantes", "value": true }
  ],
  "publicAccess": true,
  "isAccessibleForFree": false,
  "hasMap": "https://www.google.com/maps/place/178+Boulevard+Vincent+Auriol,+75013+Paris",
  "smokingAllowed": false,
  "petsAllowed": false
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Hôtel Inn Design Paris Place d'Italie",
  "url": "https://hotel-inn-paris.fr",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://hotel-inn-paris.fr/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const Index = () => {
  useEventTheme();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Hôtel Inn Design Paris Place d'Italie - Hôtel 3 étoiles Paris 13ème"
        description="Hôtel 3 étoiles Paris 13ème, métro Place d'Italie. -15% en réservant sur notre site officiel, exclusivité introuvable ailleurs ! Chambres, séminaires, petit-déjeuner."
        canonical="/"
        jsonLd={[hotelJsonLd, websiteJsonLd]}
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
