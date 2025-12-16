import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wifi, Tv, Briefcase, Snowflake, Bath, CupSoda, ChevronLeft, ChevronRight, Users } from "lucide-react";
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
    <section id="chambres" className="py-16 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            Nos Hébergements
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Chambres & Suites
          </h2>
          <p className="text-muted-foreground">
            Installez-vous confortablement dans l'une de nos 70 chambres lumineuses, insonorisées et entièrement équipées.
          </p>
        </div>

        {/* Equipment Strip */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 pb-10 border-b border-border/30">
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
              className="flex items-center gap-2 text-muted-foreground"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content Side - Left */}
            <div className="relative min-h-[300px] order-2 lg:order-1">
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{room.capacity}</span>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {room.description}
                  </p>

                  <Button variant="gold" size="lg">
                    Réserver cette chambre
                  </Button>
                </div>
              ))}
            </div>

            {/* Image Side - Right */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl order-1 lg:order-2">
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
              
              {/* Pagination overlay */}
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-foreground font-semibold">
                  {currentIndex + 1} <span className="text-muted-foreground">/ {rooms.length}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation arrows - below */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="bg-primary/10 hover:bg-primary text-foreground hover:text-primary-foreground p-4 rounded-full transition-all shadow-md border border-primary/30"
              aria-label="Chambre précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="bg-primary/10 hover:bg-primary text-foreground hover:text-primary-foreground p-4 rounded-full transition-all shadow-md border border-primary/30"
              aria-label="Chambre suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Link to Chambres page */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="px-8">
              Voir toutes nos chambres
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
