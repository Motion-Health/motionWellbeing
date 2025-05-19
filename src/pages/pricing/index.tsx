/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';

import Footer from '@/components/Footer';
import JoinUsBlock from '@/components/JoinUsBlock';

import NavBar from '../../components/navBar';

const tags = ['Marketing', 'News', 'Sales', 'Technology', 'Wellbeing'];

const Index = () => {
  return (
    <>
      <title>Pricing | Motion</title>
      <meta property="og:url" content="https://www.motion.org.uk" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Motion | Knowlegde Hub" />
      <meta name="description" content="Pricing" />
      <meta property="og:image" content="./og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Knowledge hub | Motion" />
      <meta name="twitter:image" content="./og-image.jpg" />
      <meta property="twitter:description" content="Pricing" />
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
      <link rel="stylesheet" href="/assets/pricing.css" />

      <script src="/extensions/programm5/software-development-company/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/smoothscroll/smooth-scroll.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/ytplayer/index.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/dropdown/js/navbar-dropdown.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/embla/embla.min.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/embla/script.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/mbr-tabs/mbr-tabs.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/theme/js/script.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/formoid.min.js"></script>

      <NavBar />

      <div
        style={{
          background:
            'radial-gradient(circle at -11% 10%, #385988 -33%, #FDFCED 30%, transparent 50%), radial-gradient(circle at 0% 73%, #385988 -30%, #FDFCED 30%, transparent 50%), radial-gradient(circle at 77% 48%, #385988 -30%, #FDFCED 30%, transparent 50%)',
        }}
      >
        <div className="container">
          <div className="row">
            <h1 className="pricingTitle">Pricing</h1>

            <p className="TextOne">
              Make sure you only pay for what you use with our transparent
              pricing structure.
            </p>
            <div className="col-12 col-md-6">
              <div className="pricingCard">
                <h1 className="pricingTitle">Pay Per Location</h1>
                <p className="TextOne">
                  Get access to the platform and only pay for the amount of
                  residents in your care.
                </p>
                <div className="ticks">
                  <div className="iconText">
                    <img
                      src="/assets/images/book-demo/check_circle_blue.svg"
                      alt=""
                    />
                    <p>Website integration</p>
                  </div>
                  <div className="iconText">
                    <img
                      src="/assets/images/book-demo/check_circle_blue.svg"
                      alt=""
                    />
                    <p>Data & analytics</p>
                  </div>
                  <div className="iconText">
                    <img
                      src="/assets/images/book-demo/check_circle_blue.svg"
                      alt=""
                    />
                    <p>500+ activities & resources</p>
                  </div>
                  <div className="iconText">
                    <img
                      src="/assets/images/book-demo/check_circle_blue.svg"
                      alt=""
                    />
                    <p>Training & 24/7 support </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="pricingCard">
                <h1 className="pricingTitle">Performance Based</h1>
                <p className="TextOne">
                  The website integration tracks the agreed upon KPIs, ensuring
                  you only pay for the impact that Motion has on your care
                  service.
                </p>
                <div className="ticks">
                  <div className="iconText">
                    <img
                      src="/assets/images/book-demo/check_circle_blue.svg"
                      alt=""
                    />
                    <p>Data-driven reports</p>
                  </div>
                  <div className="iconText">
                    <img
                      src="/assets/images/book-demo/check_circle_blue.svg"
                      alt=""
                    />
                    <p>100% transparency</p>
                  </div>
                  <div className="iconText">
                    <img
                      src="/assets/images/book-demo/check_circle_blue.svg"
                      alt=""
                    />
                    <p>Tailored package </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <JoinUsBlock />

        <Footer />
      </div>
    </>
  );
};

export default Index;
