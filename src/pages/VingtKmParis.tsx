import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Hotel, Timer } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { RunnerOffersSection } from "@/components/RunnerOffersSection";
import semiMarathonHero from "@/assets/semi-marathon-hero.jpg";
import { useState, useEffect } from "react";

const VingtKmParis = () => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-11T08:00:00');
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
        <section className="relative py-24 overflow-hidden">
          <img src={semiMarathonHero} alt="20 km de Paris" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-emerald-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                  <Timer className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('vingtKm.badge')}</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-white drop-shadow-lg mb-4">{t('vingtKm.title')}</h1>
                <p className="text-white/90 text-lg md:text-xl">{t('vingtKm.subtitle')}</p>
              </div>

              <div className="bg-emerald-50/95 dark:bg-emerald-950/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-emerald-200/50 dark:border-emerald-800/50">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 bg-white dark:bg-card px-4 py-3 rounded-xl shadow-sm border border-emerald-200 dark:border-emerald-800">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-800 dark:text-emerald-200 font-medium">{t("vingtKm.dateDisplay")}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-card px-4 py-3 rounded-xl shadow-sm border border-emerald-200 dark:border-emerald-800">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-800 dark:text-emerald-200 font-medium">{t("vingtKm.venue")}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { value: countdown.days, label: t("agriculture.countdown.days") },
                    { value: countdown.hours, label: t("agriculture.countdown.hours") },
                    { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
                    { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
                  ].map((item, index) => (
                    <div key={index} className="bg-white dark:bg-card border-2 border-emerald-200 dark:border-emerald-700 rounded-xl p-3 text-center shadow-sm">
                      <div className="text-2xl md:text-3xl font-bold text-emerald-700 dark:text-emerald-400">{item.value}</div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-500 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>

                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg">
                    <Hotel className="w-5 h-5 mr-2" />{t('agriculture.bookAccommodation')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <RunnerOffersSection eventName={t("vingtKm.eventName")} />

        <EasyAccessSection 
          venue={t("vingtKm.venue")}
          travelTime="15 min"
          metroLineKey="easyAccess.lines.line12"
          metroRouteKey="easyAccess.routes.trocadero"
          accentColor="from-emerald-600 via-emerald-700 to-teal-600"
        />

        <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/20 dark:via-card dark:to-teal-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Timer className="w-8 h-8 text-emerald-600" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('vingtKm.about')}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t('vingtKm.desc1')}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">{t('vingtKm.desc2')}</p>
              </div>
              <div className="flex justify-center">
                <img src={semiMarathonHero} alt="20 km de Paris" className="max-w-xs md:max-w-sm rounded-xl shadow-xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        <EventHotelPromo 
          eventName={t("vingtKm.eventName")}
          accentColor="from-emerald-600 via-emerald-700 to-teal-600"
          urgencyMessage={t("vingtKm.urgencyMessage")}
          compact
          hideBookButton
        />

        <RelatedEvents currentEventId="20-km-paris" />
      </main>
      <Footer />
    </div>
  );
};

export default VingtKmParis;
