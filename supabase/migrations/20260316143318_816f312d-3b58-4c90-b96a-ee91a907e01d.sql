
-- Create a site_settings table for global config (single-row pattern)
CREATE TABLE public.site_settings (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  site_title text DEFAULT 'Hôtel Paris Inn',
  site_description text DEFAULT '',
  og_image_url text DEFAULT '',
  robots_txt text DEFAULT 'User-agent: *
Allow: /',
  analytics_id text DEFAULT '',
  hotel_name text DEFAULT 'Hôtel Paris Inn',
  contact_email text DEFAULT '',
  contact_phone text DEFAULT '',
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_by uuid REFERENCES public.user_profiles(id)
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- All authenticated users can read settings
CREATE POLICY "Authenticated users can read settings"
ON public.site_settings FOR SELECT TO authenticated
USING (true);

-- Only super_admin can update settings
CREATE POLICY "Super admins can update settings"
ON public.site_settings FOR UPDATE TO authenticated
USING (public.is_super_admin(auth.uid()));

-- Only super_admin can insert settings
CREATE POLICY "Super admins can insert settings"
ON public.site_settings FOR INSERT TO authenticated
WITH CHECK (public.is_super_admin(auth.uid()));

-- Trigger for updated_at
CREATE TRIGGER update_site_settings_updated_at
BEFORE UPDATE ON public.site_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default row
INSERT INTO public.site_settings (site_title, hotel_name) VALUES ('Hôtel Paris Inn', 'Hôtel Paris Inn');

-- Add email column to user_profiles for display (populated from auth)
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS email text;

-- Add is_active column to user_profiles for deactivation
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS is_active boolean NOT NULL DEFAULT true;
