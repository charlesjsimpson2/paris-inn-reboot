import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { ArrowRight, CalendarDays, Lightbulb } from "lucide-react";

type ConseilItem = Pick<
  Tables<"articles">,
  "id" | "title" | "slug" | "excerpt" | "cover_image_url" | "hero_image_url" | "created_at" | "updated_at"
>;

const formatDate = (date: string | null) => {
  if (!date) return null;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

const ConseilsIndex = () => {
  const [articles, setArticles] = useState<ConseilItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("id, title, slug, excerpt, cover_image_url, hero_image_url, created_at, updated_at")
        .eq("status", "published")
        .eq("category", "conseils")
        .order("created_at", { ascending: false });

      if (!error && data) setArticles(data);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Conseils séjour Paris 13 – Hôtel Inn Design"
        description="Nos meilleurs conseils pour préparer votre séjour à Paris 13e : astuces pratiques, bons plans et recommandations autour de l'Hôtel Inn Design Place d'Italie."
        canonical="/conseils"
      />
      <Header />

      <main>
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 pt-24 pb-14 md:pt-32 md:pb-20">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <div className="flex items-center justify-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <p className="font-body text-sm uppercase tracking-[0.2em] text-primary">Conseils</p>
              </div>
              <h1 className="font-display text-4xl text-foreground md:text-6xl">
                Nos conseils pour votre séjour
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                Astuces pratiques, bons plans et recommandations pour profiter au mieux de votre passage à Paris.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 py-12 md:py-16">
            {loading ? (
              <div className="flex min-h-[30vh] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              </div>
            ) : articles.length === 0 ? (
              <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card px-6 py-12 text-center shadow-sm">
                <h2 className="font-display text-3xl text-foreground">Aucun conseil publié</h2>
                <p className="mt-3 text-muted-foreground">
                  Les prochains conseils apparaîtront ici dès leur publication.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {articles.map((article) => {
                  const image = article.hero_image_url || article.cover_image_url;
                  const publishedDate = formatDate(article.updated_at || article.created_at);

                  return (
                    <article
                      key={article.id}
                      className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Link to={`/conseils/${article.slug}`} className="block h-full">
                        {image && (
                          <div className="overflow-hidden border-b border-border">
                            <img
                              src={image}
                              alt={article.title}
                              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        )}

                        <div className="space-y-4 p-6">
                          <h2 className="font-display text-2xl leading-tight text-foreground">
                            {article.title}
                          </h2>

                          {article.excerpt && (
                            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                              {article.excerpt}
                            </p>
                          )}

                          <div className="flex items-center justify-between gap-4 pt-2 text-sm text-muted-foreground">
                            {publishedDate ? (
                              <span className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-primary" />
                                {publishedDate}
                              </span>
                            ) : <span />}

                            <span className="inline-flex items-center gap-2 font-medium text-foreground">
                              Lire le conseil
                              <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConseilsIndex;
