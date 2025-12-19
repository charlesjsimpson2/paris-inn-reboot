import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Heart, Star, Users, Mic, Sparkles, Gift, Ticket, Clock, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import enfoiresAffiche from "@/assets/enfoires-2026-affiche.png";

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
        {/* Hero Section - Clean and impactful */}
        <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Subtle stars pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-pink-200" fill="currentColor" />
                <span className="text-white/90 uppercase tracking-widest text-xs font-medium">
                  Les Restos du Cœur
                </span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl text-white mb-3 drop-shadow-lg">
                Les Enfoirés 2026
              </h1>
              <p className="text-2xl md:text-3xl text-pink-200 font-display mb-8">
                La Ballade des Enfoirés
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full text-white font-medium">
                  <Calendar className="w-5 h-5" />
                  13 - 19 Janvier 2026
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full text-white font-medium">
                  <MapPin className="w-5 h-5" />
                  Accor Arena Paris
                </div>
              </div>

              {/* Countdown */}
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-4 text-pink-200">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-medium">Compte à rebours</span>
                </div>
                <div className="grid grid-cols-4 gap-3 md:gap-6 text-center">
                  {[
                    { value: countdown.days, label: "Jours" },
                    { value: countdown.hours, label: "Heures" },
                    { value: countdown.minutes, label: "Min" },
                    { value: countdown.seconds, label: "Sec" }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="bg-white/20 rounded-xl px-3 md:px-5 py-3">
                        <span className="font-display text-2xl md:text-4xl text-white">{item.value}</span>
                      </div>
                      <p className="text-pink-200 text-xs mt-2 uppercase">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Poster & Logo Section - White background for better visibility */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Poster - Much larger and prominent */}
                <div className="flex justify-center">
                  <img 
                    src={enfoiresAffiche} 
                    alt="Les Enfoirés 2026 - La Ballade des Enfoirés"
                    className="w-full max-w-md rounded-2xl shadow-2xl ring-1 ring-pink-100"
                  />
                </div>
                
                {/* Info */}
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-full mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-medium text-sm">Édition 2026</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                    Un spectacle unique de solidarité
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Le spectacle caritatif le plus populaire de France revient pour 7 soirées magiques à Paris-Bercy. Une édition exceptionnelle avec le retour de Florent Pagny et Bénabar !
                  </p>
                  <Link to="/reservation-seminaire">
                    <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                      <Heart className="w-4 h-4 mr-2" fill="currentColor" />
                      Contactez-nous
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-pink-50/50 dark:bg-pink-950/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-charcoal rounded-2xl shadow-lg p-8 md:p-10 border border-pink-100 dark:border-pink-900/20">
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
                  <p className="text-lg leading-relaxed">
                    Du <strong className="text-pink-600 dark:text-pink-400">mardi 13 au lundi 19 janvier 2026</strong>, l'Accor Arena de Paris-Bercy accueille la nouvelle édition des Enfoirés. Sept représentations exceptionnelles où les plus grands artistes français se réunissent pour <strong className="text-foreground">lutter contre la faim et la précarité</strong>.
                  </p>

                  <p className="leading-relaxed">
                    Cette édition promet des moments d'émotion intense avec le <strong className="text-foreground">retour très attendu de Florent Pagny</strong>, absent depuis 2021, et de <strong className="text-foreground">Bénabar</strong> qui retrouve la troupe après quatre ans.
                  </p>

                  <p className="leading-relaxed">
                    La troupe 2026 réserve également de belles surprises avec <strong className="text-foreground">Héléna</strong> de la Star Academy, <strong className="text-foreground">Pierre Garnier</strong>, <strong className="text-foreground">Joseph Kamel</strong>, le virtuose <strong className="text-foreground">Ibrahim Maalouf</strong>, l'humoriste <strong className="text-foreground">François-Xavier Demaison</strong> et le légendaire <strong className="text-foreground">Alain Chamfort</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concert Dates */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <Calendar className="w-10 h-10 text-pink-600 mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  Les 7 dates du concert
                </h2>
                <p className="text-muted-foreground">
                  Accor Arena (Paris-Bercy) - Janvier 2026
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
                {concertDates.map((date, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-md hover:shadow-pink-500/25"
                  >
                    <p className="font-display text-lg text-white">{date.day}</p>
                    <p className="text-pink-200 text-xs">{date.month}</p>
                    <p className="text-white/50 text-xs mt-1">2026</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-pink-50 dark:bg-pink-950/20 rounded-lg p-3">
                <MapPin className="w-4 h-4 text-pink-600" />
                <span>Accor Arena, 8 Boulevard de Bercy, 75012 Paris</span>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 bg-gradient-to-br from-fuchsia-900 via-pink-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Heart className="w-12 h-12 text-pink-400 mx-auto mb-3" fill="currentColor" />
                <h2 className="font-display text-3xl md:text-4xl mb-2">
                  Plus de 35 ans de solidarité
                </h2>
                <p className="text-pink-200">
                  Une aventure humaine et artistique unique
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-pink-300">L'héritage de Coluche</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Depuis 1989, Les Enfoirés perpétuent l'esprit des Restos du Cœur fondés par Coluche en 1985. Les plus grands artistes français se mobilisent <strong className="text-white">bénévolement</strong> pour offrir un spectacle mémorable au profit des plus démunis.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-pink-300">Un engagement sincère</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    "Pas un seul artiste n'a touché un centime pour sa participation", rappelle Bénabar. Chaque euro récolté finance des repas pour ceux qui en ont besoin. <strong className="text-white">Les Enfoirés, c'est sincère.</strong>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                  <p className="font-display text-3xl">35+</p>
                  <p className="text-pink-200 text-xs">Années</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" fill="currentColor" />
                  <p className="font-display text-3xl">1M+</p>
                  <p className="text-pink-200 text-xs">Repas/an</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Mic className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                  <p className="font-display text-3xl">50+</p>
                  <p className="text-pink-200 text-xs">Artistes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - Moved before Hotel Offer */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Music className="w-10 h-10 text-pink-600 mx-auto mb-3" />
              <h2 className="font-display text-3xl text-foreground">
                Découvrez Les Enfoirés en vidéo
              </h2>
            </div>
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl ring-1 ring-pink-100 dark:ring-pink-900/30">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZuAnUmO8RfA"
                title="Les Enfoirés 2025 - Au Pays des Enfoirés"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>


        {/* Nos Offres */}
        <section className="py-16 bg-gradient-to-br from-pink-100 via-white to-fuchsia-100 dark:from-pink-950/30 dark:via-card dark:to-fuchsia-950/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  Nos offres exclusives
                </h2>
                <p className="text-muted-foreground">Profitez de nos avantages pendant votre séjour</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl border-2 border-pink-200 dark:border-pink-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                      <Car className="w-8 h-8 text-pink-600" />
                    </div>
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">PROMO</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Parking privé</h3>
                  <p className="text-muted-foreground mb-4">
                    Tarif préférentiel pour nos clients : stationnez en toute sécurité
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground line-through text-lg">25€</span>
                    <div className="inline-block bg-pink-600 text-white font-bold text-xl px-4 py-2 rounded-full">
                      15€ / jour
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl border-2 border-fuchsia-200 dark:border-fuchsia-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-full flex items-center justify-center mb-4">
                    <Ticket className="w-8 h-8 text-fuchsia-600" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Taxi partenaire</h3>
                  <p className="text-muted-foreground mb-4">
                    Réduction sur vos trajets pour vous rendre à l'Accor Arena et en revenir
                  </p>
                  <div className="inline-block bg-fuchsia-600 text-white font-bold text-xl px-4 py-2 rounded-full">
                    -10%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Offer Section - Final CTA */}
        <section className="py-16 bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Gift className="w-10 h-10 text-pink-200 mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl mb-2">
                  Notre offre spéciale Enfoirés
                </h2>
                <p className="text-pink-200">
                  Profitez du concert dans les meilleures conditions
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-pink-200" fill="currentColor" />
                  </div>
                  <h3 className="font-display text-lg mb-2">Tarif préférentiel</h3>
                  <p className="text-pink-200 text-sm">Chambre confortable avec petit-déjeuner inclus</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Ticket className="w-6 h-6 text-pink-200" />
                  </div>
                  <h3 className="font-display text-lg mb-2">-10% sur le taxi</h3>
                  <p className="text-pink-200 text-sm">Réduction partenaire pour l'Accor Arena</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-pink-200" fill="currentColor" />
                  </div>
                  <h3 className="font-display text-lg mb-2">Late check-out</h3>
                  <p className="text-pink-200 text-sm">Départ tardif offert le lendemain</p>
                </div>
              </div>

              <div className="text-center">
                <Link to="/reservation-seminaire">
                  <Button 
                    size="lg" 
                    className="bg-white text-pink-600 hover:bg-pink-50 font-bold px-10 py-6 text-lg shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <Heart className="w-5 h-5 mr-3" fill="currentColor" />
                    Réservez votre séjour Enfoiré
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

export default Enfoires2026;
