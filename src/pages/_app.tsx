'use client';
import '../styles/global.css';
import 'core-js/stable';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { GoogleAnalytics } from '@next/third-parties/google';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// Import useRouter
import { QueryClientProvider } from 'react-query';

import Layout from '@/components/Layout';
import { AccountProvider } from '@/context/AccountContext';
import { queryClient } from '@/services/query';
import { pageview } from '@/utils/analytics';

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

  useEffect(() => {
    // Track page views when the route changes
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Track the initial page load
    pageview(router.asPath);

    // Cleanup event listener
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

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
      <GoogleAnalytics gaId="G-8PBMY0HM88" />
    </QueryClientProvider>
  );
};

export default MyApp;
