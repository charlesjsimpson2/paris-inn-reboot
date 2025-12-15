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
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-primary w-8"
                : "bg-foreground/40 hover:bg-foreground/60"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in [animation-delay:200ms]">
            Bienvenue à Paris
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in [animation-delay:400ms]">
            Hôtel Inn Design
            <span className="block text-primary italic mt-2">Place d'Italie</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:600ms]">
            Un havre de paix et d'élégance au cœur du 13ème arrondissement, 
            à deux minutes du métro parisien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:800ms]">
            <Button variant="gold" size="xl">
              Réserver une chambre
            </Button>
            <Button variant="elegant" size="xl">
              Découvrir l'hôtel
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
