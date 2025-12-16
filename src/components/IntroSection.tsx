import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const IntroSection = () => {
  return (
    <section className="py-16 pb-8 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            Bienvenue
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Un hôtel bien placé pour tout faire !
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Situé au cœur du 13ᵉ arrondissement, l'Hôtel Inn Design Paris bénéficie d'un emplacement idéal, à proximité de la Butte-aux-Cailles, des parcs et des quais. Notre hôtel{" "}
            <span className="inline-flex items-center gap-0.5 mx-1">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <Star className="w-4 h-4 text-primary fill-primary" />
              <Star className="w-4 h-4 text-primary fill-primary" />
            </span>{" "}
            70 chambres confortables, un parking privé et sécurisé, ainsi qu'un bar convivial et un espace d'accueil propice à la détente ou aux échanges professionnels.
          </p>

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
