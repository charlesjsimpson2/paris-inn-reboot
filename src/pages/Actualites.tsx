import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Instagram, Linkedin, Music, Heart, MapPin, Ticket, Percent, Car, Play, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import enfoiresAffiche from "@/assets/enfoires-2026-affiche.png";
import rugbyImage from "@/assets/rugby-france-irlande.jpg";

// Featured Les Enfoirés event
const enfoires = {
  id: "enfoires-2026",
  title: "🎤 Les Enfoirés 2026",
  subtitle: "La Ballade des Enfoirés",
  description: "Rejoignez-nous pour vivre l'expérience Enfoirés comme jamais ! Le spectacle caritatif annuel des Restos du Cœur revient à l'Accor Arena de Paris-Bercy du 13 au 19 janvier 2026.",
  fullDescription: "Venez profiter de votre concert Enfoiré dans un concept Enfoiré ! Notre hôtel vous propose une offre exclusive pour vivre cette expérience caritative unique dans les meilleures conditions.",
  dateStart: "13 Janvier 2026",
  dateEnd: "19 Janvier 2026",
  location: "Accor Arena (Paris-Bercy)",
  image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=500&fit=crop",
  youtubeVideoId: "dQw4w9WgXcQ",
  offers: [
    { icon: "hotel", text: "Tarif préférentiel sur votre chambre" },
    { icon: "taxi", text: "10% de réduction sur le taxi vers l'Accor Arena" },
    { icon: "ticket", text: "Assistance réservation billets" },
  ],
};

// Other news articles
const newsArticles = [
  {
    id: 2,
    title: "Offres spéciales week-end",
    excerpt: "Profitez de nos tarifs avantageux pour vos escapades parisiennes le week-end...",
    date: "10 Décembre 2024",
    readTime: "2 min",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=400&fit=crop",
    category: "Offre",
  },
  {
    id: 3,
    title: "Partenariat avec les restaurants locaux",
    excerpt: "Découvrez nos partenaires gastronomiques pour une expérience culinaire inoubliable...",
    date: "5 Décembre 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop",
    category: "Partenariat",
  },
  {
    id: 4,
    title: "Rénovation de nos espaces séminaires",
    excerpt: "Nos salles de réunion font peau neuve pour vous accueillir dans les meilleures conditions...",
    date: "1 Décembre 2024",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
    category: "Hôtel",
  },
];

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
                    <h3 className="font-display text-xl text-white mb-1">France vs Irlande</h3>
                    <p className="text-white/80 text-sm">8 mars 2025 • Stade de France</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Les Enfoirés Event */}
        <section className="py-16 relative overflow-hidden">
          {/* Festive background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-yellow-500/5 to-red-600/10" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary))_2px,transparent_2px),radial-gradient(circle_at_80%_70%,hsl(var(--primary))_2px,transparent_2px)] bg-[length:60px_60px,40px_40px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Main Event Card */}
            <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* Image side */}
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <img
                    src={enfoires.image}
                    alt={enfoires.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with hearts */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-red-500 animate-pulse" fill="currentColor" />
                    <span className="text-white font-bold text-lg">Les Restos du Cœur</span>
                  </div>
                </div>
                
                {/* Content side */}
                <div className="p-8 lg:p-12 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full">
                      <Music className="w-4 h-4" />
                      Concert Événement
                    </span>
                    <Heart className="w-5 h-5 text-red-500 animate-pulse" fill="currentColor" />
                  </div>
                  
                  <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-2">
                    {enfoires.title}
                  </h2>
                  <p className="text-xl text-red-600 font-semibold mb-4">
                    {enfoires.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground mb-6">
                    {enfoires.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal mb-6">
                    <span className="flex items-center gap-2 bg-yellow-100 px-3 py-1.5 rounded-full">
                      <Calendar className="w-4 h-4 text-red-600" />
                      {enfoires.dateStart} - {enfoires.dateEnd}
                    </span>
                    <span className="flex items-center gap-2 bg-yellow-100 px-3 py-1.5 rounded-full">
                      <MapPin className="w-4 h-4 text-red-600" />
                      {enfoires.location}
                    </span>
                  </div>
                  
                  {/* Offers */}
                  <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-6 mb-6">
                    <h3 className="font-display text-lg text-charcoal mb-4 flex items-center gap-2">
                      <Ticket className="w-5 h-5 text-red-600" />
                      Notre offre spéciale Enfoirés
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-charcoal">
                        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                          <Percent className="w-4 h-4 text-white" />
                        </div>
                        Tarif préférentiel sur votre chambre
                      </li>
                      <li className="flex items-center gap-3 text-charcoal">
                        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                          <Car className="w-4 h-4 text-white" />
                        </div>
                        10% de réduction sur le taxi vers l'Accor Arena
                      </li>
                      <li className="flex items-center gap-3 text-charcoal">
                        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                          <Ticket className="w-4 h-4 text-white" />
                        </div>
                        Assistance réservation billets
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <Link to="/enfoires-2026">
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold"
                      >
                        Découvrir l'offre complète
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <a 
                      href={`https://www.youtube.com/watch?v=${enfoires.youtubeVideoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <Play className="w-5 h-5" />
                      Voir la vidéo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* YouTube Embed */}
            <div className="mt-12">
              <h3 className="font-display text-2xl text-foreground mb-6 text-center">
                🎵 Découvrez Les Enfoirés en vidéo
              </h3>
              <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${enfoires.youtubeVideoId}`}
                  title="Les Enfoirés - Vidéo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Other Articles Grid */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-foreground mb-10">
              {t('actualites.allEvents')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-card overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs mb-3">
                      {article.category}
                    </span>
                    <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                      <a
                        href={`https://www.instagram.com/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 border border-border hover:border-primary hover:text-primary transition-colors"
                        aria-label="Partager sur Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 border border-border hover:border-primary hover:text-primary transition-colors"
                        aria-label="Partager sur LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                {t('actualites.loadMore')}
              </Button>
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