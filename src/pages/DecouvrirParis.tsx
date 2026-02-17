import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  MapPin, Utensils, Landmark, Ship, Columns, TreePine, 
  ExternalLink, Clock, Navigation, ShoppingBag, Baby,
  Palette, ChevronRight
} from "lucide-react";
import tourEiffel from "@/assets/tour-eiffel.jpg";

const DecouvrirParis = () => {
  const { t } = useLanguage();

  const quartierSpots = [
    {
      icon: Utensils,
      title: t('discoverPage.quartier.chinatown'),
      desc: t('discoverPage.quartier.chinatownDesc'),
      distance: "5 min à pied",
      link: "/decouvrir-paris/quartier-chinois",
    },
    {
      icon: Palette,
      title: t('discoverPage.quartier.butte'),
      desc: t('discoverPage.quartier.butteDesc'),
      distance: "10 min à pied",
      link: "/decouvrir-paris/butte-aux-cailles",
    },
    {
      icon: Landmark,
      title: t('discoverPage.quartier.bnf'),
      desc: t('discoverPage.quartier.bnfDesc'),
      distance: "12 min à pied",
    },
    {
      icon: ShoppingBag,
      title: t('discoverPage.quartier.italie2'),
      desc: t('discoverPage.quartier.italie2Desc'),
      distance: "8 min à pied",
    },
  ];

  const restaurants = [
    {
      cuisine: "🇮🇹",
      title: t('discoverPage.restaurants.italian'),
      desc: t('discoverPage.restaurants.italianDesc'),
      picks: t('discoverPage.restaurants.italianPicks'),
    },
    {
      cuisine: "🇯🇵",
      title: t('discoverPage.restaurants.asian'),
      desc: t('discoverPage.restaurants.asianDesc'),
      picks: t('discoverPage.restaurants.asianPicks'),
    },
    {
      cuisine: "🇫🇷",
      title: t('discoverPage.restaurants.french'),
      desc: t('discoverPage.restaurants.frenchDesc'),
      picks: t('discoverPage.restaurants.frenchPicks'),
    },
    {
      cuisine: "🍕",
      title: t('discoverPage.restaurants.streetfood'),
      desc: t('discoverPage.restaurants.streetfoodDesc'),
      picks: t('discoverPage.restaurants.streetfoodPicks'),
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
                  className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl flex gap-5 no-underline"
                >
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
                      <span className="inline-flex items-center gap-1 mt-2 text-burgundy text-sm font-medium group-hover:gap-2 transition-all">
                        {t('discoverPage.quartier.readMore')} <ChevronRight className="w-4 h-4" />
                      </span>
                    )}
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
            {restaurants.map((resto, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-charcoal border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{resto.cuisine}</span>
                  <h3 className="font-display text-xl text-foreground">{resto.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{resto.desc}</p>
                <div className="flex items-center gap-2 text-burgundy text-sm">
                  <ChevronRight className="w-4 h-4" />
                  <span className="font-medium">{resto.picks}</span>
                </div>
              </div>
            ))}
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
