import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, Wifi, Tv, Snowflake, Bath, Briefcase, CupSoda } from "lucide-react";
import chambreDouble from "@/assets/chambre-double.jpg";
import chambreTwin from "@/assets/chambre-twin.jpg";
import chambreSuperieureBalcon from "@/assets/chambre-superieure-balcon.jpg";

const rooms = [
  {
    name: "Chambre Double",
    description: "Lit de 160×200 cm. Profitez d'un espace élégant et confortable, idéal pour un séjour en couple ou en solo.",
    capacity: "2 personnes",
    image: chambreDouble,
    features: ["Wi-Fi gratuit", "Climatisation", "TV écran plat", "Salle d'eau privative"],
  },
  {
    name: "Chambre Twin",
    description: "2 lits de 100×200 cm. Parfaite pour les voyages entre amis ou collègues, avec tout le confort nécessaire.",
    capacity: "2 personnes",
    image: chambreTwin,
    features: ["Wi-Fi gratuit", "Climatisation", "TV écran plat", "Espace bureau"],
  },
  {
    name: "Chambre Supérieure avec Balcon",
    description: "Profitez d'un espace extérieur privé avec vue sur Paris. Une expérience unique au cœur de la ville.",
    capacity: "2 personnes",
    image: chambreSuperieureBalcon,
    features: ["Balcon privé", "Vue panoramique", "Climatisation", "Plateau de courtoisie"],
  },
  {
    name: "Chambres Communicantes",
    description: "2 chambres modulables avec portes communicantes. La solution idéale pour les familles ou groupes.",
    capacity: "4 personnes",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&h=400&fit=crop",
    features: ["Espace famille", "Modulable", "Wi-Fi gratuit", "2 salles de bain"],
  },
];

const equipments = [
  { icon: Bath, label: "Salle d'eau privative" },
  { icon: Tv, label: "TV écran plat" },
  { icon: Briefcase, label: "Espace bureau" },
  { icon: Wifi, label: "Wi-Fi gratuit" },
  { icon: CupSoda, label: "Plateau de courtoisie" },
  { icon: Snowflake, label: "Climatisation" },
];

const NosChambres = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
  };

  const currentRoom = rooms[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
              Nos Hébergements
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Bienvenue à l'Hôtel Inn Design Paris !
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Profitez de 70 chambres lumineuses, insonorisées et tout confort, avec salle de bain équipée.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              En solo, en famille ou entre amis, tout est pensé pour votre bien-être, avec des chambres communicantes et une équipe aux petits soins.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Idéalement situé, l'hôtel est le point de départ parfait pour découvrir Paris sans stress.
            </p>
          </div>
        </div>
      </section>

      {/* Equipments */}
      <section className="py-12 bg-muted/30 border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {equipments.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-foreground"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Carousel - New Design */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                {rooms.map((room, index) => (
                  <img
                    key={index}
                    src={room.image}
                    alt={room.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                    }`}
                  />
                ))}
                
                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Counter badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {currentIndex + 1} / {rooms.length}
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
                <button
                  onClick={goToPrev}
                  className="bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-all shadow-lg"
                  aria-label="Chambre précédente"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-all shadow-lg"
                  aria-label="Chambre suivante"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:pl-8">
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute pointer-events-none"
                  }`}
                  style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                  <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
                    Chambre {currentIndex + 1}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                    {room.name}
                  </h2>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{room.capacity}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {room.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {room.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-center gap-2 text-sm text-foreground bg-muted/50 px-4 py-3 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="gold" size="xl" className="w-full sm:w-auto">
                    Réserver cette chambre
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Room selector dots */}
          <div className="flex justify-center gap-3 mt-16">
            {rooms.map((room, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-12 h-3 rounded-full"
                    : "bg-muted hover:bg-primary/50 w-3 h-3 rounded-full"
                }`}
                aria-label={`Voir ${room.name}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Réservez votre chambre dès maintenant
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Profitez de -10% en réservant directement sur notre site
          </p>
          <Button variant="outline" size="xl" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Voir les disponibilités
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NosChambres;
