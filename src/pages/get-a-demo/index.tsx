/* eslint-disable @next/next/no-sync-scripts */

import React, { useEffect, useRef } from 'react';

import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

import NavBar from '../../components/navBar';
import styles from './styles.module.css';

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
        prefill: Record<string, any>;
        utm: Record<string, any>;
      }) => void;
    };
  }
}

const Index = () => {
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Only initialize once
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Check if script already exists
    if (
      document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      )
    ) {
      return;
    }

    // Load Calendly Inline Widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    scriptRef.current = script;

    script.onload = () => {
      // Initialize Calendly only after script is loaded
      if (window.Calendly && calendlyContainerRef.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/zeezy-fpza/30min',
          parentElement: calendlyContainerRef.current,
          prefill: {},
          utm: {},
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
      initializedRef.current = false;
    };
  }, []);

  return (
    <>
      <title>Book a Demo | Motion</title>
      <meta property="og:url" content="https://www.motion.org.uk" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Motion | Book a Demo" />
      <meta name="description" content="Book a Demo" />
      <meta property="og:image" content="./og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Book a Demo | Motion" />
      <meta name="twitter:image" content="./og-image.jpg" />
      <meta property="twitter:description" content="Book a Demo" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/css/styles.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/web/assets/mobirise-icons2/mobirise2.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap-grid.min.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap-reboot.min.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/dropdown/css/style.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/socicon/css/styles.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/theme/css/style.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/recaptcha.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/mobirise/css/mbr-additional.css"
      />
      <link rel="stylesheet" href="/assets/book-demo.css" />

      <script src="/extensions/programm5/software-development-company/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/smoothscroll/smooth-scroll.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/ytplayer/index.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/dropdown/js/navbar-dropdown.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/embla/embla.min.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/embla/script.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/mbr-tabs/mbr-tabs.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/theme/js/script.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/formoid.min.js"></script>

      <div className={styles.pageContainer}>
        <NavBar />
        <div className={`container ${styles.container}`}>
          <div className={styles.headerContainer}>
            <PageHeader title="Let's chat!" />
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <p className="TextOne">
                No hard-sell, no payment required, just a chat to understand
                your needs and how we can help your care organisation to grow.
              </p>
              <div
                ref={calendlyContainerRef}
                className={styles.calendlyContainer}
              />
              <div className={styles.reviewsContainer}>
                <img
                  src="/assets/images/book-demo/Stars.png"
                  alt="5/5 Star Rating"
                  className={styles.stars}
                />
                <p className={styles.googleReviews}>
                  5/5 start | Google Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
