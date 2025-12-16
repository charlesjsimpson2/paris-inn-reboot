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
    <div className="relative group h-full">
      <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <button
        type="button"
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-5 h-5 text-charcoal" />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-5 h-5 text-charcoal" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all shadow-md ${
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-white/80 hover:bg-white"
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
    <div className="relative min-h-[500px] lg:min-h-[550px]">
      {/* Image - Full width on one side */}
      <div className={`absolute inset-y-0 ${reverse ? 'right-0' : 'left-0'} w-full lg:w-[55%]`}>
        <ImageCarousel images={salon.images} />
      </div>

      {/* Content Card - Overlapping */}
      <div className={`relative z-10 min-h-[500px] lg:min-h-[550px] flex items-center ${reverse ? 'lg:justify-start' : 'lg:justify-end'}`}>
        <div className={`w-full lg:w-[50%] bg-background/95 backdrop-blur-sm lg:bg-background p-8 lg:p-10 ${reverse ? 'lg:ml-8' : 'lg:mr-8'} lg:my-12 lg:shadow-2xl lg:rounded-sm relative`}>
          
          {/* Burgundy accent line */}
          <div className={`absolute top-0 bottom-0 w-1.5 bg-primary ${reverse ? 'right-0' : 'left-0'}`} />
          
          <div className={`${reverse ? 'lg:pr-6' : 'lg:pl-6'}`}>
            {/* Surface */}
            <span className="text-primary font-medium text-sm uppercase tracking-[0.2em]">{salon.surface}</span>

            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mt-3 mb-4">
              {salon.name}
            </h3>
            
            {salon.capacities.length > 0 && (
              <p className="text-muted-foreground text-sm mb-5">
                Jusqu'à <span className="text-primary font-semibold">{Math.max(...salon.capacities.map(c => c.count))}</span> personnes
              </p>
            )}

            <p className="text-muted-foreground leading-relaxed text-[15px] mb-8">
              {salon.description}
            </p>

            {/* Capacity Section */}
            {salon.capacities.length > 0 && (
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border/50">
                {salon.capacities.map((capacity, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-muted/30 px-5 py-4 rounded-lg">
                    <img 
                      src={capacityIcons[capacity.icon]} 
                      alt={capacity.label}
                      className="w-12 h-12 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(45%) saturate(1500%) hue-rotate(330deg) brightness(85%)' }}
                    />
                    <div>
                      <span className="font-display text-2xl text-primary block leading-none">{capacity.count}</span>
                      <span className="text-sm text-muted-foreground">{capacity.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
