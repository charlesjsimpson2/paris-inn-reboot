import { Plane, Building2, Landmark, MapPin, Train } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import proximiteMetro from "@/assets/proximite-metro-hotel-inn.jpg";

const destinations = [
  { icon: Plane, time: "1h", label: "Aéroport de Paris-Charles de Gaulle" },
  { icon: Plane, time: "45 min", label: "Aéroport de Paris-Orly" },
  { icon: Building2, time: "26 min", label: "Tour Eiffel" },
  { icon: Landmark, time: "20 min", label: "Musée du Louvre" },
  { icon: MapPin, time: "30 min", label: "Les Champs-Élysées" },
  { icon: Landmark, time: "20 min", label: "Le Panthéon" },
];

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            {t('about.badge')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Single image */}
          <div className="relative group overflow-hidden">
            <img
              src={proximiteMetro}
              alt="Hôtel Inn Design près du métro Place d'Italie"
              loading="lazy"
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Destinations grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {destinations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-sm text-primary">{item.time}</p>
                    <p className="text-muted-foreground text-xs truncate">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metro line */}
            <div className="flex items-center justify-center gap-3 p-3 bg-card border border-border">
              <div className="flex items-center gap-1">
                <span className="w-6 h-6 rounded-full bg-[#F28E00] flex items-center justify-center text-white font-bold text-xs">5</span>
                <span className="w-6 h-6 rounded-full bg-[#7EC083] flex items-center justify-center text-white font-bold text-xs">6</span>
                <span className="w-6 h-6 rounded-full bg-[#F3A4BA] flex items-center justify-center text-foreground font-bold text-xs">7</span>
              </div>
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-primary" />
                <div>
                  <p className="font-display text-sm text-primary">2 min</p>
                  <p className="text-muted-foreground text-xs">{t('about.metro')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
