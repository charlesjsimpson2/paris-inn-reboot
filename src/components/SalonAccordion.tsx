import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import pictoU from "@/assets/picto-salle-u.png";
import pictoClasse from "@/assets/picto-salle-classe.png";
import pictoTheatre from "@/assets/picto-salle-theatre.png";

interface SalonCapacity {
  icon: "u-shape" | "classe" | "theatre";
  count: number;
  label: string;
}

interface SalonData {
  name: string;
  description: string;
  surface: string;
  images: { src: string; alt: string }[];
  capacities: SalonCapacity[];
}

interface SalonAccordionProps {
  salons: SalonData[];
}

const capacityIcons = {
  "u-shape": pictoU,
  "classe": pictoClasse,
  "theatre": pictoTheatre,
};

const ImageCarousel = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-full object-cover"
      />

      <button
        type="button"
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const SalonAccordion = ({ salons }: SalonAccordionProps) => {
  return (
    <Accordion type="single" collapsible defaultValue="salon-0" className="space-y-6">
      {salons.map((salon, index) => (
        <AccordionItem
          key={index}
          value={`salon-${index}`}
          className="border border-border/50 rounded-2xl overflow-hidden bg-card shadow-lg data-[state=open]:shadow-2xl transition-shadow"
        >
          <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                <img
                  src={salon.images[0].src}
                  alt={salon.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="font-display text-2xl md:text-3xl text-foreground">
                  {salon.name}
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-primary font-semibold text-lg">{salon.surface}</span>
                  <span className="text-muted-foreground">
                    jusqu'à {Math.max(...salon.capacities.map(c => c.count))} personnes
                  </span>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          
          <AccordionContent className="px-8 pb-8">
            <div className="grid lg:grid-cols-2 gap-10 pt-6">
              {/* Left: Image Carousel */}
              <ImageCarousel images={salon.images} />

              {/* Right: Description + Capacities */}
              <div className="space-y-8">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {salon.description}
                </p>

                {/* Capacity Section - Without burgundy background */}
                <div>
                  <h4 className="font-display text-xl text-foreground mb-6">
                    Capacité selon la disposition
                  </h4>
                  <div className="grid grid-cols-3 gap-6">
                    {salon.capacities.map((capacity, idx) => (
                      <div key={idx} className="text-center p-4 rounded-xl bg-muted/30 border border-border/50">
                        <div className="flex justify-center mb-3">
                          <img 
                            src={capacityIcons[capacity.icon]} 
                            alt={capacity.label}
                            className="w-16 h-16 object-contain"
                            style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(45%) saturate(1500%) hue-rotate(330deg) brightness(85%)' }}
                          />
                        </div>
                        <div className="font-display text-2xl text-primary">{capacity.count}</div>
                        <div className="text-sm text-muted-foreground mt-1">{capacity.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
