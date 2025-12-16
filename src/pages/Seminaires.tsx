import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SalonCard } from "@/components/SalonCard";
import { Users, Projector, Wifi, Coffee, MonitorSpeaker, Utensils } from "lucide-react";
import heroSeminaire from "@/assets/hero-seminaire.jpg";
import salonBose1 from "@/assets/salon-bose-1.jpg";
import salonBose2 from "@/assets/salon-bose-2.jpg";
import salonBose3 from "@/assets/salon-bose-3.jpg";
import salonBose4 from "@/assets/salon-bose-4.jpg";

const equipments = [
  { icon: Projector, label: "Vidéoprojecteur" },
  { icon: MonitorSpeaker, label: "Écran de projection" },
  { icon: Wifi, label: "Wi-Fi haut débit" },
  { icon: Coffee, label: "Pauses café" },
  { icon: Users, label: "Configurations modulables" },
  { icon: Utensils, label: "Service traiteur" },
];

const Seminaires = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img 
          src={heroSeminaire} 
          alt="Salle de séminaire Hôtel Inn Design Paris" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 rounded-full mb-4">
              Séminaires & Événements
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white">
              Nos salles de séminaires
            </h1>
          </div>
        </div>
      </section>

      {/* Description + Equipment Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Organisez vos réunions, formations ou événements professionnels dans nos salles modernes et modulables, parfaites pour petites équipes ou grandes délégations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Après une journée productive, vos participants pourront profiter de chambres confortables et d'espaces de détente.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nous proposons également des salons modulables pour vos cocktails, banquets ou journées d'études, le tout dans un cadre pratique et agréable.
              </p>
            </div>

            {/* Right: Equipment */}
            <div className="grid grid-cols-2 gap-4">
              {equipments.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Salon BOSE */}
      <SalonCard
        name="Salon BOSE"
        description="Découvrez notre nouvelle salle de séminaire BOSE, conçue pour allier confort et haute technologie. Écrans interactifs, système audio-vidéo de pointe et connexion wifi ultra-rapide : tout est là pour vos réunions, formations ou conférences, sur place ou en lien avec l'international. Avec ses 40 m², cet espace garantit le succès de vos événements dans un cadre moderne et performant."
        surface="40 m²"
        images={[
          { src: salonBose1, alt: "Salon BOSE - Vue d'ensemble" },
          { src: salonBose2, alt: "Salon BOSE - Détail des sièges" },
          { src: salonBose3, alt: "Salon BOSE - Configuration classe" },
          { src: salonBose4, alt: "Salon BOSE - Vue avec écran" },
        ]}
        capacities={[
          { icon: "u-shape", count: 20, label: "Disposition en U" },
          { icon: "classe", count: 30, label: "Disposition Classe" },
          { icon: "theatre", count: 40, label: "Disposition Théâtre" },
        ]}
      />

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 rounded-full mb-4">
              Visite Virtuelle
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Découvrez nos espaces en vidéo
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/6VK-aPuljJY"
                title="Visite de nos salles de séminaires"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Demandez un devis personnalisé
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Notre équipe vous accompagne dans l'organisation de votre événement
          </p>
          <Button variant="outline" size="xl" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Nous contacter
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Seminaires;
