import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  MapPin, BookOpen, TreePine, Ship, Landmark, Image,
  Navigation, ChevronRight, Footprints, Clock
} from "lucide-react";
import heroImg from "@/assets/bnf/bnf-hero.webp";
import lectureImg from "@/assets/bnf/bnf-lecture.webp";
import bergesImg from "@/assets/bnf/bnf-berges.webp";
import jardinImg from "@/assets/bnf/bnf-jardin.webp";
import expoImg from "@/assets/bnf/bnf-expo.webp";

const BnfFrancoisMitterrand = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: BookOpen,
      title: t('bnf.reading.title'),
      desc: t('bnf.reading.desc'),
      picks: t('bnf.reading.picks'),
      image: lectureImg,
    },
    {
      icon: TreePine,
      title: t('bnf.garden.title'),
      desc: t('bnf.garden.desc'),
      picks: t('bnf.garden.picks'),
      image: jardinImg,
    },
    {
      icon: Image,
      title: t('bnf.expos.title'),
      desc: t('bnf.expos.desc'),
      picks: t('bnf.expos.picks'),
      image: expoImg,
    },
    {
      icon: Ship,
      title: t('bnf.berges.title'),
      desc: t('bnf.berges.desc'),
      picks: t('bnf.berges.picks'),
      image: bergesImg,
    },
  ];

  const addresses = [
    { name: t('bnf.addr.bnf'), address: "Quai François Mauriac", type: t('bnf.addr.bnfType'), walk: "12 min", transport: "Ligne 14" },
    { name: t('bnf.addr.mk2'), address: "128 quai de la Gare", type: t('bnf.addr.mk2Type'), walk: "15 min", transport: "Ligne 14" },
    { name: t('bnf.addr.wanderlust'), address: "32 quai d'Austerlitz", type: t('bnf.addr.wanderlustType'), walk: "18 min", transport: "Ligne 6" },
    { name: t('bnf.addr.flow'), address: "Port de la Gare", type: t('bnf.addr.flowType'), walk: "14 min", transport: "Ligne 14" },
    { name: t('bnf.addr.felicita'), address: "5 parvis Alan Turing", type: t('bnf.addr.felicitaType'), walk: "16 min", transport: "Ligne 14" },
    { name: t('bnf.addr.jardin'), address: "Berge de Seine", type: t('bnf.addr.jardinType'), walk: "13 min", transport: "Ligne 14" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="BnF François Mitterrand — Paris 13ème | Hôtel Inn Design"
        description="Découvrez la BnF François Mitterrand au bord de la Seine : architecture monumentale de Dominique Perrault, jardins, expositions et berges aménagées à 12 min de l'Hôtel Inn Design."
        canonical="/decouvrir-paris/bnf-francois-mitterrand"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-charcoal to-background overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/decouvrir-paris" className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors text-sm font-medium">
            ← {t('bnf.back')}
          </Link>
          <div className="text-center mt-6">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('bnf.badge')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              {t('bnf.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {t('bnf.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-burgundy text-sm font-medium">
              <Navigation className="w-4 h-4" />
              {t('bnf.distance')}
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
                {t('bnf.intro.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('bnf.intro.p1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('bnf.intro.p2')}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={heroImg} alt="BnF François Mitterrand Paris 13ème" className="w-full h-80 object-cover" loading="lazy" />
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
                {t('bnf.history.badge')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {t('bnf.history.title')}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 mt-1">
                  <BookOpen className="w-5 h-5 text-burgundy" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('bnf.history.p1')}
                </p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed pl-[4.25rem]">
                {t('bnf.history.p2')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed pl-[4.25rem]">
                {t('bnf.history.p3')}
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
              {t('bnf.highlights.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('bnf.highlights.title')}
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

      {/* Infos pratiques */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('bnf.practical.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('bnf.practical.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
              <Clock className="w-6 h-6 text-burgundy mx-auto mb-3" />
              <h3 className="font-display text-lg text-foreground mb-2">{t('bnf.practical.hours')}</h3>
              <p className="text-muted-foreground text-sm">{t('bnf.practical.hoursValue')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
              <MapPin className="w-6 h-6 text-burgundy mx-auto mb-3" />
              <h3 className="font-display text-lg text-foreground mb-2">{t('bnf.practical.access')}</h3>
              <p className="text-muted-foreground text-sm">{t('bnf.practical.accessValue')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
              <Landmark className="w-6 h-6 text-burgundy mx-auto mb-3" />
              <h3 className="font-display text-lg text-foreground mb-2">{t('bnf.practical.price')}</h3>
              <p className="text-muted-foreground text-sm">{t('bnf.practical.priceValue')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Adresses */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('bnf.addresses.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('bnf.addresses.title')}
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
            {t('bnf.cta.title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('bnf.cta.desc')}
          </p>
          <a
            href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-base hover:bg-white/95 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('bnf.cta.button')}
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BnfFrancoisMitterrand;
