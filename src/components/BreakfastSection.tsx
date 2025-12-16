import { Coffee, Croissant, Apple, Egg, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import breakfastImage from "@/assets/petit-dejeuner.jpg";
import barImage from "@/assets/bar-hotel.jpg";

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
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            À votre service
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Petit-déjeuner & Bar
          </h2>
        </div>

        {/* Petit-déjeuner */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content Side - Left */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl text-foreground">
              Le petit déjeuner qui donne le sourire !
            </h3>

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


            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 bg-background border border-border/50"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm text-muted-foreground text-center">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <Link to="/petit-dejeuner">Découvrir notre petit-déjeuner</Link>
            </Button>
          </div>

          {/* Image Side - Right */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden shadow-xl">
              <img
                src={breakfastImage}
                alt="Petit déjeuner buffet à l'hôtel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bar */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side - Left */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden shadow-xl">
              <img
                src={barImage}
                alt="Bar convivial de l'hôtel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side - Right */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                <Wine className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">
                Un bar convivial pour se détendre
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              À tout moment de la journée, installez-vous au bar de l'hôtel pour partager 
              un verre, échanger ou simplement faire une pause.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Dans une ambiance accueillante et décontractée, c'est l'endroit idéal pour 
              se retrouver après une journée bien remplie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};