
-- Create category enum for articles
CREATE TYPE public.article_category AS ENUM ('concert', 'salon', 'sport', 'congres', 'guide', 'actualite');

-- Add event-specific fields to articles table
ALTER TABLE public.articles
  ADD COLUMN category public.article_category,
  ADD COLUMN event_date timestamp with time zone,
  ADD COLUMN event_end_date timestamp with time zone,
  ADD COLUMN event_venue text,
  ADD COLUMN event_venue_address text,
  ADD COLUMN hero_image_url text,
  ADD COLUMN images jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN offers jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN easy_access jsonb,
  ADD COLUMN event_stats jsonb,
  ADD COLUMN related_event_slugs text[] DEFAULT '{}',
  ADD COLUMN is_featured boolean DEFAULT false,
  ADD COLUMN sort_order integer DEFAULT 0;

-- Add index on category for filtering
CREATE INDEX idx_articles_category ON public.articles (category);

-- Add index on event_date for sorting
CREATE INDEX idx_articles_event_date ON public.articles (event_date);

-- Add index on is_featured
CREATE INDEX idx_articles_featured ON public.articles (is_featured) WHERE is_featured = true;

-- Comment the columns for clarity
COMMENT ON COLUMN public.articles.category IS 'Type of article: concert, salon, sport, congres, guide, actualite';
COMMENT ON COLUMN public.articles.event_date IS 'Start date/time of the event (used for countdown)';
COMMENT ON COLUMN public.articles.event_end_date IS 'End date of the event (used for auto-archiving)';
COMMENT ON COLUMN public.articles.event_venue IS 'Venue name (e.g. Accor Arena, Parc des Expositions)';
COMMENT ON COLUMN public.articles.event_venue_address IS 'Full address of the venue';
COMMENT ON COLUMN public.articles.hero_image_url IS 'Main hero image URL';
COMMENT ON COLUMN public.articles.images IS 'Array of {url, alt, caption} objects for gallery/secondary images';
COMMENT ON COLUMN public.articles.offers IS 'Array of {icon, title, description, details} for exclusive offers';
COMMENT ON COLUMN public.articles.easy_access IS 'Object with venue, travelTime, lines[] for transport info';
COMMENT ON COLUMN public.articles.event_stats IS 'Object with key stats (e.g. {exposants: "1800+", visiteurs: "250 000"})';
COMMENT ON COLUMN public.articles.related_event_slugs IS 'Slugs of related events to display';
COMMENT ON COLUMN public.articles.is_featured IS 'Show on homepage banner';
COMMENT ON COLUMN public.articles.sort_order IS 'Manual sort order for display';
