import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  MapPin, Utensils, Navigation, ChevronRight, Footprints,
  Clock, Wine, Star, Flame, Dessert
} from "lucide-react";
import heroImg from "@/assets/cuisine-italienne-hero.webp";
import pizzaImg from "@/assets/cuisine-italienne-pizza.webp";
import pastaImg from "@/assets/cuisine-italienne-pasta.webp";
import tiramisuImg from "@/assets/cuisine-italienne-tiramisu.webp";
import aperitivoImg from "@/assets/cuisine-italienne-aperitivo.webp";

const CuisineItalienne = () => {
  const { t } = useLanguage();

  const specialties = [
    {
      icon: Flame,
      title: t('italian.pizza.title'),
      desc: t('italian.pizza.desc'),
      picks: t('italian.pizza.picks'),
      image: pizzaImg,
    },
    {
      icon: Utensils,
      title: t('italian.pasta.title'),
      desc: t('italian.pasta.desc'),
      picks: t('italian.pasta.picks'),
      image: pastaImg,
    },
    {
      icon: Dessert,
      title: t('italian.dessert.title'),
      desc: t('italian.dessert.desc'),
      picks: t('italian.dessert.picks'),
      image: tiramisuImg,
    },
    {
      icon: Wine,
      title: t('italian.aperitivo.title'),
      desc: t('italian.aperitivo.desc'),
      picks: t('italian.aperitivo.picks'),
      image: aperitivoImg,
    },
  ];

  const restaurants = [
    { name: "Fratelli", address: "75 avenue d'Italie", type: t('italian.addr.fratelli.type'), walk: "5 min", transport: "Ligne 5, 6, 7", rating: "4.3" },
    { name: "La Sartoria", address: "27 rue de Tolbiac", type: t('italian.addr.sartoria.type'), walk: "7 min", transport: "Ligne 7", rating: "4.5" },
    { name: "Pizzeria Da Luca", address: "146 avenue d'Italie", type: t('italian.addr.daluca.type'), walk: "4 min", transport: "Ligne 7", rating: "4.2" },
    { name: "Il Palazzo", address: "82 boulevard Auguste Blanqui", type: t('italian.addr.palazzo.type'), walk: "10 min", transport: "Ligne 6", rating: "4.4" },
    { name: "Trattoria Pulcinella", address: "11 rue Bobillot", type: t('italian.addr.pulcinella.type'), walk: "8 min", transport: "Ligne 7", rating: "4.1" },
    { name: "Vapiano", address: "Centre Italie 2", type: t('italian.addr.vapiano.type'), walk: "8 min", transport: "Ligne 5, 6, 7", rating: "3.9" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Restaurants italiens près de l'hôtel — Paris 13ème | Hôtel Inn Design"
        description="Les meilleurs restaurants italiens du 13ème arrondissement à Paris : pizzerias, trattorias, pâtes fraîches et tiramisu près de l'Hôtel Inn Design Place d'Italie."
        canonical="/decouvrir-paris/cuisine-italienne"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-charcoal to-background overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/decouvrir-paris" className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors text-sm font-medium">
            ← {t('italian.back')}
          </Link>
          <div className="text-center mt-6">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('italian.badge')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              {t('italian.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {t('italian.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-burgundy text-sm font-medium">
              <Navigation className="w-4 h-4" />
              {t('italian.distance')}
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
                {t('italian.intro.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('italian.intro.p1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('italian.intro.p2')}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={heroImg} alt="Trattoria italienne Paris 13ème" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Spécialités */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('italian.specialties.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('italian.specialties.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {specialties.map((item, index) => (
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

      {/* Adresses recommandées */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('italian.addresses.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('italian.addresses.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {restaurants.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-burgundy/40 transition-all duration-300 text-center hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-burgundy/10 border border-burgundy/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-burgundy/20 transition-colors">
                  <Utensils className="w-5 h-5 text-burgundy" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{item.address}</p>
                <span className="text-burgundy text-xs font-medium uppercase tracking-wider block mb-2">{item.type}</span>
                <div className="flex items-center justify-center gap-1 text-amber-400 text-sm mb-3">
                  <Star className="w-3.5 h-3.5 fill-current text-burgundy" />
                  <span className="text-muted-foreground">{item.rating}</span>
                </div>
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

      {/* Conseils pratiques */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
                {t('italian.tips.badge')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {t('italian.tips.title')}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-charcoal border border-border/50 text-center">
                <Clock className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('italian.tips.hours.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('italian.tips.hours.desc')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-charcoal border border-border/50 text-center">
                <Star className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('italian.tips.reservation.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('italian.tips.reservation.desc')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-charcoal border border-border/50 text-center">
                <Wine className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('italian.tips.wine.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('italian.tips.wine.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-burgundy to-burgundy/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 drop-shadow-md">
            {t('italian.cta.title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('italian.cta.desc')}
          </p>
          <a
            href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-base hover:bg-white/95 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('italian.cta.button')}
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CuisineItalienne;
