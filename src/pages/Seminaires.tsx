import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SalonSection } from "@/components/SalonSection";
import { Users, Projector, Wifi, Coffee, MonitorSpeaker, Utensils } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroSeminaire from "@/assets/hero-seminaire.jpg";
import salonBose1 from "@/assets/salon-bose-1.jpg";
import salonBose2 from "@/assets/salon-bose-2.jpg";
import salonBose3 from "@/assets/salon-bose-3.jpg";
import salonBose4 from "@/assets/salon-bose-4.jpg";
import salonFender1 from "@/assets/salon-fender-1.jpg";
import salonFender2 from "@/assets/salon-fender-2.jpg";
import salonFender3 from "@/assets/salon-fender-3.jpg";
import salonFender4 from "@/assets/salon-fender-4.jpg";
import salonMarshall1 from "@/assets/salon-marshall-1.jpg";
import salonMarshall2 from "@/assets/salon-marshall-2.jpg";
import salonMarshall3 from "@/assets/salon-marshall-3.jpg";
import salonMarshall4 from "@/assets/salon-marshall-4.jpg";
import coworking1 from "@/assets/coworking-1.jpg";
import coworking2 from "@/assets/coworking-2.jpg";
import coworking3 from "@/assets/coworking-3.jpg";
import coworking4 from "@/assets/coworking-4.jpg";

