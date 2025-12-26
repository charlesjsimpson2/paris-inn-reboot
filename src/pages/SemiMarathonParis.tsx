import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Timer, Trophy, Heart, Clock, Utensils, Droplets, Sun, Star, Train, Coffee, Users, Tv, Wifi, Car, Gift, Shirt, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import semiMarathonHero from "@/assets/semi-marathon-course.jpg";
import semiMarathonCoureurs from "@/assets/semi-marathon-coureurs.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";

const SemiMarathonParis = () => {
  const { t } = useLanguage();
  
  // Date : Dimanche 8 mars 2026
  const targetDate = new Date('2026-03-08T09:00:00').getTime();
  
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
      <Header />
      <main>
        {/* Hero Section - Couleurs HOKA */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Gradient diagonal style HOKA : rouge corail -> bleu ciel */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E94E4B] via-[#3BB5DC] to-[#2A9BC7]" />
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
          {/* Bande jaune diagonale style HOKA */}
          <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-[#F9C74F] transform skew-y-[-6deg] origin-bottom-right opacity-80" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img src={semiMarathonHero} alt="Semi-Marathon de Paris" className="w-full rounded-xl shadow-2xl" />
                </div>
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <Timer className="w-4 h-4 text-[#F9C74F]" />
                    <span className="text-white/90 uppercase tracking-widest text-xs font-medium">{t('semimarathon.event')}</span>
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl text-white mb-3 drop-shadow-lg">{t('semimarathon.title')}</h1>
                  <p className="text-xl md:text-2xl text-[#F9C74F] font-display mb-6">{t('semimarathon.subtitle')}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm">
                      <Calendar className="w-4 h-4" />{t('semimarathon.dateInfo')}
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm">
                      <MapPin className="w-4 h-4" />Paris
                    </div>
                  </div>
                  <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                    <div className="flex items-center justify-center gap-2 mb-3 text-[#F9C74F]">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider font-medium">{t('semimarathon.countdown')}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                      {[
                        { value: countdown.days, label: t('semimarathon.days') },
                        { value: countdown.hours, label: t('semimarathon.hours') },
                        { value: countdown.minutes, label: t('semimarathon.min') },
                        { value: countdown.seconds, label: t('semimarathon.sec') }
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div className="bg-[#E94E4B] rounded-xl px-2 md:px-4 py-2">
                            <span className="font-display text-xl md:text-3xl text-white">{item.value}</span>
                          </div>
                          <p className="text-[#F9C74F] text-xs mt-1 uppercase">{item.label}</p>
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
        <section className="py-10 bg-gradient-to-br from-[#E94E4B]/10 via-white to-[#3BB5DC]/10 dark:from-[#E94E4B]/5 dark:via-background dark:to-[#3BB5DC]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E94E4B] to-[#3BB5DC] text-white px-5 py-2 rounded-full mb-2 shadow-lg">
                  <Gift className="w-4 h-4" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('semimarathon.exclusiveOffers')}</span>
                </div>
                <p className="text-muted-foreground text-sm">{t('semimarathon.offersSubtitle')}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-5">
                {/* Parking */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-[#E94E4B]/30 dark:border-[#E94E4B]/20 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E94E4B] to-[#E94E4B]/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('semimarathon.parking')}</h3>
                      <div className="inline-block bg-[#E94E4B] text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('semimarathon.parkingPrice')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('semimarathon.parkingDesc')}</p>
                </div>

                {/* Taxi */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-[#3BB5DC]/30 dark:border-[#3BB5DC]/20 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3BB5DC] to-[#2A9BC7] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Ticket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('semimarathon.taxi')}</h3>
                      <div className="inline-block bg-[#3BB5DC] text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('semimarathon.taxiDiscount')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('semimarathon.taxiDesc')}</p>
                </div>

                {/* T-shirt Raffle */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-[#F9C74F]/50 dark:border-[#F9C74F]/30 hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <Trophy className="w-4 h-4 text-[#F9C74F]" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F9C74F] to-[#E94E4B] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Shirt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('concert.raffle.title').replace('!', '')}</h3>
                      <span className="text-xs text-[#F9C74F] font-medium uppercase tracking-wide">{t('concert.raffle.badge')}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('concert.raffle.subtitle')}</p>
                </div>
              </div>
              
              <p className="text-center text-xs text-muted-foreground mt-4 italic">{t('semimarathon.offersNote')} {t('concert.raffle.note')}</p>
            </div>
          </div>
        </section>

        {/* Easy Access Section */}
        <EasyAccessSection 
          venue="Départ - Bois de Vincennes"
          travelTime="~20 min"
          metroLine="Ligne 8"
          metroRoute="Place d'Italie → Porte Dorée (accès Bois de Vincennes)"
          accentColor="from-[#E94E4B] via-[#3BB5DC] to-[#2A9BC7]"
        />


        {/* Description Section */}
        <section className="py-16 bg-[#3BB5DC]/10 dark:bg-[#3BB5DC]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-charcoal rounded-2xl shadow-lg p-8 md:p-10 border border-[#3BB5DC]/20 dark:border-[#3BB5DC]/10 mb-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <img 
                    src={semiMarathonCoureurs} 
                    alt="Coureurs du Semi-Marathon de Paris" 
                    className="w-full h-auto rounded-xl shadow-lg object-cover" 
                  />
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
                    <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('semimarathon.aboutText1') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('semimarathon.aboutText2') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('semimarathon.aboutText3') }} />
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-white dark:bg-card rounded-xl p-6 shadow-lg border border-border/50">
                  <Timer className="w-10 h-10 text-[#E94E4B] mx-auto mb-2" />
                  <p className="font-display text-3xl text-foreground">21.1 km</p>
                  <p className="text-muted-foreground text-sm">{t('semimarathon.distance')}</p>
                </div>
                <div className="bg-white dark:bg-card rounded-xl p-6 shadow-lg border border-border/50">
                  <Users className="w-10 h-10 text-[#3BB5DC] mx-auto mb-2" />
                  <p className="font-display text-3xl text-foreground">40 000+</p>
                  <p className="text-muted-foreground text-sm">{t('semimarathon.runners')}</p>
                </div>
                <div className="bg-white dark:bg-card rounded-xl p-6 shadow-lg border border-border/50">
                  <Trophy className="w-10 h-10 text-[#F9C74F] mx-auto mb-2" />
                  <p className="font-display text-3xl text-foreground">1992</p>
                  <p className="text-muted-foreground text-sm">{t('semimarathon.since')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parcours Section - Style HOKA */}
        <section className="py-16 bg-gradient-to-br from-[#E94E4B] via-[#3BB5DC] to-[#2A9BC7] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>
          {/* Bande jaune */}
          <div className="absolute top-0 left-0 w-1/4 h-20 bg-[#F9C74F] transform skew-y-[6deg] origin-top-left opacity-80" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <MapPin className="w-12 h-12 text-[#F9C74F] mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl mb-2">{t('semimarathon.course')}</h2>
                <p className="text-white/80">{t('semimarathon.courseSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-[#F9C74F]">{t('semimarathon.start')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{t('semimarathon.startDesc')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-[#F9C74F]">{t('semimarathon.highlights')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{t('semimarathon.highlightsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Runner Offers Section */}
        <section className="py-16 bg-gradient-to-br from-[#F9C74F]/20 via-white to-[#3BB5DC]/20 dark:from-[#F9C74F]/10 dark:via-background dark:to-[#3BB5DC]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-[#E94E4B]/10 dark:bg-[#E94E4B]/20 text-[#E94E4B] px-4 py-2 rounded-full mb-4">
                  <Heart className="w-4 h-4" />
                  <span className="font-medium text-sm">{t('semimarathon.runnerPackage')}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">{t('semimarathon.exclusiveOffers')}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('semimarathon.offersSubtitle')}</p>
              </div>

              {/* Runner Special Offers */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-[#E94E4B]/30 dark:border-[#E94E4B]/20 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-[#E94E4B]/10 dark:bg-[#E94E4B]/20 rounded-full flex items-center justify-center mb-4">
                    <Sun className="w-7 h-7 text-[#E94E4B]" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('semimarathon.earlyBreakfast')}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{t('semimarathon.earlyBreakfastDesc')}</p>
                  <div className="inline-flex items-center gap-2 bg-[#E94E4B]/10 dark:bg-[#E94E4B]/20 text-[#E94E4B] px-3 py-1.5 rounded-full text-sm font-medium">
                    <Utensils className="w-4 h-4" />
                    {t('semimarathon.pastaSalad')}
                  </div>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-[#3BB5DC]/30 dark:border-[#3BB5DC]/20 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-[#3BB5DC]/10 dark:bg-[#3BB5DC]/20 rounded-full flex items-center justify-center mb-4">
                    <Droplets className="w-7 h-7 text-[#3BB5DC]" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('semimarathon.lateCheckout')}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{t('semimarathon.lateCheckoutDesc')}</p>
                  <div className="inline-block bg-[#3BB5DC] text-white font-bold text-sm px-3 py-1.5 rounded-full">{t('semimarathon.showerAccess')}</div>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-[#F9C74F]/50 dark:border-[#F9C74F]/30 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-[#F9C74F]/20 dark:bg-[#F9C74F]/10 rounded-full flex items-center justify-center mb-4">
                    <Coffee className="w-7 h-7 text-[#D4A843]" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('semimarathon.happyHour')}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{t('semimarathon.happyHourDesc')}</p>
                  <div className="inline-block bg-[#F9C74F] text-black font-bold text-sm px-3 py-1.5 rounded-full">{t('semimarathon.happyHourDiscount')}</div>
                </div>
              </div>

              {/* Standard Offers */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E94E4B]/10 dark:bg-[#E94E4B]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Car className="w-6 h-6 text-[#E94E4B]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">{t('semimarathon.parking')}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{t('semimarathon.parkingDesc')}</p>
                      <div className="inline-block bg-[#E94E4B] text-white font-bold text-sm px-3 py-1 rounded-full">{t('semimarathon.parkingPrice')}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3BB5DC]/10 dark:bg-[#3BB5DC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Train className="w-6 h-6 text-[#3BB5DC]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">{t('semimarathon.taxi')}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{t('semimarathon.taxiDesc')}</p>
                      <div className="inline-block bg-[#3BB5DC] text-white font-bold text-sm px-3 py-1 rounded-full">{t('semimarathon.taxiDiscount')}</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6 italic">{t('semimarathon.offersNote')}</p>
            </div>
          </div>
        </section>

        {/* Hotel Promo Section - Compact */}
        <EventHotelPromo 
          eventName="Semi-Marathon" 
          accentColor="from-[#E94E4B] via-[#3BB5DC] to-[#2A9BC7]"
          urgencyMessage="Offre Semi-Marathon Paris"
          compact
        />

        {/* Related Events */}
        <RelatedEvents currentEventId="semimarathon" />
      </main>
      <Footer />
    </div>
  );
};

export default SemiMarathonParis;
