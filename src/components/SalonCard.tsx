import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SalonCapacity {
  icon: "u-shape" | "classe" | "theatre";
  count: number;
  label: string;
}

interface SalonCardProps {
  name: string;
  description: string;
  surface: string;
  images: { src: string; alt: string }[];
  capacities: SalonCapacity[];
  reversed?: boolean;
}

const CapacityIcon = ({ type }: { type: "u-shape" | "classe" | "theatre" }) => {
  if (type === "u-shape") {
    return (
      <svg viewBox="0 0 60 40" className="w-12 h-8 fill-current">
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
      <svg viewBox="0 0 60 40" className="w-12 h-8 fill-current">
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
    <svg viewBox="0 0 60 40" className="w-12 h-8 fill-current">
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

export const SalonCard = ({
  name,
  description,
  surface,
  images,
  capacities,
  reversed = false,
}: SalonCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Carousel */}
          <div className={`relative ${reversed ? 'lg:order-2' : ''}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
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
          </div>

          {/* Content */}
          <div className={`space-y-6 ${reversed ? 'lg:order-1' : ''}`}>
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                {name}
              </h2>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                {name}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/* Capacity Section - Burgundy Style */}
            <div className="bg-[#722F37] rounded-2xl p-6 text-white">
              <h3 className="text-center font-display text-lg mb-6">
                Capacité du {name.toLowerCase()} selon la disposition
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {capacities.map((capacity, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-white/90">
                      <CapacityIcon type={capacity.icon} />
                    </div>
                    <div className="font-semibold text-lg">{capacity.count} personnes</div>
                    <div className="text-sm text-white/80">{capacity.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
