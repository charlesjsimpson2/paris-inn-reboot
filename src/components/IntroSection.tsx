import { Button } from "@/components/ui/button";
import { MapPin, Star, Car, Coffee } from "lucide-react";

const features = [
  { icon: Star, label: "3 étoiles" },
  { icon: MapPin, label: "70 chambres" },
  { icon: Car, label: "Parking privé" },
  { icon: Coffee, label: "Bar convivial" },
];

export const IntroSection = () => {
  return (
    <section className="py-16 pb-8 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 uppercase tracking-wide">
            Un hôtel bien placé pour tout faire !
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Situé au cœur du 13ᵉ arrondissement, l'Hôtel Inn Design Paris bénéficie d'un emplacement idéal, à proximité de la Butte-aux-Cailles, des parcs et des quais.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Nous proposons un hôtel 3 étoiles Place d'Italie avec 70 chambres confortables, un parking privé et sécurisé, ainsi qu'un bar convivial et un espace d'accueil propice à la détente ou aux échanges professionnels.
          </p>

          {/* Features badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>

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
