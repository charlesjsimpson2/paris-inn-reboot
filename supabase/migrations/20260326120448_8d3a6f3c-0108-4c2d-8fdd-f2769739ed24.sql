
CREATE TABLE public.article_translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid NOT NULL REFERENCES public.articles(id) ON DELETE CASCADE,
  language text NOT NULL,
  title text,
  excerpt text,
  content text,
  seo_title text,
  seo_description text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (article_id, language)
);

ALTER TABLE public.article_translations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read translations" ON public.article_translations
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Editors can manage translations" ON public.article_translations
  FOR ALL TO authenticated USING (is_editor_or_above(auth.uid()));
