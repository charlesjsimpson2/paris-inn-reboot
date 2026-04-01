import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { useToast } from '@/hooks/use-toast';
import SEODashboard from '@/components/admin/seo/SEODashboard';
import StaticPagesSEO from '@/components/admin/seo/StaticPagesSEO';
import TechnicalTags from '@/components/admin/seo/TechnicalTags';
import SEOFiles from '@/components/admin/seo/SEOFiles';
import SocialOpenGraph from '@/components/admin/seo/SocialOpenGraph';
import AnalyticsTracking from '@/components/admin/seo/AnalyticsTracking';
import ArticlesSEOAudit from '@/components/admin/seo/ArticlesSEOAudit';
import type { ExtendedSiteSettings, StaticPageSEO, ArticleSEO } from '@/components/admin/seo/types';

const SEOPage = () => {
  const [articles, setArticles] = useState<ArticleSEO[]>([]);
  const [settings, setSettings] = useState<ExtendedSiteSettings | null>(null);
  const [staticPages, setStaticPages] = useState<StaticPageSEO[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAll = async () => {
      const [articlesRes, settingsRes, pagesRes] = await Promise.all([
        supabase.from('articles').select('id, title, slug, seo_title, seo_description, seo_keywords, cover_image_url, status').order('updated_at', { ascending: false }),
        supabase.from('site_settings').select('*').limit(1).single(),
        supabase.from('static_page_seo').select('*').order('page_name'),
      ]);
      setArticles((articlesRes.data ?? []) as ArticleSEO[]);
      if (settingsRes.data) setSettings(settingsRes.data as unknown as ExtendedSiteSettings);
      setStaticPages((pagesRes.data ?? []) as unknown as StaticPageSEO[]);
      setLoading(false);
    };
    fetchAll();
  }, []);

  const handleSaveSettings = async () => {
    if (!settings) return;
    setSaving(true);
    const { id, ...rest } = settings;
    const { error } = await supabase.from('site_settings').update(rest).eq('id', id);
    setSaving(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Paramètres sauvegardés' });
    }
  };

  const publishedSlugs = articles.filter(a => a.status === 'published').map(a => a.slug);
  const staticPageSlugs = staticPages.map(p => p.page_slug);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-2xl font-bold">SEO Manager</h1>

        {/* 7. Dashboard */}
        <SEODashboard settings={settings} staticPages={staticPages} articles={articles} />

        {/* 1. Static Pages SEO */}
        <StaticPagesSEO pages={staticPages} onUpdate={setStaticPages} />

        {/* 2. Technical Tags */}
        {settings && (
          <TechnicalTags settings={settings} onChange={setSettings} onSave={handleSaveSettings} saving={saving} />
        )}

        {/* 3. SEO Files */}
        {settings && (
          <SEOFiles settings={settings} onChange={setSettings} onSave={handleSaveSettings} saving={saving} publishedSlugs={publishedSlugs} staticPageSlugs={staticPageSlugs} />
        )}

        {/* 4. Social & Open Graph */}
        {settings && (
          <SocialOpenGraph settings={settings} onChange={setSettings} onSave={handleSaveSettings} saving={saving} />
        )}

        {/* 5. Analytics & Tracking */}
        {settings && (
          <AnalyticsTracking settings={settings} onChange={setSettings} onSave={handleSaveSettings} saving={saving} />
        )}

        {/* 6. Articles SEO Audit */}
        <ArticlesSEOAudit articles={articles} />
      </div>
    </AdminLayout>
  );
};

export default SEOPage;
