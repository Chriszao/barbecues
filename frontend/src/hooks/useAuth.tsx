import type { ReactElement, ReactNode } from 'react';
import { useMemo } from 'react';
import { createContext, useCallback, useState, useContext } from 'react';
import api from 'services/api';

interface User {
  id: string;
  email: string;
  name: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface AuthContextData {
  user: User;
  isLogged: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

function AuthProvider({ children }: AuthProviderProps): ReactElement {
  const [isLogged, setIsLogged] = useState(false);

  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem('@Trinca:accessToken');
    const user = localStorage.getItem('@Trinca:user');

    if (accessToken && user) {
      api.defaults.headers.authorization = `Bearer ${accessToken}`;
      setIsLogged(true);
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post<AuthState>('/login', {
      email,
      password,
    });

    const { accessToken, user } = response.data;

    localStorage.setItem('@Trinca:accessToken', accessToken);
    localStorage.setItem('@Trinca:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${accessToken}`;

    setData({ accessToken, user });
    setIsLogged(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Trinca:token');
    localStorage.removeItem('@Trinca:user');

    setData({} as AuthState);
    setIsLogged(false);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setData({ accessToken: data.accessToken, user });

      localStorage.setItem('@Trinca:user', JSON.stringify(user));
    },
    [data]
  );

  const values = useMemo(() => {
    return {
      user: data.user,
      signIn,
      signOut,
      updateUser,
      isLogged,
    };
  }, [data.user, isLogged, signIn, signOut, updateUser]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
