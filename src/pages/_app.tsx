'use client';
import '../styles/global.css';
import 'core-js/stable';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// Import useRouter
import { QueryClientProvider } from 'react-query';

import Layout from '@/components/Layout';
import { AccountProvider } from '@/context/AccountContext';
import { queryClient } from '@/services/query';

// Import the special styles
import theme from '../styles/theme';
import stylesApp from './wellbeing.module.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isWellbeingPlatform = router.pathname.includes('/wellbeing');

  useEffect(() => {
    if (isWellbeingPlatform) {
      document.documentElement.classList.add(stylesApp?.wellbeingHtml || '');
      document.body.classList.add(stylesApp?.wellbeingBody || '');
      document.body.classList.add('wellbeingBody');
    } else {
      document.documentElement.classList.remove(stylesApp?.wellbeingHtml || '');
      document.body.classList.remove(stylesApp?.wellbeingBody || '');
    }
  }, [isWellbeingPlatform]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AccountProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AccountProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
