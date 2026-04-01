import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, FileText, Filter } from 'lucide-react';
import type { ArticleSEO } from './types';

interface Props {
  articles: ArticleSEO[];
}

const ArticlesSEOAudit = ({ articles }: Props) => {
  const [filter, setFilter] = useState<'all' | 'complete' | 'incomplete'>('all');

  const hasSeo = (a: ArticleSEO) => !!a.seo_title && !!a.seo_description;
  const completeCount = articles.filter(hasSeo).length;

  const filtered = articles.filter(a => {
    if (filter === 'complete') return hasSeo(a);
    if (filter === 'incomplete') return !hasSeo(a);
    return true;
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5" /> Audit SEO des articles</CardTitle>
          <Badge variant="outline" className="text-sm">
            {completeCount}/{articles.length} complets
          </Badge>
        </div>
        <div className="flex gap-2 mt-2">
          <Button variant={filter === 'all' ? 'default' : 'outline'} size="sm" onClick={() => setFilter('all')}>
            Tous
          </Button>
          <Button variant={filter === 'complete' ? 'default' : 'outline'} size="sm" onClick={() => setFilter('complete')}>
            <CheckCircle className="h-3 w-3 mr-1" /> Complets
          </Button>
          <Button variant={filter === 'incomplete' ? 'default' : 'outline'} size="sm" onClick={() => setFilter('incomplete')}>
            <AlertCircle className="h-3 w-3 mr-1" /> Incomplets
          </Button>
        </div>
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
              <TableHead>OG Image</TableHead>
              <TableHead>Complet</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map(a => (
              <TableRow key={a.id}>
                <TableCell className="font-medium max-w-[160px] truncate">{a.title}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={a.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}>
                    {a.status === 'published' ? 'Publié' : 'Brouillon'}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm max-w-[150px] truncate">{a.seo_title || '—'}</TableCell>
                <TableCell className="text-sm max-w-[150px] truncate">{a.seo_description || '—'}</TableCell>
                <TableCell className="text-sm max-w-[100px] truncate">{a.seo_keywords || '—'}</TableCell>
                <TableCell>
                  {a.cover_image_url ? (
                    <img src={a.cover_image_url} alt="" className="h-8 w-12 rounded object-cover" />
                  ) : (
                    <span className="text-muted-foreground text-xs">—</span>
                  )}
                </TableCell>
                <TableCell>
                  {hasSeo(a) ? <CheckCircle className="h-4 w-4 text-green-600" /> : <AlertCircle className="h-4 w-4 text-orange-500" />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ArticlesSEOAudit;
