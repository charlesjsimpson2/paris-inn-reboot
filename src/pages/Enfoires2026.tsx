import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Heart, Ticket, Percent, Car, Play, ArrowRight, Phone, Mail, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Enfoires2026 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with festive gradient */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-yellow-500 to-red-600" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 via-yellow-400/30 to-red-500/40 animate-pulse" />
          
          {/* Confetti pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_2px,transparent_2px),radial-gradient(circle_at_80%_70%,white_2px,transparent_2px),radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:60px_60px,40px_40px,30px_30px]" />
          </div>
          
          {/* Floating hearts */}
          <div className="absolute left-[10%] top-1/3">
            <Heart className="w-12 h-12 text-white/20 animate-pulse" fill="currentColor" />
          </div>
          <div className="absolute right-[15%] top-1/2">
            <Heart className="w-8 h-8 text-white/20 animate-pulse animation-delay-200" fill="currentColor" />
          </div>
          <div className="absolute left-[20%] bottom-1/4">
            <Music className="w-10 h-10 text-white/15 animate-bounce" />
          </div>
          <div className="absolute right-[10%] bottom-1/3">
            <Music className="w-6 h-6 text-white/15 animate-bounce animation-delay-400" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-white animate-pulse" fill="currentColor" />
                <span className="text-white/90 uppercase tracking-widest text-sm font-medium">
                  Les Restos du Cœur
                </span>
                <Heart className="w-8 h-8 text-white animate-pulse" fill="currentColor" />
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl text-white mb-4 drop-shadow-lg">
                🎤 Les Enfoirés 2026
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-display mb-6">
                La Ballade des Enfoirés
              </p>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Vivez l'expérience Enfoirés comme jamais ! Le spectacle caritatif annuel des Restos du Cœur revient à Paris-Bercy.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full text-white font-medium">
                  <Calendar className="w-5 h-5" />
                  13 - 19 Janvier 2026
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full text-white font-medium">
                  <MapPin className="w-5 h-5" />
                  Accor Arena (Paris-Bercy)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-foreground text-center mb-8">
              🎵 Découvrez Les Enfoirés en vidéo
            </h2>
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
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

        {/* Offer Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full mb-4">
                  <Ticket className="w-4 h-4" />
                  Offre Exclusive Hôtel
                </span>
                <h2 className="font-display text-4xl text-foreground mb-4">
                  Votre séjour Enfoiré tout compris
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Profitez d'un séjour exceptionnel dans notre hôtel et vivez le concert des Enfoirés dans les meilleures conditions.
                </p>
              </div>

              {/* Offers Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 text-center border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6">
                    <Percent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3">Tarif Préférentiel</h3>
                  <p className="text-muted-foreground">
                    Bénéficiez d'une réduction exclusive sur votre chambre pendant toute la durée du concert.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 text-center border border-yellow-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-6">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3">-10% sur le Taxi</h3>
                  <p className="text-muted-foreground">
                    Réduction de 10% sur votre trajet en taxi vers l'Accor Arena grâce à notre partenariat.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 text-center border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6">
                    <Ticket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3">Assistance Billets</h3>
                  <p className="text-muted-foreground">
                    Notre équipe vous accompagne dans la réservation de vos places pour le spectacle.
                  </p>
                </div>
              </div>

              {/* Package Details */}
              <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl p-1">
                <div className="bg-background rounded-xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-display text-2xl text-foreground mb-4">
                        Ce qui est inclus
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">Chambre confortable avec petit-déjeuner buffet inclus</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">Late check-out offert le jour du concert</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">Réduction partenaire sur les taxis</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">Accès à nos espaces détente</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-muted-foreground mb-2">À partir de</p>
                      <p className="font-display text-5xl text-red-600 mb-2">149€</p>
                      <p className="text-muted-foreground mb-6">par nuit pour 2 personnes</p>
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold w-full md:w-auto"
                      >
                        Réserver maintenant
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Les Enfoirés */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" fill="currentColor" />
                <h2 className="font-display text-3xl text-foreground mb-4">
                  À propos des Enfoirés
                </h2>
                <p className="text-muted-foreground text-lg">
                  Depuis 1989, Les Enfoirés rassemblent chaque année les plus grands artistes français pour soutenir Les Restos du Cœur, association fondée par Coluche en 1985.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="font-display text-3xl text-foreground mb-2">35+</p>
                  <p className="text-muted-foreground">Années de solidarité</p>
                </div>
                <div>
                  <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-yellow-600" fill="currentColor" />
                  </div>
                  <p className="font-display text-3xl text-foreground mb-2">1M+</p>
                  <p className="text-muted-foreground">Repas distribués chaque année</p>
                </div>
                <div>
                  <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center mx-auto mb-4">
                    <Music className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="font-display text-3xl text-foreground mb-2">50+</p>
                  <p className="text-muted-foreground">Artistes sur scène</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 via-transparent to-red-500/40 animate-pulse" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Réservez votre séjour Enfoiré
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Notre équipe est à votre disposition pour vous aider à organiser votre séjour parfait.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-yellow-100 font-bold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Nous contacter
                  </Button>
                </Link>
                <a href="mailto:contact@hotel-inn-paris.com">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 font-bold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    contact@hotel-inn-paris.com
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