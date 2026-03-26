import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText } from "lucide-react";

interface ArticleSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  hero_image_url: string | null;
}

export const SeminarArticlesSection = () => {
  const [articles, setArticles] = useState<ArticleSummary[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await supabase
        .from("articles")
        .select("id, title, slug, excerpt, cover_image_url")
        .eq("status", "published")
        .eq("category", "seminaires")
        .order("sort_order", { ascending: true, nullsFirst: false })
        .order("created_at", { ascending: false });
      if (data) setArticles(data);
    };
    fetchArticles();
  }, []);

  if (articles.length === 0) return null;

  return (
    <section className="py-20 bg-burgundy/10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-burgundy font-semibold text-sm uppercase tracking-[0.2em]">
            En savoir plus
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3">
            Découvrez nos espaces & services
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/seminaires/${article.slug}`}
              className="group bg-background border-2 border-burgundy/20 overflow-hidden hover:border-burgundy/60 hover:shadow-xl hover:shadow-burgundy/10 transition-all duration-300 flex flex-col h-full rounded-lg hover:-translate-y-1"
            >
              {article.cover_image_url ? (
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.cover_image_url}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="aspect-[16/9] bg-burgundy/10 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-burgundy/40" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg text-foreground group-hover:text-burgundy transition-colors line-clamp-2 min-h-[3rem]">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="text-muted-foreground text-sm flex-1 mt-3 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                )}
                <span className="text-burgundy text-sm font-bold mt-5 inline-flex items-center gap-1.5 group-hover:gap-3 transition-all border-b-2 border-burgundy/30 pb-1 self-start group-hover:border-burgundy/60">
                  Voir la page <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
