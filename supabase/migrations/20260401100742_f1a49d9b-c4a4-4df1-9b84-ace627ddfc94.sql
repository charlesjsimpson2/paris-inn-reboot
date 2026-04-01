
-- Add new columns to site_settings for extended SEO
ALTER TABLE public.site_settings
ADD COLUMN IF NOT EXISTS favicon_url text DEFAULT '',
ADD COLUMN IF NOT EXISTS default_language text DEFAULT 'fr',
ADD COLUMN IF NOT EXISTS canonical_base_url text DEFAULT 'https://hotel-inn-paris.fr',
ADD COLUMN IF NOT EXISTS jsonld_organization text DEFAULT '',
ADD COLUMN IF NOT EXISTS jsonld_localbusiness text DEFAULT '',
ADD COLUMN IF NOT EXISTS facebook_app_id text DEFAULT '',
ADD COLUMN IF NOT EXISTS twitter_handle text DEFAULT '',
ADD COLUMN IF NOT EXISTS default_og_type text DEFAULT 'website',
ADD COLUMN IF NOT EXISTS social_facebook text DEFAULT '',
ADD COLUMN IF NOT EXISTS social_instagram text DEFAULT '',
ADD COLUMN IF NOT EXISTS social_linkedin text DEFAULT '',
ADD COLUMN IF NOT EXISTS social_google_business text DEFAULT '',
ADD COLUMN IF NOT EXISTS gtm_id text DEFAULT '',
ADD COLUMN IF NOT EXISTS search_console_code text DEFAULT '',
ADD COLUMN IF NOT EXISTS bing_verification_code text DEFAULT '',
ADD COLUMN IF NOT EXISTS facebook_pixel_id text DEFAULT '',
ADD COLUMN IF NOT EXISTS llms_txt text DEFAULT '';

-- Create static_page_seo table
CREATE TABLE public.static_page_seo (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_name text NOT NULL,
  page_slug text NOT NULL UNIQUE,
  seo_title text DEFAULT '',
  seo_description text DEFAULT '',
  og_image_url text DEFAULT '',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.static_page_seo ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read static page seo"
ON public.static_page_seo FOR SELECT TO authenticated
USING (true);

CREATE POLICY "Super admins can manage static page seo"
ON public.static_page_seo FOR ALL TO authenticated
USING (is_super_admin(auth.uid()));

-- Seed static pages
INSERT INTO public.static_page_seo (page_name, page_slug) VALUES
('Accueil', '/'),
('Nos Chambres', '/nos-chambres'),
('Séminaires', '/seminaires'),
('Petit-déjeuner', '/petit-dejeuner'),
('Contact', '/contact'),
('Mentions légales', '/mentions-legales'),
('WiFi', '/wifi'),
('Localisation', '/localisation'),
('Actualités', '/actualites'),
('Découvrir Paris', '/decouvrir-paris'),
('Blog', '/blog'),
('Conseils', '/conseils'),
('Réservation Séminaire', '/reservation-seminaire')
ON CONFLICT (page_slug) DO NOTHING;

-- Trigger for updated_at
CREATE TRIGGER update_static_page_seo_updated_at
  BEFORE UPDATE ON public.static_page_seo
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
