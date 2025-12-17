import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import hotelReception from "@/assets/hotel-reception.jpg";
import hotelChambre from "@/assets/hotel-chambre.jpg";
import hotelSalleDeBain from "@/assets/hotel-salle-de-bain.jpg";
import hotelSalon from "@/assets/hotel-salon.jpg";
import hotelSeminaire from "@/assets/hotel-seminaire.jpg";

const heroImages = [
  { src: hotelReception, alt: "Réception de l'hôtel" },
  { src: hotelChambre, alt: "Chambre confortable" },
  { src: hotelSalleDeBain, alt: "Salle de bain moderne" },
  { src: hotelSalon, alt: "Espace détente" },
  { src: hotelSeminaire, alt: "Salle de séminaire" },
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

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
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
              current === index ? "opacity-100" : "opacity-0"
            } ${[1, 2, 3].includes(index) ? "bg-bottom" : "bg-center"}`}
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
        {/* Subtle gradient overlay - only bottom left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Navigation Arrows - hidden on small mobile */}
      <button
        onClick={goToPrev}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-background/20 backdrop-blur-sm border border-foreground/20 hidden sm:flex items-center justify-center text-foreground/80 hover:bg-background/40 hover:text-foreground transition-all"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-background/20 backdrop-blur-sm border border-foreground/20 hidden sm:flex items-center justify-center text-foreground/80 hover:bg-background/40 hover:text-foreground transition-all"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      {/* Hero Content */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 z-10 px-4 sm:px-6 md:px-12 lg:px-20 max-w-2xl">
        <p className="text-white font-body uppercase tracking-[0.3em] sm:tracking-[0.5em] text-sm sm:text-base md:text-lg mb-2 sm:mb-4 animate-fade-in [animation-delay:200ms] font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Bienvenue
        </p>
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2 animate-fade-in [animation-delay:400ms] leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          Hôtel Inn Design
        </h1>
        <p className="text-xl sm:text-3xl md:text-4xl text-white font-serif italic animate-fade-in [animation-delay:500ms] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] bg-primary/80 inline-block px-3 sm:px-4 py-1">
          Place d'Italie
        </p>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-6 md:right-12 lg:right-20 flex flex-col gap-1.5 sm:gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1.5 sm:w-2 transition-all duration-300 ${
              current === index
                ? "bg-primary h-6 sm:h-8"
                : "bg-foreground/40 hover:bg-foreground/60 h-1.5 sm:h-2"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="flex flex-col items-center gap-1 text-foreground/60 hover:text-primary transition-colors">
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
