import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wifi, Tv, Briefcase, Snowflake, Bath, CupSoda, ChevronLeft, ChevronRight } from "lucide-react";
import chambreDouble from "@/assets/chambre-double.jpg";
import chambreTwin from "@/assets/chambre-twin.jpg";
import chambreSuperieureBalcon from "@/assets/chambre-superieure-balcon.jpg";

const rooms = [
  {
    name: "Chambre Double",
    description: "Lit de 160×200 cm. Profitez d'un espace élégant et confortable, idéal pour un séjour en couple ou en solo.",
    capacity: "2 personnes",
    image: chambreDouble,
    features: ["Wi-Fi gratuit", "Climatisation", "TV écran plat"],
  },
  {
    name: "Chambre Twin",
    description: "2 lits de 100×200 cm. Parfaite pour les voyages entre amis ou collègues, avec tout le confort nécessaire.",
    capacity: "2 personnes",
    image: chambreTwin,
    features: ["Wi-Fi gratuit", "Climatisation", "Minibar"],
  },
  {
    name: "Chambre supérieure avec balcon",
    description: "Profitez d'un espace extérieur privé avec vue sur Paris. Une expérience unique au cœur de la ville.",
    capacity: "2 personnes",
    image: chambreSuperieureBalcon,
    features: ["Balcon privé", "Vue panoramique", "Climatisation"],
  },
  {
    name: "Chambres Communicantes",
    description: "2 chambres modulables avec portes communicantes. La solution idéale pour les familles ou groupes.",
    capacity: "4 personnes",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&h=400&fit=crop",
    features: ["Espace famille", "Modulable", "Wi-Fi gratuit"],
  },
];

export const RoomsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
  };

  // Auto-play avec 7 secondes pour laisser le temps de lire
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="chambres" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Header centered */}
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            Nos Hébergements
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Chambres & Suites
          </h2>
          <p className="text-xl text-primary font-medium mb-6">
            Posez vos valises et profitez !
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Installez-vous dans l'une de nos 70 chambres lumineuses, insonorisées et entièrement équipées pour votre confort.<br />
            Climatisation, TV écran plat, espace bureau, coffre-fort, sèche-cheveux, plateau de courtoisie… tout est pensé pour vous.
          </p>
        </div>

        {/* Carousel with navigation */}
        <div className="relative mb-12">
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
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }}
            >
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className="w-full md:w-[calc(50%-12px)] flex-shrink-0 group"
                >
                  {/* Image with overlay description */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl md:text-2xl text-white mb-2 group-hover:text-primary transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-white/90 leading-relaxed text-sm md:text-base line-clamp-2">
                        {room.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={goToPrev}
              className="bg-primary text-primary-foreground p-3"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="bg-primary text-primary-foreground p-3"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 transition-all ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-4"
                }`}
                aria-label={`Voir chambre ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/nos-chambres">Voir toutes nos chambres</a>
          </Button>
          <Button variant="gold" size="lg" asChild>
            <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
              Réserver une chambre
            </a>
          </Button>
        </div>

        {/* Bottom: Equipment */}
        <div className="border-t border-border/30 pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: Bath, label: "Salle d'eau privative" },
              { icon: Tv, label: "TV écran plat" },
              { icon: Briefcase, label: "Espace bureau" },
              { icon: Wifi, label: "Wi-Fi gratuit" },
              { icon: CupSoda, label: "Plateau de courtoisie" },
              { icon: Snowflake, label: "Climatisation" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center group"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
