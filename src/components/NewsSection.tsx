import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const newsArticles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...",
    date: "15 Décembre 2024",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    category: "Événement",
  },
];

export const NewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
            {t('events.badge')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            {t('events.title')}
          </h2>
          </div>
          <Link to="/actualites" className="mt-4 md:mt-0">
            <Button variant="outline">
              {t('events.cta')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs mb-2">
                  {article.category}
                </span>
                <h3 className="font-display text-base text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {article.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
