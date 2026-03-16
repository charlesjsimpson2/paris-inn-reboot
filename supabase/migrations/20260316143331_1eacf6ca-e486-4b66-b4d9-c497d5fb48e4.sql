
-- Update handle_new_user to also store email
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  user_count INT;
  assigned_role public.app_role;
BEGIN
  SELECT COUNT(*) INTO user_count FROM public.user_profiles;
  IF user_count = 0 THEN
    assigned_role := 'super_admin';
  ELSE
    assigned_role := 'viewer';
  END IF;
  INSERT INTO public.user_profiles (user_id, role, full_name, email)
  VALUES (NEW.id, assigned_role, COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email), NEW.email);
  RETURN NEW;
END;
$function$;
