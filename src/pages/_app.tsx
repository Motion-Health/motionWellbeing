import '../styles/global.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// Import useRouter
import { QueryClientProvider } from 'react-query';

import { AccountProvider } from '@/context/AccountContext';
import { queryClient } from '@/services/query';

// Import the special styles
import theme from '../styles/theme';
import styles from './wellbeing.module.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isWellbeingPlatform = router.pathname.includes('/wellbeing');

  useEffect(() => {
    if (isWellbeingPlatform) {
      document.documentElement.classList.add(styles.wellbeingHtml);
      document.body.classList.add(styles.wellbeingBody);
      document.body.classList.add('wellbeingBody');
    } else {
      document.documentElement.classList.remove(styles.wellbeingHtml);
      document.body.classList.remove(styles.wellbeingBody);
    }
  }, [isWellbeingPlatform]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AccountProvider>
          <Component {...pageProps} />
        </AccountProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
