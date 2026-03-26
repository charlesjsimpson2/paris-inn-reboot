import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { DynamicEventArticle } from "@/components/DynamicEventArticle";

interface BlogArticleProps {
  forcedSlug?: string;
  canonicalBasePath?: string;
}

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const formatDate = (date: string | null) => {
  if (!date) return null;

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

const isEventCategory = (category: Tables<"articles">["category"]) =>
  category === "concert" || category === "salon" || category === "sport" || category === "congres";

const getCategoryBasePath = (category: Tables<"articles">["category"]) => {
  if (isEventCategory(category)) return "/evenements";
  if (category === "seminaires") return "/seminaires";
  if (category === "chambres") return "/nos-chambres";
  if (category === "conseils") return "/conseils";
  return "/blog";
};

const BlogArticle = ({ forcedSlug, canonicalBasePath = "/blog" }: BlogArticleProps) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const slug = forcedSlug ?? routeSlug;
  const [article, setArticle] = useState<Tables<"articles"> | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
        setArticle(null);
      } else {
        // Check if the article is being accessed via the correct URL prefix
        const correctBasePath = getCategoryBasePath(data.category);
        if (!forcedSlug && canonicalBasePath !== correctBasePath) {
          // Wrong prefix — redirect to the correct one
          setRedirectTo(`${correctBasePath}/${data.slug}`);
          setLoading(false);
          return;
        }
        setArticle(data);
        setNotFound(false);
      }

      setLoading(false);
    };

    fetchArticle();
  }, [slug, forcedSlug, canonicalBasePath]);

  const description = useMemo(() => {
    if (!article) return "";

    return (
      article.seo_description ||
      article.excerpt ||
      stripHtml(article.content || "").slice(0, 155)
    );
  }, [article]);

  const heroImage = article?.hero_image_url || article?.cover_image_url || undefined;
  const publishedDate = formatDate(article?.event_date ?? article?.created_at ?? null);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-16">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Article introuvable"
          description="Cet article n'existe pas ou n'est pas encore publié."
          canonical={slug ? `${canonicalBasePath}/${slug}` : undefined}
          noIndex
        />
        <Header />
        <main className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-16">
          <div className="max-w-xl space-y-4 text-center">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary">Blog</p>
            <h1 className="font-display text-4xl text-foreground">Article introuvable</h1>
            <p className="text-muted-foreground">
              L’article que vous cherchez n’est pas accessible pour le moment.
            </p>
            <Button asChild variant="elegant">
              <Link to="/evenements">Voir les actualités</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isEventCategory(article.category) && canonicalBasePath === "/evenements") {
    return <DynamicEventArticle article={article} canonicalBasePath={canonicalBasePath} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={article.seo_title || article.title}
        description={description}
        canonical={`${canonicalBasePath}/${article.slug}`}
        ogImage={heroImage}
        ogType="article"
      />
      <Header />

      <main>
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <Button asChild variant="ghost" className="mb-6 px-0 hover:bg-transparent">
              <Link to="/evenements">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux actualités
              </Link>
            </Button>

            <div className="mx-auto max-w-4xl space-y-6">
              {article.category && (
                <p className="font-body text-sm uppercase tracking-[0.2em] text-primary">
                  {article.category}
                </p>
              )}

              <h1 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
                {article.title}
              </h1>

              {(article.excerpt || publishedDate) && (
                <div className="space-y-3">
                  {article.excerpt && (
                    <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                      {article.excerpt}
                    </p>
                  )}
                  {publishedDate && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      <span>{publishedDate}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {heroImage && (
          <section className="bg-background">
            <div className="container mx-auto px-4 py-8 md:py-10">
              <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={heroImage}
                  alt={article.title}
                  className="h-[280px] w-full object-cover md:h-[480px]"
                  loading="eager"
                />
              </div>
            </div>
          </section>
        )}

        <section className="bg-background">
          <div className="container mx-auto px-4 pb-16 pt-4 md:pb-24">
            <article className="mx-auto max-w-3xl">
              <div
                className="prose prose-lg max-w-none whitespace-pre-wrap prose-headings:font-display prose-h2:text-3xl prose-h3:text-2xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-strong:text-foreground prose-a:text-primary prose-a:underline prose-a:underline-offset-2"
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle;
