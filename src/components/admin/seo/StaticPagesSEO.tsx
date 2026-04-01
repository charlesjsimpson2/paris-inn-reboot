import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Save, CheckCircle, AlertCircle, Globe } from 'lucide-react';
import type { StaticPageSEO } from './types';

interface Props {
  pages: StaticPageSEO[];
  onUpdate: (pages: StaticPageSEO[]) => void;
}

const StaticPagesSEO = ({ pages, onUpdate }: Props) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<StaticPageSEO | null>(null);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const startEdit = (page: StaticPageSEO) => {
    setEditingId(page.id);
    setForm({ ...page });
  };

  const handleSave = async () => {
    if (!form) return;
    setSaving(true);
    const { error } = await supabase.from('static_page_seo').update({
      seo_title: form.seo_title,
      seo_description: form.seo_description,
      og_image_url: form.og_image_url,
    }).eq('id', form.id);
    setSaving(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Page SEO sauvegardée' });
      onUpdate(pages.map(p => p.id === form.id ? form : p));
      setEditingId(null);
      setForm(null);
    }
  };

  const isComplete = (p: StaticPageSEO) => !!p.seo_title && !!p.seo_description;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" /> SEO des pages statiques
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {pages.map(page => {
            const editing = editingId === page.id;
            const current = editing && form ? form : page;
            return (
              <div key={page.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{page.page_name}</span>
                    <code className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{page.page_slug}</code>
                    {isComplete(page) ? (
                      <Badge variant="secondary" className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" />Complet</Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700"><AlertCircle className="h-3 w-3 mr-1" />Incomplet</Badge>
                    )}
                  </div>
                  {!editing && (
                    <Button variant="outline" size="sm" onClick={() => startEdit(page)}>Modifier</Button>
                  )}
                </div>
                {editing && form && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium">Title tag</label>
                      <Input value={form.seo_title} onChange={e => setForm({ ...form, seo_title: e.target.value })} placeholder="Title tag" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Meta description</label>
                      <Input value={form.seo_description} onChange={e => setForm({ ...form, seo_description: e.target.value })} placeholder="Meta description" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">OG Image URL</label>
                      <Input value={form.og_image_url} onChange={e => setForm({ ...form, og_image_url: e.target.value })} placeholder="https://..." />
                    </div>
                    {form.og_image_url && (
                      <div className="flex items-end">
                        <img src={form.og_image_url} alt="OG Preview" className="h-16 rounded border object-cover" />
                      </div>
                    )}
                    <div className="col-span-full flex gap-2">
                      <Button onClick={handleSave} disabled={saving} size="sm">
                        <Save className="h-4 w-4 mr-1" /> {saving ? 'Sauvegarde...' : 'Enregistrer'}
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => { setEditingId(null); setForm(null); }}>Annuler</Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default StaticPagesSEO;
