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
    <section className="relative bg-gradient-to-r from-primary via-primary/90 to-burgundy overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,white_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Badge + Event info */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Animated badge */}
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full animate-pulse">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                {featuredEvent.category}
              </span>
            </div>
            
            {/* Event details */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <h3 className="font-display text-lg md:text-xl text-white font-medium">
                {featuredEvent.title}
              </h3>
              <div className="hidden md:block w-px h-6 bg-white/30" />
              <p className="text-white/80 text-sm hidden md:block max-w-md">
                {featuredEvent.excerpt}
              </p>
            </div>
          </div>
          
          {/* Right: Date + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center text-white/70 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {featuredEvent.date}
            </div>
            
            <Link to="/actualites">
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-white text-primary hover:bg-white/90 font-medium group"
              >
                {t('events.cta')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
