/* eslint-disable @next/next/no-sync-scripts */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { TypeAnimation } from 'react-type-animation';

import FAQ from '@/components/FAQExpandable';
import NavBar from '@/components/navBar';
import { useAccountContext } from '@/context/AccountContext';
const Index = () => {
  const {
    account: { accountStatus },
  } = useAccountContext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Wv6PpD';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const [selectedFeature, setSelectedFeature] = useState('planner');

  const features = {
    planner:
      'Weekly and monthly planners mean that you can schedule activities ahead of time. Whether their group or one-to-one, in the home or a trip out; the planner is there to say you time and can be easily shared with residents, families and colleagues.',
    activities:
      'Have hundreds of evidenced-based activities at your fingertips: from music therapy to chair dancing. There truly is something for everyone!',
    webpage:
      "Once an activities are complete they'll pull through to your website. Importantly, you'll only share what you want to, meaning personal information is safe.",
    updates:
      'Providing families with peace of mind that your care home fosters a fun, active lifestyle is invaluable. Motion means that you can achieve this without any additional work.',
    analytics:
      'Regularly see the impact Motion is having on your care homes customer satisfaction, website visitors and lead generation with our fully transparent reports.',
  };

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
        href="extensions/programm5/software-development-company/assets/images/logo.svg"
        type="image/x-icon"
      />
      <meta
        name="description"
        content="Using Marketing to share stories about later life."
      />

      <title>Motion — Showcasing Care</title>
      <link rel="canonical" href="https://motion.org.uk/" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="extensions/programm5/software-development-company/assets/css/styles.css"
      />
      <link
        rel="stylesheet"
        href="extensions/programm5/software-development-company/assets/web/assets/mobirise-icons2/mobirise2.css"
      />
      <link
        rel="stylesheet"
        href="extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap-grid.min.css"
      />
      <link
        rel="stylesheet"
        href="extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap-reboot.min.css"
      />
      <link
        rel="stylesheet"
        href="extensions/programm5/software-development-company/assets/dropdown/css/style.css"
      />
      <link
        rel="stylesheet"
        href="extensions/programm5/software-development-company/assets/socicon/css/styles.css"
      />
      <link
        rel="stylesheet"
        href="extensions/programm5/software-development-company/assets/theme/css/style.css"
      />
      <link
        rel="stylesheet"
        href="extensions/programm5/software-development-company/assets/recaptcha.css"
      />
      <link
        rel="stylesheet"
        href="extensions/programm5/software-development-company/assets/mobirise/css/mbr-additional.css"
      />
      <meta property="og:title" content="Motion" />
      <meta
        name="description"
        content="Telling stories that move people. Motion is a marketing agency that helps brands connect with their audience through powerful storytelling."
      />

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
      <section
        data-bs-version="5.1"
        className="header1 programm5 cid-tFcg6xOSs8 filtered-background-section"
        id="header1-1"
      >
        <div className="container heroContainer">
          <div className="row">
            <div className="col-7 fullWidth">
              <div className="hero-wrapper">
                <h1 className="heroText">You take care of </h1>
                <h1 className="heroText blueText">
                  yesterday's{' '}
                  <TypeAnimation
                    sequence={[
                      'teachers.',
                      3000,
                      'nurses.',
                      3000,
                      'engineers.',
                      3000,
                      'doctors.',
                      3000,
                      'soldiers.',
                      3000,
                    ]}
                    wrapper="span"
                    speed={80}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </h1>
                <h1 className="heroText">We’ll take care of you.</h1>
                <p className="heroSubheadingText">
                  A digital platform for care services to showcase improved care
                  outcomes to existing and prospective families to boost their
                  customer satisfaction and increase occupancy.
                </p>
                <div className="demoButtonContainer">
                  <div className="blueDemoButton">
                    <a href="/get-a-demo">Get a Demo</a>
                  </div>
                  <p>No credit card required.</p>
                </div>
              </div>
            </div>
            <div className="col-5 motionDashboard">
              <img
                src="assets/images/dashboardImage.png"
                alt="Motions dashboard"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="slider1 programm5 mbr-embla cid-tFcgtIIPnX"
        id="slider1-8"
      >
        <div className="text-center">
          <div className="title-wrapper">
            <h2 className="mbr-section-title mbr-fonts-style display-2">
              <strong>Trusted By</strong>
            </h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row position-relative">
            <Slider {...settings}>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem', minWidth: 200 }}
              >
                <img
                  src="extensions/programm5/assets/logos/12-trees.jpg"
                  alt=""
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem', minWidth: 200 }}
              >
                <img
                  src="extensions/programm5/assets/logos/age-uk.jpg"
                  alt=""
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem' }}
              >
                <img src="extensions/programm5/assets/logos/bupa.jpg" alt="" />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem' }}
              >
                <img
                  src="extensions/programm5/assets/logos/hc-one.jpg"
                  alt=""
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem', minWidth: 200 }}
              >
                <img
                  src="extensions/programm5/assets/logos/ideal-carehomes.jpg"
                  alt=""
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem', minWidth: 150 }}
              >
                <img
                  src="extensions/programm5/assets/logos/sheffcare.jpg"
                  alt=""
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem' }}
              >
                <img
                  src="extensions/programm5/assets/logos/silver.png"
                  alt=""
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem' }}
              >
                <img
                  src="extensions/programm5/assets/logos/hallamshire.png"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="content5 programm5 cid-tFcktY5MQz"
        id="content5-f"
      >
        <div className="container">
          <div className="row justify-content-center howMotionWorks">
            <div className="col-12 col-lg-8 text-center">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style motionWorksTitle display-2">
                  <strong>How Motion Works</strong>
                </h2>
              </div>
              <div className="text-wrapper">
                <p className="subheadingText">
                  Our all-in-one solution is easy to implement with help from
                  our experienced team and provides you with a comprehensive and
                  person-centred approach to improve your marketing.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 card">
              <div className="title-wrapper">
                <div className="imageWrapper redImageWrapper">
                  <img
                    className="blogImage"
                    src="/assets/images/homepage/card1.png"
                    alt="seo"
                  />
                </div>
              </div>
            </div>
            <div className="col-4 card">
              <div className="title-wrapper">
                <div className="imageWrapper yellowImageWrapper">
                  <img
                    className="blogImage"
                    src="/assets/images/homepage/card2.png"
                    alt="seo"
                  />
                </div>
              </div>
            </div>
            <div className="col-4 card">
              <div className="title-wrapper">
                <div className="imageWrapper greenImageWrapper">
                  <img
                    className="blogImage"
                    src="/assets/images/homepage/card3.png"
                    alt="seo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 card howTitleCard">
              <h3 className="motionBenefitsTitle">
                <strong>Improve lifestyle and wellbeing outcomes</strong>
              </h3>
              <div className="card-wrapper motionBenefitsText">
                A wide range of evidence-based lifestyle resources and
                activities that are proven to improve mood.
              </div>
            </div>
            <div className="col-4 card howTitleCard">
              <h3 className="motionBenefitsTitle">
                <strong>Showcase improved standard of care</strong>
              </h3>
              <div className="card-wrapper motionBenefitsText">
                Tailored updates are automatically shared to your website,
                making showcasing your care home effortless.
              </div>
            </div>
            <div className="col-4 card howTitleCard">
              <h3 className="motionBenefitsTitle">
                <strong>Fill beds and improve customer satisfaction</strong>
              </h3>
              <div className="card-wrapper motionBenefitsText">
                Regular reports and data insights are provided to ensure you can
                see and understand the impact on key metrics.
              </div>
            </div>
          </div>
          <div className="blueDemoButton mt-5">
            <a href="/get-a-demo">Get a Demo</a>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col-12 text-center">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  <strong>Features</strong>
                </h2>
              </div>
              <div className="text-wrapper">
                <p className="subheadingText hidden text">
                  Check out Motion's features and how they ensure an improvement
                  in wellbeing outcomes as well as a positive impact on your
                  business.
                </p>
              </div>
            </div>
          </div>

          <div id="tab1" className="tab-pane in active">
            <div className="row featuresClicker">
              <div
                className="col"
                onClick={() => setSelectedFeature('planner')}
              >
                <div
                  className={`featuresContainer ${
                    selectedFeature === 'planner' && 'border-bottom-half'
                  }`}
                >
                  <svg
                    className="featureIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                  </svg>

                  <p className="mbr-desc mbr-fonts-style display-7">Planner</p>
                </div>
              </div>
              <div
                className="col"
                onClick={() => setSelectedFeature('activities')}
              >
                <div
                  className={`featuresContainer ${
                    selectedFeature === 'activities' && 'border-bottom-half'
                  }`}
                >
                  <svg
                    className="featureIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M360-80v-529q-91-24-145.5-100.5T160-880h80q0 83 53.5 141.5T430-680h100q30 0 56 11t47 32l181 181-56 56-158-158v478h-80v-240h-80v240h-80Zm120-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z" />
                  </svg>
                  <p className="mbr-desc mbr-fonts-style display-7">
                    Actvities
                  </p>
                </div>
              </div>
              <div
                className="col"
                onClick={() => setSelectedFeature('webpage')}
              >
                <div
                  className={`featuresContainer ${
                    selectedFeature === 'webpage' && 'border-bottom-half'
                  }`}
                >
                  <svg
                    className="featureIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z" />
                  </svg>
                  <p className="mbr-desc mbr-fonts-style display-7">Webpage</p>
                </div>
              </div>
              <div
                className="col"
                onClick={() => setSelectedFeature('updates')}
              >
                <div
                  className={`featuresContainer ${
                    selectedFeature === 'updates' && 'border-bottom-half'
                  }`}
                >
                  <svg
                    className="featureIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M38-428q-18-36-28-73T0-576q0-112 76-188t188-76q63 0 120 26.5t96 73.5q39-47 96-73.5T696-840q112 0 188 76t76 188q0 38-10 75t-28 73q-11-19-26-34t-35-24q9-23 14-45t5-45q0-78-53-131t-131-53q-81 0-124.5 44.5T480-616q-48-56-91.5-100T264-760q-78 0-131 53T80-576q0 23 5 45t14 45q-20 9-35 24t-26 34ZM0-80v-63q0-44 44.5-70.5T160-240q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H0Zm240 0v-65q0-65 66.5-105T480-290q108 0 174 40t66 105v65H240Zm540 0v-65q0-26-6.5-49T754-237q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780ZM480-210q-57 0-102 15t-53 35h311q-9-20-53.5-35T480-210Zm-320-70q-33 0-56.5-23.5T80-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-280Zm640 0q-33 0-56.5-23.5T720-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-280Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-440q0 50-34.5 85T480-320Zm0-160q-17 0-28.5 11.5T440-440q0 17 11.5 28.5T480-400q17 0 28.5-11.5T520-440q0-17-11.5-28.5T480-480Zm0 40Zm1 280Z" />
                  </svg>
                  <p className="mbr-desc mbr-fonts-style display-7">Updates</p>
                </div>
              </div>
              <div
                className="col"
                onClick={() => setSelectedFeature('analytics')}
              >
                <div
                  className={`featuresContainer ${
                    selectedFeature === 'analytics' && 'border-bottom-half'
                  }`}
                >
                  <svg
                    className="featureIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                  </svg>
                  <p className="mbr-desc mbr-fonts-style display-7">
                    Analytics
                  </p>
                </div>
              </div>
            </div>
            <p className="mbr-desc mbr-fonts-style display-7 featuresText">
              {features[selectedFeature]}
            </p>
          </div>
          <div className="blueDemoButton mt-5" role="tablist">
            <a href="/get-a-demo">Get a Demo</a>
          </div>
        </div>
      </section>

      <section
        data-bs-version="5.1"
        className="content4 programm5 cid-tFckpILCGl"
        id="content4-e"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card-wrapper p-0 nameQuoteWrap">
                <div className="card-wrap ">
                  <div className="icon-wrapper partnerQuoteWrapper">
                    <img
                      className="partnerQuote"
                      src="/assets/images/claire.jpg"
                      alt="Claire - CEO"
                    />
                  </div>

                  <div className="nameQuote">
                    <p className="mbr-text mbr-fonts-style display-7">
                      "The Motion team are incredible — they're very skilled and
                      we love having them working with our care homes."
                    </p>{' '}
                    Claire, CEO, Sheffcare
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="features3 programm5 cid-tFcgeFyM9G"
        id="features3-4"
      >
        <div className="container miniBlogs">
          <div className="row">
            <div className="col-12">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2 blogsTitle">
                  Resource Hub
                </h2>
                <p className="mbr-desc mbr-fonts-style display-7 text-center">
                  We've compiled these quick and easy-to-use resources to
                  de-mystify marketing, sales and technology for your care home.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 card blogCard hide600">
              <div className="card-wrapper">
                <img
                  className="blogImage"
                  src="/extensions/programm5/assets/images/tiktok.webp"
                  alt="seo"
                />
                <div className="title-wrap resourceItems">
                  <p className="mbr-text mbr-fonts-style display-5">
                    March 3rd, 2024
                  </p>
                  <div className="title resourceItems">
                    <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                      What is TikTok and Should Your Care Home be Using It?
                    </h3>
                  </div>
                </div>
                <a className="link-wrap readBlog" href="/resource-hub/tiktok/">
                  <p className="mbr-link mbr-fonts-style display-4">
                    Read blog
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 card blogCard hide600">
              <div className="card-wrapper">
                <img
                  className="blogImage"
                  src="/extensions/programm5/assets/images/resident.webp"
                  alt="seo"
                />
                <div className="title-wrap resourceItems">
                  <p className="mbr-text mbr-fonts-style display-5">
                    February 29th, 2024
                  </p>
                  <div className="title">
                    <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                      What Families Care About When Looking for a Care Home
                    </h3>
                  </div>
                </div>
                <a
                  className="link-wrap readBlog"
                  href="blog/protect-your-carehome-with-this-cyber-security-cheatsheet/"
                >
                  <p className="mbr-link mbr-fonts-style display-4">
                    Read blog
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 card blogCard">
              <div className="card-wrapper">
                <img
                  className="blogImage"
                  src="/extensions/programm5/assets/images/funnel.webp"
                  alt="Marketing Funnel"
                />
                <div className="title-wrap resourceItems">
                  <p className="mbr-text mbr-fonts-style display-5">
                    February 21st, 2024
                  </p>
                  <div className="title">
                    <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                      Creating a Successful Sales Funnel for Your Care Home
                    </h3>
                  </div>
                </div>
                <a
                  className="link-wrap readBlog"
                  href="/resource-hub/how-to-attract-more-carers-to-your-home/"
                >
                  <p className="mbr-link mbr-fonts-style display-4">
                    Read blog
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="blueDemoButton mt-5" role="tablist">
          <a href="/get-a-demo">Read More</a>
        </div>
        <FAQ />
      </section>

      <section
        data-bs-version="5.1"
        className="form1 programm5 cid-tFcgDM3awY"
        id="form1-d"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2 setInMotionTitle">
                  Let’s Set Things in Motion
                </h2>
                <p className="text-center subheadingText">
                  Hit the 'Get a Demo' button below and we'll be in touch before
                  you can say ”Jack Robinson”
                </p>

                <div className="person-wrapper">
                  <div className="col-md-auto col mbr-section-btn centeredButton">
                    <a href="https://www.linkedin.com/in/zeezy-qureshi-370bbb151/">
                      <div className="person-wrap">
                        <img
                          src="/extensions/programm5/assets/images/zeezy-headshot.png"
                          alt=""
                        />
                      </div>
                    </a>
                    <a
                      href="/get-a-demo"
                      className="btn btn-secondary display-4 discoveryButton whiteDemoButton"
                    >
                      Get a Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="footer1 programm5 cid-tFcguy0QTa"
        once="footers"
        id="footer1-9"
      >
        <div className="container">
          <div className="row footMargin">
            <div className="col-12">
              <div className="title-wrapper">
                <span className="navbar-logo">
                  <a href="/">
                    <img
                      src="extensions/programm5/software-development-company/assets/images/logo.svg"
                      alt=""
                    />
                  </a>
                </span>
                <nav>
                  <ul className="list mbr-fonts-style display-4">
                    <li className="nav-item">
                      <a className="nav-link link display-4" href="/">
                        How Motion Works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link display-4"
                        href="/resource-hub"
                      >
                        Resource Hub
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link link display-4" href="/resource-hub">
                        Success Stories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link link display-4" href="/resource-hub">
                        About
                      </a>
                    </li> */}
                    <li className="nav-item midHide">
                      <a className="nav-link link display-4" href="/pricing">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item midHide">
                      <a
                        className="nav-link link display-4"
                        href="/other-services"
                      >
                        Other Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link display-4"
                        href="https://motion.org.uk/wellbeing/login"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="contacts-wrapper">
                <ul className="list mbr-fonts-style display-4">
                  <li className="item-wrap">
                    <strong>Address</strong>
                  </li>
                  <li className="item-wrap">
                    Sheffield Science Park Cooper Buildings, Arundel St,
                    Sheffield City Centre, Sheffield S1 2NS
                  </li>
                  <li className="item-wrap w-100">
                    <strong>Contact</strong>
                  </li>
                  <li className="item-wrap w-100">info@motion.org.uk</li>
                  <li className="item-wrap w-100">+44 7543 858684</li>
                </ul>
              </div>
              <div className="social-row">
                <div className="soc-item">
                  <a href="https://instagram.com/motion.org.uk" target="_blank">
                    <span className="mbr-iconfont socicon socicon-instagram" />
                  </a>
                </div>
                <div className="soc-item">
                  <a href="https://facebook.com/motion.org.uk" target="_blank">
                    <span className="mbr-iconfont socicon socicon-facebook" />
                  </a>
                </div>
                <div className="soc-item">
                  <a
                    href="https://linkedin.com/company/motion-org-uk"
                    target="_blank"
                  >
                    <span className="mbr-iconfont socicon socicon-linkedin" />
                  </a>
                </div>
                <div className="soc-item">
                  <a
                    href="https://www.tiktok.com/@zeezy_motion"
                    target="_blank"
                  >
                    <span className="mbr-iconfont socicon socicon-tiktok" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <label className="mbr-desc mbr-fonts-style display-7 signupText">
                Sign up to our newsletter to be first to hear about news and
                updates:
              </label>
              <div className="klaviyo-form-UcvnLw"></div>
            </div>
            <div className="col-12 col-lg-6"></div>
            <div className="col-12">
              <p className="mbr-fonts-style copyright display-4">
                © Copyright 2024 Motion Health Ltd - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
