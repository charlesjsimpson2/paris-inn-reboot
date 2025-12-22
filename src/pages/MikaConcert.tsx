import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Star, Mic, Sparkles, Gift, Ticket, Clock, Car, Coffee, Wifi, Tv, Users, Train } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import mikaAffiche from "@/assets/mika-spinning-out-tour.webp";
import mikaHero from "@/assets/mika-concert-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const MikaConcert = () => {
  const { t } = useLanguage();
  
  // Date confirmée : 16 février 2026 à 20h00
  const targetDate = new Date('2026-02-16T20:00:00').getTime();
  
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
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900 via-pink-900 to-purple-900" />
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center order-2 md:order-1">
                  <img src={mikaAffiche} alt="MIKA Spinning Out Tour" className="w-full max-w-md md:max-w-lg shadow-2xl" />
                </div>
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <Music className="w-4 h-4 text-orange-200" />
                    <span className="text-white/90 uppercase tracking-widest text-xs font-medium">{t('mika.tour')}</span>
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl text-white mb-3 drop-shadow-lg">{t('mika.title')}</h1>
                  <p className="text-xl md:text-2xl text-orange-200 font-display mb-6">{t('mika.subtitle')}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm">
                      <Calendar className="w-4 h-4" />{t('mika.dateInfo')}
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm">
                      <MapPin className="w-4 h-4" />Accor Arena Paris
                    </div>
                  </div>
                  <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                    <div className="flex items-center justify-center gap-2 mb-3 text-orange-200">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider font-medium">{t('mika.countdown')}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                      {[
                        { value: countdown.days, label: t('mika.days') },
                        { value: countdown.hours, label: t('mika.hours') },
                        { value: countdown.minutes, label: t('mika.min') },
                        { value: countdown.seconds, label: t('mika.sec') }
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div className="bg-white/20 rounded-xl px-2 md:px-4 py-2">
                            <span className="font-display text-xl md:text-3xl text-white">{item.value}</span>
                          </div>
                          <p className="text-orange-200 text-xs mt-1 uppercase">{item.label}</p>
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
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium text-sm">{t('mika.edition2026')}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t('mika.uniqueShow')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl mx-auto">{t('mika.showDesc')}</p>
              <Link to="/reservation-seminaire">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Music className="w-4 h-4 mr-2" />{t('mika.contactUs')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 bg-orange-50/50 dark:bg-orange-950/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Texte principal */}
              <div className="bg-white dark:bg-charcoal rounded-2xl shadow-lg p-8 md:p-10 border border-orange-100 dark:border-orange-900/20 mb-8">
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
                  <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('mika.aboutText1') }} />
                  <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('mika.aboutText2') }} />
                  <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('mika.aboutText3') }} />
                </div>
              </div>
              
              {/* Biographie avec image - en dessous */}
              <div className="bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-xl p-6 border border-orange-200/50 dark:border-orange-800/30">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-3">{t('mika.bio.title')}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: t('mika.bio.text1') }} />
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t('mika.bio.text2') }} />
                  </div>
                  <img 
                    src={mikaHero} 
                    alt="MIKA en concert" 
                    className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[3/4]" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concert Info */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <Calendar className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">{t('mika.concertParis')}</h2>
                <p className="text-muted-foreground">Accor Arena (Paris-Bercy) - {t('mika.monday')} 16 {t('mika.february')} 2026</p>
              </div>
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl p-6 text-center shadow-lg">
                  <p className="font-display text-2xl text-white">{t('mika.monday')} 16 {t('mika.february')} 2026</p>
                  <p className="text-orange-200 text-sm mt-1">20h00</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-orange-50 dark:bg-orange-950/20 rounded-lg p-3">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>Accor Arena, 8 Boulevard de Bercy, 75012 Paris</span>
              </div>
            </div>
          </div>
        </section>

        {/* Artist Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Star className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl mb-2">{t('mika.exceptionalArtist')}</h2>
                <p className="text-orange-200">{t('mika.internationalCareer')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-orange-300">{t('mika.musicalPath')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{t('mika.musicalPathDesc')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-orange-300">{t('mika.legendaryShows')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{t('mika.legendaryShowsDesc')}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Mic className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="font-display text-3xl">10M+</p>
                  <p className="text-orange-200 text-xs">{t('mika.albumsSold')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Star className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="font-display text-3xl">6</p>
                  <p className="text-orange-200 text-xs">{t('mika.studioAlbums')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Music className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="font-display text-3xl">15+</p>
                  <p className="text-orange-200 text-xs">{t('mika.careerYears')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-16 bg-gradient-to-br from-orange-100 via-white to-pink-100 dark:from-orange-950/30 dark:via-card dark:to-pink-950/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">{t('mika.exclusiveOffers')}</h2>
                <p className="text-muted-foreground">{t('mika.offersSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl border-2 border-orange-200 dark:border-orange-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                    <Car className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{t('mika.parking')}</h3>
                  <p className="text-muted-foreground mb-4">{t('mika.parkingDesc')}</p>
                  <div className="inline-block bg-orange-600 text-white font-bold text-xl px-4 py-2 rounded-full">{t('mika.parkingPrice')}</div>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl border-2 border-pink-200 dark:border-pink-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4">
                    <Ticket className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{t('mika.taxi')}</h3>
                  <p className="text-muted-foreground mb-4">{t('mika.taxiDesc')}</p>
                  <div className="inline-block bg-pink-600 text-white font-bold text-xl px-4 py-2 rounded-full">{t('mika.taxiDiscount')}</div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6 italic">{t('mika.offersNote')}</p>
            </div>
          </div>
        </section>

        {/* Hotel Promo Section */}
        <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-950/20 dark:via-background dark:to-orange-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Star className="w-4 h-4" />
                  <span className="font-medium text-sm">{t('mika.hotelPromo.badge')}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">{t('mika.hotelPromo.title')}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('mika.hotelPromo.subtitle')}</p>
              </div>

              <div className="bg-white dark:bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-10">
                    <h3 className="font-display text-2xl text-foreground mb-4">{t('mika.hotelPromo.whyUs')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Train className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{t('mika.hotelPromo.location')}</h4>
                          <p className="text-sm text-muted-foreground">{t('mika.hotelPromo.locationDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                          <Coffee className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{t('mika.hotelPromo.breakfast')}</h4>
                          <p className="text-sm text-muted-foreground">{t('mika.hotelPromo.breakfastDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-pink-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{t('mika.hotelPromo.reception')}</h4>
                          <p className="text-sm text-muted-foreground">{t('mika.hotelPromo.receptionDesc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-orange-100/50 dark:from-primary/10 dark:to-orange-900/20 p-8 md:p-10">
                    <h3 className="font-display text-2xl text-foreground mb-4">{t('mika.hotelPromo.comfort')}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-sm">
                          <Tv className="w-4 h-4 text-primary" />
                        </div>
                        <span>{t('mika.hotelPromo.tv')}</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-sm">
                          <Wifi className="w-4 h-4 text-primary" />
                        </div>
                        <span>{t('mika.hotelPromo.wifi')}</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-sm">
                          <Coffee className="w-4 h-4 text-primary" />
                        </div>
                        <span>{t('mika.hotelPromo.buffet')}</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-card flex items-center justify-center shadow-sm">
                          <Car className="w-4 h-4 text-primary" />
                        </div>
                        <span>{t('mika.hotelPromo.parkingOption')}</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link to="/nos-chambres">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          {t('mika.hotelPromo.discoverRooms')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Music className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <h2 className="font-display text-3xl text-foreground">{t('mika.watchVideo')}</h2>
            </div>
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl ring-1 ring-orange-100 dark:ring-orange-900/30">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0CGVgAYJyjk" title="MIKA - Grace Kelly (Official Video)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Gift className="w-10 h-10 text-orange-200 mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl mb-2">{t('mika.bookStay')}</h2>
                <p className="text-orange-200">{t('mika.bestConditions')}</p>
              </div>
              <div className="text-center">
                <Link to="/reservation-seminaire">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-10 py-6 text-lg shadow-xl hover:scale-105 transition-all duration-300">
                    <Music className="w-5 h-5 mr-3" />{t('mika.bookNow')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MikaConcert;
