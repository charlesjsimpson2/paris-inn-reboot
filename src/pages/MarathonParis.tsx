import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Hotel, Timer } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { RunnerOffersSection } from "@/components/RunnerOffersSection";
import { EventBackButton } from "@/components/EventBackButton";
import marathonHero from "@/assets/marathon-paris-hero-gen.webp";
import marathonCoureurs from "@/assets/marathon-paris-coureurs-gen.webp";
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
      <EventBackButton />
      <main>
        {/* Hero Section - Sidebar Layout */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-yellow-900 via-orange-900 to-yellow-800 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/30">
                  <img 
                    src={marathonHero} 
                    alt="Schneider Electric Marathon de Paris" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-500/90 backdrop-blur-sm text-black px-4 py-2 rounded-full mb-6 shadow-lg">
                  <Timer className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('marathonParis.badge')}</span>
                </div>
                
                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-4">
                  {t('marathonParis.title')}
                </h1>
                <p className="text-yellow-100/90 text-lg md:text-xl mb-8">
                  {t('marathonParis.subtitle')}
                </p>

                {/* Event Info */}
                <div className="space-y-3 mb-8">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl">
                    <Calendar className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">{t("marathonParis.dateDisplay")}</span>
                  </div>
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl ml-0 lg:ml-3">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">{t("marathonParis.venue")}</span>
                  </div>
                </div>

                {/* Countdown */}
                <div className="grid grid-cols-4 gap-2 md:gap-4 mb-8">
                  {[
                    { value: countdown.days, label: t("agriculture.countdown.days") },
                    { value: countdown.hours, label: t("agriculture.countdown.hours") },
                    { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
                    { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-3 md:p-4 text-center">
                      <div className="text-2xl md:text-4xl font-bold text-white">{item.value}</div>
                      <div className="text-xs text-yellow-200 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>

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

        {/* Description Section */}
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
                <img src={marathonCoureurs} alt="Coureurs du Marathon de Paris" className="max-w-full md:max-w-md rounded-xl shadow-xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        <EventHotelPromo 
          eventName={t("marathonParis.eventName")}
          accentColor="from-yellow-500 via-yellow-600 to-orange-500"
          urgencyMessage={t("marathonParis.urgencyMessage")}
          eventType="marathon"
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
