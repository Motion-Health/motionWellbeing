/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';

import Footer from '@/components/Footer';
import NavBar from '@/components/navBar';
import PageHeader from '@/components/PageHeader';
import backgroundStyles from '@/styles/backgrounds.module.css';

import styles from './styles.module.css';

const Careers = () => {
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <link
        rel="shortcut icon"
        href="/extensions/programm5/software-development-company/assets/images/logo.svg"
        type="image/x-icon"
      />
      <meta
        name="description"
        content="Join the Motion team and help us transform care home marketing."
      />

      <title>Motion — Careers</title>
      <link rel="canonical" href="https://motion.org.uk/careers" />
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

      <script src="/extensions/programm5/software-development-company/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/smoothscroll/smooth-scroll.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/dropdown/js/navbar-dropdown.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/theme/js/script.js"></script>

      <div
        className={`${styles.pageContainer} ${backgroundStyles.pageGradientBackground}`}
      >
        <NavBar />
        <div className={`container ${styles.container}`}>
          <div className={styles.headerContainer}>
            <PageHeader title="Careers" />
          </div>

          <section className={styles.careersContent}>
            <div className="row">
              <div className="col-12">
                <iframe
                  src="https://app.screenloop.com/careers/motion"
                  style={{
                    width: '100%',
                    height: '800px',
                    border: 'none',
                    borderRadius: '8px',
                  }}
                  title="Motion Careers"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
