import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Save, BarChart3 } from 'lucide-react';
import type { ExtendedSiteSettings } from './types';

interface Props {
  settings: ExtendedSiteSettings;
  onChange: (settings: ExtendedSiteSettings) => void;
  onSave: () => void;
  saving: boolean;
}

const AnalyticsTracking = ({ settings, onChange, onSave, saving }: Props) => {
  const update = (key: keyof ExtendedSiteSettings, value: string) => {
    onChange({ ...settings, [key]: value });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5" /> Analytics & Tracking</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Google Analytics 4 ID</Label>
            <Input value={settings.analytics_id} onChange={e => update('analytics_id', e.target.value)} placeholder="G-XXXXXXXXXX" />
          </div>
          <div>
            <Label>Google Tag Manager ID</Label>
            <Input value={settings.gtm_id} onChange={e => update('gtm_id', e.target.value)} placeholder="GTM-XXXXXXX" />
          </div>
          <div>
            <Label>Google Search Console — code de vérification</Label>
            <Input value={settings.search_console_code} onChange={e => update('search_console_code', e.target.value)} placeholder="google-site-verification=..." />
            <p className="text-xs text-muted-foreground mt-1">Contenu de la balise meta de vérification Google</p>
          </div>
          <div>
            <Label>Bing Webmaster — code de vérification</Label>
            <Input value={settings.bing_verification_code} onChange={e => update('bing_verification_code', e.target.value)} placeholder="XXXXXXXXXXXXXXXX" />
          </div>
          <div>
            <Label>Facebook Pixel ID</Label>
            <Input value={settings.facebook_pixel_id} onChange={e => update('facebook_pixel_id', e.target.value)} placeholder="123456789012345" />
          </div>
        </div>
        <Button onClick={onSave} disabled={saving}>
          <Save className="h-4 w-4 mr-2" /> {saving ? 'Sauvegarde...' : 'Enregistrer'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AnalyticsTracking;
