import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Share2 } from 'lucide-react';
import type { ExtendedSiteSettings } from './types';

interface Props {
  settings: ExtendedSiteSettings;
  onChange: (settings: ExtendedSiteSettings) => void;
  onSave: () => void;
  saving: boolean;
}

const SocialOpenGraph = ({ settings, onChange, onSave, saving }: Props) => {
  const update = (key: keyof ExtendedSiteSettings, value: string) => {
    onChange({ ...settings, [key]: value });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Share2 className="h-5 w-5" /> Réseaux sociaux & Open Graph</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Facebook App ID</Label>
            <Input value={settings.facebook_app_id} onChange={e => update('facebook_app_id', e.target.value)} placeholder="123456789" />
          </div>
          <div>
            <Label>Twitter/X @handle</Label>
            <Input value={settings.twitter_handle} onChange={e => update('twitter_handle', e.target.value)} placeholder="@monhotel" />
          </div>
          <div>
            <Label>Type OG par défaut</Label>
            <Select value={settings.default_og_type} onValueChange={v => update('default_og_type', v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="website">website</SelectItem>
                <SelectItem value="article">article</SelectItem>
                <SelectItem value="hotel">hotel</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="border-t pt-4">
          <h4 className="font-medium mb-3">Comptes réseaux sociaux</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Facebook</Label>
              <Input value={settings.social_facebook} onChange={e => update('social_facebook', e.target.value)} placeholder="https://facebook.com/..." />
            </div>
            <div>
              <Label>Instagram</Label>
              <Input value={settings.social_instagram} onChange={e => update('social_instagram', e.target.value)} placeholder="https://instagram.com/..." />
            </div>
            <div>
              <Label>LinkedIn</Label>
              <Input value={settings.social_linkedin} onChange={e => update('social_linkedin', e.target.value)} placeholder="https://linkedin.com/..." />
            </div>
            <div>
              <Label>Google Business</Label>
              <Input value={settings.social_google_business} onChange={e => update('social_google_business', e.target.value)} placeholder="https://g.page/..." />
            </div>
          </div>
        </div>
        <Button onClick={onSave} disabled={saving}>
          <Save className="h-4 w-4 mr-2" /> {saving ? 'Sauvegarde...' : 'Enregistrer'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SocialOpenGraph;
