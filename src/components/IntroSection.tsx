import { Button } from "@/components/ui/button";
import { Star, BedDouble, Car, Wine, Wifi, Snowflake } from "lucide-react";
import vueBalcon from "@/assets/vue-balcon-paris.jpg";

const features = [
  { icon: Star, label: "3 étoiles", stars: true },
  { icon: BedDouble, label: "70 chambres" },
  { icon: Wifi, label: "Wifi gratuit" },
  { icon: Snowflake, label: "Climatisation" },
  { icon: Car, label: "Parking privé" },
  { icon: Wine, label: "Bar convivial" },
];

export const IntroSection = () => {
  return (
    <section className="py-16 pb-8 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            Bienvenue
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Un hôtel bien placé pour tout faire !
          </h2>
        </div>

        {/* Content: Text+Stats left, Image right */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Left: Text + Stats */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Situé au cœur du 13ᵉ arrondissement, l'Hôtel Inn Design Paris bénéficie d'un emplacement idéal, à proximité de la Butte-aux-Cailles, des parcs et des quais. Notre hôtel propose 70 chambres confortables, un parking privé et sécurisé, ainsi qu'un bar convivial et un espace d'accueil propice à la détente ou aux échanges professionnels.
            </p>

            {/* Stats in row */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-charcoal/50 border border-border/30"
                >
                  {feature.stars ? (
                    <div className="flex items-center gap-0.5 text-primary">
                      <Star className="w-3.5 h-3.5 fill-primary" />
                      <Star className="w-3.5 h-3.5 fill-primary" />
                      <Star className="w-3.5 h-3.5 fill-primary" />
                    </div>
                  ) : (
                    <feature.icon className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-foreground text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative group">
            <div className="overflow-hidden shadow-xl">
              <img
                src={vueBalcon}
                alt="Vue depuis le balcon de l'hôtel sur Paris"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-foreground text-xl font-display mb-6">
            Réservez votre chambre et profitez de votre séjour à Paris !
          </p>
          <Button variant="gold" size="xl" className="px-12 py-7 text-lg font-bold shadow-xl" asChild>
            <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
              Réserver une chambre
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
