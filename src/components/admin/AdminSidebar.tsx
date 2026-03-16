import { LayoutDashboard, FileText, Image, Search, Users, Settings, LogOut } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useRoleAccess } from '@/hooks/useRoleAccess';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const navItems = [
  { title: 'Dashboard', url: '/admin/dashboard', icon: LayoutDashboard, minRole: 'viewer' as const },
  { title: 'Articles', url: '/admin/articles', icon: FileText, minRole: 'viewer' as const },
  { title: 'Médias', url: '/admin/media', icon: Image, minRole: 'editor' as const },
  { title: 'SEO', url: '/admin/seo', icon: Search, minRole: 'editor' as const },
  { title: 'Utilisateurs', url: '/admin/users', icon: Users, minRole: 'super_admin' as const },
  { title: 'Réglages', url: '/admin/settings', icon: Settings, minRole: 'super_admin' as const },
];

const roleHierarchy: Record<string, number> = { viewer: 0, editor: 1, super_admin: 2 };

const roleLabels: Record<string, string> = {
  super_admin: 'Admin',
  editor: 'Éditeur',
  viewer: 'Lecteur',
};

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut, userProfile } = useAuth();
  const { role } = useRoleAccess();

  const userLevel = role ? roleHierarchy[role] ?? 0 : 0;

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login', { replace: true });
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {!collapsed && 'Paris Inn Admin'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems
                .filter(item => userLevel >= roleHierarchy[item.minRole])
                .map((item) => {
                  const isActive = location.pathname === item.url || location.pathname.startsWith(item.url + '/');
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <NavLink to={item.url}>
                          <item.icon className="h-4 w-4" />
                          {!collapsed && <span>{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="space-y-2">
        {!collapsed && role && (
          <div className="px-3 py-1">
            <Badge variant="outline" className="text-xs">
              {roleLabels[role] ?? role}
            </Badge>
          </div>
        )}
        <Button variant="ghost" size="sm" onClick={handleSignOut} className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          {!collapsed && 'Déconnexion'}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
