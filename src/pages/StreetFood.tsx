import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  MapPin, Utensils, Navigation, Footprints,
  Clock, Star, Phone, ChefHat, Zap
} from "lucide-react";
import heroImg from "@/assets/streetfood-hero.webp";
import burgerImg from "@/assets/streetfood-burger.webp";
import crepeImg from "@/assets/streetfood-crepe.webp";
import pokeImg from "@/assets/streetfood-poke.webp";
import kebabImg from "@/assets/streetfood-kebab.webp";
import baoImg from "@/assets/streetfood-bao.webp";
import thaiImg from "@/assets/streetfood-thai.webp";
import fastfoodImg from "@/assets/streetfood-fastfood.webp";
import pizzaImg from "@/assets/streetfood-pizza.webp";

const StreetFood = () => {
  const { t } = useLanguage();

  const restaurants = [
    {
      name: "Big Fernand",
      address: "Centre Italie 2, 30 avenue d'Italie, 75013",
      walk: "8 min",
      transport: "Ligne 5, 6, 7 — Place d'Italie",
      rating: "4.2",
      budget: "€€",
      hours: "11h30–22h30 (7j/7)",
      phone: "01 45 86 15 30",
      image: burgerImg,
      type: t('streetfood.guide.bigfernand.type'),
      desc: t('streetfood.guide.bigfernand.desc'),
      specialties: t('streetfood.guide.bigfernand.specialties'),
      tip: t('streetfood.guide.bigfernand.tip'),
    },
    {
      name: "Bao Family",
      address: "88 avenue d'Italie, 75013",
      walk: "5 min",
      transport: "Ligne 7 — Tolbiac",
      rating: "4.4",
      budget: "€",
      hours: "11h30–22h (7j/7)",
      phone: "01 45 82 73 90",
      image: baoImg,
      type: t('streetfood.guide.baofamily.type'),
      desc: t('streetfood.guide.baofamily.desc'),
      specialties: t('streetfood.guide.baofamily.specialties'),
      tip: t('streetfood.guide.baofamily.tip'),
    },
    {
      name: "Pokawa",
      address: "Centre Italie 2, 30 avenue d'Italie, 75013",
      walk: "8 min",
      transport: "Ligne 5, 6, 7 — Place d'Italie",
      rating: "4.1",
      budget: "€€",
      hours: "11h30–22h (7j/7)",
      phone: "",
      image: pokeImg,
      type: t('streetfood.guide.pokawa.type'),
      desc: t('streetfood.guide.pokawa.desc'),
      specialties: t('streetfood.guide.pokawa.specialties'),
      tip: t('streetfood.guide.pokawa.tip'),
    },
    {
      name: "Crêperie de la Butte",
      address: "15 rue de la Butte-aux-Cailles, 75013",
      walk: "13 min",
      transport: "Ligne 7 — Place d'Italie",
      rating: "4.3",
      budget: "€",
      hours: "12h–22h30",
      phone: "01 45 80 08 02",
      image: crepeImg,
      type: t('streetfood.guide.creperie.type'),
      desc: t('streetfood.guide.creperie.desc'),
      specialties: t('streetfood.guide.creperie.specialties'),
      tip: t('streetfood.guide.creperie.tip'),
    },
    {
      name: "Döner Place d'Italie",
      address: "125 avenue d'Italie, 75013",
      walk: "3 min",
      transport: "Ligne 5, 6, 7 — Place d'Italie",
      rating: "4.0",
      budget: "€",
      hours: "11h–2h (7j/7)",
      phone: "01 45 85 12 34",
      image: kebabImg,
      type: t('streetfood.guide.doner.type'),
      desc: t('streetfood.guide.doner.desc'),
      specialties: t('streetfood.guide.doner.specialties'),
      tip: t('streetfood.guide.doner.tip'),
    },
    {
      name: "Pitaya",
      address: "65 avenue d'Italie, 75013",
      walk: "5 min",
      transport: "Ligne 5, 6, 7 — Place d'Italie",
      rating: "4.1",
      budget: "€€",
      hours: "11h30–22h30 (7j/7)",
      phone: "01 43 31 80 50",
      image: thaiImg,
      type: t('streetfood.guide.pitaya.type'),
      desc: t('streetfood.guide.pitaya.desc'),
      specialties: t('streetfood.guide.pitaya.specialties'),
      tip: t('streetfood.guide.pitaya.tip'),
    },
    {
      name: "McDonald's Place d'Italie",
      address: "Centre Italie 2, 30 avenue d'Italie, 75013",
      walk: "8 min",
      transport: "Ligne 5, 6, 7 — Place d'Italie",
      rating: "3.5",
      budget: "€",
      hours: "7h–1h (7j/7)",
      phone: "",
      image: fastfoodImg,
      type: t('streetfood.guide.mcdonalds.type'),
      desc: t('streetfood.guide.mcdonalds.desc'),
      specialties: t('streetfood.guide.mcdonalds.specialties'),
      tip: t('streetfood.guide.mcdonalds.tip'),
    },
    {
      name: "Domino's Pizza",
      address: "110 avenue d'Italie, 75013",
      walk: "4 min",
      transport: "Ligne 7 — Tolbiac",
      rating: "3.8",
      budget: "€€",
      hours: "11h–23h (7j/7)",
      phone: "01 45 82 00 00",
      image: pizzaImg,
      type: t('streetfood.guide.dominos.type'),
      desc: t('streetfood.guide.dominos.desc'),
      specialties: t('streetfood.guide.dominos.specialties'),
      tip: t('streetfood.guide.dominos.tip'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Street Food & Fast Food près de l'hôtel — Paris 13ème | Hôtel Inn Design"
        description="Guide des meilleurs restaurants rapides, street food et fast food du 13ème arrondissement à Paris : burgers, poke bowls, crêpes, kebabs, pizza près de l'Hôtel Inn Design Place d'Italie."
        canonical="/decouvrir-paris/street-food"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-charcoal to-background overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/decouvrir-paris" className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors text-sm font-medium">
            ← {t('streetfood.back')}
          </Link>
          <div className="text-center mt-6">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('streetfood.badge')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              {t('streetfood.title')}
            </h1>
            <p className="text-foreground text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
              {t('streetfood.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-burgundy text-sm font-medium bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit">
              <Navigation className="w-4 h-4" />
              {t('streetfood.distance')}
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
                {t('streetfood.intro.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('streetfood.intro.p1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('streetfood.intro.p2')}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={heroImg} alt="Street food Paris 13ème" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Guide des restaurants */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('streetfood.guide.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('streetfood.guide.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('streetfood.guide.desc')}
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {restaurants.map((resto, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-charcoal border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-[320px_1fr]">
                  <div className="relative h-56 md:h-full">
                    <img src={resto.image} alt={resto.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-burgundy text-white text-xs font-semibold">
                        {resto.budget}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 text-burgundy fill-current" />
                        {resto.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-display text-2xl text-foreground">{resto.name}</h3>
                        <span className="text-burgundy text-xs font-medium uppercase tracking-wider bg-burgundy/10 px-3 py-1 rounded-full shrink-0 ml-3">
                          {resto.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{resto.address}</p>
                      <p className="text-muted-foreground text-base leading-relaxed mb-4">{resto.desc}</p>

                      <div className="flex items-start gap-2 mb-3">
                        <ChefHat className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">{t('streetfood.guide.specialtiesLabel')}</span> {resto.specialties}
                        </p>
                      </div>

                      <div className="flex items-start gap-2 mb-5">
                        <Star className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                        <p className="text-foreground text-sm italic">{resto.tip}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-border/30 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Footprints className="w-4 h-4 text-burgundy" />
                        {resto.walk} {t('streetfood.guide.fromHotel')}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Navigation className="w-4 h-4 text-burgundy" />
                        {resto.transport}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-burgundy" />
                        {resto.hours}
                      </span>
                      {resto.phone && (
                        <a href={`tel:${resto.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-burgundy transition-colors">
                          <Phone className="w-4 h-4 text-burgundy" />
                          {resto.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
                {t('streetfood.tips.badge')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {t('streetfood.tips.title')}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
                <Zap className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('streetfood.tips.speed.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('streetfood.tips.speed.desc')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
                <Clock className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('streetfood.tips.hours.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('streetfood.tips.hours.desc')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
                <MapPin className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('streetfood.tips.delivery.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('streetfood.tips.delivery.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-burgundy to-burgundy/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 drop-shadow-md">
            {t('streetfood.cta.title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('streetfood.cta.desc')}
          </p>
          <a
            href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-base hover:bg-white/95 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('streetfood.cta.button')}
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StreetFood;
