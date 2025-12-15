import { Plane, Clock, MapPin, Building2 } from "lucide-react";
import proximiteMetro from "@/assets/proximite-metro-hotel-inn.jpg";
import hotelBalcon from "@/assets/hotel-balcon-paris.jpg";
import hotelChambre from "@/assets/hotel-chambre.jpg";
import hotelSalon from "@/assets/hotel-salon.jpg";

const highlights = [
  {
    icon: Clock,
    value: "2 min",
    label: "Du métro",
    description: "Place d'Italie",
  },
  {
    icon: Plane,
    value: "45 min",
    label: "Aéroport Orly",
    description: "Accès direct",
  },
  {
    icon: Building2,
    value: "26 min",
    label: "Tour Eiffel",
    description: "En métro",
  },
  {
    icon: MapPin,
    value: "8 min",
    label: "Musée du Louvre",
    description: "En métro",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
              Au cœur de Paris
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Un hôtel situé au cœur de Paris
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Au cœur du 13ème arrondissement, l'Hôtel Inn Design Paris bénéficie 
              d'une localisation privilégiée, à proximité de la Butte-aux-Cailles, 
              les parcs de Choisy et de Bercy, ainsi que le Quai de la Rapée.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              L'hôtel Inn Design 3 étoiles Place d'Italie met à votre disposition 
              70 chambres, dont trois pour personnes à mobilité réduite. Il dispose 
              d'un parking privé et sécurisé. Profitez de notre bar et de notre 
              espace d'accueil chaleureux.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-2xl text-primary">{item.value}</p>
                    <p className="text-foreground font-medium text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-lg bg-charcoal-light overflow-hidden">
                <img
                  src={proximiteMetro}
                  alt="Hôtel Inn Design près du métro Place d'Italie"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-lg bg-charcoal-light overflow-hidden">
                <img
                  src={hotelChambre}
                  alt="Chambre d'hôtel"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-lg bg-charcoal-light overflow-hidden">
                <img
                  src={hotelBalcon}
                  alt="Petit-déjeuner avec vue sur Paris"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg bg-charcoal-light overflow-hidden">
                <img
                  src={hotelSalon}
                  alt="Salon de l'hôtel"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
