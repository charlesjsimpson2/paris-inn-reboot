import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Heart, Star, Users, Mic, Sparkles, ArrowRight, Phone, Mail } from "lucide-react";
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
                Le spectacle caritatif le plus populaire de France revient pour une édition exceptionnelle !
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

        {/* Concert Promotion Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h2 className="font-display text-4xl text-foreground mb-6">
                  7 soirées magiques à Paris-Bercy
                </h2>
              </div>

              <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
                <p className="text-xl leading-relaxed">
                  Du <strong className="text-foreground">mardi 13 au lundi 19 janvier 2026</strong>, Les Enfoirés font leur grand retour sur la scène de l'Accor Arena pour <strong className="text-foreground">sept spectacles exceptionnels</strong>. Cette nouvelle édition, intitulée "La Ballade des Enfoirés", s'annonce riche en émotions et en surprises.
                </p>

                <p className="leading-relaxed">
                  Cette année, le public pourra célébrer le retour de <strong className="text-foreground">Florent Pagny</strong>, absent depuis 2021, ainsi que celui de <strong className="text-foreground">Bénabar</strong>, qui retrouve la troupe après quatre ans d'absence. "Les Enfoirés, ce sont vraiment ceux qui sont sur scène et le public, avec lequel il y a une communion réelle, car on est tous là pour une bonne raison", confie Bénabar.
                </p>

                <p className="leading-relaxed">
                  Parmi les talents qui enrichissent la troupe, on retrouve également <strong className="text-foreground">Héléna</strong> de la Star Academy, <strong className="text-foreground">Pierre Garnier</strong>, <strong className="text-foreground">Joseph Kamel</strong>, le trompettiste <strong className="text-foreground">Ibrahim Maalouf</strong>, l'humoriste <strong className="text-foreground">François-Xavier Demaison</strong>, et <strong className="text-foreground">Alain Chamfort</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" fill="currentColor" />
                <h2 className="font-display text-3xl text-foreground mb-4">
                  L'histoire d'un mouvement solidaire
                </h2>
              </div>

              <div className="prose prose-lg mx-auto text-muted-foreground space-y-6 mb-12">
                <p className="leading-relaxed">
                  Depuis <strong className="text-foreground">1989</strong>, Les Enfoirés rassemblent chaque année les plus grands artistes français pour soutenir <strong className="text-foreground">Les Restos du Cœur</strong>, l'association fondée par <strong className="text-foreground">Coluche</strong> en 1985. Ce spectacle est devenu un rendez-vous incontournable de la solidarité en France.
                </p>

                <p className="leading-relaxed">
                  Tous les artistes participent <strong className="text-foreground">bénévolement</strong>. Comme le rappelle Bénabar : "Pas un seul artiste, je dis bien pas un seul, n'a touché un centime pour sa participation." Une preuve de la générosité qui anime cette aventure humaine et solidaire depuis plus de 35 ans.
                </p>

                <p className="leading-relaxed">
                  Chaque année, le spectacle et la vente des DVD et CD permettent de financer des millions de repas pour les plus démunis. <strong className="text-foreground">Les Enfoirés, c'est sincère, il y a un truc qui est indiscutable.</strong>
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
                    <Mic className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="font-display text-3xl text-foreground mb-2">50+</p>
                  <p className="text-muted-foreground">Artistes sur scène</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concert Dates */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Calendar className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h2 className="font-display text-3xl text-foreground mb-8">
                Les dates du concert
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { day: "Mar. 13", month: "Janvier" },
                  { day: "Mer. 14", month: "Janvier" },
                  { day: "Jeu. 15", month: "Janvier" },
                  { day: "Ven. 16", month: "Janvier" },
                  { day: "Sam. 17", month: "Janvier" },
                  { day: "Dim. 18", month: "Janvier" },
                  { day: "Lun. 19", month: "Janvier" },
                ].map((date, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-red-50 to-yellow-50 dark:from-red-950/30 dark:to-yellow-950/30 rounded-xl p-6 border border-red-100 dark:border-red-900/30 hover:shadow-lg transition-all hover:scale-105"
                  >
                    <p className="font-display text-2xl text-red-600">{date.day}</p>
                    <p className="text-muted-foreground">{date.month} 2026</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-lg">Accor Arena, 8 Boulevard de Bercy, 75012 Paris</span>
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

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 via-transparent to-red-500/40 animate-pulse" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Réservez votre séjour Enfoiré
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Profitez de notre offre spéciale et vivez le concert dans les meilleures conditions.
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