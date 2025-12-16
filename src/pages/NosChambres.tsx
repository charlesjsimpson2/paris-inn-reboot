import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Wifi, Tv, Snowflake, Bath, Briefcase, CupSoda } from "lucide-react";
import chambreDouble from "@/assets/chambre-double.jpg";
import chambreTwin from "@/assets/chambre-twin.jpg";
import chambreSuperieureBalcon from "@/assets/chambre-superieure-balcon.jpg";

const rooms = [
  {
    name: "Chambre Double",
    description: "Lit de 160×200 cm. Profitez d'un espace élégant et confortable, idéal pour un séjour en couple ou en solo.",
    image: chambreDouble,
  },
  {
    name: "Chambre Twin",
    description: "2 lits de 100×200 cm. Parfaite pour les voyages entre amis ou collègues, avec tout le confort nécessaire.",
    image: chambreTwin,
  },
  {
    name: "Chambre Supérieure avec Balcon",
    description: "Profitez d'un espace extérieur privé avec vue sur Paris. Une expérience unique au cœur de la ville.",
    image: chambreSuperieureBalcon,
  },
  {
    name: "Chambres Communicantes",
    description: "2 chambres modulables avec portes communicantes. La solution idéale pour les familles ou groupes.",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&h=400&fit=crop",
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

  const maxIndex = Math.max(0, rooms.length - 2); // Show 2 at a time

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
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

      {/* Room Carousel - Cards Layout */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Découvrez nos chambres
            </h2>
            <p className="text-muted-foreground">
              Faites défiler pour voir toutes nos catégories
            </p>
          </div>

          <div className="relative">
            {/* Navigation arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground hover:bg-primary/90 p-4 rounded-full transition-all shadow-xl -translate-x-1/2 hidden md:flex"
              aria-label="Chambres précédentes"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground hover:bg-primary/90 p-4 rounded-full transition-all shadow-xl translate-x-1/2 hidden md:flex"
              aria-label="Chambres suivantes"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              >
                {rooms.map((room, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[calc(50%-12px)] flex-shrink-0 group"
                  >
                    <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                          {room.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {room.description}
                        </p>
                        <Button variant="gold" className="w-full">
                          Réserver
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <button
                onClick={goToPrev}
                className="bg-primary text-primary-foreground p-3 rounded-full"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="bg-primary text-primary-foreground p-3 rounded-full"
                aria-label="Suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-primary/50 w-2"
                  }`}
                  aria-label={`Aller à la position ${index + 1}`}
                />
              ))}
            </div>
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
