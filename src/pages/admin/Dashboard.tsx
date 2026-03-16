import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Image, Users, Eye } from 'lucide-react';
import { useRoleAccess } from '@/hooks/useRoleAccess';

interface Stats {
  totalArticles: number;
  published: number;
  drafts: number;
  totalMedia: number;
  totalUsers: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({ totalArticles: 0, published: 0, drafts: 0, totalMedia: 0, totalUsers: 0 });
  const [recentArticles, setRecentArticles] = useState<any[]>([]);
  const { isSuperAdmin } = useRoleAccess();

  useEffect(() => {
    const fetchStats = async () => {
      const [articlesRes, mediaRes, usersRes] = await Promise.all([
        supabase.from('articles').select('status'),
        supabase.from('media').select('id', { count: 'exact', head: true }),
        isSuperAdmin ? supabase.from('user_profiles').select('id', { count: 'exact', head: true }) : Promise.resolve({ count: 0 }),
      ]);

      const articles = articlesRes.data ?? [];
      setStats({
        totalArticles: articles.length,
        published: articles.filter(a => a.status === 'published').length,
        drafts: articles.filter(a => a.status === 'draft').length,
        totalMedia: mediaRes.count ?? 0,
        totalUsers: (usersRes as any).count ?? 0,
      });
    };

    const fetchRecent = async () => {
      const { data } = await supabase
        .from('articles')
        .select('id, title, status, created_at')
        .order('created_at', { ascending: false })
        .limit(5);
      setRecentArticles(data ?? []);
    };

    fetchStats();
    fetchRecent();
  }, [isSuperAdmin]);

  const statCards = [
    { label: 'Total Articles', value: stats.totalArticles, icon: FileText, color: 'text-blue-500' },
    { label: 'Publiés', value: stats.published, icon: Eye, color: 'text-green-500' },
    { label: 'Brouillons', value: stats.drafts, icon: FileText, color: 'text-orange-500' },
    { label: 'Médias', value: stats.totalMedia, icon: Image, color: 'text-purple-500' },
    ...(isSuperAdmin ? [{ label: 'Utilisateurs', value: stats.totalUsers, icon: Users, color: 'text-primary' }] : []),
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map(card => (
            <Card key={card.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{card.label}</CardTitle>
                <card.icon className={`h-5 w-5 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{card.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Activité récente</CardTitle>
          </CardHeader>
          <CardContent>
            {recentArticles.length === 0 ? (
              <p className="text-muted-foreground text-sm">Aucun article pour le moment.</p>
            ) : (
              <div className="space-y-3">
                {recentArticles.map(article => (
                  <div key={article.id} className="flex items-center justify-between py-2 border-b last:border-0">
                    <span className="font-medium text-sm">{article.title}</span>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${article.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {article.status === 'published' ? 'Publié' : 'Brouillon'}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(article.created_at).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
