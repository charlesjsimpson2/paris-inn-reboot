import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, AlertCircle, Save, Globe, FileCode, BarChart3, Map } from 'lucide-react';

interface SiteSettings {
  id: string;
  site_title: string;
  site_description: string;
  og_image_url: string;
  robots_txt: string;
  analytics_id: string;
}

const SEOPage = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAll = async () => {
      const [articlesRes, settingsRes] = await Promise.all([
        supabase.from('articles').select('id, title, slug, seo_title, seo_description, seo_keywords, status').order('updated_at', { ascending: false }),
        supabase.from('site_settings').select('*').limit(1).single(),
      ]);
      setArticles(articlesRes.data ?? []);
      if (settingsRes.data) setSettings(settingsRes.data as unknown as SiteSettings);
      setLoading(false);
    };
    fetchAll();
  }, []);

  const handleSaveSettings = async () => {
    if (!settings) return;
    setSaving(true);
    const { error } = await supabase.from('site_settings').update({
      site_title: settings.site_title,
      site_description: settings.site_description,
      og_image_url: settings.og_image_url,
      robots_txt: settings.robots_txt,
      analytics_id: settings.analytics_id,
    }).eq('id', settings.id);
    setSaving(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Paramètres SEO sauvegardés' });
    }
  };

  const publishedArticles = articles.filter(a => a.status === 'published');
  const hasSeo = (a: any) => !!a.seo_title && !!a.seo_description;

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

        {/* Global SEO Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5" /> Paramètres SEO globaux</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Titre du site par défaut</Label>
              <Input
                value={settings?.site_title ?? ''}
                onChange={e => setSettings(s => s ? { ...s, site_title: e.target.value } : s)}
                placeholder="Hôtel Paris Inn"
              />
            </div>
            <div>
              <Label>Description du site</Label>
              <Textarea
                value={settings?.site_description ?? ''}
                onChange={e => setSettings(s => s ? { ...s, site_description: e.target.value } : s)}
                placeholder="Description pour les moteurs de recherche"
                rows={3}
              />
            </div>
            <div>
              <Label>URL de l'image Open Graph (og:image)</Label>
              <Input
                value={settings?.og_image_url ?? ''}
                onChange={e => setSettings(s => s ? { ...s, og_image_url: e.target.value } : s)}
                placeholder="https://..."
              />
            </div>
            <Button onClick={handleSaveSettings} disabled={saving}>
              <Save className="h-4 w-4 mr-2" /> {saving ? 'Sauvegarde...' : 'Sauvegarder'}
            </Button>
          </CardContent>
        </Card>

        {/* Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5" /> Google Analytics / Tag Manager</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>ID Google Analytics / GTM</Label>
              <Input
                value={settings?.analytics_id ?? ''}
                onChange={e => setSettings(s => s ? { ...s, analytics_id: e.target.value } : s)}
                placeholder="G-XXXXXXXXXX ou GTM-XXXXXXX"
              />
              <p className="text-xs text-muted-foreground mt-1">Entrez votre ID de mesure GA4 ou votre ID de conteneur GTM.</p>
            </div>
            <Button onClick={handleSaveSettings} disabled={saving}>
              <Save className="h-4 w-4 mr-2" /> Sauvegarder
            </Button>
          </CardContent>
        </Card>

        {/* Robots.txt */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FileCode className="h-5 w-5" /> Robots.txt</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={settings?.robots_txt ?? ''}
              onChange={e => setSettings(s => s ? { ...s, robots_txt: e.target.value } : s)}
              className="font-mono text-sm"
              rows={8}
            />
            <Button onClick={handleSaveSettings} disabled={saving}>
              <Save className="h-4 w-4 mr-2" /> Sauvegarder
            </Button>
          </CardContent>
        </Card>

        {/* Sitemap */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Map className="h-5 w-5" /> Sitemap — Articles publiés</CardTitle>
          </CardHeader>
          <CardContent>
            {publishedArticles.length === 0 ? (
              <p className="text-muted-foreground text-sm">Aucun article publié.</p>
            ) : (
              <div className="space-y-1 font-mono text-sm">
                {publishedArticles.map(a => (
                  <div key={a.id} className="text-muted-foreground">/blog/{a.slug}</div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Article SEO Audit */}
        <Card>
          <CardHeader>
            <CardTitle>Audit SEO des articles</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Article</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>SEO Titre</TableHead>
                  <TableHead>SEO Description</TableHead>
                  <TableHead>Mots-clés</TableHead>
                  <TableHead>Complet</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.map(a => (
                  <TableRow key={a.id}>
                    <TableCell className="font-medium">{a.title}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={a.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}>
                        {a.status === 'published' ? 'Publié' : 'Brouillon'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm max-w-[180px] truncate">{a.seo_title || '—'}</TableCell>
                    <TableCell className="text-sm max-w-[180px] truncate">{a.seo_description || '—'}</TableCell>
                    <TableCell className="text-sm max-w-[120px] truncate">{a.seo_keywords || '—'}</TableCell>
                    <TableCell>
                      {hasSeo(a) ? <CheckCircle className="h-4 w-4 text-green-600" /> : <AlertCircle className="h-4 w-4 text-orange-500" />}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default SEOPage;
