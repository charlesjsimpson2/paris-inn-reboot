import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
          Meilleur Prix Garanti
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 max-w-3xl mx-auto">
          Réservez directement pour les meilleurs tarifs
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          En réservant sur notre site officiel, bénéficiez du meilleur tarif 
          disponible et d'avantages exclusifs pour votre séjour.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="xl" asChild>
            <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
              Réserver maintenant
            </a>
          </Button>
          <Button variant="elegant" size="xl">
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
};
