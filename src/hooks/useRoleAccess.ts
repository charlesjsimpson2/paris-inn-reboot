import { useAuth } from '@/contexts/AuthContext';

export const useRoleAccess = () => {
  const { userProfile } = useAuth();
  const role = userProfile?.role;

  return {
    role,
    isSuperAdmin: role === 'super_admin',
    isEditorOrAbove: role === 'super_admin' || role === 'editor',
    isViewer: role === 'viewer',
    canManageUsers: role === 'super_admin',
    canManageArticles: role === 'super_admin' || role === 'editor',
    canManageMedia: role === 'super_admin' || role === 'editor',
    canViewArticles: !!role,
  };
};
