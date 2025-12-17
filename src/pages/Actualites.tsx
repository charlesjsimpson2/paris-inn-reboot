import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample news data - will be replaced with real data
const newsArticles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "15 Décembre 2024",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    category: "Événement",
  },
  {
    id: 2,
    title: "Consectetur adipiscing elit",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    date: "10 Décembre 2024",
    readTime: "2 min",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=400&fit=crop",
    category: "Restauration",
  },
  {
    id: 3,
    title: "Sed do eiusmod tempor",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    date: "5 Décembre 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop",
    category: "Partenariat",
  },
  {
    id: 4,
    title: "Ut enim ad minim veniam",
    excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
    date: "1 Décembre 2024",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
    category: "Hôtel",
  },
  {
    id: 5,
    title: "Quis nostrud exercitation",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    date: "25 Novembre 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=600&h=400&fit=crop",
    category: "Paris",
  },
  {
    id: 6,
    title: "Duis aute irure dolor",
    excerpt: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit...",
    date: "20 Novembre 2024",
    readTime: "2 min",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    category: "Offre",
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

        {/* Featured Article */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:pl-8">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm mb-4">
                  {newsArticles[0].category}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  {newsArticles[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {newsArticles[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {newsArticles[0].readTime} {t('actualites.readTime')}
                  </span>
                </div>
                <Button variant="gold">
                  {t('actualites.learnMore')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-foreground mb-10">
              {t('actualites.allEvents')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
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