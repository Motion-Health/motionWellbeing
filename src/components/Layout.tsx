import Head from 'next/head';
import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const pageTitle = title
    ? `${title} | ${AppConfig.site_name}`
    : `${AppConfig.site_name} — Showcasing care`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Head>
      {children}
    </>
  );
};

export default Layout;
