import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
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
        {/* Minimal gradient overlay - only at bottom left corner */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/30 to-transparent" />
      </div>

      {/* Content - positioned bottom left */}
      <div className="absolute bottom-20 left-0 z-10 px-6 md:px-12 lg:px-20 max-w-2xl">
        <p className="text-primary font-body uppercase tracking-[0.3em] text-xs mb-4 animate-fade-in [animation-delay:200ms]">
          Bienvenue à Paris
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 animate-fade-in [animation-delay:400ms]">
          Hôtel Inn Design
          <span className="block text-primary italic mt-1">Place d'Italie</span>
        </h1>
        <p className="font-body text-sm md:text-base text-foreground/80 mb-6 animate-fade-in [animation-delay:600ms]">
          Un havre de paix et d'élégance au cœur du 13ème arrondissement.
        </p>
        <div className="flex flex-wrap gap-3 animate-fade-in [animation-delay:800ms]">
          <Button variant="gold" size="lg">
            Réserver
          </Button>
          <Button variant="elegant" size="lg">
            Découvrir
          </Button>
        </div>
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
