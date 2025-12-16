import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const ImageCarousel = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-full object-cover"
      />

      <button
        type="button"
        onClick={goToPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
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

export const SalonAccordion = ({ salons }: SalonAccordionProps) => {
  return (
    <Accordion type="single" collapsible defaultValue="salon-0" className="space-y-4">
      {salons.map((salon, index) => (
        <AccordionItem
          key={index}
          value={`salon-${index}`}
          className="border border-border/50 rounded-2xl overflow-hidden bg-card shadow-lg data-[state=open]:shadow-xl transition-shadow"
        >
          <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={salon.images[0].src}
                  alt={salon.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  {salon.name}
                </h3>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-primary font-medium">{salon.surface}</span>
                  <span className="text-muted-foreground text-sm">
                    jusqu'à {Math.max(...salon.capacities.map(c => c.count))} pers.
                  </span>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          
          <AccordionContent className="px-6 pb-6">
            <div className="grid lg:grid-cols-2 gap-8 pt-4">
              {/* Left: Image Carousel */}
              <ImageCarousel images={salon.images} />

              {/* Right: Description + Capacities */}
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {salon.description}
                </p>

                {/* Capacity Section */}
                <div className="bg-[#722F37] rounded-xl p-5 text-white">
                  <h4 className="text-center font-display text-base mb-4">
                    Capacité selon la disposition
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {salon.capacities.map((capacity, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex justify-center mb-2 text-white/90">
                          <CapacityIcon type={capacity.icon} />
                        </div>
                        <div className="font-semibold text-lg">{capacity.count}</div>
                        <div className="text-xs text-white/80">{capacity.label}</div>
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
