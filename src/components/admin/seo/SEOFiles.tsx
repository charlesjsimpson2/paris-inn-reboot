import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Save, FileCode, Map, RefreshCw, Bot } from 'lucide-react';
import type { ExtendedSiteSettings } from './types';

interface Props {
  settings: ExtendedSiteSettings;
  onChange: (settings: ExtendedSiteSettings) => void;
  onSave: () => void;
  saving: boolean;
  publishedSlugs: string[];
  staticPageSlugs: string[];
}

const SEOFiles = ({ settings, onChange, onSave, saving, publishedSlugs, staticPageSlugs }: Props) => {
  const [sitemapKey, setSitemapKey] = useState(0);

  const baseUrl = settings.canonical_base_url || 'https://hotel-inn-paris.fr';

  const generateSitemap = () => {
    const allUrls = [
      ...staticPageSlugs.map(s => `${baseUrl}${s}`),
      ...publishedSlugs.map(s => `${baseUrl}/blog/${s}`),
    ];
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`).join('\n')}
</urlset>`;
  };

  return (
    <div className="space-y-6">
      {/* Robots.txt */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><FileCode className="h-5 w-5" /> robots.txt</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={settings.robots_txt}
            onChange={e => onChange({ ...settings, robots_txt: e.target.value })}
            className="font-mono text-sm"
            rows={8}
          />
          <Button onClick={onSave} disabled={saving}>
            <Save className="h-4 w-4 mr-2" /> Enregistrer
          </Button>
        </CardContent>
      </Card>

      {/* Sitemap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Map className="h-5 w-5" /> sitemap.xml (auto-généré)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            key={sitemapKey}
            value={generateSitemap()}
            readOnly
            className="font-mono text-xs"
            rows={12}
          />
          <Button variant="outline" onClick={() => setSitemapKey(k => k + 1)}>
            <RefreshCw className="h-4 w-4 mr-2" /> Régénérer
          </Button>
        </CardContent>
      </Card>

      {/* LLMs.txt */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5" /> llms.txt</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Label>Contenu du fichier llms.txt (pour les crawlers IA)</Label>
          <Textarea
            value={settings.llms_txt}
            onChange={e => onChange({ ...settings, llms_txt: e.target.value })}
            className="font-mono text-sm"
            rows={8}
            placeholder="Décrivez votre site pour les crawlers IA..."
          />
          <Button onClick={onSave} disabled={saving}>
            <Save className="h-4 w-4 mr-2" /> Enregistrer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOFiles;
