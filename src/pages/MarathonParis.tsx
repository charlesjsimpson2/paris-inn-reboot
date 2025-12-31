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

const MarathonParis = () => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-04-05T08:00:00');
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
          <img src={semiMarathonHero} alt="Marathon de Paris" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-500/90 backdrop-blur-sm text-black px-4 py-2 rounded-full mb-4 shadow-lg">
                  <Timer className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('marathonParis.badge')}</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-white drop-shadow-lg mb-4">{t('marathonParis.title')}</h1>
                <p className="text-white/90 text-lg md:text-xl">{t('marathonParis.subtitle')}</p>
              </div>

              <div className="bg-yellow-50/95 dark:bg-yellow-950/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-yellow-200/50 dark:border-yellow-800/50">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 bg-white dark:bg-card px-4 py-3 rounded-xl shadow-sm border border-yellow-200 dark:border-yellow-800">
                    <Calendar className="w-5 h-5 text-yellow-600" />
                    <span className="text-yellow-800 dark:text-yellow-200 font-medium">{t("marathonParis.dateDisplay")}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-card px-4 py-3 rounded-xl shadow-sm border border-yellow-200 dark:border-yellow-800">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                    <span className="text-yellow-800 dark:text-yellow-200 font-medium">{t("marathonParis.venue")}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { value: countdown.days, label: t("agriculture.countdown.days") },
                    { value: countdown.hours, label: t("agriculture.countdown.hours") },
                    { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
                    { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
                  ].map((item, index) => (
                    <div key={index} className="bg-white dark:bg-card border-2 border-yellow-200 dark:border-yellow-700 rounded-xl p-3 text-center shadow-sm">
                      <div className="text-2xl md:text-3xl font-bold text-yellow-700 dark:text-yellow-400">{item.value}</div>
                      <div className="text-xs text-yellow-600 dark:text-yellow-500 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>

                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold shadow-lg">
                    <Hotel className="w-5 h-5 mr-2" />{t('agriculture.bookAccommodation')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <RunnerOffersSection eventName={t("marathonParis.eventName")} />

        <EasyAccessSection 
          venue={t("marathonParis.venue")}
          travelTime="20 min"
          metroLineKey="easyAccess.lines.line12"
          metroRouteKey="easyAccess.routes.champsElysees"
          accentColor="from-yellow-500 via-yellow-600 to-orange-500"
        />

        <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-yellow-950/20 dark:via-card dark:to-orange-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Timer className="w-8 h-8 text-yellow-600" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('marathonParis.about')}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t('marathonParis.desc1')}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">{t('marathonParis.desc2')}</p>
              </div>
              <div className="flex justify-center">
                <img src={semiMarathonHero} alt="Marathon de Paris" className="max-w-xs md:max-w-sm rounded-xl shadow-xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        <EventHotelPromo 
          eventName={t("marathonParis.eventName")}
          accentColor="from-yellow-500 via-yellow-600 to-orange-500"
          urgencyMessage={t("marathonParis.urgencyMessage")}
          compact
          hideBookButton
        />

        <RelatedEvents currentEventId="marathon-paris" />
      </main>
      <Footer />
    </div>
  );
};

export default MarathonParis;
