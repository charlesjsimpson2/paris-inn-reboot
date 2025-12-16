import { Button } from "@/components/ui/button";
import { Star, BedDouble, Car, Wine } from "lucide-react";

const features = [
  { icon: Star, label: "3 étoiles", stars: true },
  { icon: BedDouble, label: "70 chambres" },
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

        {/* Content: Text + Stats side by side */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Left: Text */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Situé au cœur du 13ᵉ arrondissement, l'Hôtel Inn Design Paris bénéficie d'un emplacement idéal, à proximité de la Butte-aux-Cailles, des parcs et des quais. Notre hôtel propose 70 chambres confortables, un parking privé et sécurisé, ainsi qu'un bar convivial et un espace d'accueil propice à la détente ou aux échanges professionnels.
            </p>
          </div>

          {/* Right: Stats 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-charcoal border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg aspect-square"
              >
                {feature.stars ? (
                  <div className="flex items-center gap-0.5 text-primary mb-1">
                    <Star className="w-5 h-5 fill-primary" />
                    <Star className="w-5 h-5 fill-primary" />
                    <Star className="w-5 h-5 fill-primary" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                )}
                <span className="text-foreground font-medium text-center text-sm">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-foreground text-xl font-display mb-6">
            Réservez votre chambre et profitez de votre séjour à Paris !
          </p>
          <Button variant="gold" size="xl" className="px-12 py-7 text-lg font-bold shadow-xl">
            Réserver une chambre
          </Button>
        </div>
      </div>
    </section>
  );
};
