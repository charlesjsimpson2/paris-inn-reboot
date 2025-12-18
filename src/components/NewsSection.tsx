import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const newsArticles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "15 Décembre 2024",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    category: "Événement",
  },
];

export const NewsSection = () => {
  const { t } = useLanguage();
  const featuredEvent = newsArticles[0];

  return (
    <section className="relative bg-gradient-to-r from-primary via-burgundy to-primary overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy/30 via-transparent to-burgundy/30 animate-pulse" />
      
      {/* Moving shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>
      
      {/* Glow accents */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-32 bg-burgundy/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-48 h-24 bg-burgundy/20 rounded-full blur-2xl animate-pulse animation-delay-200" />
      
      <div className="container mx-auto px-4 py-5 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Badge + Event info */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Animated badge */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse" />
              <span className="text-primary-foreground text-sm font-bold uppercase tracking-wider">
                {featuredEvent.category}
              </span>
            </div>
            
            {/* Event details */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <h3 className="font-display text-xl md:text-2xl text-primary-foreground font-semibold">
                {featuredEvent.title}
              </h3>
              <div className="hidden md:block w-px h-8 bg-white/30" />
              <p className="text-primary-foreground/80 text-sm hidden md:block max-w-md">
                {featuredEvent.excerpt}
              </p>
            </div>
          </div>
          
          {/* Right: Date + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center text-primary-foreground/80 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {featuredEvent.date}
            </div>
            
            <Link to="/actualites">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-primary-foreground hover:text-primary font-semibold shadow-lg group transition-all duration-300 hover:scale-105"
              >
                {t('events.cta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
