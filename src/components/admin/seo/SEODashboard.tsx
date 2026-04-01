import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertCircle, BarChart3, FileText, Globe } from 'lucide-react';
import type { ExtendedSiteSettings, StaticPageSEO, ArticleSEO } from './types';

interface Props {
  settings: ExtendedSiteSettings | null;
  staticPages: StaticPageSEO[];
  articles: ArticleSEO[];
}

const SEODashboard = ({ settings, staticPages, articles }: Props) => {
  const isPageComplete = (p: StaticPageSEO) => !!p.seo_title && !!p.seo_description;
  const isArticleComplete = (a: ArticleSEO) => !!a.seo_title && !!a.seo_description;

  const completePages = staticPages.filter(isPageComplete).length;
  const completeArticles = articles.filter(isArticleComplete).length;

  // Calculate global score
  const settingsFields = settings ? [
    settings.site_title, settings.site_description, settings.og_image_url,
    settings.canonical_base_url, settings.jsonld_organization,
  ] : [];
  const filledSettings = settingsFields.filter(Boolean).length;
  const totalItems = settingsFields.length + staticPages.length + articles.length;
  const filledItems = filledSettings + completePages + completeArticles;
  const score = totalItems > 0 ? Math.round((filledItems / totalItems) * 100) : 0;

  // Critical alerts
  const alerts: string[] = [];
  if (!settings?.site_title) alerts.push('Titre du site manquant');
  if (!settings?.site_description) alerts.push('Description du site manquante');
  if (!settings?.og_image_url) alerts.push('OG Image par défaut manquante');
  if (!settings?.canonical_base_url) alerts.push('URL canonique de base manquante');
  staticPages.filter(p => !isPageComplete(p)).forEach(p => {
    alerts.push(`Page "${p.page_name}" : SEO incomplet`);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="pt-6 text-center">
          <BarChart3 className="h-8 w-8 mx-auto mb-2 text-primary" />
          <div className="text-3xl font-bold">{score}%</div>
          <p className="text-sm text-muted-foreground">Score SEO global</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6 text-center">
          <Globe className="h-8 w-8 mx-auto mb-2 text-blue-500" />
          <div className="text-3xl font-bold">{completePages}/{staticPages.length}</div>
          <p className="text-sm text-muted-foreground">Pages statiques complètes</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6 text-center">
          <FileText className="h-8 w-8 mx-auto mb-2 text-green-500" />
          <div className="text-3xl font-bold">{completeArticles}/{articles.length}</div>
          <p className="text-sm text-muted-foreground">Articles complets</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            <span className="font-semibold text-sm">Alertes ({alerts.length})</span>
          </div>
          <div className="space-y-1 max-h-24 overflow-y-auto">
            {alerts.length === 0 ? (
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <CheckCircle className="h-4 w-4" /> Tout est complet
              </div>
            ) : (
              alerts.slice(0, 5).map((a, i) => (
                <p key={i} className="text-xs text-orange-600">• {a}</p>
              ))
            )}
            {alerts.length > 5 && (
              <p className="text-xs text-muted-foreground">+ {alerts.length - 5} autres</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEODashboard;
