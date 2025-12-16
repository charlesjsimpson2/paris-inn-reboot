import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoomData {
  name: string;
  description: string;
  details?: string;
  images: { src: string; alt: string }[];
}

interface RoomSectionProps {
  room: RoomData;
  reverse?: boolean;
}

const ImageCarousel = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative group h-full">
      <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-5 h-5 text-charcoal" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
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
                className={`w-2.5 h-2.5 transition-all shadow-md ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-white/80 hover:bg-white"
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const RoomSection = ({ room, reverse = false }: RoomSectionProps) => {
  return (
    <div className="relative min-h-[450px] lg:min-h-[500px]">
      {/* Image - Full width on one side */}
      <div className={`absolute inset-y-0 ${reverse ? 'right-0' : 'left-0'} w-full lg:w-[55%]`}>
        <ImageCarousel images={room.images} />
      </div>

      {/* Content Card - Overlapping */}
      <div className={`relative z-10 min-h-[450px] lg:min-h-[500px] flex items-center ${reverse ? 'lg:justify-start' : 'lg:justify-end'}`}>
        <div className={`w-full lg:w-[50%] bg-background/95 backdrop-blur-sm lg:bg-background p-8 lg:p-10 ${reverse ? 'lg:ml-8' : 'lg:mr-8'} lg:my-12 lg:shadow-2xl lg:rounded-sm relative`}>
          
          {/* Primary accent lines on both sides */}
          <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-primary" />
          <div className="absolute top-0 bottom-0 right-0 w-1.5 bg-primary" />
          
          <div className="px-6">
            {/* Name */}
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
              {room.name}
            </h3>

            {room.details && (
              <p className="text-primary font-medium text-sm mb-4">
                {room.details}
              </p>
            )}

            <p className="text-muted-foreground leading-relaxed text-[15px] mb-8">
              {room.description}
            </p>

            {/* CTA Button */}
            <Button variant="gold" asChild>
              <a
                href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver cette chambre
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
