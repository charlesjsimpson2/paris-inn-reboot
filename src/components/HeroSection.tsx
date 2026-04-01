import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import hotelReception from "@/assets/hotel-reception.webp";
import hotelChambre from "@/assets/hotel-chambre.webp";
import hotelSalleDeBain from "@/assets/hotel-salle-de-bain.webp";
import hotelSalon from "@/assets/hotel-salon.webp";
import hotelSeminaire from "@/assets/hotel-seminaire.webp";

const heroImages = [
  { src: hotelReception, alt: "Réception de l'hôtel" },
  { src: hotelChambre, alt: "Chambre confortable" },
  { src: hotelSalleDeBain, alt: "Salle de bain moderne" },
  { src: hotelSalon, alt: "Espace détente" },
  { src: hotelSeminaire, alt: "Salle de séminaire" },
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[480px] max-h-[900px] md:h-[85vh] overflow-hidden">
      {/* Background Images - only render current and adjacent for performance */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => {
          // Only render current image and neighbors for performance
          const shouldRender = Math.abs(current - index) <= 1 || 
            (current === 0 && index === heroImages.length - 1) ||
            (current === heroImages.length - 1 && index === 0);
          
          if (!shouldRender) return null;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                current === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={1280}
                height={853}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                fetchPriority={index === 0 ? "high" : "low"}
                className={`w-full h-full object-cover ${[1, 2, 3].includes(index) ? "object-bottom" : "object-center"}`}
              />
            </div>
          );
        })}
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Navigation Arrows - hidden on mobile */}
      <button
        onClick={goToPrev}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-background/20 backdrop-blur-sm border border-foreground/20 hidden sm:flex items-center justify-center text-foreground/80 hover:bg-background/40 hover:text-foreground transition-all active:scale-95"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-background/20 backdrop-blur-sm border border-foreground/20 hidden sm:flex items-center justify-center text-foreground/80 hover:bg-background/40 hover:text-foreground transition-all active:scale-95"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      {/* Hero Content - better mobile positioning */}
      <div className="absolute bottom-24 xs:bottom-20 sm:bottom-20 left-0 z-10 px-4 sm:px-6 md:px-12 lg:px-20 max-w-2xl">
        <p className="text-white font-body uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.5em] text-[10px] xs:text-xs sm:text-base md:text-lg mb-1.5 xs:mb-2 sm:mb-4 font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          {t('hero.welcome')}
        </p>
        <h1 className="font-display text-xl xs:text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-1.5 xs:mb-2 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          {t('hero.name')}
        </h1>
        <p className="text-base xs:text-lg sm:text-3xl md:text-4xl text-white font-serif italic drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] bg-primary/80 inline-block px-2.5 xs:px-3 sm:px-4 py-0.5 xs:py-1">
          {t('hero.location')}
        </p>
      </div>

      {/* Carousel Indicators - smaller on mobile */}
      <div className="absolute bottom-24 xs:bottom-20 sm:bottom-20 right-3 xs:right-4 sm:right-6 md:right-12 lg:right-20 flex flex-col gap-1 xs:gap-1.5 sm:gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1.5 xs:w-2 transition-all duration-300 ${
              current === index
                ? "bg-primary h-6 xs:h-8"
                : "bg-foreground/40 hover:bg-foreground/60 h-1.5 xs:h-2"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 xs:bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="flex flex-col items-center gap-1 text-foreground/60 hover:text-primary transition-colors p-2">
          <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5" />
        </a>
      </div>
    </section>
  );
};
