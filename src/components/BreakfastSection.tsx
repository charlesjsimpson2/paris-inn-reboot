import { Coffee, Croissant, Apple, Egg } from "lucide-react";
import breakfastImage from "@/assets/petit-dejeuner.jpg";

const features = [
  { icon: Coffee, label: "Boissons chaudes" },
  { icon: Croissant, label: "Viennoiseries" },
  { icon: Apple, label: "Fruits frais" },
  { icon: Egg, label: "Buffet salé" },
];

export const BreakfastSection = () => {
  return (
    <section id="petit-dejeuner" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side - Left */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
                Chaque matin
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Le petit déjeuner qui donne le sourire !
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Chaque matin, faites le plein d'énergie avec notre petit déjeuner complet, 
              servi en buffet sucré & salé à volonté.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Au menu : boissons chaudes, baguettes tradition et céréales, viennoiseries 
              croustillantes, fruits frais et céréales. Côté salé, retrouvez œufs durs, 
              charcuterie, blanc de dinde, fromages et yaourts nature bio. Et pour les 
              plus gourmands : confitures et crêpes moelleuses délicatement vanillées.
            </p>

            <p className="text-foreground font-medium">
              De quoi bien commencer la journée, quel que soit votre programme !
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 bg-background rounded-xl border border-border/50"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm text-muted-foreground text-center">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side - Right */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={breakfastImage}
                alt="Petit déjeuner buffet à l'hôtel"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};