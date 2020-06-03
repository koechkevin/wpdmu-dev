export interface RoutesConfig {
  name?: string;
  path: string;
  allowedRoles?: string[];
  authenticated: boolean;
  component: any;
}


