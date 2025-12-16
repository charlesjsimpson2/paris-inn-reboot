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
        {/* Main Grid: Text Left + Carousel Right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          {/* Left: Header + Description + CTA */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
                Nos Hébergements
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                Chambres & Suites
              </h2>
              <p className="text-xl text-primary font-medium">
                Posez vos valises et profitez !
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Installez-vous dans l'une de nos 70 chambres lumineuses, insonorisées et entièrement équipées pour votre confort. Climatisation, télévision à écran plat, espace bureau, coffre-fort, sèche-cheveux, plateau de courtoisie… tout est pensé pour que vous vous sentiez comme chez vous. L'hôtel propose également des <span className="font-semibold text-primary">chambres adaptées aux personnes à mobilité réduite</span> ainsi que des chambres communicantes, idéales pour les séjours en famille ou entre proches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="outline" size="lg" asChild>
                <a href="/nos-chambres">Voir toutes nos chambres</a>
              </Button>
              <Button variant="gold" size="lg" asChild>
                <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
                  Réserver une chambre
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              {rooms.map((room, index) => (
                <img
                  key={index}
                  src={room.image}
                  alt={room.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Text overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                {rooms.map((room, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                    }`}
                  >
                    <h3 className="font-display text-xl md:text-2xl text-white mb-2">
                      {room.name}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm line-clamp-2">
                      {room.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/30 text-white p-2.5 transition-all backdrop-blur-sm"
                aria-label="Chambre précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/30 text-white p-2.5 transition-all backdrop-blur-sm"
                aria-label="Chambre suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6">
                <span className="text-white font-display text-sm">
                  {currentIndex + 1}<span className="text-white/60">/{rooms.length}</span>
                </span>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
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
        </div>

        {/* Bottom: Equipment */}
        <div className="border-t border-border/30 pt-10">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-6 text-center">
            Équipements inclus
          </p>
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
