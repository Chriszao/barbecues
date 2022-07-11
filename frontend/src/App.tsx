import { AuthProvider } from 'hooks/useAuth';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import { Router } from './Routes/Router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer
        position="bottom-left"
        closeOnClick
        style={{
          fontFamily: theme.font.family,
          fontSize: theme.font.sizes.small,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
