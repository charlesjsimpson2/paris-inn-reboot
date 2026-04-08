import { useState, useEffect, memo, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Wifi, Tv, Briefcase, Snowflake, Bath, CupSoda, ChevronLeft, ChevronRight, Accessibility, Heater } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import chambreDouble from "@/assets/chambre-double.webp";
import chambreTwin from "@/assets/chambre-twin.webp";
import chambreSuperieureBalcon from "@/assets/chambre-superieure-balcon.webp";
import chambre4 from "@/assets/gallery/chambre-4.webp";

export const RoomsSection = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const rooms = useMemo(() => [
    {
      name: t('rooms.double'),
      description: t('rooms.double.desc'),
      capacity: "2 personnes",
      image: chambreDouble,
    },
    {
      name: t('rooms.twin'),
      description: t('rooms.twin.desc'),
      capacity: "2 personnes",
      image: chambreTwin,
    },
    {
      name: t('rooms.superior'),
      description: t('rooms.superior.desc'),
      capacity: "2 personnes",
      image: chambreSuperieureBalcon,
    },
    {
      name: t('rooms.connecting'),
      description: t('rooms.connecting.desc'),
      capacity: "4 personnes",
      image: chambre4,
    },
  ], [t]);

  // Responsive: on mobile show 1 card at a time, on desktop show 2
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const cardsPerView = isMobile ? 1 : 2;
  const maxIndex = cardsPerView === 1 ? rooms.length - 1 : Math.ceil(rooms.length / 2) - 1;

  const equipment = useMemo(() => [
    { icon: Bath, label: t('rooms.bathroom') },
    { icon: Tv, label: t('rooms.tv') },
    { icon: Briefcase, label: t('rooms.desk') },
    { icon: Wifi, label: t('rooms.wifiHighSpeed'), highlight: true },
    { icon: CupSoda, label: t('rooms.courtesy') },
    { icon: Snowflake, label: t('rooms.ac') },
    { icon: Heater, label: t('rooms.heating') },
    { icon: Accessibility, label: t('rooms.pmr') },
  ], [t]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section id="chambres" className="py-10 xs:py-12 sm:py-20 bg-charcoal">
      <div className="container mx-auto px-3 xs:px-4">
        {/* Header centered */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-12 max-w-5xl mx-auto">
          <p className="text-primary font-body uppercase tracking-[0.1em] xs:tracking-[0.15em] sm:tracking-[0.2em] text-[10px] xs:text-xs sm:text-sm mb-1.5 xs:mb-2 sm:mb-3">
            {t('rooms.badge')}
          </p>
          <h2 className="font-display text-xl xs:text-2xl sm:text-4xl md:text-5xl text-foreground mb-2 xs:mb-3 sm:mb-4">
            {t('rooms.title')}
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-primary font-medium mb-3 xs:mb-4 sm:mb-6">
            {t('rooms.subtitle')}
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm xs:text-base sm:text-lg">
            {t('rooms.description')}<br className="hidden sm:block" />
            {t('rooms.description2')}
          </p>
        </div>

        {/* Carousel with navigation */}
        <div className="relative mb-8 xs:mb-10 sm:mb-12">
          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground hover:bg-primary/90 p-3 md:p-4 transition-all shadow-xl -translate-x-1/2 hidden md:flex"
            aria-label="Chambres précédentes"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground hover:bg-primary/90 p-3 md:p-4 transition-all shadow-xl translate-x-1/2 hidden md:flex"
            aria-label="Chambres suivantes"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-3 xs:gap-4 md:gap-6"
              style={{ 
                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))`,
              }}
            >
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className="w-full md:w-[calc(50%-12px)] flex-shrink-0 group"
                >
                  {/* Image with overlay description */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg xs:rounded-none">
                    <img
                      src={room.image}
                      alt={room.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4 md:p-6">
                      <h3 className="font-display text-base xs:text-lg md:text-2xl text-white mb-0.5 xs:mb-1 md:mb-2 group-hover:text-primary transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-white/90 leading-relaxed text-xs xs:text-sm md:text-base line-clamp-2">
                        {room.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center gap-3 xs:gap-4 mt-4 xs:mt-6 md:hidden">
            <button
              onClick={goToPrev}
              className="bg-primary text-primary-foreground p-2.5 xs:p-3"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>
            <button
              onClick={goToNext}
              className="bg-primary text-primary-foreground p-2.5 xs:p-3"
              aria-label="Suivant"
            >
              <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center gap-1.5 xs:gap-2 mt-4 xs:mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 transition-all ${
                  index === currentIndex 
                    ? "bg-primary w-6 xs:w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3 xs:w-4"
                }`}
                aria-label={`Voir chambres ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center mb-8 xs:mb-10 sm:mb-12">
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm xs:text-base py-2.5 xs:py-3" asChild>
            <a href="/nos-chambres">{t('rooms.viewAll')}</a>
          </Button>
          <Button variant="gold" size="lg" className="w-full sm:w-auto text-sm xs:text-base py-2.5 xs:py-3" asChild>
            <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
              {t('rooms.book')}
            </a>
          </Button>
        </div>

        {/* Bottom: Equipment */}
        <div className="border-t border-border/30 pt-6 xs:pt-8">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 xs:gap-4 md:gap-6">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1.5 xs:gap-2 md:gap-3 text-center group"
              >
                <div className={`w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors ${
                  item.highlight 
                    ? 'bg-primary/25 group-hover:bg-primary/35' 
                    : 'bg-primary/10 group-hover:bg-primary/20'
                }`}>
                  <item.icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className={`text-[10px] xs:text-xs md:text-sm ${item.highlight ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

RoomsSection.displayName = 'RoomsSection';
