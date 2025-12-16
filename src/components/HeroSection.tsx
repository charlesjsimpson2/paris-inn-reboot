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
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
        {/* Subtle gradient overlay - only bottom left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground/80 hover:bg-background/40 hover:text-foreground transition-all"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground/80 hover:bg-background/40 hover:text-foreground transition-all"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-20 left-0 z-10 px-6 md:px-12 lg:px-20 max-w-3xl">
        <p className="text-white font-body uppercase tracking-[0.5em] text-base md:text-lg mb-4 animate-fade-in [animation-delay:200ms] font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Bienvenue
        </p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-2 animate-fade-in [animation-delay:400ms] leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          Hôtel Inn Design
        </h1>
        <p className="text-3xl md:text-4xl text-white font-serif italic mb-6 animate-fade-in [animation-delay:500ms] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] bg-primary/80 inline-block px-4 py-1 rounded">
          Place d'Italie
        </p>
        <p className="font-body text-lg md:text-xl text-white/95 mb-8 animate-fade-in [animation-delay:600ms] leading-relaxed drop-shadow-md max-w-xl">
          Un havre de paix et d'élégance au cœur du 13ème arrondissement.
        </p>
      </div>

      {/* Carousel Indicators - positioned bottom right */}
      <div className="absolute bottom-20 right-6 md:right-12 lg:right-20 flex flex-col gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-primary h-8"
                : "bg-foreground/40 hover:bg-foreground/60"
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
