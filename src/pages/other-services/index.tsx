/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect } from 'react';

import Footer from '@/components/Footer';
import JoinUsBlock from '@/components/JoinUsBlock';
import NavBar from '@/components/navBar';

const tags = ['Marketing', 'News', 'Sales', 'Technology', 'Wellbeing'];

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Wv6PpD';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <title>Other Services | Motion</title>
      <meta property="og:url" content="https://www.motion.org.uk" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Motion | Knowlegde Hub" />
      <meta name="description" content="Other Services" />
      <meta property="og:image" content="./og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Knowledge hub | Motion" />
      <meta name="twitter:image" content="./og-image.jpg" />
      <meta property="twitter:description" content="Other Services" />
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
      <link rel="stylesheet" href="/assets/other-services.css" />

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
        <div className="topPadding">
          <div className="heroBox">
            <div>
              <h1 className="other-servicesTitle">
                90% of privately funded families find their chosen care service
                online
              </h1>

              <p className="TextOne">
                Unlock the power of digital marketing with our other services.
              </p>
            </div>
            <img
              src="/assets/images/pricing/manWoman.png"
              className="heroImage"
              alt="Other Services"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <h3>Marketing Strategy</h3>
                  <p>
                    An effective strategy built around your target audience is
                    the foundation of successful digital marketing. We create a
                    bespoke strategy that ensures you stand out and tell
                    compelling stories in today's competitive marketplace.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3>SEO</h3>
                  <p>
                    Boost your online visibility with our specialised SEO
                    services. We optimise your website to rank higher in search
                    engine results, driving more organic traffic and helping you
                    reach the right customers for your care home.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3>Social Media Management</h3>
                  <p>
                    Engage and grow your audience with our social media
                    management services. We create and manage top-performing
                    social media campaigns tailored to foster community and
                    build lasting relationships with families of existing and
                    future residents.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3>Website</h3>
                  <p>
                    Create an impactful online presence with our professional
                    website development. Our team designs and develops custom,
                    user-friendly websites that look great and perform
                    seamlessly on all devices.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3>Chatbots</h3>
                  <p>
                    Enhance customer interaction with our intelligent,
                    personable chatbot solutions. Our chatbots provide instant,
                    24/7 assistance to your customers, improving response times
                    and boosting overall satisfaction.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3>Branding</h3>
                  <p>
                    Consistently communicate what makes your organisation
                    special, its visual foundation and core values with a
                    bespoke brand style guide.
                  </p>
                </div>
              </div>
            </div>
            <div className="row costCard">
              <h1 className="costTitle">Pay Per Project</h1>
              <p className="costText">
                Get in touch today and we'll help you to scope out your digital
                marketing project. We'll work with your budget to tailor your
                package and ensure you get the best value for money possible.
              </p>
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
