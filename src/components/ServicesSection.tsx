import { Clock, Car, Wifi, Wind, Briefcase, Plane, Utensils, MapPin } from "lucide-react";

const services = [
  {
    title: "Accueil à l'hôtel",
    icon: Clock,
    items: [
      { icon: Clock, text: "Réception 24/24 – 7j/7" },
      { icon: Briefcase, text: "Départ avant 12h – Arrivée après 14h" },
      { icon: Car, text: "Parking privé et sécurisé" },
    ],
    image: null,
  },
  {
    title: "Infos pratiques",
    icon: Wifi,
    items: [
      { icon: Wifi, text: "Wifi gratuit" },
      { icon: Wind, text: "Climatisation" },
      { icon: Briefcase, text: "Bagagerie gratuite" },
      { icon: Plane, text: "Taxi – Tarif unique pour l'aéroport" },
    ],
    image: null,
  },
  {
    title: "Restaurant à proximité",
    icon: Utensils,
    description: "Que vous soyez à la recherche de plats locaux et traditionnels, de saveurs internationales exotiques ou de mets gastronomiques raffinés, il y a de fortes chances que vous puissiez trouver un restaurant adapté à vos envies.",
    link: "Retrouvez la liste des restaurants à proximité",
    image: null,
  },
  {
    title: "Tourisme",
    icon: MapPin,
    description: "Lors de votre séjour à l'hôtel Inn Design Place d'Italie à Paris, vous pourrez vous plonger dans l'histoire de la capitale française : Les Catacombes de Paris, La Tour Eiffel, Tour Montparnasse, Institut du monde arabe, Musée du Louvres, Panthéon...",
    link: "Découvrez tout ce qu'il y a à visiter",
    image: null,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            À votre service
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Tout pour votre confort
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Accueil à l'hôtel + Infos pratiques */}
          <div className="bg-secondary/30 rounded-2xl p-8 border border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground">Accueil & Infos pratiques</h3>
            </div>
            <div className="space-y-3">
              {services[0].items?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </div>
              ))}
              <div className="border-t border-border/30 my-4"></div>
              {services[1].items?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Restaurant à proximité */}
          <div className="bg-secondary/30 rounded-2xl p-8 border border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Utensils className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground">Restaurant à proximité</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {services[2].description}
            </p>
          </div>

          {/* Tourisme */}
          <div className="bg-secondary/30 rounded-2xl p-8 border border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground">Tourisme</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {services[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
