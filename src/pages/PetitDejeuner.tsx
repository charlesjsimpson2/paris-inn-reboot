import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Coffee, Croissant, Apple, Egg, Clock, Users } from "lucide-react";

import salle1 from "@/assets/breakfast/salle-1.jpg";
import salle2 from "@/assets/breakfast/salle-2.jpg";
import buffet1 from "@/assets/breakfast/buffet-1.jpg";
import balcon from "@/assets/breakfast/balcon.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.jpg";
import tablePetitDejeuner from "@/assets/breakfast/table-petit-dejeuner.jpg";

const features = [
  { icon: Coffee, label: "Boissons chaudes" },
  { icon: Croissant, label: "Viennoiseries" },
  { icon: Apple, label: "Fruits frais" },
  { icon: Egg, label: "Buffet salé" },
];

const galleryImages = [
  { src: tablePetitDejeuner, alt: "Petit déjeuner complet" },
  { src: salle1, alt: "Salle petit déjeuner" },
  { src: salle2, alt: "Espace petit déjeuner" },
  { src: balcon, alt: "Petit déjeuner sur balcon" },
  { src: petitDejeuner, alt: "Buffet varié" },
];

const PetitDejeuner = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={balcon}
            alt="Petit déjeuner avec vue sur Paris"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
              Chaque matin
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              Le petit déjeuner qui donne le sourire !
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Chaque matin, faites le plein d'énergie avec notre petit déjeuner complet, 
                servi en buffet sucré & salé à volonté.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Au menu : boissons chaudes, baguettes tradition et céréales, viennoiseries 
                croustillantes, fruits frais et céréales. Côté salé, retrouvez œufs durs, 
                charcuterie, blanc de dinde, fromages et yaourts nature bio. Et pour les 
                plus gourmands : confitures et crêpes moelleuses délicatement vanillées.
              </p>

              <p className="text-foreground font-medium text-lg">
                De quoi bien commencer la journée, quel que soit votre programme !
              </p>

              {/* Info boxes */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Horaires</p>
                    <p className="font-medium text-foreground">7h00 - 10h00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Formule</p>
                    <p className="font-medium text-foreground">Buffet à volonté</p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 bg-background rounded-xl border border-border/50 shadow-sm"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                    <span className="text-sm text-muted-foreground text-center">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={buffet1}
                  alt="Petit déjeuner buffet à l'hôtel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
            Notre espace petit déjeuner
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PetitDejeuner;
