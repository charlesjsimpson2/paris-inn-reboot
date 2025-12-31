import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Users, Utensils, Hotel, Car, HeartPulse } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.jpg";
import chambreDouble from "@/assets/chambre-double.jpg";
import euroPcrHero from "@/assets/euro-pcr-hero.jpg";
import euroPcrLogo from "@/assets/euro-pcr-logo.png";
import { useState, useEffect } from "react";

const EuroPCR = () => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-05-19T09:00:00');
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
      <main>
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-amber-600 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/30 to-purple-600/30 rounded-2xl blur-xl" />
                  <img 
                    src={euroPcrHero} 
                    alt="Euro PCR 2026 Paris" 
                    className="relative rounded-xl shadow-2xl max-w-sm md:max-w-md w-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  <img src={euroPcrLogo} alt="Euro PCR" className="h-16 md:h-20" />
                </div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                  <HeartPulse className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('euroPCR.badge')}</span>
                </div>
                <h1 className="font-display text-3xl md:text-5xl text-white drop-shadow-lg mb-4">{t('euroPCR.title')}</h1>
                <p className="text-white/90 text-lg md:text-xl mb-6">{t('euroPCR.subtitle')}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center md:justify-start gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                    <Calendar className="w-5 h-5 text-amber-300" />
                    <span className="text-white font-medium">{t("euroPCR.dateDisplay")}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-amber-300" />
                    <span className="text-white font-medium">{t("euroPCR.venue")}</span>
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
                      <div className="text-xs text-amber-200 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-purple-50 via-amber-50 to-purple-50 dark:from-purple-950/30 dark:via-amber-950/20 dark:to-purple-950/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-8">{t("agriculture.exclusiveOffers")}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-purple-200 dark:border-purple-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.parking.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.parking.desc")}</p>
                <div className="inline-block bg-purple-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.parking.price")}</div>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-amber-200 dark:border-amber-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.taxi.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.taxi.desc")}</p>
                <div className="inline-block bg-amber-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.taxi.discount")}</div>
              </div>
            </div>
          </div>
        </section>

        <EasyAccessSection 
          venue={t("euroPCR.venue")}
          travelTime="20 min"
          metroLineKey="easyAccess.lines.line12"
          metroRouteKey="easyAccess.routes.palaisDesCongres"
          accentColor="from-purple-600 via-purple-700 to-amber-600"
        />

        <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-amber-50 dark:from-purple-950/20 dark:via-card dark:to-amber-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <HeartPulse className="w-8 h-8 text-purple-600" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('euroPCR.about')}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t('euroPCR.desc1')}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">{t('euroPCR.desc2')}</p>
              </div>
              <div className="flex justify-center">
                <img src={euroPcrLogo} alt="Euro PCR" className="max-w-xs md:max-w-sm rounded-xl shadow-xl object-contain bg-white p-6" />
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
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Utensils className="w-6 h-6 text-purple-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.breakfast')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.breakfastDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={hotelMetroFacade} alt="Métro" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Train className="w-6 h-6 text-purple-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.transport')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.transportDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={chambreDouble} alt="Chambre" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Users className="w-6 h-6 text-purple-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.rooms')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.roomsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EventHotelPromo 
          eventName={t("euroPCR.eventName")}
          accentColor="from-purple-600 via-purple-700 to-amber-600"
          urgencyMessage={t("euroPCR.urgencyMessage")}
          eventType="salon"
          compact
        />

        <RelatedEvents currentEventId="euro-pcr" />
      </main>
      <Footer />
    </div>
  );
};

export default EuroPCR;
