import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

interface SalonSectionProps {
  salon: SalonData;
  reverse?: boolean;
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
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      <button
        type="button"
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const SalonSection = ({ salon, reverse = false }: SalonSectionProps) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-0 ${reverse ? "lg:direction-rtl" : ""}`}>
      {/* Image */}
      <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
        <ImageCarousel images={salon.images} />
      </div>

      {/* Content */}
      <div className={`bg-charcoal p-8 lg:p-12 flex flex-col justify-center ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
          {salon.name}
        </h3>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="text-primary font-semibold text-lg">{salon.surface}</span>
          {salon.capacities.length > 0 && (
            <>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                jusqu'à {Math.max(...salon.capacities.map(c => c.count))} personnes
              </span>
            </>
          )}
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8">
          {salon.description}
        </p>

        {/* Capacity Section */}
        {salon.capacities.length > 0 && (
          <div className="flex items-center gap-8 pt-6 border-t border-border/30">
            {salon.capacities.map((capacity, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img 
                  src={capacityIcons[capacity.icon]} 
                  alt={capacity.label}
                  className="w-10 h-10 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(45%) saturate(1500%) hue-rotate(330deg) brightness(85%)' }}
                />
                <div>
                  <div className="font-display text-xl text-primary">{capacity.count}</div>
                  <div className="text-xs text-muted-foreground">{capacity.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
