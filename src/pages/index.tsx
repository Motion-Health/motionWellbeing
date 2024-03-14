/* eslint-disable @next/next/no-sync-scripts */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import { TypeAnimation } from 'react-type-animation';

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

      <title>Motion - Care Home Marketing</title>
      <link rel="canonical" href="https://marketing.motion.org.uk/" />
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
      <meta
        property="og:title"
        content="Motion Marketing | Sharing stories about later life"
      />
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

      <script
        async
        type="text/javascript"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Wv6PpD"
      ></script>
      <section
        data-bs-version="5.1"
        className="menu menu1 programm5 cid-tFcg6m8FPY"
        once="menu"
        id="menu1-0"
      >
        <nav className="navbar navbar-dropdown navbar-expand-lg">
          <div className="menu_box container">
            <div className="navbar-brand d-flex">
              <span className="navbar-logo">
                <a href="/">
                  <img
                    src="extensions/programm5/software-development-company/assets/images/logo.svg"
                    alt=""
                  />
                </a>
              </span>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-bs-toggle="collapse"
                data-target="#navbarSupportedContent"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <div className="hamburger">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav nav-dropdown"
                data-app-modern-menu="true"
              >
                <li className="nav-item">
                  <a className="nav-link link display-4" href="/">
                    Platform
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link display-4" href="/blog">
                    Reasource Hub
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link display-4" href="/blog">
                    Success Stories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link display-4" href="/blog">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link display-4" href="/blog">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link display-4" href="/blog">
                    Other Serices
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link display-4" href="/blog">
                    Login
                  </a>
                </li>
              </ul>

              <div className="mbr-section-btn-main" role="tablist">
                <a
                  className="btn btn-secondary display-4"
                  href="https://calendly.com/zeezy-1/motion"
                >
                  Get a Demo
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section
        data-bs-version="5.1"
        className="header1 programm5 cid-tFcg6xOSs8 filtered-background-section"
        id="header1-1"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-wrapper">
                <h1 className="heroText">You take care of </h1>
                <h1 className="heroText blueText">
                  yesterdays{' '}
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Teachers',
                      3000,
                      'Nurses',
                      3000,
                      'Engineers',
                      3000,
                      'Doctors',
                      3000,
                      'Soldiers',
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </h1>
                <h1 className="heroText">We’ll take care of you.</h1>
                <p className="subheadingText">
                  A digital platform for care services to improve wellbeing
                  outcomes and showcase this to existing and prospective
                  families to improve their customer satisfaction and increase
                  occupancy.
                </p>
                <div className="mbr-section-btn">
                  <a
                    className="btn btn-secondarydisplay-4 services-button btn-secondary"
                    href="#features6-6"
                  >
                    Get a Demo
                  </a>
                </div>
                <p>No credit card required.</p>
              </div>
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
                <h2 className="mbr-section-title mbr-fonts-style motionWorksTitle">
                  <strong>How motion works</strong>
                </h2>
              </div>
              <div className="text-wrapper">
                <p className="mbr-text mbr-fonts-style display-7">
                  Our all-in-one solution is easy to implement with help from
                  our experienced team and provides you with a comprehensive and
                  person-centred approach to improve your marketing.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4 card">
              <div className="title-wrapper">
                <img
                  className="blogImage"
                  src="/extensions/programm5/assets/images/seo.png"
                  alt="seo"
                />
                <h3 className="motionBenefitsTitle">
                  <strong>Improve lifestyle and wellbeing outcomes</strong>
                </h3>
              </div>
              <div className="card-wrapper motionBenefitsText">
                A wide range of evidence-based lifestyle resources and
                activities that are proven to improve mood.
              </div>
            </div>
            <div className="col-12 col-lg-4 card">
              <div className="title-wrapper">
                <img
                  className="blogImage"
                  src="/extensions/programm5/assets/images/seo.png"
                  alt="seo"
                />
                <h3 className="motionBenefitsTitle">
                  <strong>Showcase improved standard of care</strong>
                </h3>
              </div>
              <div className="card-wrapper motionBenefitsText">
                Tailored updates are automatically shared to your website,
                making showcasing your care home effortless.
              </div>
            </div>
            <div className="col-12 col-lg-4 card">
              <div className="title-wrapper">
                <img
                  className="blogImage"
                  src="/extensions/programm5/assets/images/seo.png"
                  alt="seo"
                />
                <h3 className="motionBenefitsTitle">
                  <strong>Fill beds and improve customer satisfaction</strong>
                </h3>
              </div>
              <div className="card-wrapper motionBenefitsText">
                Regular reports and data insights are provided to ensure you can
                see and understand the impact on key metrics.
              </div>
            </div>
          </div>
          <div className="mbr-section-btn">
            <a
              className="btn btn-secondarydisplay-4 services-button btn-secondary"
              href="#features6-6"
            >
              Get a Demo
            </a>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="features6 programm5 cid-tFcgiGZ8RJ"
        id="features6-6"
      >
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 text-center">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  <strong>Features</strong>
                </h2>
              </div>
              <div className="text-wrapper">
                <p className="mbr-text mbr-fonts-style display-7">
                  Check out Motion's features and how they ensure an improvement
                  in wellbeing outcomes as well as a positive impact on your
                  business.
                </p>
              </div>
            </div>
          </div>
          <div id="tab1" className="tab-pane in active">
            <div className="row">
              <div className="col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                >
                  <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
                </svg>
                <p className="mbr-desc mbr-fonts-style display-7">Planner</p>
              </div>
              <div className="col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                >
                  <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
                </svg>
                <p className="mbr-desc mbr-fonts-style display-7">Actvities</p>
              </div>
              <div className="col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                >
                  <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
                </svg>
                <p className="mbr-desc mbr-fonts-style display-7">Webpage</p>
              </div>
              <div className="col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                >
                  <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
                </svg>
                <p className="mbr-desc mbr-fonts-style display-7">Updates</p>
              </div>
              <div className="col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                >
                  <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
                </svg>
                <p className="mbr-desc mbr-fonts-style display-7">Analytics</p>
              </div>
            </div>
            <p className="mbr-desc mbr-fonts-style display-7">
              Weekly and monthly planners mean that you can schedule activities
              ahead of time. Whether their group or one-to-one, in the home or a
              trip out; the planner is there to say you time and can be easily
              shared with residents, families and colleagues.
            </p>
          </div>
          <div className="mbr-section-btn-main" role="tablist">
            <a
              className="btn btn-secondary display-4"
              href="https://calendly.com/zeezy-1/motion"
            >
              Get a Demo
            </a>
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
              <div className="card-wrapper">
                <div className="card-wrap">
                  <div className="icon-wrapper">
                    <img
                      className="partnerQuote"
                      src="/extensions/programm5/assets/images/claire.jpg"
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
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2 blogsTitle">
                  Resource Hub
                </h2>
                <p className="mbr-desc mbr-fonts-style display-7">
                  We've compiled these quick and easy-to-use resources to
                  de-mystify marketing, sales and technology for your care home.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 card">
              <div className="card-wrapper">
                <img
                  className="blogImage"
                  src="/extensions/programm5/assets/images/seo.png"
                  alt="seo"
                />
                <div className="title-wrap">
                  <div className="title">
                    <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                      SEO Explained
                    </h3>
                  </div>
                </div>
                <p className="mbr-text mbr-fonts-style display-5">
                  SEO is the process of optimising your website to rank higher
                  in search engine results pages, thereby increasing the amount
                  of organic (or free) traffic your website receives.
                </p>
                <a className="link-wrap" href="/blog/seo-explained/">
                  <p className="mbr-link mbr-fonts-style display-4">
                    Read blog
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 card">
              <div className="card-wrapper">
                <img
                  className="blogImage"
                  src="/extensions/programm5/assets/images/cyber.jpeg"
                  alt="seo"
                />
                <div className="title-wrap">
                  <div className="title">
                    <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                      Protect your carehome with this Cyber Security Cheatsheat
                    </h3>
                  </div>
                </div>
                <p className="mbr-text mbr-fonts-style display-5">
                  Cyber security is the practice of protecting your systems,
                  networks, and programs from digital attacks. These attacks are
                  usually aimed at accessing, changing, or destroying sensitive
                  information; extorting money from users; or interrupting
                  normal business processes.
                </p>
                <a
                  className="link-wrap"
                  href="blog/protect-your-carehome-with-this-cyber-security-cheatsheet/"
                >
                  <p className="mbr-link mbr-fonts-style display-4">
                    Read blog
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 card">
              <div className="card-wrapper">
                <img
                  className="blogImage"
                  src="/extensions/programm5/assets/images/recruitment.webp"
                  alt="seo"
                />
                <div className="title-wrap">
                  <div className="title">
                    <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                      How to attract more careers to your home
                    </h3>
                  </div>
                </div>
                <p className="mbr-text mbr-fonts-style display-5">
                  The social care sector is facing a staffing crisis. With the
                  number of people aged 85 and over set to double in the next 25
                  years, the demand for care is only going to increase.
                </p>
                <a
                  className="link-wrap"
                  href="/blog/how-to-attract-more-carers-to-your-home/"
                >
                  <p className="mbr-link mbr-fonts-style display-4">
                    Read blog
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="mbr-section-btn-main" role="tablist">
            <a
              className="btn btn-secondary display-4"
              href="https://calendly.com/zeezy-1/motion"
            >
              Read More
            </a>
          </div>
        </div>
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
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  It's time for someone to shout about how amazing you are for
                  once!
                </h2>
                <div className="col-md-auto col mbr-section-btn">
                  <a
                    href="https://calendly.com/zeezy-1/motion"
                    className="btn btn-secondary display-4 discoveryButton"
                  >
                    Book a discovery call now!
                  </a>
                </div>
                <div className="person-wrapper">
                  <a href="https://www.linkedin.com/in/zeezy-qureshi-370bbb151/">
                    <div className="person-wrap">
                      <img
                        src="/extensions/programm5/assets/images/zeezy-headshot.png"
                        alt=""
                      />

                      <div className="name-wrap">
                        <p className="mbr-name mbr-fonts-style display-7">
                          Zeezy
                        </p>
                        <p className="mbr-role mbr-fonts-style display-4">
                          Founder & CEO
                        </p>
                      </div>
                    </div>
                  </a>
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
            <div className="col-12 col-lg-6">
              <div className="title-wrapper">
                <span className="navbar-logo">
                  <a href="/">
                    <img
                      src="extensions/programm5/software-development-company/assets/images/logo.svg"
                      alt=""
                    />
                  </a>
                </span>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <label className="mbr-desc mbr-fonts-style display-7 signupText">
                Sign up to our newsletter to be first to hear about news and
                updates:
              </label>
              <div className="klaviyo-form-UcvnLw"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="contacts-wrapper">
                <ul className="list mbr-fonts-style display-4">
                  <li className="item-wrap">
                    Sheffield Science Park Cooper Buildings, Arundel St,
                    Sheffield City Centre, Sheffield S1 2NS
                  </li>
                  <li className="item-wrap">info@motion.org.uk</li>
                  <li className="item-wrap">+44 7543 858684</li>
                  <li className="item-wrap">
                    <a href="/assets/documents/GDPR-Policy.pdf">GDPR Policy</a>
                  </li>
                  <li className="item-wrap">
                    <a href="/assets/documents/Our-Values.pdf">Our Values</a>
                  </li>
                  <li className="item-wrap">
                    <a href="/assets/documents/Privacy-Policy.pdf">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6">
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
