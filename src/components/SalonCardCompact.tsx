import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SalonCapacity {
  icon: "u-shape" | "classe" | "theatre";
  count: number;
  label: string;
}

interface SalonCardCompactProps {
  name: string;
  description: string;
  surface: string;
  images: { src: string; alt: string }[];
  capacities: SalonCapacity[];
}

const CapacityIcon = ({ type }: { type: "u-shape" | "classe" | "theatre" }) => {
  if (type === "u-shape") {
    return (
      <svg viewBox="0 0 60 40" className="w-10 h-6 fill-current">
        <circle cx="10" cy="8" r="4" />
        <circle cx="10" cy="20" r="4" />
        <circle cx="10" cy="32" r="4" />
        <circle cx="22" cy="32" r="4" />
        <circle cx="34" cy="32" r="4" />
        <circle cx="46" cy="8" r="4" />
        <circle cx="46" cy="20" r="4" />
        <circle cx="46" cy="32" r="4" />
      </svg>
    );
  }
  if (type === "classe") {
    return (
      <svg viewBox="0 0 60 40" className="w-10 h-6 fill-current">
        <circle cx="10" cy="8" r="3" />
        <circle cx="22" cy="8" r="3" />
        <circle cx="34" cy="8" r="3" />
        <circle cx="46" cy="8" r="3" />
        <circle cx="10" cy="18" r="3" />
        <circle cx="22" cy="18" r="3" />
        <circle cx="34" cy="18" r="3" />
        <circle cx="46" cy="18" r="3" />
        <circle cx="10" cy="28" r="3" />
        <circle cx="22" cy="28" r="3" />
        <circle cx="34" cy="28" r="3" />
        <circle cx="46" cy="28" r="3" />
        <rect x="6" y="33" width="10" height="2" rx="1" />
        <rect x="18" y="33" width="10" height="2" rx="1" />
        <rect x="30" y="33" width="10" height="2" rx="1" />
        <rect x="42" y="33" width="10" height="2" rx="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 40" className="w-10 h-6 fill-current">
      <circle cx="8" cy="8" r="3" />
      <circle cx="18" cy="8" r="3" />
      <circle cx="28" cy="8" r="3" />
      <circle cx="38" cy="8" r="3" />
      <circle cx="48" cy="8" r="3" />
      <circle cx="8" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <circle cx="28" cy="18" r="3" />
      <circle cx="38" cy="18" r="3" />
      <circle cx="48" cy="18" r="3" />
      <circle cx="8" cy="28" r="3" />
      <circle cx="18" cy="28" r="3" />
      <circle cx="28" cy="28" r="3" />
      <circle cx="38" cy="28" r="3" />
      <circle cx="48" cy="28" r="3" />
      <circle cx="8" cy="38" r="3" />
      <circle cx="18" cy="38" r="3" />
      <circle cx="28" cy="38" r="3" />
      <circle cx="38" cy="38" r="3" />
      <circle cx="48" cy="38" r="3" />
    </svg>
  );
};

export const SalonCardCompact = ({
  name,
  description,
  surface,
  images,
  capacities,
}: SalonCardCompactProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-xl flex flex-col h-full hover-scale animate-fade-in">
      {/* Image Carousel */}
      <div className="relative aspect-[4/3]">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors pointer-events-auto"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors pointer-events-auto"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {images.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-5"
                  : "bg-white/60 hover:bg-white"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Surface Badge */}
        <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {surface}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display text-2xl text-foreground mb-3">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Capacity Section */}
        <div className="bg-[#722F37] rounded-xl p-4 text-white">
          <h4 className="text-center font-display text-sm mb-3">
            Capacité selon la disposition
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {capacities.map((capacity, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-1 text-white/90">
                  <CapacityIcon type={capacity.icon} />
                </div>
                <div className="font-semibold text-sm">{capacity.count}</div>
                <div className="text-xs text-white/80">{capacity.label.replace('Disposition ', '')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
