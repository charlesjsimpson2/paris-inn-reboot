import { Button } from "@/components/ui/button";
import { Wifi, Coffee, Car, Users, Tv, Briefcase, Snowflake, Bath, CupSoda } from "lucide-react";
import chambreDouble from "@/assets/chambre-double.jpg";
import chambreTwin from "@/assets/chambre-twin.jpg";
import chambreSuperieureBalcon from "@/assets/chambre-superieure-balcon.jpg";

const rooms = [
  {
    name: "Chambre Double",
    description: "Lit de 160×200 cm",
    capacity: "2 personnes",
    image: chambreDouble,
    features: ["Wi-Fi gratuit", "Climatisation", "TV écran plat"],
  },
  {
    name: "Chambre Twin",
    description: "2 lits de 100×200 cm",
    capacity: "2 personnes",
    image: chambreTwin,
    features: ["Wi-Fi gratuit", "Climatisation", "Minibar"],
  },
  {
    name: "Chambre supérieure avec balcon",
    description: "Profitez d'un espace extérieur privé avec vue.",
    capacity: "2 personnes",
    image: chambreSuperieureBalcon,
    features: [],
  },
  {
    name: "Chambres Communicantes",
    description: "2 chambres modulables portes communicantes",
    capacity: "4 personnes",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&h=400&fit=crop",
    features: [],
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
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
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
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {room.description}
                </p>
                <Button variant="outline" size="sm" className="w-full mt-auto">
                  Voir les détails
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
              Le confort avant tout
            </p>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Nos Équipements
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                className="group flex flex-col items-center text-center p-6 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
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
