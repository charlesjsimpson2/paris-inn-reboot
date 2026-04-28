import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Users, Utensils, Hotel, Car, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { EventBackButton } from "@/components/EventBackButton";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.webp";
import chambreDouble from "@/assets/chambre-double.webp";
import japanExpoHero from "@/assets/japan-expo-event.webp";
import japanExpoEvent from "@/assets/japan-expo-event-gen.jpg";
import { useState, useEffect } from "react";

const JapanExpo = () => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-07-09T09:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO title="Japan Expo 2026 — Hôtel proche Villepinte" description="Séjournez à l'Hôtel Inn Design Paris pour Japan Expo 2026. Accès direct au Parc des Expositions, chambres confortables." />
      <EventBackButton />
      <main>
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-pink-600 via-fuchsia-600 to-pink-700 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-fuchsia-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-pink-400/30 to-fuchsia-600/30 rounded-2xl blur-xl" />
                  <img 
                    src={japanExpoHero} 
                    alt="Japan Expo 2026" 
                    className="relative rounded-xl shadow-2xl max-w-sm md:max-w-md w-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('japanExpo.badge')}</span>
                </div>
                <h1 className="font-display text-3xl md:text-5xl text-white drop-shadow-lg mb-4">{t('japanExpo.title')}</h1>
                <p className="text-white/90 text-lg md:text-xl mb-6">{t('japanExpo.subtitle')}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center md:justify-start gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                    <Calendar className="w-5 h-5 text-pink-200" />
                    <span className="text-white font-medium">{t("japanExpo.dateDisplay")}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-pink-200" />
                    <span className="text-white font-medium">{t("japanExpo.venue")}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { value: countdown.days, label: t("agriculture.countdown.days") },
                    { value: countdown.hours, label: t("agriculture.countdown.hours") },
                    { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
                    { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">{item.value}</div>
                      <div className="text-xs text-pink-200 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-pink-50 dark:from-pink-950/30 dark:via-fuchsia-950/20 dark:to-pink-950/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-8">{t("agriculture.exclusiveOffers")}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-pink-200 dark:border-pink-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-pink-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.parking.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.parking.desc")}</p>
                <div className="inline-block bg-pink-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.parking.price")}</div>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-fuchsia-200 dark:border-fuchsia-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-fuchsia-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.taxi.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.taxi.desc")}</p>
                <div className="inline-block bg-fuchsia-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.taxi.discount")}</div>
              </div>
            </div>
          </div>
        </section>

        <EasyAccessSection 
          venue={t("japanExpo.venue")}
          travelTime="30 min"
          metroLineKey="easyAccess.lines.rer"
          metroRouteKey="easyAccess.routes.villepinte"
          accentColor="from-pink-600 via-pink-700 to-fuchsia-600"
        />

        <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-fuchsia-50 dark:from-pink-950/20 dark:via-card dark:to-fuchsia-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-pink-600" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('japanExpo.about')}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t('japanExpo.desc1')}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">{t('japanExpo.desc2')}</p>
              </div>
              <div className="flex justify-center">
                <img src={japanExpoEvent} alt="Japan Expo - Ambiance du salon" className="max-w-xs md:max-w-sm rounded-xl shadow-xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t('agriculture.comfort')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t('agriculture.comfortDesc')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={petitDejeuner} alt="Petit-déjeuner" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Utensils className="w-6 h-6 text-pink-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.breakfast')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.breakfastDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={hotelMetroFacade} alt="Métro" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Train className="w-6 h-6 text-pink-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.transport')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.transportDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={chambreDouble} alt="Chambre" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Users className="w-6 h-6 text-pink-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.rooms')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.roomsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EventHotelPromo 
          eventName={t("japanExpo.eventName")}
          accentColor="from-pink-600 via-pink-700 to-fuchsia-600"
          urgencyMessage={t("japanExpo.urgencyMessage")}
          compact
        />

        <RelatedEvents currentEventId="japan-expo" />
      </main>
      <Footer />
    </div>
  );
};

export default JapanExpo;
