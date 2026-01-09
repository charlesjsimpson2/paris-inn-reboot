import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Users, Utensils, Hotel, Car, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { EventBackButton } from "@/components/EventBackButton";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.jpg";
import chambreDouble from "@/assets/chambre-double.jpg";
import eurosatoryHero from "@/assets/eurosatory-hero.jpg";
import eurosatoryEvent from "@/assets/eurosatory-event-gen.jpg";
import eurosatoryLogo from "@/assets/eurosatory-logo.svg";
import { useState, useEffect } from "react";

const Eurosatory = () => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-06-15T09:00:00');
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
      <EventBackButton />
      <main>
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-2xl blur-xl" />
                  <img 
                    src={eurosatoryHero} 
                    alt="Eurosatory 2026" 
                    className="relative rounded-xl shadow-2xl max-w-sm md:max-w-md w-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  <img src={eurosatoryLogo} alt="Eurosatory" className="h-12 md:h-16" />
                </div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('eurosatory.badge')}</span>
                </div>
                <h1 className="font-display text-3xl md:text-5xl text-white drop-shadow-lg mb-4">{t('eurosatory.title')}</h1>
                <p className="text-white/90 text-lg md:text-xl mb-6">{t('eurosatory.subtitle')}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center md:justify-start gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                    <Calendar className="w-5 h-5 text-cyan-300" />
                    <span className="text-white font-medium">{t("eurosatory.dateDisplay")}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-cyan-300" />
                    <span className="text-white font-medium">{t("eurosatory.venue")}</span>
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
                      <div className="text-xs text-cyan-200 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Key stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-white">921</div>
                    <div className="text-xs text-cyan-200">{t('eurosatory.stats.exhibitors')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-white">34 731</div>
                    <div className="text-xs text-cyan-200">{t('eurosatory.stats.visitors')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-white">61</div>
                    <div className="text-xs text-cyan-200">{t('eurosatory.stats.countries')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-950/30 dark:via-cyan-950/20 dark:to-blue-950/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-8">{t("agriculture.exclusiveOffers")}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-blue-200 dark:border-blue-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.parking.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.parking.desc")}</p>
                <div className="inline-block bg-blue-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.parking.price")}</div>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-cyan-200 dark:border-cyan-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.taxi.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.taxi.desc")}</p>
                <div className="inline-block bg-cyan-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.taxi.discount")}</div>
              </div>
            </div>
          </div>
        </section>

        <EasyAccessSection 
          venue={t("eurosatory.venue")}
          travelTime="30 min"
          metroLineKey="easyAccess.lines.rer"
          metroRouteKey="easyAccess.routes.villepinte"
          accentColor="from-blue-600 via-blue-700 to-cyan-600"
        />

        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950/20 dark:via-card dark:to-cyan-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('eurosatory.about')}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t('eurosatory.desc1')}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">{t('eurosatory.desc2')}</p>
              </div>
              <div className="flex justify-center">
                <img src={eurosatoryEvent} alt="Eurosatory" className="max-w-xs md:max-w-sm rounded-xl shadow-xl object-cover" />
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
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Utensils className="w-6 h-6 text-blue-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.breakfast')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.breakfastDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={hotelMetroFacade} alt="Métro" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Train className="w-6 h-6 text-blue-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.transport')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.transportDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={chambreDouble} alt="Chambre" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Users className="w-6 h-6 text-blue-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.rooms')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.roomsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EventHotelPromo 
          eventName={t("eurosatory.eventName")}
          accentColor="from-blue-600 via-blue-700 to-cyan-600"
          urgencyMessage={t("eurosatory.urgencyMessage")}
          eventType="salon"
          compact
        />

        <RelatedEvents currentEventId="eurosatory" />
      </main>
      <Footer />
    </div>
  );
};

export default Eurosatory;
