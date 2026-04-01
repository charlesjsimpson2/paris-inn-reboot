export interface ExtendedSiteSettings {
  id: string;
  site_title: string;
  site_description: string;
  og_image_url: string;
  robots_txt: string;
  analytics_id: string;
  favicon_url: string;
  default_language: string;
  canonical_base_url: string;
  jsonld_organization: string;
  jsonld_localbusiness: string;
  facebook_app_id: string;
  twitter_handle: string;
  default_og_type: string;
  social_facebook: string;
  social_instagram: string;
  social_linkedin: string;
  social_google_business: string;
  gtm_id: string;
  search_console_code: string;
  bing_verification_code: string;
  facebook_pixel_id: string;
  llms_txt: string;
}

export interface StaticPageSEO {
  id: string;
  page_name: string;
  page_slug: string;
  seo_title: string;
  seo_description: string;
  og_image_url: string;
}

export interface ArticleSEO {
  id: string;
  title: string;
  slug: string;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  cover_image_url: string | null;
  status: string;
}
