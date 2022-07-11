import { useAuth } from 'hooks/useAuth';
import { Login } from 'pages/Login';
import type { ReactElement } from 'react';

interface PrivateRoute {
  component: ReactElement;
}

export function PrivateRoute({
  component: Component,
}: PrivateRoute): ReactElement {
  const { isLogged } = useAuth();

  return isLogged ? Component : <Login />;
}
