import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Clock, Gift, Car, Shirt, Trophy, Sparkles, Mic, History, Zap, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { SEO } from "@/components/SEO";
import heroImage from "@/assets/meryl-affiche.jpg";
import concertPortrait from "@/assets/meryl-portrait.webp";

const MerylConcert = () => {
  const { t } = useLanguage();
  
  const targetDate = new Date('2026-10-27T20:00:00').getTime();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Concert Meryl Paris 2026 - Accor Arena Octobre"
        description="Meryl en concert à Paris le 27 octobre 2026 à l'Accor Arena. Réservez votre hébergement près du métro Place d'Italie."
        canonical="/evenements/meryl-concert"
      />
      <Header />
      <main>
        {/* Hero Section - Style MIKA */}
        <section className="relative pt-20 pb-20 overflow-hidden min-h-[90vh] flex items-center">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800 animate-gradient" />
          
          {/* Animated circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-float" />
            <div className="absolute top-1/2 -right-32 w-80 h-80 bg-purple-500/40 rounded-full blur-3xl animate-float animation-delay-400" />
            <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl animate-float animation-delay-600" />
          </div>
          
          {/* Sparkle pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_2px,transparent_2px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px),radial-gradient(circle_at_50%_50%,white_1.5px,transparent_1.5px)] bg-[length:60px_60px,40px_40px,80px_80px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Affiche avec effet glow */}
                <div className="flex justify-center order-2 md:order-1 animate-fade-up">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-glow" />
                    <img 
                      src={heroImage} 
                      alt="Meryl Concert Accor Arena 2026" 
                      className="relative w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                    {/* Badge flottant */}
                    <div className="absolute -top-4 -right-4 bg-pink-400 text-white font-bold px-4 py-2 rounded-full shadow-xl animate-bounce-subtle">
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" /> LIVE
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Texte avec animations */}
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="animate-fade-up">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30">
                      <Mic className="w-5 h-5 text-pink-300 animate-bounce-subtle" />
                      <span className="text-white uppercase tracking-widest text-sm font-bold">{t('meryl.tour')}</span>
                    </div>
                  </div>
                  
                  <h1 className="font-display text-5xl md:text-7xl text-white mb-4 drop-shadow-2xl animate-fade-up animation-delay-200">
                    <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-white bg-clip-text text-transparent">
                      {t('meryl.title')}
                    </span>
                  </h1>
                  
                  <p className="text-2xl md:text-3xl text-pink-200 font-display mb-8 animate-fade-up animation-delay-400">
                    {t('meryl.subtitle')}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10 animate-fade-up animation-delay-600">
                    <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-full text-white font-bold text-sm border border-white/30 hover:bg-white/35 transition-colors">
                      <Calendar className="w-5 h-5 text-pink-300" />{t('meryl.dateInfo')}
                    </div>
                    <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-full text-white font-bold text-sm border border-white/30 hover:bg-white/35 transition-colors">
                      <MapPin className="w-5 h-5 text-purple-300" />Accor Arena Paris
                    </div>
                  </div>
                  
                  {/* Countdown PUNCHY */}
                  <div className="inline-block bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-white/20 animate-fade-up animation-delay-600">
                    <div className="flex items-center justify-center gap-2 mb-4 text-pink-300">
                      <Clock className="w-5 h-5 animate-pulse" />
                      <span className="text-sm uppercase tracking-widest font-bold">{t('meryl.countdown')}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3 md:gap-5 text-center">
                      {[
                        { value: countdown.days, label: t('meryl.days') },
                        { value: countdown.hours, label: t('meryl.hours') },
                        { value: countdown.minutes, label: t('meryl.min') },
                        { value: countdown.seconds, label: t('meryl.sec') }
                      ].map((item, idx) => (
                        <div key={idx} className="group">
                          <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-2xl px-3 md:px-5 py-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <span className="font-display text-2xl md:text-4xl text-white font-bold drop-shadow-lg">{item.value}</span>
                          </div>
                          <p className="text-pink-200 text-xs mt-2 uppercase font-bold tracking-wide">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers - 3 columns */}
        <section className="py-10 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-pink-950/20 dark:via-background dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full mb-2 shadow-lg">
                  <Gift className="w-4 h-4" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('meryl.exclusiveOffers')}</span>
                </div>
                <p className="text-muted-foreground text-sm">{t('meryl.offersSubtitle')}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-5">
                {/* Parking */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-pink-200 dark:border-pink-800/50 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('meryl.parking')}</h3>
                      <div className="inline-block bg-pink-600 text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('meryl.parkingPrice')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('meryl.parkingDesc')}</p>
                </div>

                {/* Taxi */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-purple-200 dark:border-purple-800/50 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('meryl.taxi')}</h3>
                      <div className="inline-block bg-purple-600 text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('meryl.taxiDiscount')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('meryl.taxiDesc')}</p>
                </div>

                {/* T-shirt Raffle */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-indigo-200 dark:border-indigo-800/50 hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <Trophy className="w-4 h-4 text-pink-400" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Shirt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('concert.raffle.title').replace('!', '')}</h3>
                      <span className="text-xs text-pink-600 dark:text-pink-400 font-medium uppercase tracking-wide">{t('concert.raffle.badge')}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('concert.raffle.subtitle')}</p>
                </div>
              </div>
              
              <p className="text-center text-xs text-muted-foreground mt-4 italic">{t('meryl.offersNote')}</p>
            </div>
          </div>
        </section>

        {/* Easy Access Section */}
        <EasyAccessSection 
          venue="Accor Arena Paris"
          travelTime="~25 min"
          metroLine="Ligne 14"
          metroRoute="Place d'Italie → Bercy (correspondance Ligne 6 ou 14)"
          accentColor="from-pink-500 via-purple-600 to-indigo-700"
        />

        {/* About Section - Artist History */}
        <section className="py-16 bg-white dark:bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/40 dark:to-purple-900/40 text-pink-700 dark:text-pink-300 px-6 py-3 rounded-full mb-4 shadow-lg">
                  <History className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('meryl.artistHistory')}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground">{t('meryl.legendTitle')}</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('meryl.history1') }} />
                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('meryl.history2') }} />
                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('meryl.history3') }} />
              </div>
            </div>
          </div>
        </section>

        {/* Show Description Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('meryl.firstArena')}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t('meryl.uniqueShow')}</h2>
              </div>
              
              <div className="bg-white dark:bg-charcoal rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200 dark:border-pink-800/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl" />
                <div className="grid md:grid-cols-2 gap-8 items-center relative">
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
                    <p className="text-xl leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t('meryl.showIntro') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('meryl.showDesc') }} />
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    <img 
                      src={concertPortrait} 
                      alt="Meryl en concert" 
                      className="relative w-full rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Promo Section - Compact */}
        <EventHotelPromo 
          eventName={t("meryl.title")}
          accentColor="from-pink-500 via-purple-600 to-indigo-700"
          urgencyMessage={t("meryl.urgencyMessage")}
          compact
        />

        {/* Related Events */}
        <RelatedEvents currentEventId="meryl" />
      </main>
      <Footer />
    </div>
  );
};

export default MerylConcert;