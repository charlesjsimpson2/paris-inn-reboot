import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Plane, Building2, Landmark, Train, Car, Clock, Phone, TrainFront, Bus, TramFront, Ship, Columns, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";
import proximiteMetro from "@/assets/proximite-metro-hotel-inn.jpg";

const Localisation = () => {
  const { t } = useLanguage();

  const destinations = [
    { icon: Plane, time: "1h", label: t('locationPage.airport.cdg') },
    { icon: Plane, time: "45 min", label: t('locationPage.airport.orly') },
    { icon: Building2, time: "26 min", label: t('locationPage.eiffel') },
    { icon: Landmark, time: "20 min", label: t('locationPage.louvre') },
    { icon: MapPin, time: "30 min", label: t('locationPage.champs') },
    { icon: Landmark, time: "20 min", label: t('locationPage.pantheon') },
  ];

  const transports = [
    { type: t('location.metro'), lines: "Lignes 5, 6 & 7", stop: "Place d'Italie", time: "2 min", icon: TrainFront },
    { type: t('location.bus'), lines: "Lignes 27, 47, 83", stop: "Vincent Auriol", time: "1 min", icon: Bus },
    { type: t('location.tramway'), lines: "T3a", stop: "Porte d'Italie", time: "10 min", icon: TramFront },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t('seo.location.title')}
        description={t('seo.location.description')}
        pageKey="location"
      />
      <Header />

      {/* Map Section - Side by side */}
      <section className="pt-32 md:pt-40 pb-20 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('locationPage.badge')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              {t('locationPage.title')}
            </h1>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Map - Takes 3 columns */}
            <div className="lg:col-span-3 relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-burgundy/20 to-transparent rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative h-[400px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8876744366814!2d2.3586!3d48.8282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721c7c1b1c1b%3A0x123456789abcdef!2s178%20Boulevard%20Vincent%20Auriol%2C%2075013%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Hôtel Inn Design Paris"
                />
              </div>
            </div>

            {/* Location Info - Takes 2 columns */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Address Card */}
              <div className="bg-charcoal rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-burgundy flex items-center justify-center shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-lg text-foreground mb-2">
                      Hôtel Inn Design Paris
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      178 boulevard Vincent Auriol<br />
                      75013 Paris, France
                    </p>
                    <a 
                      href="https://maps.google.com/?q=178+Boulevard+Vincent+Auriol,+75013+Paris" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors font-medium text-sm group"
                    >
                      {t('locationPage.openMaps')} 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Transport Cards */}
              <div className="space-y-3">
                {transports.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 p-5 rounded-xl bg-charcoal border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-burgundy/10 border border-burgundy/20 flex flex-col items-center justify-center">
                        <span className="text-burgundy font-display text-lg leading-none">{item.time.replace(' min', '')}</span>
                        <span className="text-burgundy/70 text-[10px] uppercase tracking-wide">min</span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-burgundy shrink-0" />
                      <div>
                        <p className="text-foreground font-medium text-base mb-0.5">{item.type}</p>
                        <p className="text-muted-foreground text-sm">{item.lines} • {item.stop}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metro Lines */}
              <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-charcoal to-background border border-border/50">
                <div className="flex items-center gap-2">
                  <span className="w-9 h-9 rounded-full bg-[#BB4D98] flex items-center justify-center text-white font-bold text-sm shadow-md hover:scale-110 transition-transform cursor-default">5</span>
                  <span className="w-9 h-9 rounded-full bg-[#7EC083] flex items-center justify-center text-white font-bold text-sm shadow-md hover:scale-110 transition-transform cursor-default">6</span>
                  <span className="w-9 h-9 rounded-full bg-[#F3A4BA] flex items-center justify-center text-charcoal font-bold text-sm shadow-md hover:scale-110 transition-transform cursor-default">7</span>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <Train className="w-5 h-5 text-burgundy" />
                  <span className="text-muted-foreground text-sm">Place d'Italie <span className="text-foreground/60">(sortie 3)</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Au cœur de Paris - Image + Text */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-burgundy/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={proximiteMetro}
                  alt="Hôtel Inn Design près du métro Place d'Italie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
                {t('locationPage.idealLocation')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                {t('locationPage.heartOfParis')}
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                {t('locationPage.heartDesc')}
              </p>

              {/* Destinations Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {destinations.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-burgundy/30 hover:bg-background transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-burgundy/10 flex items-center justify-center shrink-0 group-hover:bg-burgundy/20 transition-colors">
                      <item.icon className="w-5 h-5 text-burgundy" />
                    </div>
                    <div>
                      <p className="font-display text-xl text-burgundy">{item.time}</p>
                      <p className="text-muted-foreground text-xs">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info boxes */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-background/50 border border-border/50 hover:border-burgundy/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-burgundy/10 flex items-center justify-center">
                      <Car className="w-4 h-4 text-burgundy" />
                    </div>
                    <span className="font-medium text-foreground">{t('locationPage.parking')}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('locationPage.parkingDesc')}</p>
                </div>
                <div className="p-5 rounded-xl bg-background/50 border border-border/50 hover:border-burgundy/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-burgundy/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-burgundy" />
                    </div>
                    <span className="font-medium text-foreground">{t('locationPage.reception')}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('locationPage.receptionDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Découvrez Paris - MTM */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('locationPage.discover.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('locationPage.discover.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {t('locationPage.discover.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Ship, title: t('locationPage.discover.cruises'), desc: t('locationPage.discover.cruisesDesc') },
              { icon: Columns, title: t('locationPage.discover.museums'), desc: t('locationPage.discover.museumsDesc') },
              { icon: Landmark, title: t('locationPage.discover.monuments'), desc: t('locationPage.discover.monumentsDesc') },
            ].map((item, index) => (
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
              {t('locationPage.discover.cta')}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-burgundy to-burgundy/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-white/70 mb-2 text-lg">{t('locationPage.needDirections')}</p>
              <a href="tel:+33144240101" className="text-white font-display text-3xl hover:text-white/90 transition-colors">
                +33 (0)1 44 24 01 01
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Localisation;
