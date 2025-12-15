import { Plane, Clock, MapPin, Building2 } from "lucide-react";
import proximiteMetro from "@/assets/proximite-metro-hotel-inn.jpg";
import hotelBalcon from "@/assets/hotel-balcon-paris.jpg";

const highlights = [
  {
    icon: Clock,
    value: "2 min",
    label: "Du métro Place d'Italie",
  },
  {
    icon: Plane,
    value: "45 min",
    label: "Aéroport Orly",
  },
  {
    icon: Building2,
    value: "26 min",
    label: "Tour Eiffel",
  },
  {
    icon: MapPin,
    value: "8 min",
    label: "Musée du Louvre",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
            Au cœur de Paris
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Un hôtel situé au cœur de Paris
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Au cœur du 13ème arrondissement, l'Hôtel Inn Design Paris bénéficie 
            d'une localisation privilégiée, à proximité de la Butte-aux-Cailles, 
            les parcs de Choisy et de Bercy, ainsi que le Quai de la Rapée.
          </p>
        </div>

        {/* Images with overlay info */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="relative group rounded-xl overflow-hidden">
            <img
              src={proximiteMetro}
              alt="Hôtel Inn Design près du métro Place d'Italie"
              className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-foreground font-display text-xl">À 2 minutes du métro</p>
              <p className="text-muted-foreground text-sm">Place d'Italie - Lignes 5, 6, 7</p>
            </div>
          </div>
          <div className="relative group rounded-xl overflow-hidden">
            <img
              src={hotelBalcon}
              alt="Petit-déjeuner avec vue sur Paris"
              className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-foreground font-display text-xl">Vue sur Paris</p>
              <p className="text-muted-foreground text-sm">Profitez de votre petit-déjeuner avec vue</p>
            </div>
          </div>
        </div>

        {/* Info bar */}
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-foreground leading-relaxed">
                L'hôtel Inn Design 3 étoiles Place d'Italie met à votre disposition 
                <span className="text-primary font-semibold"> 70 chambres</span>, dont trois pour personnes à mobilité réduite. 
                Il dispose d'un <span className="text-primary font-semibold">parking privé et sécurisé</span>. 
                Profitez de notre bar et de notre espace d'accueil chaleureux.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-display text-xl text-primary">{item.value}</p>
                  <p className="text-muted-foreground text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
