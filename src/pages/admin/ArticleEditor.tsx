import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import AdminLayout from '@/components/admin/AdminLayout';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useToast } from '@/hooks/use-toast';
import { ChevronDown, Save, Send, ArrowLeft } from 'lucide-react';

const slugify = (text: string) =>
  text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const ArticleEditor = () => {
  const { id } = useParams();
  const isNew = id === 'new';
  const navigate = useNavigate();
  const { userProfile } = useAuth();
  const { toast } = useToast();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [seoKeywords, setSeoKeywords] = useState('');
  const [seoOpen, setSeoOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [autoSlug, setAutoSlug] = useState(true);

  useEffect(() => {
    if (!isNew && id) {
      supabase.from('articles').select('*').eq('id', id).single().then(({ data }) => {
        if (data) {
          setTitle(data.title);
          setSlug(data.slug);
          setContent(data.content ?? '');
          setExcerpt(data.excerpt ?? '');
          setCoverImageUrl(data.cover_image_url ?? '');
          setStatus(data.status);
          setSeoTitle(data.seo_title ?? '');
          setSeoDescription(data.seo_description ?? '');
          setSeoKeywords(data.seo_keywords ?? '');
          setAutoSlug(false);
        }
      });
    }
  }, [id, isNew]);

  useEffect(() => {
    if (autoSlug) setSlug(slugify(title));
  }, [title, autoSlug]);

  const handleImageUpload = useCallback(async (): Promise<string | null> => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    return new Promise((resolve) => {
      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) return resolve(null);
        const path = `articles/${Date.now()}-${file.name}`;
        const { error } = await supabase.storage.from('media').upload(path, file);
        if (error) { toast({ title: 'Erreur upload', description: error.message, variant: 'destructive' }); return resolve(null); }
        const { data: urlData } = supabase.storage.from('media').getPublicUrl(path);
        // Also store in media table
        if (userProfile) {
          await supabase.from('media').insert({
            filename: file.name,
            storage_path: path,
            url: urlData.publicUrl,
            uploaded_by: userProfile.id,
          });
        }
        resolve(urlData.publicUrl);
      };
      input.click();
    });
  }, [toast, userProfile]);

  const handleCoverUpload = async () => {
    const url = await handleImageUpload();
    if (url) setCoverImageUrl(url);
  };

  const save = async (newStatus?: 'draft' | 'published') => {
    if (!title.trim() || !slug.trim()) {
      toast({ title: 'Titre et slug requis', variant: 'destructive' });
      return;
    }
    setSaving(true);
    const finalStatus = newStatus ?? status;
    const payload = {
      title, slug, content, excerpt,
      cover_image_url: coverImageUrl || null,
      status: finalStatus,
      seo_title: seoTitle || null,
      seo_description: seoDescription || null,
      seo_keywords: seoKeywords || null,
    };

    let error;
    if (isNew) {
      if (!userProfile) { setSaving(false); return; }
      const res = await supabase.from('articles').insert({ ...payload, created_by: userProfile.id }).select().single();
      error = res.error;
      if (!error && res.data) navigate(`/admin/articles/${res.data.id}`, { replace: true });
    } else {
      const res = await supabase.from('articles').update(payload).eq('id', id!);
      error = res.error;
    }

    setSaving(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      setStatus(finalStatus);
      setLastSaved(new Date());
      toast({ title: finalStatus === 'published' ? 'Article publié !' : 'Brouillon sauvegardé' });
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate('/admin/articles')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">{isNew ? 'Nouvel article' : 'Modifier l\'article'}</h1>
          {lastSaved && (
            <span className="text-xs text-muted-foreground ml-auto">
              Sauvegardé à {lastSaved.toLocaleTimeString('fr-FR')}
            </span>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Titre</Label>
            <Input id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Titre de l'article" />
          </div>

          <div>
            <Label htmlFor="slug">Slug</Label>
            <div className="flex gap-2 items-center">
              <Input
                id="slug"
                value={slug}
                onChange={e => { setAutoSlug(false); setSlug(e.target.value); }}
                placeholder="url-de-larticle"
              />
              <Switch checked={autoSlug} onCheckedChange={setAutoSlug} />
              <span className="text-xs text-muted-foreground whitespace-nowrap">Auto</span>
            </div>
          </div>

          <div>
            <Label>Image de couverture</Label>
            <div className="flex gap-3 items-center">
              <Input value={coverImageUrl} onChange={e => setCoverImageUrl(e.target.value)} placeholder="URL de l'image" className="flex-1" />
              <Button type="button" variant="outline" onClick={handleCoverUpload}>Upload</Button>
            </div>
            {coverImageUrl && (
              <img src={coverImageUrl} alt="cover" className="mt-2 rounded-md max-h-48 object-cover" />
            )}
          </div>

          <div>
            <Label htmlFor="excerpt">Extrait</Label>
            <Textarea id="excerpt" value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="Courte description..." rows={3} />
          </div>

          <div>
            <Label>Contenu</Label>
            <RichTextEditor content={content} onChange={setContent} onImageUpload={handleImageUpload} />
          </div>

          <Collapsible open={seoOpen} onOpenChange={setSeoOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Paramètres SEO
                <ChevronDown className={`h-4 w-4 transition-transform ${seoOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 pt-4">
              <div>
                <Label>Titre SEO</Label>
                <Input value={seoTitle} onChange={e => setSeoTitle(e.target.value)} placeholder={title} />
                <p className="text-xs text-muted-foreground mt-1">{(seoTitle || title).length}/60 caractères</p>
              </div>
              <div>
                <Label>Description SEO</Label>
                <Textarea value={seoDescription} onChange={e => setSeoDescription(e.target.value)} placeholder="Description pour les moteurs de recherche" rows={3} />
                <p className="text-xs text-muted-foreground mt-1">{seoDescription.length}/160 caractères</p>
              </div>
              <div>
                <Label>Mots-clés</Label>
                <Input value={seoKeywords} onChange={e => setSeoKeywords(e.target.value)} placeholder="mot-clé1, mot-clé2, ..." />
              </div>
              {(seoTitle || title) && (
                <div className="border rounded-md p-4 bg-muted/30">
                  <p className="text-sm font-medium text-blue-600">{seoTitle || title}</p>
                  <p className="text-xs text-green-700">{`paris-inn.com/blog/${slug}`}</p>
                  <p className="text-xs text-muted-foreground mt-1">{seoDescription || excerpt || 'Aucune description.'}</p>
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>

          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => save('draft')} disabled={saving}>
              <Save className="h-4 w-4 mr-2" /> Sauvegarder brouillon
            </Button>
            <Button onClick={() => save('published')} disabled={saving}>
              <Send className="h-4 w-4 mr-2" /> Publier
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ArticleEditor;
