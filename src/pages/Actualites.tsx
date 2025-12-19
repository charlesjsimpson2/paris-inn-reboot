import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Music, Trophy } from "lucide-react";
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
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8 text-center">
              Nos événements à ne pas manquer
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Enfoirés 2026 */}
              <Link to="/enfoires-2026" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[16/9]">
                    <img 
                      src={enfoiresAffiche} 
                      alt="Les Enfoirés 2026" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Music className="w-4 h-4 text-pink-400" />
                      <span className="text-pink-400 text-sm font-medium">Concert</span>
                    </div>
                    <h3 className="font-display text-xl text-white mb-1">Les Enfoirés 2026</h3>
                    <p className="text-white/80 text-sm">22 janvier - 1er février • Accor Arena</p>
                  </div>
                </div>
              </Link>

              {/* Tournoi 6 Nations */}
              <Link to="/tournoi-6-nations" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[16/9]">
                    <img 
                      src={rugbyImage} 
                      alt="Tournoi 6 Nations France - Irlande" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">Rugby</span>
                    </div>
                    <h3 className="font-display text-xl text-white mb-1 flex items-center gap-2">
                      <img src={drapeauFrance} alt="France" className="w-6 h-4 object-cover rounded-sm" />
                      France vs Irlande
                      <img src={drapeauIrlande} alt="Irlande" className="w-6 h-4 object-cover rounded-sm" />
                    </h3>
                    <p className="text-white/80 text-sm">8 mars 2025 • Stade de France</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>


        {/* Newsletter */}
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