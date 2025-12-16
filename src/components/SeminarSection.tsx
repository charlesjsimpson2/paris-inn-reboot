import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Monitor, Wifi, Mic, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

import seminaire1 from "@/assets/seminaire-1.jpg";
import seminaire2 from "@/assets/seminaire-2.jpg";
import seminaire3 from "@/assets/seminaire-3.jpg";
import seminaire4 from "@/assets/seminaire-4.jpg";
import seminaire5 from "@/assets/seminaire-5.jpg";

const images = [
  { src: seminaire1, alt: "Salle de séminaire - Configuration U" },
  { src: seminaire2, alt: "Salle de séminaire - Détail table" },
  { src: seminaire3, alt: "Salle de séminaire - Configuration théâtre" },
  { src: seminaire4, alt: "Espace détente séminaire" },
  { src: seminaire5, alt: "Salle de séminaire - Sièges" },
];

const features = [
  { icon: FileText, label: "Paperboard" },
  { icon: Monitor, label: "Vidéoprojecteur" },
  { icon: Mic, label: "Micros" },
  { icon: Wifi, label: "WiFi" },
];

export const SeminarSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="seminaire" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            Espace professionnel
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Salle de séminaire
          </h2>
          <p className="text-xl text-primary font-medium">
            Organisez vos réunions autrement !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            
            {/* Navigation arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 transition-all"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 transition-all"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-background/60 w-4"
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              L'hôtel Inn Design de Paris met à votre disposition plusieurs salles de séminaire 
              modernes et entièrement équipées : paperboard, écrans avec vidéoprojecteur, micros 
              et connexion wifi.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Selon vos objectifs, différentes configurations sont possibles afin de s'adapter 
              parfaitement à vos réunions, formations ou événements professionnels.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-background border border-border/30"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm text-foreground font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg">
                Demander un devis
              </Button>
              <Button variant="elegant" size="lg">
                Découvrir nos salles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
