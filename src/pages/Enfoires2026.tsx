import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Heart, Star, Users, Mic, Sparkles, Phone, Mail, Gift, Ticket, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import enfoiresLogo from "@/assets/enfoires-logo.png";
import enfoiresAffiche from "@/assets/enfoires-affiche.jpg";

const Enfoires2026 = () => {
  // Countdown to January 13, 2026 at 20:00 (concert start)
  const targetDate = new Date('2026-01-13T20:00:00').getTime();
  
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  const concertDates = [
    { day: "Mar. 13", month: "Janvier" },
    { day: "Mer. 14", month: "Janvier" },
    { day: "Jeu. 15", month: "Janvier" },
    { day: "Ven. 16", month: "Janvier" },
    { day: "Sam. 17", month: "Janvier" },
    { day: "Dim. 18", month: "Janvier" },
    { day: "Lun. 19", month: "Janvier" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with pink/magenta theme */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Animated background - pink/magenta theme like the logo */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          
          {/* Stars pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_2px,transparent_2px),radial-gradient(circle_at_80%_70%,white_2px,transparent_2px),radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:60px_60px,40px_40px,30px_30px]" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute left-[5%] top-1/3 animate-pulse">
            <Heart className="w-16 h-16 text-white/30" fill="currentColor" />
          </div>
          <div className="absolute right-[8%] top-1/4 animate-bounce">
            <Music className="w-12 h-12 text-white/20" />
          </div>
          <div className="absolute left-[15%] bottom-1/4 animate-pulse animation-delay-200">
            <Star className="w-10 h-10 text-yellow-300/40" fill="currentColor" />
          </div>
          <div className="absolute right-[12%] bottom-1/3 animate-bounce animation-delay-400">
            <Mic className="w-8 h-8 text-white/20" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text content */}
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                    <Heart className="w-6 h-6 text-pink-300 animate-pulse" fill="currentColor" />
                    <span className="text-white/90 uppercase tracking-widest text-sm font-medium">
                      Les Restos du Cœur
                    </span>
                  </div>
                  
                  <h1 className="font-display text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
                    Les Enfoirés 2026
                  </h1>
                  <p className="text-2xl md:text-3xl text-pink-200 font-display mb-6">
                    La Ballade des Enfoirés
                  </p>
                  <p className="text-white/80 text-lg mb-8">
                    Le spectacle caritatif le plus populaire de France revient pour une édition exceptionnelle !
                  </p>
                  
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full text-white font-medium">
                      <Calendar className="w-5 h-5" />
                      13 - 19 Janvier 2026
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full text-white font-medium">
                      <MapPin className="w-5 h-5" />
                      Accor Arena
                    </div>
                  </div>

                  {/* Countdown */}
                  <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center justify-center gap-2 mb-4 text-pink-200">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm uppercase tracking-wider font-medium">Compte à rebours</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="bg-white/20 rounded-xl px-4 py-3">
                          <span className="font-display text-3xl md:text-4xl text-white">{countdown.days}</span>
                        </div>
                        <p className="text-pink-200 text-xs mt-2 uppercase">Jours</p>
                      </div>
                      <div>
                        <div className="bg-white/20 rounded-xl px-4 py-3">
                          <span className="font-display text-3xl md:text-4xl text-white">{countdown.hours}</span>
                        </div>
                        <p className="text-pink-200 text-xs mt-2 uppercase">Heures</p>
                      </div>
                      <div>
                        <div className="bg-white/20 rounded-xl px-4 py-3">
                          <span className="font-display text-3xl md:text-4xl text-white">{countdown.minutes}</span>
                        </div>
                        <p className="text-pink-200 text-xs mt-2 uppercase">Minutes</p>
                      </div>
                      <div>
                        <div className="bg-white/20 rounded-xl px-4 py-3">
                          <span className="font-display text-3xl md:text-4xl text-white">{countdown.seconds}</span>
                        </div>
                        <p className="text-pink-200 text-xs mt-2 uppercase">Secondes</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Logo and poster */}
                <div className="flex flex-col items-center gap-6">
                  <img 
                    src={enfoiresLogo} 
                    alt="Logo Les Enfoirés"
                    className="w-48 md:w-64 drop-shadow-2xl"
                  />
                  <img 
                    src={enfoiresAffiche} 
                    alt="Au Pays des Enfoirés 2025" 
                    className="w-40 md:w-48 rounded-xl shadow-2xl ring-4 ring-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concert Promotion Section */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white dark:from-pink-950/20 dark:to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-full mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">Édition 2026</span>
                </div>
                <h2 className="font-display text-4xl text-foreground mb-4">
                  Un spectacle unique de solidarité
                </h2>
                <p className="text-xl text-muted-foreground">
                  7 soirées magiques à Paris-Bercy
                </p>
              </div>

              <div className="bg-white dark:bg-charcoal rounded-2xl shadow-xl p-8 md:p-12 border border-pink-100 dark:border-pink-900/30">
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p className="text-xl leading-relaxed">
                    Du <strong className="text-pink-600 dark:text-pink-400">mardi 13 au lundi 19 janvier 2026</strong>, l'Accor Arena de Paris-Bercy accueille la nouvelle édition des Enfoirés. Sept représentations exceptionnelles où les plus grands artistes français se réunissent pour une cause qui nous rassemble tous : <strong className="text-foreground">lutter contre la faim et la précarité</strong>.
                  </p>

                  <p className="leading-relaxed">
                    Cette édition promet des moments d'émotion intense avec le <strong className="text-foreground">retour très attendu de Florent Pagny</strong>, absent depuis 2021, et de <strong className="text-foreground">Bénabar</strong> qui retrouve la troupe après quatre ans. Le chanteur confie : "Les Enfoirés, ce sont vraiment ceux qui sont sur scène et le public, une communion réelle car on est tous là pour une bonne raison."
                  </p>

                  <p className="leading-relaxed">
                    La troupe 2026 réserve également de belles surprises avec <strong className="text-foreground">Héléna</strong> de la Star Academy, <strong className="text-foreground">Pierre Garnier</strong>, <strong className="text-foreground">Joseph Kamel</strong>, le virtuose <strong className="text-foreground">Ibrahim Maalouf</strong>, l'humoriste <strong className="text-foreground">François-Xavier Demaison</strong> et le légendaire <strong className="text-foreground">Alain Chamfort</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-gradient-to-br from-fuchsia-900 via-pink-900 to-purple-900 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px),radial-gradient(circle_at_70%_80%,white_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Heart className="w-16 h-16 text-pink-400 mx-auto mb-4" fill="currentColor" />
                <h2 className="font-display text-4xl mb-4">
                  Plus de 35 ans de solidarité
                </h2>
                <p className="text-pink-200 text-xl">
                  Une aventure humaine et artistique unique
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-2xl mb-4 text-pink-300">L'héritage de Coluche</h3>
                  <p className="text-white/80 leading-relaxed">
                    Depuis 1989, Les Enfoirés perpétuent l'esprit des Restos du Cœur fondés par Coluche en 1985. Chaque année, les plus grands artistes français se mobilisent <strong className="text-white">bénévolement</strong> pour offrir un spectacle mémorable au profit des plus démunis.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-2xl mb-4 text-pink-300">Un engagement sincère</h3>
                  <p className="text-white/80 leading-relaxed">
                    "Pas un seul artiste n'a touché un centime pour sa participation", rappelle Bénabar. Concerts, ventes de DVD et CD : chaque euro récolté finance des repas pour ceux qui en ont besoin. <strong className="text-white">Les Enfoirés, c'est sincère.</strong>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Users className="w-10 h-10 text-pink-400 mx-auto mb-3" />
                  <p className="font-display text-4xl mb-1">35+</p>
                  <p className="text-pink-200 text-sm">Années de concerts</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Heart className="w-10 h-10 text-pink-400 mx-auto mb-3" fill="currentColor" />
                  <p className="font-display text-4xl mb-1">1M+</p>
                  <p className="text-pink-200 text-sm">Repas par an</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Mic className="w-10 h-10 text-pink-400 mx-auto mb-3" />
                  <p className="font-display text-4xl mb-1">50+</p>
                  <p className="text-pink-200 text-sm">Artistes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concert Dates */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Calendar className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h2 className="font-display text-4xl text-foreground mb-4">
                  Les 7 dates du concert
                </h2>
                <p className="text-muted-foreground text-lg">
                  Accor Arena (Paris-Bercy) - Janvier 2026
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
                {concertDates.map((date, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-xl p-5 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                  >
                    <p className="font-display text-xl text-white">{date.day}</p>
                    <p className="text-pink-200 text-sm">{date.month}</p>
                    <p className="text-white/60 text-xs mt-1">2026</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 text-muted-foreground bg-pink-50 dark:bg-pink-950/20 rounded-xl p-4">
                <MapPin className="w-5 h-5 text-pink-600" />
                <span>Accor Arena, 8 Boulevard de Bercy, 75012 Paris</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Offer Section */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Gift className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h2 className="font-display text-4xl text-foreground mb-4">
                  Notre offre spéciale Enfoirés
                </h2>
                <p className="text-muted-foreground text-lg">
                  Profitez du concert dans les meilleures conditions
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 rounded-xl p-6 border border-pink-200 dark:border-pink-800/30 text-center">
                  <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-7 h-7 text-pink-600" fill="currentColor" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">Tarif préférentiel</h3>
                  <p className="text-muted-foreground text-sm">Chambre confortable avec petit-déjeuner inclus</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 rounded-xl p-6 border border-pink-200 dark:border-pink-800/30 text-center">
                  <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ticket className="w-7 h-7 text-pink-600" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">-10% sur le taxi</h3>
                  <p className="text-muted-foreground text-sm">Réduction partenaire pour vous rendre à l'Accor Arena</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 rounded-xl p-6 border border-pink-200 dark:border-pink-800/30 text-center">
                  <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-7 h-7 text-pink-600" fill="currentColor" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">Late check-out</h3>
                  <p className="text-muted-foreground text-sm">Départ tardif offert le lendemain du concert</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-gradient-to-b from-pink-50 to-white dark:from-pink-950/20 dark:to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Music className="w-10 h-10 text-pink-600 mx-auto mb-4" />
              <h2 className="font-display text-3xl text-foreground">
                Découvrez Les Enfoirés en vidéo
              </h2>
            </div>
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl ring-4 ring-pink-200 dark:ring-pink-900/50">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Les Enfoirés - La Ballade des Enfoirés"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_2px,transparent_2px)] bg-[length:40px_40px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-12 h-12 text-pink-300 mx-auto mb-4" fill="currentColor" />
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Réservez votre séjour Enfoiré
              </h2>
              <p className="text-white/90 text-lg mb-4">
                Contactez-nous pour profiter de notre offre spéciale concert
              </p>
              
              {/* Contact info */}
              <div className="flex flex-col items-center gap-2 mb-8 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>178 Bd Vincent Auriol, 75013 Paris</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+33 (0)1 44 24 01 01</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="tel:+33144240101">
                  <Button 
                    size="lg" 
                    className="bg-white text-pink-600 hover:bg-pink-100 font-bold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +33 (0)1 44 24 01 01
                  </Button>
                </a>
                <a href="mailto:hid.paris13@gmail.com">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 font-bold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    hid.paris13@gmail.com
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Enfoires2026;
