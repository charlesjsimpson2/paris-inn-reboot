-- Allow public visitors to read published articles on the website
DROP POLICY IF EXISTS "Viewers can read published articles" ON public.articles;

CREATE POLICY "Public can read published articles"
ON public.articles
FOR SELECT
TO anon, authenticated
USING (status = 'published'::article_status);