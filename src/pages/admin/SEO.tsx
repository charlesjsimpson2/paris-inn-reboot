import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle } from 'lucide-react';

const SEOPage = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('articles')
      .select('id, title, slug, seo_title, seo_description, seo_keywords, status')
      .order('updated_at', { ascending: false })
      .then(({ data }) => {
        setArticles(data ?? []);
        setLoading(false);
      });
  }, []);

  const hasSeo = (a: any) => !!a.seo_title && !!a.seo_description;

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Vue SEO</h1>
        <p className="text-muted-foreground">Aperçu de la couverture SEO de vos articles.</p>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="bg-card border rounded-lg">
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
                    <TableCell className="text-sm max-w-[200px] truncate">{a.seo_title || '—'}</TableCell>
                    <TableCell className="text-sm max-w-[200px] truncate">{a.seo_description || '—'}</TableCell>
                    <TableCell className="text-sm max-w-[150px] truncate">{a.seo_keywords || '—'}</TableCell>
                    <TableCell>
                      {hasSeo(a) ? <CheckCircle className="h-4 w-4 text-green-500" /> : <AlertCircle className="h-4 w-4 text-orange-500" />}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default SEOPage;
