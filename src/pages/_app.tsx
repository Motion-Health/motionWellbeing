import '../styles/global.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router'; // Import useRouter
import { QueryClientProvider } from 'react-query';

import { AccountProvider } from '@/context/AccountContext';
import { queryClient } from '@/services/query';

// Import the special styles
import theme from '../styles/theme';

// ... rest of your Sentry configuration

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isWellbeingPlatform = router.pathname.includes('/wellbeing'); // Check if the current page is in the wellbeing platform

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AccountProvider>
          {isWellbeingPlatform && (
            <style>{`
            html{
              overflow: hidden;
              height: 100%;
            }
            body {
              background-image: url("/assets/images/background.jpg");
              background-attachment: fixed;
              background-repeat: no-repeat;
              background-size: cover;
              overflow-y: auto;
              height: 100%;
              overflow-x: hidden;
            }
          `}</style>
          )}
          <Component {...pageProps} />
        </AccountProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
