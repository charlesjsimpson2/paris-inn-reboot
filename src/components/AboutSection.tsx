import { Plane, Building2, Landmark, MapPin, Train } from "lucide-react";
import proximiteMetro from "@/assets/proximite-metro-hotel-inn.jpg";
import hotelBalcon from "@/assets/hotel-balcon-paris.jpg";

const destinations = [
  {
    icon: Plane,
    time: "1h",
    label: "Aéroport de Paris-Charles de Gaulle",
  },
  {
    icon: Plane,
    time: "45 min",
    label: "Aéroport de Paris-Orly",
  },
  {
    icon: Building2,
    time: "26 min",
    label: "Tour Eiffel",
  },
  {
    icon: Landmark,
    time: "8 min",
    label: "Musée du Louvre",
  },
  {
    icon: MapPin,
    time: "30 min",
    label: "Les Champs-Élysées",
  },
  {
    icon: Landmark,
    time: "20 min",
    label: "Le Panthéon",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 uppercase tracking-wide">
            Un hôtel situé au cœur de Paris
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Hôtel Inn Paris est situé à 2min à pied du métro parisien et offre une grande commodité.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative group rounded-xl overflow-hidden">
              <img
                src={proximiteMetro}
                alt="Hôtel Inn Design près du métro Place d'Italie"
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden mt-8">
              <img
                src={hotelBalcon}
                alt="Petit-déjeuner avec vue sur Paris"
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Destinations grid */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {destinations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-xl text-primary">{item.time}</p>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metro line */}
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#BB4D98] flex items-center justify-center text-white font-bold text-sm">5</span>
                <span className="w-8 h-8 rounded-full bg-[#7EC083] flex items-center justify-center text-white font-bold text-sm">6</span>
                <span className="w-8 h-8 rounded-full bg-[#F3A4BA] flex items-center justify-center text-foreground font-bold text-sm">7</span>
              </div>
              <div className="flex items-center gap-3">
                <Train className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-display text-xl text-primary">2 min</p>
                  <p className="text-muted-foreground text-sm">Accès métro (sortie 3)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
