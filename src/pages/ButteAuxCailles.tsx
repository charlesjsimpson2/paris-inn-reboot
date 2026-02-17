import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  MapPin, Palette, Utensils, Waves, TreePine,
  Navigation, ChevronRight, Footprints, BookOpen
} from "lucide-react";
import heroImg from "@/assets/butte-cailles-hero.webp";
import streetartImg from "@/assets/butte-cailles-streetart.webp";
import bistrotImg from "@/assets/butte-cailles-bistrot.webp";
import piscineImg from "@/assets/butte-cailles-piscine.webp";
import parcImg from "@/assets/butte-cailles-parc.webp";

const ButteAuxCailles = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Palette,
      title: t('butte.streetart.title'),
      desc: t('butte.streetart.desc'),
      picks: t('butte.streetart.picks'),
      image: streetartImg,
    },
    {
      icon: Utensils,
      title: t('butte.gastro.title'),
      desc: t('butte.gastro.desc'),
      picks: t('butte.gastro.picks'),
      image: bistrotImg,
    },
    {
      icon: Waves,
      title: t('butte.piscine.title'),
      desc: t('butte.piscine.desc'),
      picks: t('butte.piscine.picks'),
      image: piscineImg,
    },
    {
      icon: TreePine,
      title: t('butte.nature.title'),
      desc: t('butte.nature.desc'),
      picks: t('butte.nature.picks'),
      image: parcImg,
    },
  ];

  const addresses = [
    { name: t('butte.addr.temps'), address: "Rue de la Butte-aux-Cailles", type: t('butte.addr.tempsType'), walk: "10 min", transport: "Ligne 7" },
    { name: t('butte.addr.abeilles'), address: "Rue de la Butte-aux-Cailles", type: t('butte.addr.abeillesType'), walk: "10 min", transport: "Ligne 7" },
    { name: t('butte.addr.piscine'), address: "5 place Paul Verlaine", type: t('butte.addr.piscineType'), walk: "12 min", transport: "Ligne 7" },
    { name: t('butte.addr.gladines'), address: "30 rue des 5 Diamants", type: t('butte.addr.gladinesType'), walk: "11 min", transport: "Ligne 7" },
    { name: t('butte.addr.merle'), address: "Rue de la Butte-aux-Cailles", type: t('butte.addr.merleType'), walk: "10 min", transport: "Ligne 7" },
    { name: t('butte.addr.square'), address: "Rue des 5 Diamants", type: t('butte.addr.squareType'), walk: "12 min", transport: "Ligne 7" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="La Butte-aux-Cailles — Village secret de Paris 13ème | Hôtel Inn Design"
        description="Découvrez la Butte-aux-Cailles, village bohème et secret du 13ème arrondissement : street art, bistrots, piscine Art Déco et ruelles pavées à 10 min de l'Hôtel Inn Design."
        canonical="/decouvrir-paris/butte-aux-cailles"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-charcoal to-background overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/decouvrir-paris" className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors text-sm font-medium">
            ← {t('butte.back')}
          </Link>
          <div className="text-center mt-6">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('butte.badge')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              {t('butte.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {t('butte.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-burgundy text-sm font-medium">
              <Navigation className="w-4 h-4" />
              {t('butte.distance')}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                {t('butte.intro.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('butte.intro.p1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('butte.intro.p2')}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={heroImg} alt="Butte-aux-Cailles Paris 13ème" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
                {t('butte.history.badge')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {t('butte.history.title')}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 mt-1">
                  <BookOpen className="w-5 h-5 text-burgundy" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('butte.history.p1')}
                </p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed pl-[4.25rem]">
                {t('butte.history.p2')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed pl-[4.25rem]">
                {t('butte.history.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('butte.highlights.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('butte.highlights.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-charcoal border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 group-hover:bg-burgundy/20 transition-colors">
                      <item.icon className="w-6 h-6 text-burgundy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex items-center gap-2 text-burgundy text-sm">
                        <ChevronRight className="w-4 h-4" />
                        <span className="font-medium">{item.picks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adresses */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('butte.addresses.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('butte.addresses.title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {addresses.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-burgundy/40 transition-all duration-300 text-center hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-burgundy/10 border border-burgundy/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-burgundy/20 transition-colors">
                  <MapPin className="w-5 h-5 text-burgundy" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{item.address}</p>
                <span className="text-burgundy text-xs font-medium uppercase tracking-wider block mb-3">{item.type}</span>
                <div className="flex items-center justify-center gap-3 text-muted-foreground text-xs">
                  <span className="flex items-center gap-1">
                    <Footprints className="w-3.5 h-3.5 text-burgundy" />
                    {item.walk}
                  </span>
                  <span className="text-border">•</span>
                  <span>{item.transport}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-burgundy to-burgundy/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 drop-shadow-md">
            {t('butte.cta.title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('butte.cta.desc')}
          </p>
          <a
            href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-base hover:bg-white/95 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('butte.cta.button')}
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ButteAuxCailles;
