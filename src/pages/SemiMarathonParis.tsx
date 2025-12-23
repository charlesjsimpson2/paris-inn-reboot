import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Timer, Star, Trophy, Heart, Clock, Car, Coffee, Wifi, Tv, Users, Train, Utensils, Droplets, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import semiMarathonHero from "@/assets/semi-marathon-hero.jpg";
import semiMarathonCourse from "@/assets/semi-marathon-course.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

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
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900" />
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img src={semiMarathonHero} alt="Semi-Marathon de Paris" className="w-full rounded-xl shadow-2xl" />
                </div>
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <Timer className="w-4 h-4 text-emerald-200" />
                    <span className="text-white/90 uppercase tracking-widest text-xs font-medium">{t('semimarathon.event')}</span>
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl text-white mb-3 drop-shadow-lg">{t('semimarathon.title')}</h1>
                  <p className="text-xl md:text-2xl text-emerald-200 font-display mb-6">{t('semimarathon.subtitle')}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm">
                      <Calendar className="w-4 h-4" />{t('semimarathon.dateInfo')}
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm">
                      <MapPin className="w-4 h-4" />Paris
                    </div>
                  </div>
                  <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                    <div className="flex items-center justify-center gap-2 mb-3 text-emerald-200">
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
                          <div className="bg-white/20 rounded-xl px-2 md:px-4 py-2">
                            <span className="font-display text-xl md:text-3xl text-white">{item.value}</span>
                          </div>
                          <p className="text-emerald-200 text-xs mt-1 uppercase">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full mb-3">
                <Trophy className="w-4 h-4" />
                <span className="font-medium text-sm">{t('semimarathon.edition2026')}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">{t('semimarathon.legendaryRace')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">{t('semimarathon.raceDesc')}</p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 bg-emerald-50/50 dark:bg-emerald-950/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-charcoal rounded-2xl shadow-lg p-8 md:p-10 border border-emerald-100 dark:border-emerald-900/20 mb-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <img 
                    src={semiMarathonCourse} 
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
                  <Timer className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <p className="font-display text-3xl text-foreground">21.1 km</p>
                  <p className="text-muted-foreground text-sm">{t('semimarathon.distance')}</p>
                </div>
                <div className="bg-white dark:bg-card rounded-xl p-6 shadow-lg border border-border/50">
                  <Users className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <p className="font-display text-3xl text-foreground">40 000+</p>
                  <p className="text-muted-foreground text-sm">{t('semimarathon.runners')}</p>
                </div>
                <div className="bg-white dark:bg-card rounded-xl p-6 shadow-lg border border-border/50">
                  <Trophy className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <p className="font-display text-3xl text-foreground">1992</p>
                  <p className="text-muted-foreground text-sm">{t('semimarathon.since')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parcours Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl mb-2">{t('semimarathon.course')}</h2>
                <p className="text-emerald-200">{t('semimarathon.courseSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-emerald-300">{t('semimarathon.start')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{t('semimarathon.startDesc')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-emerald-300">{t('semimarathon.highlights')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{t('semimarathon.highlightsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Runner Offers Section */}
        <section className="py-16 bg-gradient-to-br from-amber-100 via-white to-emerald-100 dark:from-amber-950/20 dark:via-background dark:to-emerald-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full mb-4">
                  <Heart className="w-4 h-4" />
                  <span className="font-medium text-sm">{t('semimarathon.runnerPackage')}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">{t('semimarathon.exclusiveOffers')}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('semimarathon.offersSubtitle')}</p>
              </div>

              {/* Runner Special Offers */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-emerald-200 dark:border-emerald-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                    <Sun className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('semimarathon.earlyBreakfast')}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{t('semimarathon.earlyBreakfastDesc')}</p>
                  <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded-full text-sm font-medium">
                    <Utensils className="w-4 h-4" />
                    {t('semimarathon.pastaSalad')}
                  </div>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-teal-200 dark:border-teal-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                    <Droplets className="w-7 h-7 text-teal-600" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('semimarathon.lateCheckout')}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{t('semimarathon.lateCheckoutDesc')}</p>
                  <div className="inline-block bg-teal-600 text-white font-bold text-sm px-3 py-1.5 rounded-full">{t('semimarathon.showerAccess')}</div>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-amber-200 dark:border-amber-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                    <Coffee className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('semimarathon.happyHour')}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{t('semimarathon.happyHourDesc')}</p>
                  <div className="inline-block bg-amber-600 text-white font-bold text-sm px-3 py-1.5 rounded-full">{t('semimarathon.happyHourDiscount')}</div>
                </div>
              </div>

              {/* Standard Offers */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Car className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">{t('semimarathon.parking')}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{t('semimarathon.parkingDesc')}</p>
                      <div className="inline-block bg-emerald-600 text-white font-bold text-sm px-3 py-1 rounded-full">{t('semimarathon.parkingPrice')}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Train className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">{t('semimarathon.taxi')}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{t('semimarathon.taxiDesc')}</p>
                      <div className="inline-block bg-cyan-600 text-white font-bold text-sm px-3 py-1 rounded-full">{t('semimarathon.taxiDiscount')}</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6 italic">{t('semimarathon.offersNote')}</p>
            </div>
          </div>
        </section>

        {/* Hotel Promo Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Star className="w-4 h-4" />
                  <span className="font-medium text-sm">{t('semimarathon.hotelPromo.badge')}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">{t('semimarathon.hotelPromo.title')}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('semimarathon.hotelPromo.subtitle')}</p>
              </div>

              <div className="bg-white dark:bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-10">
                    <h3 className="font-display text-2xl text-foreground mb-4">{t('semimarathon.hotelPromo.whyUs')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Train className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{t('semimarathon.hotelPromo.location')}</h4>
                          <p className="text-sm text-muted-foreground">{t('semimarathon.hotelPromo.locationDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                          <Coffee className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{t('semimarathon.hotelPromo.breakfast')}</h4>
                          <p className="text-sm text-muted-foreground">{t('semimarathon.hotelPromo.breakfastDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{t('semimarathon.hotelPromo.reception')}</h4>
                          <p className="text-sm text-muted-foreground">{t('semimarathon.hotelPromo.receptionDesc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-emerald-100/50 dark:from-primary/10 dark:to-emerald-900/20 p-8 md:p-10">
                    <h3 className="font-display text-2xl text-foreground mb-4">{t('semimarathon.hotelPromo.comfort')}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-sm">
                          <Tv className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm">{t('semimarathon.hotelPromo.tv')}</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-sm">
                          <Wifi className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm">{t('semimarathon.hotelPromo.wifi')}</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-sm">
                          <Coffee className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm">{t('semimarathon.hotelPromo.buffet')}</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-sm">
                          <Car className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm">{t('semimarathon.hotelPromo.parkingOption')}</span>
                      </li>
                    </ul>
                    <Link to="/nos-chambres">
                      <Button variant="outline" className="mt-6 w-full">{t('semimarathon.hotelPromo.discoverRooms')}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">{t('semimarathon.bookStay')}</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">{t('semimarathon.bestConditions')}</p>
            <a 
              href="https://www.secure-hotel-booking.com/Hotel-Inn-Design-Place-d-Italie/2V5Y/1892/fr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-lg px-8">
                {t('semimarathon.bookNow')}
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SemiMarathonParis;
