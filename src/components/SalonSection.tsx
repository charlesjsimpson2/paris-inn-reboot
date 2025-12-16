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
    <div className="relative group">
      <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-xl">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <button
        type="button"
        onClick={goToPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-5 h-5 text-primary-foreground" />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-5 h-5 text-primary-foreground" />
      </button>

      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-5"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
    <div className="py-16 relative overflow-hidden">
      {/* Decorative burgundy pattern */}
      <div className={`absolute top-0 ${reverse ? 'left-0' : 'right-0'} w-1/3 h-full opacity-[0.03] pointer-events-none`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? '' : ''}`}>
          {/* Image */}
          <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative">
              {/* Decorative frame */}
              <div className={`absolute -top-3 ${reverse ? '-right-3' : '-left-3'} w-full h-full border-2 border-primary/20 rounded-lg -z-10`} />
              <ImageCarousel images={salon.images} />
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}`}>
            {/* Decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">{salon.surface}</span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              {salon.name}
            </h3>
            
            {salon.capacities.length > 0 && (
              <p className="text-muted-foreground mb-6">
                Capacité jusqu'à <span className="text-primary font-semibold">{Math.max(...salon.capacities.map(c => c.count))}</span> personnes
              </p>
            )}

            <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
              {salon.description}
            </p>

            {/* Capacity Section */}
            {salon.capacities.length > 0 && (
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-primary/10">
                {salon.capacities.map((capacity, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-primary/5 px-4 py-3 rounded-lg">
                    <img 
                      src={capacityIcons[capacity.icon]} 
                      alt={capacity.label}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(45%) saturate(1500%) hue-rotate(330deg) brightness(85%)' }}
                    />
                    <div>
                      <div className="font-display text-lg text-primary leading-none">{capacity.count}</div>
                      <div className="text-xs text-muted-foreground">{capacity.label}</div>
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
