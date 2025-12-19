import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Camera, Music, Trophy, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import enfoiresAffiche from "@/assets/enfoires-2026-affiche.png";
import rugbyImage from "@/assets/rugby-france-irlande.jpg";

const drapeauFrance = "https://flagcdn.com/w80/fr.png";
const drapeauIrlande = "https://flagcdn.com/w80/ie.png";

const Actualites = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
                {t('actualites.hero.badge')}
              </p>
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">
                {t('actualites.hero.title')}
              </h1>
              <p className="text-muted-foreground text-lg">
                {t('actualites.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Events Shortcuts */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
                À venir
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Nos événements à ne pas manquer
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Enfoirés 2026 */}
              <Link to="/enfoires-2026" className="group">
                <article className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={enfoiresAffiche} 
                      alt="Les Enfoirés 2026" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-3 py-1 rounded-full text-xs font-medium">
                        <Music className="w-3 h-3" />
                        Concert solidaire
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      Les Enfoirés 2026
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      La Ballade des Enfoirés - Le rendez-vous musical caritatif de l'année
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        13 - 19 janvier 2026
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Accor Arena Paris</p>
                  </div>
                </article>
              </Link>

              {/* Tournoi 6 Nations */}
              <Link to="/tournoi-6-nations" className="group">
                <article className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={rugbyImage} 
                      alt="Tournoi 6 Nations France - Irlande" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-3 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-lg py-2 px-4">
                      <img src={drapeauFrance} alt="France" className="w-8 h-5 object-cover rounded shadow-sm" />
                      <span className="font-display text-foreground text-sm">VS</span>
                      <img src={drapeauIrlande} alt="Irlande" className="w-8 h-5 object-cover rounded shadow-sm" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                        <Trophy className="w-3 h-3" />
                        Tournoi 6 Nations
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      France vs Irlande
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Le choc au sommet du Tournoi - Vivez l'intensité du rugby international
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        8 mars 2025
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Stade de France</p>
                  </div>
                </article>
              </Link>

              {/* Salon de l'Agriculture */}
              <Link to="/salon-agriculture" className="group">
                <article className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=600&fit=crop" 
                      alt="Salon de l'Agriculture" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                        <Leaf className="w-3 h-3" />
                        Salon
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      Salon de l'Agriculture
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      La plus grande ferme de France - 600 000 visiteurs chaque année
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        22 fév - 2 mars 2025
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Porte de Versailles</p>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>

        {/* Événements Passés */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Camera className="w-5 h-5 text-primary" />
                <span className="text-primary font-body uppercase tracking-[0.2em] text-sm">
                  Retour en images
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground">
                Événements passés
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Découvrez les moments partagés par nos clients lors des grands événements parisiens
              </p>
            </div>

            <p className="text-center text-muted-foreground text-sm italic">
              Photos à venir prochainement...
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                {t('actualites.newsletter.title')}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t('actualites.newsletter.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('actualites.newsletter.placeholder')}
                  className="flex-1 px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <Button variant="gold">{t('actualites.newsletter.button')}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Actualites;