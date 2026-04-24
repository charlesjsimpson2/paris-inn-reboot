import { useEffect, useMemo, useState } from "react";
import { Calendar, Clock3, Gift, MapPin, Car, Shirt, Trophy, Zap, Ticket, Train, Music2, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EventBackButton } from "@/components/EventBackButton";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { EventHotelPromo, type EventType } from "@/components/EventHotelPromo";
import { RelatedEvents } from "@/components/RelatedEvents";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Tables } from "@/integrations/supabase/types";

type Article = Tables<"articles">;

type Offer = {
  icon?: string;
  title?: string;
  description?: string;
  details?: string;
};

type EasyAccess = {
  venue?: string;
  travelTime?: string;
  metroLine?: string;
  metroRoute?: string;
};

interface DynamicEventArticleProps {
  article: Article;
  canonicalBasePath: "/blog" | "/evenements";
}

const iconMap: Record<string, LucideIcon> = {
  Car,
  Shirt,
  Trophy,
  Gift,
  Ticket,
  Train,
  MapPin,
  Music: Music2,
  Sparkles,
};

const toDate = (value: string | null | undefined) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const formatDateRange = (dates: Date[], language: string) => {
  if (dates.length === 0) return null;

  const sortedDates = [...dates].sort((a, b) => a.getTime() - b.getTime());
  const formatter = new Intl.DateTimeFormat(language, {
    day: "numeric",
    month: "long",
    year: sortedDates.length > 1 ? undefined : "numeric",
  });

  if (sortedDates.length === 1) {
    return new Intl.DateTimeFormat(language, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(sortedDates[0]);
  }

  const first = sortedDates[0];
  const last = sortedDates[sortedDates.length - 1];

  if (first.toDateString() === last.toDateString()) {
    return new Intl.DateTimeFormat(language, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(first);
  }

  return `${formatter.format(first)} – ${new Intl.DateTimeFormat(language, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(last)}`;
};

const getPromoEventType = (category: Article["category"]): EventType => {
  switch (category) {
    case "salon":
      return "salon";
    case "sport":
      return "sport";
    default:
      return "concert";
  }
};

export const DynamicEventArticle = ({ article, canonicalBasePath }: DynamicEventArticleProps) => {
  const { t, language } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const heroImage = article.hero_image_url || article.cover_image_url || undefined;
  const description = article.seo_description || article.excerpt || stripHtml(article.content || "").slice(0, 155);

  const eventDates = useMemo(() => {
    const values = [toDate(article.event_date), toDate(article.event_end_date)].filter((value): value is Date => Boolean(value));
    return values.sort((a, b) => a.getTime() - b.getTime());
  }, [article.event_date, article.event_end_date]);

  const targetDate = eventDates[0]?.getTime() ?? null;
  const dateLabel = useMemo(() => formatDateRange(eventDates, language), [eventDates, language]);

  const offers = useMemo(() => {
    if (!Array.isArray(article.offers)) return [] as Offer[];
    return article.offers.filter((item): item is Offer => typeof item === "object" && item !== null);
  }, [article.offers]);

  const easyAccess = useMemo(() => {
    if (!article.easy_access || typeof article.easy_access !== "object" || Array.isArray(article.easy_access)) {
      return null;
    }

    return article.easy_access as EasyAccess;
  }, [article.easy_access]);

  useEffect(() => {
    if (!targetDate) return;

    const updateCountdown = () => {
      const now = Date.now();
      const distance = Math.max(targetDate - now, 0);

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, [targetDate]);

  const countdownItems = [
    { value: countdown.days, label: t("agriculture.countdown.days") },
    { value: countdown.hours, label: t("agriculture.countdown.hours") },
    { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
    { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
  ];

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
        {/* Breadcrumb bar — sits below the fixed header */}
        <div className="pt-24 md:pt-28 bg-background border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <Breadcrumbs
              items={[
                { label: t("nav.events"), pageKey: "events" },
                { label: article.title },
              ]}
            />
          </div>
        </div>

        <EventBackButton />

        <section className="border-b border-border bg-gradient-to-b from-muted/60 via-background to-background">
          <div className="container mx-auto px-4 py-10 md:py-16">
            <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="order-2 lg:order-1">
                {heroImage ? (
                  <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                    <img
                      src={heroImage}
                      alt={article.title}
                      className="h-full min-h-[320px] w-full object-cover md:min-h-[520px]"
                      loading="eager"
                    />
                  </div>
                ) : (
                  <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-border bg-card text-muted-foreground md:min-h-[520px]">
                    {article.title}
                  </div>
                )}
              </div>

              <div className="order-1 space-y-6 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Zap className="h-4 w-4" />
                  <span>{article.category}</span>
                </div>

                <div className="space-y-4">
                  <h1 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
                    {article.title}
                  </h1>
                  {article.excerpt && (
                    <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                      {article.excerpt}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  {dateLabel && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{dateLabel}</span>
                    </div>
                  )}
                  {(article.event_venue || easyAccess?.venue) && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{article.event_venue || easyAccess?.venue}</span>
                    </div>
                  )}
                </div>

                {targetDate && (
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">
                    <div className="mb-4 flex items-center gap-2 text-primary">
                      <Clock3 className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-[0.2em]">{t("indochine.countdown")}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3 text-center md:gap-4">
                      {countdownItems.map((item) => (
                        <div key={item.label} className="rounded-2xl bg-muted px-3 py-4">
                          <div className="font-display text-2xl text-foreground md:text-4xl">{item.value}</div>
                          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {offers.length > 0 && (
          <section className="bg-muted/30 py-12">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-primary-foreground shadow-lg">
                    <Gift className="h-4 w-4" />
                    <span className="text-sm font-bold uppercase tracking-wider">{t("agriculture.exclusiveOffers")}</span>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {offers.map((offer, index) => {
                    const Icon = iconMap[offer.icon || ""] || Gift;

                    return (
                      <div key={`${offer.title || "offer"}-${index}`} className="rounded-2xl border border-border bg-card p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        <div className="mb-4 flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h2 className="font-display text-xl text-foreground">{offer.title || t("agriculture.exclusiveOffers")}</h2>
                            {offer.details && (
                              <div className="mt-2 inline-flex rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                                {offer.details}
                              </div>
                            )}
                          </div>
                        </div>
                        {offer.description && <p className="text-sm leading-relaxed text-muted-foreground">{offer.description}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {easyAccess?.venue && easyAccess?.travelTime && (
          <EasyAccessSection
            venue={easyAccess.venue}
            travelTime={easyAccess.travelTime}
            metroLine={easyAccess.metroLine}
            metroRoute={easyAccess.metroRoute}
          />
        )}

        <section className="bg-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-6 shadow-xl md:p-10">
              <article
                className="prose prose-lg max-w-none whitespace-pre-wrap prose-headings:font-display prose-h2:text-3xl prose-h3:text-2xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-strong:text-foreground prose-a:text-primary prose-a:underline prose-a:underline-offset-2"
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />
            </div>
          </div>
        </section>

        <EventHotelPromo
          eventName={article.title}
          compact
          eventType={getPromoEventType(article.category)}
        />

        <RelatedEvents currentEventId={article.slug} />
      </main>

      <Footer />
    </div>
  );
};