const Seminaires = () => {
  const { t } = useLanguage();

  const equipments = [
    { icon: Projector, label: t('seminarsPage.projector') },
    { icon: MonitorSpeaker, label: t('seminarsPage.screen') },
    { icon: Wifi, label: t('seminarsPage.wifi') },
    { icon: Coffee, label: t('seminarsPage.coffee') },
    { icon: Users, label: t('seminarsPage.modular') },
    { icon: Utensils, label: t('seminarsPage.catering') },
  ];

  const salonsData = [
    {
      name: "Salon BOSE",
      description: "Découvrez notre nouvelle salle de séminaire BOSE, conçue pour allier confort et haute technologie. Écrans interactifs, système audio-vidéo de pointe et connexion wifi ultra-rapide : tout est là pour vos réunions, formations ou conférences, sur place ou en lien avec l'international. Avec ses 40 m², cet espace garantit le succès de vos événements dans un cadre moderne et performant.",
      surface: "40 m²",
      images: [
        { src: salonBose1, alt: "Salon BOSE - Vue d'ensemble" },
        { src: salonBose2, alt: "Salon BOSE - Détail des sièges" },
        { src: salonBose3, alt: "Salon BOSE - Configuration classe" },
        { src: salonBose4, alt: "Salon BOSE - Vue avec écran" },
      ],
      capacities: [
        { icon: "u-shape" as const, count: 20, label: t('seminarsPage.uShape') },
        { icon: "classe" as const, count: 30, label: t('seminarsPage.classroom') },
        { icon: "theatre" as const, count: 40, label: t('seminarsPage.theatre') },
      ],
    },
    {
      name: "Salon FENDER",
      description: "Spacieuse et baignée de lumière naturelle, notre salle FENDER de 70 m² est parfaite pour vos réunions et événements professionnels. Équipée d'un écran HD, d'un rétroprojecteur, d'un système vidéo performant et du Wi-Fi haut débit, elle combine confort et technologie pour des présentations réussies. Un espace lumineux et convivial qui favorise la concentration et la collaboration de tous vos participants.",
      surface: "70 m²",
      images: [
        { src: salonFender1, alt: "Salon FENDER - Vue en U" },
        { src: salonFender2, alt: "Salon FENDER - Vue avec écran" },
        { src: salonFender3, alt: "Salon FENDER - Configuration classe" },
        { src: salonFender4, alt: "Salon FENDER - Vue d'ensemble" },
      ],
      capacities: [
        { icon: "u-shape" as const, count: 33, label: t('seminarsPage.uShape') },
        { icon: "classe" as const, count: 50, label: t('seminarsPage.classroom') },
        { icon: "theatre" as const, count: 70, label: t('seminarsPage.theatre') },
      ],
    },
    {
      name: "Salon MARSHALL",
      description: "Spacieuse et baignée de lumière grâce à son patio intérieur, notre salle MARSHALL de 117 m² est idéale pour vos assemblées générales et séminaires. Équipée d'un système audiovisuel de pointe, écran tactile, rétroprojecteur HD et Wi-Fi haut débit, elle garantit des présentations réussies. Avec un accès direct au patio, vos pauses et discussions informelles se font dans un cadre élégant et agréable, alliant professionnalisme et convivialité.",
      surface: "117 m²",
      images: [
        { src: salonMarshall1, alt: "Salon MARSHALL - Vue d'ensemble" },
        { src: salonMarshall2, alt: "Salon MARSHALL - Configuration classe" },
        { src: salonMarshall3, alt: "Salon MARSHALL - Vue avec écran" },
        { src: salonMarshall4, alt: "Salon MARSHALL - Patio" },
      ],
      capacities: [
        { icon: "u-shape" as const, count: 42, label: t('seminarsPage.uShape') },
        { icon: "classe" as const, count: 63, label: t('seminarsPage.classroom') },
        { icon: "theatre" as const, count: 105, label: t('seminarsPage.theatre') },
      ],
    },
    {
      name: "Espace Coworking",
      subtitle: "Un espace de coworking inspirant",
      description: "Calme, élégant et pensé pour la productivité, notre espace de coworking offre un cadre idéal pour travailler en toute sérénité. Design épuré, mobilier soigné et ambiance apaisante créent une atmosphère propice à la concentration, seul ou en équipe. Réunions, sessions de travail ou moments de réflexion : tout est réuni pour mener vos projets à bien dans un environnement professionnel et inspirant.",
      surface: "Espace modulable",
      images: [
        { src: coworking1, alt: "Espace Coworking - Vue d'ensemble" },
        { src: coworking2, alt: "Espace Coworking - Table de travail" },
        { src: coworking3, alt: "Espace Coworking - Banquette et décoration" },
        { src: coworking4, alt: "Espace Coworking - Détails déco" },
      ],
      capacities: [],
    },
  ];

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
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 mb-4">
              {t('seminarsPage.badge')}
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white">
              {t('seminarsPage.title')}
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
                {t('seminarsPage.intro1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('seminarsPage.intro2')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('seminarsPage.intro3')}
              </p>
            </div>

            {/* Right: Equipment - Elegant burgundy style */}
            <div className="bg-burgundy/10 border border-burgundy/20 p-8">
              <h3 className="font-display text-xl text-burgundy mb-6 text-center">{t('seminarsPage.equipment')}</h3>
              <div className="grid grid-cols-2 gap-5">
                {equipments.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-10 h-10 bg-burgundy/15 flex items-center justify-center flex-shrink-0 border border-burgundy/30">
                      <item.icon className="w-5 h-5 text-burgundy" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Salons - Elegant Overlapping Layout */}
      <section className="bg-background">
        {/* Section header */}
        <div className="py-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-[0.2em]">{t('seminarsPage.spaces')}</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
                {t('seminarsPage.meetingRooms')}
              </h2>
            </div>
          </div>
        </div>
        
        {/* Salons list with alternating backgrounds and spacing */}
        <div className="space-y-12 py-12">
          {salonsData.map((salon, index) => {
            const bgColors = ['bg-muted/30', 'bg-charcoal', 'bg-muted/50', 'bg-charcoal/80'];
            return (
              <div key={index} className={`${bgColors[index % bgColors.length]} mx-4 lg:mx-8`}>
                <SalonSection salon={salon} reverse={index % 2 === 1} />
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 mb-4">
              {t('seminarsPage.virtualTour')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              {t('seminarsPage.videoTitle')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video overflow-hidden shadow-2xl">
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
            {t('seminarsPage.cta.title')}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            {t('seminarsPage.cta.subtitle')}
          </p>
          <Button variant="outline" size="xl" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            {t('seminarsPage.cta.button')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Seminaires;
