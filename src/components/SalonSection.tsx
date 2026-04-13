import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
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

const ImageCarousel = ({ images, t }: { images: { src: string; alt: string }[], t: (key: string) => string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative group h-full min-h-[280px] sm:min-h-[340px] lg:min-h-0">
      <div className="h-full overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
      </div>

      <button
        type="button"
        onClick={goToPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center bg-background/90 backdrop-blur-sm transition-colors hover:bg-background md:left-4 md:h-10 md:w-10 shadow-lg"
        aria-label={t('seminarsPage.prevImage')}
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center bg-background/90 backdrop-blur-sm transition-colors hover:bg-background md:right-4 md:h-10 md:w-10 shadow-lg"
        aria-label={t('seminarsPage.nextImage')}
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-6">
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 transition-all shadow-md ${
              index === currentIndex
                ? "bg-burgundy scale-125"
                : "bg-white/80 hover:bg-white"
            }`}
            aria-label={`${t('seminarsPage.goToImage')} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const SalonSection = ({ salon, reverse = false }: SalonSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="relative overflow-hidden lg:min-h-[550px]">
      {/* Image - Full width on one side */}
      <div className={`relative h-[280px] w-full sm:h-[340px] lg:absolute lg:inset-y-0 lg:h-auto ${reverse ? 'lg:right-0' : 'lg:left-0'} lg:w-[55%]`}>
        <ImageCarousel images={salon.images} t={t} />
      </div>

      {/* Content Card - Overlapping */}
      <div className={`relative z-10 flex lg:min-h-[550px] lg:items-center ${reverse ? 'lg:justify-start' : 'lg:justify-end'}`}>
        <div className={`w-full bg-background p-6 sm:p-8 lg:w-[50%] lg:bg-background/95 lg:backdrop-blur-sm lg:p-10 ${reverse ? 'lg:ml-8' : 'lg:mr-8'} lg:my-12 lg:shadow-2xl lg:rounded-sm relative`}>
          
          {/* Burgundy accent lines on both sides */}
          <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-burgundy" />
          <div className="absolute top-0 bottom-0 right-0 w-1.5 bg-burgundy" />
          
          <div className="px-2 sm:px-4 lg:px-6">
            {/* Name with Surface */}
            <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground">
                {salon.name}
              </h3>
              <span className="text-burgundy font-medium text-sm uppercase tracking-wider">{salon.surface}</span>
            </div>
            
            {salon.capacities.length > 0 && (
              <p className="text-muted-foreground text-sm mb-5">
                {t('seminarsPage.upTo')} <span className="text-burgundy font-semibold">{Math.max(...salon.capacities.map(c => c.count))}</span> {t('seminarsPage.people')}
              </p>
            )}

            <p className="text-muted-foreground leading-relaxed text-[15px] mb-8">
              {salon.description}
            </p>

            {/* Capacity Section */}
            {salon.capacities.length > 0 && (
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/50 mb-8">
                {salon.capacities.map((capacity, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-muted/30 px-5 py-4">
                    <img 
                      src={capacityIcons[capacity.icon]} 
                      alt={capacity.label}
                      className="w-12 h-12 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(45%) saturate(1500%) hue-rotate(330deg) brightness(85%)' }}
                    />
                    <div>
                      <span className="font-display text-2xl text-burgundy block leading-none">{capacity.count}</span>
                      <span className="text-sm text-muted-foreground">{capacity.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button + Planning link */}
            <div className="flex flex-col items-start gap-2">
              <a
                href="/reservation-seminaire"
                className="inline-block bg-burgundy hover:bg-burgundy/90 text-white px-6 py-3 font-medium transition-colors"
              >
                {t('seminars.quoteButton')}
              </a>
              <a
                href="/planning-seminaire"
                className="text-burgundy/70 hover:text-burgundy text-sm underline underline-offset-2 transition-colors"
              >
                {t('seminarsPage.planning.link')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
