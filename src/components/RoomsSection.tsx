import { Button } from "@/components/ui/button";
import { Users, Wifi, Coffee, Car } from "lucide-react";
import chambreDouble from "@/assets/chambre-double.jpg";
import chambreTwin from "@/assets/chambre-twin.jpg";

const rooms = [
  {
    name: "Chambre Double",
    description: "Lit de 160×200 cm",
    capacity: "2 personnes",
    image: chambreDouble,
    features: ["Wi-Fi gratuit", "Climatisation", "TV écran plat"],
  },
  {
    name: "Chambre Double / Chambre Twin",
    description: "2 lits de 100×200 cm",
    capacity: "2 personnes",
    image: chambreTwin,
    features: ["Wi-Fi gratuit", "Climatisation", "Minibar"],
  },
  {
    name: "Chambre Twin",
    description: "Deux lits simples pour voyager entre amis ou collègues.",
    capacity: "2 personnes",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop",
    features: ["Wi-Fi gratuit", "Bureau", "Coffre-fort"],
  },
  {
    name: "Chambre PMR",
    description: "Accessible aux personnes à mobilité réduite.",
    capacity: "2 personnes",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&h=400&fit=crop",
    features: ["Accessibilité totale", "Salle de bain adaptée", "Wi-Fi gratuit"],
  },
];

export const RoomsSection = () => {
  return (
    <section id="chambres" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
            Nos Hébergements
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Chambres & Suites
          </h2>
          <p className="text-muted-foreground">
            Installez-vous confortablement dans l'une de nos 70 chambres lumineuses, insonorisées et entièrement équipées. Chaque chambre offre un confort optimal grâce à des équipements complets : climatisation, télévision à écran plat, espace bureau, coffre-fort, sèche-cheveux et plateau de courtoisie.
          </p>
          <p className="text-muted-foreground mt-4">
            Pour répondre à tous les besoins, l'hôtel propose également des chambres adaptées aux personnes à mobilité réduite ainsi que des chambres communicantes, idéales pour les séjours en famille.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Users className="w-4 h-4" />
                  {room.capacity}
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Voir les détails
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Wifi, label: "Wi-Fi Gratuit", desc: "Haut débit" },
            { icon: Coffee, label: "Petit Déjeuner", desc: "7h - 10h" },
            { icon: Car, label: "Parking Privé", desc: "Sécurisé" },
            { icon: Users, label: "Séminaires", desc: "Sur demande" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-background/50"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
