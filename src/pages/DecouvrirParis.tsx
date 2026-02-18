import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  MapPin, Utensils, Landmark, Ship, Columns, TreePine, 
  ExternalLink, Clock, Navigation, ShoppingBag, Baby,
  Palette, ChevronRight, ArrowRight
} from "lucide-react";
import ImageCredit from "@/components/ImageCredit";
import tourEiffel from "@/assets/tour-eiffel.jpg";
import chinatownImg from "@/assets/wikimedia/chinatown-avenue-choisy-new.jpg";
import butteImg from "@/assets/wikimedia/butte-cailles-piscine-celette.jpg";
import bnfImg from "@/assets/wikimedia/bnf-francois-mitterrand.jpg";
import avenueItalieImg from "@/assets/wikimedia/avenue-italie-paris.jpg";
import italianImg from "@/assets/cuisine-italienne-hero.webp";
import asianImg from "@/assets/cuisine-asiatique-hero.webp";
import frenchImg from "@/assets/cuisine-francaise-hero.webp";
import streetfoodImg from "@/assets/streetfood-hero.webp";

const DecouvrirParis = () => {
  const { t } = useLanguage();

  const quartierSpots = [
    {
      icon: Utensils,
      title: t('discoverPage.quartier.chinatown'),
      desc: t('discoverPage.quartier.chinatownDesc'),
      distance: "5 min à pied",
      link: "/decouvrir-paris/quartier-chinois",
      image: chinatownImg,
      credit: { author: "Chabe01", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Avenue_Choisy_-_Paris_XIII_(FR75)_-_2021-06-29_-_2.jpg" },
    },
    {
      icon: Palette,
      title: t('discoverPage.quartier.butte'),
      desc: t('discoverPage.quartier.butteDesc'),
      distance: "10 min à pied",
      link: "/decouvrir-paris/butte-aux-cailles",
      image: butteImg,
      credit: { author: "Celette", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Piscine_de_la_Butte-aux-Cailles,_5_place_Paul-Verlaine,_Paris_13e.jpg" },
    },
    {
      icon: Landmark,
      title: t('discoverPage.quartier.bnf'),
      desc: t('discoverPage.quartier.bnfDesc'),
      distance: "12 min à pied",
      link: "/decouvrir-paris/bnf-francois-mitterrand",
      image: bnfImg,
      credit: { author: "Vincent Desjardins", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Paris_BNF_Biblioth%C3%A8que_nationale_de_France,_site_Fran%C3%A7ois_Mitterrand_-_Rez-de-Jardin.jpg" },
    },
    {
      icon: ShoppingBag,
      title: t('discoverPage.quartier.italie2'),
      desc: t('discoverPage.quartier.italie2Desc'),
      distance: "8 min à pied",
      link: "/decouvrir-paris/centre-italie-2",
      image: avenueItalieImg,
      credit: { author: "Tangopaso", license: "Public domain", licenseUrl: "https://en.wikipedia.org/wiki/Public_domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Avenue_d%27Italie,_2-12_(Paris).jpg" },
    },
  ];

  const restaurants = [
    {
      cuisine: "🇮🇹",
      title: t('discoverPage.restaurants.italian'),
      desc: t('discoverPage.restaurants.italianDesc'),
      picks: t('discoverPage.restaurants.italianPicks'),
      link: "/decouvrir-paris/cuisine-italienne",
      image: italianImg,
    },
    {
      cuisine: "🇯🇵",
      title: t('discoverPage.restaurants.asian'),
      desc: t('discoverPage.restaurants.asianDesc'),
      picks: t('discoverPage.restaurants.asianPicks'),
      link: "/decouvrir-paris/cuisine-asiatique",
      image: asianImg,
    },
    {
      cuisine: "🇫🇷",
      title: t('discoverPage.restaurants.french'),
      desc: t('discoverPage.restaurants.frenchDesc'),
      picks: t('discoverPage.restaurants.frenchPicks'),
      link: "/decouvrir-paris/cuisine-francaise",
      image: frenchImg,
    },
    {
      cuisine: "🍕",
      title: t('discoverPage.restaurants.streetfood'),
      desc: t('discoverPage.restaurants.streetfoodDesc'),
      picks: t('discoverPage.restaurants.streetfoodPicks'),
      link: "/decouvrir-paris/street-food",
      image: streetfoodImg,
    },
  ];

  const monuments = [
    { icon: Landmark, name: t('discoverPage.monuments.eiffel'), time: "26 min", transport: "Ligne 6" },
    { icon: Columns, name: t('discoverPage.monuments.louvre'), time: "20 min", transport: "Ligne 7" },
    { icon: Landmark, name: t('discoverPage.monuments.notredame'), time: "15 min", transport: "Bus 27" },
    { icon: Landmark, name: t('discoverPage.monuments.pantheon'), time: "20 min", transport: "Ligne 7" },
    { icon: TreePine, name: t('discoverPage.monuments.jardin'), time: "10 min", transport: "Ligne 5" },
    { icon: Baby, name: t('discoverPage.monuments.galerie'), time: "10 min", transport: "Ligne 5" },
  ];

  const activities = [
    { icon: Ship, title: t('discoverPage.activities.cruises'), desc: t('discoverPage.activities.cruisesDesc') },
    { icon: Columns, title: t('discoverPage.activities.museums'), desc: t('discoverPage.activities.museumsDesc') },
    { icon: Landmark, title: t('discoverPage.activities.monuments'), desc: t('discoverPage.activities.monumentsDesc') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Autour de l'hôtel — Paris 13ème | Hôtel Inn Design"
        description="Découvrez le quartier Place d'Italie : restaurants, monuments, activités et bonnes adresses autour de l'Hôtel Inn Design Paris 13ème."
        canonical="/decouvrir-paris"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-charcoal to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={tourEiffel} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
            {t('discoverPage.badge')}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {t('discoverPage.title')}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t('discoverPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Le 13ème arrondissement */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('discoverPage.quartier.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('discoverPage.quartier.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('discoverPage.quartier.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {quartierSpots.map((spot, index) => {
              const CardWrapper = spot.link ? Link : 'div';
              const cardProps = spot.link ? { to: spot.link } : {};
              return (
                <CardWrapper
                  key={index}
                  {...cardProps as any}
                  className="group rounded-2xl bg-background/50 border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl no-underline overflow-hidden"
                >
                  {spot.image && spot.credit && (
                    <ImageCredit
                      src={spot.image}
                      alt={spot.title}
                      author={spot.credit.author}
                      license={spot.credit.license}
                      licenseUrl={spot.credit.licenseUrl}
                      sourceUrl={spot.credit.sourceUrl}
                      className="overflow-hidden"
                      imgClassName="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="p-6 flex gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 group-hover:bg-burgundy/20 transition-colors">
                      <spot.icon className="w-6 h-6 text-burgundy" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-xl text-foreground">{spot.title}</h3>
                        <span className="flex items-center gap-1 text-burgundy text-sm font-medium">
                          <Navigation className="w-3.5 h-3.5" />
                          {spot.distance}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{spot.desc}</p>
                      {spot.link && (
                        <span className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-burgundy/10 text-burgundy text-sm font-semibold group-hover:bg-burgundy group-hover:text-white transition-all duration-300">
                          {t('discoverPage.quartier.readMore')}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('discoverPage.restaurants.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('discoverPage.restaurants.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('discoverPage.restaurants.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {restaurants.map((resto, index) => {
              const CardEl = resto.link ? Link : 'div';
              const cardProps = resto.link ? { to: resto.link } : {};
              return (
                <CardEl
                  key={index}
                  {...cardProps as any}
                  className="group rounded-2xl bg-charcoal border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl no-underline overflow-hidden"
                >
                  {resto.image && (
                    <div className="overflow-hidden">
                      <img src={resto.image} alt={resto.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{resto.cuisine}</span>
                      <h3 className="font-display text-xl text-foreground">{resto.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{resto.desc}</p>
                    <div className="flex items-center gap-2 text-burgundy text-sm">
                      <ChevronRight className="w-4 h-4" />
                      <span className="font-medium">{resto.picks}</span>
                    </div>
                    {resto.link && (
                      <span className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-burgundy/10 text-burgundy text-sm font-semibold group-hover:bg-burgundy group-hover:text-white transition-all duration-300">
                        {t('discoverPage.quartier.readMore')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </div>
                </CardEl>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monuments */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('discoverPage.monuments.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('discoverPage.monuments.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('discoverPage.monuments.desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {monuments.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-burgundy/40 transition-all duration-300 text-center hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-burgundy/10 border border-burgundy/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-burgundy/20 transition-colors">
                  <item.icon className="w-6 h-6 text-burgundy" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{item.name}</h3>
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-3.5 h-3.5 text-burgundy" />
                  <span>{item.time}</span>
                  <span className="text-border">•</span>
                  <span>{item.transport}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités MTM */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('discoverPage.activities.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('discoverPage.activities.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('discoverPage.activities.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {activities.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-charcoal border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-burgundy/10 border border-burgundy/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy/20 transition-colors">
                  <item.icon className="w-7 h-7 text-burgundy" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.mtm.paris/inndesignparisplaceditalie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-burgundy text-white font-medium text-base hover:bg-burgundy/90 transition-colors shadow-lg hover:shadow-xl group"
            >
              {t('discoverPage.activities.cta')}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-burgundy to-burgundy/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 drop-shadow-md">
            {t('discoverPage.cta.title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('discoverPage.cta.desc')}
          </p>
          <a
            href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-base hover:bg-white/95 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('discoverPage.cta.button')}
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DecouvrirParis;
