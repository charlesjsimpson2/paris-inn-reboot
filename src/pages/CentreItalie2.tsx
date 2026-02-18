import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import ImageCredit from "@/components/ImageCredit";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  MapPin, ShoppingBag, Film, Utensils, Clock,
  Navigation, ChevronRight, Footprints, Landmark, Shirt
} from "lucide-react";
import avenueItalieImg from "@/assets/wikimedia/avenue-italie-paris.jpg";
import galeriesImg from "@/assets/wikimedia/galeries-avenue-italie.jpg";
import metroImg from "@/assets/wikimedia/metro-place-italie.jpg";

const CentreItalie2 = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Shirt,
      title: t('italie2.fashion.title'),
      desc: t('italie2.fashion.desc'),
      picks: t('italie2.fashion.picks'),
    },
    {
      icon: Film,
      title: t('italie2.cinema.title'),
      desc: t('italie2.cinema.desc'),
      picks: t('italie2.cinema.picks'),
    },
    {
      icon: Utensils,
      title: t('italie2.food.title'),
      desc: t('italie2.food.desc'),
      picks: t('italie2.food.picks'),
    },
    {
      icon: ShoppingBag,
      title: t('italie2.services.title'),
      desc: t('italie2.services.desc'),
      picks: t('italie2.services.picks'),
    },
  ];

  const addresses = [
    { name: t('italie2.addr.italie2'), address: "30 avenue d'Italie", type: t('italie2.addr.italie2Type'), walk: "8 min", transport: "Ligne 5, 6, 7" },
    { name: t('italie2.addr.fnac'), address: "Centre Italie 2", type: t('italie2.addr.fnacType'), walk: "8 min", transport: "Ligne 7" },
    { name: t('italie2.addr.patheCinema'), address: "Centre Italie 2", type: t('italie2.addr.patheCinemaType'), walk: "8 min", transport: "Ligne 7" },
    { name: t('italie2.addr.monoprix'), address: "Place d'Italie", type: t('italie2.addr.monoprixType'), walk: "6 min", transport: "Ligne 5, 6, 7" },
    { name: t('italie2.addr.galeries'), address: "15 avenue d'Italie", type: t('italie2.addr.galeriesType'), walk: "7 min", transport: "Ligne 7" },
    { name: t('italie2.addr.mairie'), address: "Place d'Italie", type: t('italie2.addr.mairieType'), walk: "6 min", transport: "Ligne 5, 6, 7" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Centre Commercial Italie 2 — Paris 13ème | Hôtel Inn Design"
        description="Découvrez le Centre Commercial Italie 2 à 8 min à pied de l'hôtel : boutiques, cinéma, restaurants et services au cœur du 13ème arrondissement."
        canonical="/decouvrir-paris/centre-italie-2"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-charcoal to-background overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={avenueItalieImg} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/decouvrir-paris" className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors text-sm font-medium">
            ← {t('italie2.back')}
          </Link>
          <div className="text-center mt-6">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('italie2.badge')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              {t('italie2.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {t('italie2.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-burgundy text-sm font-medium">
              <Navigation className="w-4 h-4" />
              {t('italie2.distance')}
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
                {t('italie2.intro.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('italie2.intro.p1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('italie2.intro.p2')}
              </p>
            </div>
            <ImageCredit
              src={galeriesImg}
              alt="Galeries de l'Avenue, avenue d'Italie Paris 13ème"
              author="besopha"
              license="CC BY 2.0"
              licenseUrl="https://creativecommons.org/licenses/by/2.0/deed.en"
              sourceUrl="https://commons.wikimedia.org/wiki/File:Galeries_de_l%27Avenue,_15_Avenue_d%27Italie,_75013_Paris,_2013.jpg"
              className="rounded-2xl overflow-hidden shadow-xl"
              imgClassName="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
                {t('italie2.history.badge')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {t('italie2.history.title')}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 mt-1">
                  <Landmark className="w-5 h-5 text-burgundy" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('italie2.history.p1')}
                </p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed pl-[4.25rem]">
                {t('italie2.history.p2')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed pl-[4.25rem]">
                {t('italie2.history.p3')}
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
              {t('italie2.highlights.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('italie2.highlights.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-charcoal border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
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
              {t('italie2.practical.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('italie2.practical.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
              <Clock className="w-6 h-6 text-burgundy mx-auto mb-3" />
              <h3 className="font-display text-lg text-foreground mb-2">{t('italie2.practical.hours')}</h3>
              <p className="text-muted-foreground text-sm">{t('italie2.practical.hoursValue')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
              <MapPin className="w-6 h-6 text-burgundy mx-auto mb-3" />
              <h3 className="font-display text-lg text-foreground mb-2">{t('italie2.practical.access')}</h3>
              <p className="text-muted-foreground text-sm">{t('italie2.practical.accessValue')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
              <ShoppingBag className="w-6 h-6 text-burgundy mx-auto mb-3" />
              <h3 className="font-display text-lg text-foreground mb-2">{t('italie2.practical.shops')}</h3>
              <p className="text-muted-foreground text-sm">{t('italie2.practical.shopsValue')}</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <ImageCredit
              src={metroImg}
              alt="Station métro Place d'Italie Paris ligne 6"
              author="Cramos"
              license="CC BY-SA 3.0"
              licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
              sourceUrl="https://commons.wikimedia.org/wiki/File:Place_d%27Italie_m%C3%A9tro_Paris_ligne_6_par_Cramos.JPG"
              className="rounded-2xl overflow-hidden shadow-xl"
              imgClassName="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Adresses */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('italie2.addresses.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('italie2.addresses.title')}
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
            {t('italie2.cta.title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('italie2.cta.desc')}
          </p>
          <a
            href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-base hover:bg-white/95 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('italie2.cta.button')}
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CentreItalie2;