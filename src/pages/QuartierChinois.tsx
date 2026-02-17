import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { 
  MapPin, Utensils, ShoppingBag, Landmark, PartyPopper, 
  Navigation, ChevronRight, Clock, Footprints
} from "lucide-react";

const QuartierChinois = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Utensils,
      title: t('chinatown.food.title'),
      desc: t('chinatown.food.desc'),
      picks: t('chinatown.food.picks'),
    },
    {
      icon: ShoppingBag,
      title: t('chinatown.shopping.title'),
      desc: t('chinatown.shopping.desc'),
      picks: t('chinatown.shopping.picks'),
    },
    {
      icon: PartyPopper,
      title: t('chinatown.events.title'),
      desc: t('chinatown.events.desc'),
      picks: t('chinatown.events.picks'),
    },
    {
      icon: Landmark,
      title: t('chinatown.culture.title'),
      desc: t('chinatown.culture.desc'),
      picks: t('chinatown.culture.picks'),
    },
  ];

  const addresses = [
    { name: t('chinatown.addresses.tang'), address: "48 avenue d'Ivry", type: t('chinatown.addresses.tangType') },
    { name: t('chinatown.addresses.paristore'), address: "44 avenue d'Ivry", type: t('chinatown.addresses.paristoreType') },
    { name: t('chinatown.addresses.tang'), address: "48 avenue d'Ivry", type: t('chinatown.addresses.tangType'), walk: "6 min", transport: "Ligne 7" },
    { name: t('chinatown.addresses.paristore'), address: "44 avenue d'Ivry", type: t('chinatown.addresses.paristoreType'), walk: "6 min", transport: "Ligne 7" },
    { name: t('chinatown.addresses.pho14'), address: "129 avenue de Choisy", type: t('chinatown.addresses.pho14Type'), walk: "8 min", transport: "Ligne 7" },
    { name: t('chinatown.addresses.lao'), address: "102 avenue d'Ivry", type: t('chinatown.addresses.laoType'), walk: "7 min", transport: "Ligne 7" },
    { name: t('chinatown.addresses.temple'), address: "37 rue du Disque", type: t('chinatown.addresses.templeType'), walk: "5 min", transport: "Ligne 7" },
    { name: t('chinatown.addresses.bobun'), address: "Avenue de Choisy", type: t('chinatown.addresses.bobunType'), walk: "8 min", transport: "Ligne 7" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Quartier Chinois du 13ème — Chinatown Paris | Hôtel Inn Design"
        description="Découvrez le Quartier Chinois du 13ème arrondissement à Paris : restaurants asiatiques, Tang Frères, Paristore, Nouvel An Chinois et adresses incontournables près de l'Hôtel Inn Design."
        canonical="/decouvrir-paris/quartier-chinois"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-charcoal to-background overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/decouvrir-paris" className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors text-sm font-medium">
            ← {t('chinatown.back')}
          </Link>
          <div className="text-center mt-6">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('chinatown.badge')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              {t('chinatown.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {t('chinatown.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-burgundy text-sm font-medium">
              <Navigation className="w-4 h-4" />
              {t('chinatown.distance')}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              {t('chinatown.intro.title')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {t('chinatown.intro.p1')}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('chinatown.intro.p2')}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('chinatown.highlights.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('chinatown.highlights.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-charcoal border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Adresses incontournables */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('chinatown.addresses.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('chinatown.addresses.title')}
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
            {t('chinatown.cta.title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('chinatown.cta.desc')}
          </p>
          <a
            href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-base hover:bg-white/95 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('chinatown.cta.button')}
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuartierChinois;
