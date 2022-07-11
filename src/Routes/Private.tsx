import { useAuth } from 'hooks/useAuth';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

interface PrivateRoute {
  component: ReactElement;
}

export function PrivateRoute({ component: Component }: PrivateRoute) {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  if (!isLogged) {
    navigate('/');
    return null;
  }

  return Component;
}
