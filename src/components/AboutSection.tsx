import { Plane, Building2, Landmark, MapPin, Train } from "lucide-react";
import proximiteMetro from "@/assets/proximite-metro-hotel-inn.jpg";

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
    <section id="about" className="py-24 bg-secondary/20">
      {/* Decorative separator */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-primary/30" />
          <div className="w-2 h-2 rotate-45 border border-primary/30" />
          <div className="h-px w-16 bg-primary/30" />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            Emplacement idéal
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Un hôtel situé au cœur de Paris
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Hôtel Inn Paris est situé à 2min à pied du métro parisien et offre une grande commodité.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Single image - no rounded corners */}
          <div className="relative group overflow-hidden shadow-xl">
            <img
              src={proximiteMetro}
              alt="Hôtel Inn Design près du métro Place d'Italie"
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Destinations grid */}
          <div className="bg-background p-8 border-l-2 border-primary/30">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {destinations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-sm text-primary">{item.time}</p>
                    <p className="text-muted-foreground text-xs">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metro line */}
            <div className="flex items-center justify-center gap-4 p-4 bg-secondary/30 border border-border/50">
              <div className="flex items-center gap-1">
                <span className="w-7 h-7 bg-[#BB4D98] flex items-center justify-center text-white font-bold text-xs">5</span>
                <span className="w-7 h-7 bg-[#7EC083] flex items-center justify-center text-white font-bold text-xs">6</span>
                <span className="w-7 h-7 bg-[#F3A4BA] flex items-center justify-center text-foreground font-bold text-xs">7</span>
              </div>
              <div className="flex items-center gap-2">
                <Train className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-display text-sm text-primary">2 min</p>
                  <p className="text-muted-foreground text-xs">Accès métro (sortie 3)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
