/* eslint-disable @next/next/no-sync-scripts */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { TypeAnimation } from 'react-type-animation';

import MotionStoryCarousel from '@/components/MotionStoryCarousel';
import NavBar from '@/components/navBar';
import Testimonial, { ImagePosition } from '@/components/Testimonial';
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
  const [selectedFeature, setSelectedFeature] = useState<
    'planner' | 'activities' | 'webpage' | 'updates' | 'analytics'
  >('planner');

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
                <h1 className="heroText">We'll take care of you.</h1>
                <p className="heroSubheadingText">
                  Showcase your care and keep families connected, so you can
                  grow.
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
              <strong>We're trusted by</strong>
            </h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row position-relative">
            <Slider {...settings}>
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
                  src="extensions/programm5/assets/logos/12-trees.jpg"
                  alt=""
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem' }}
              >
                <img
                  src="extensions/programm5/assets/logos/carewise.webp"
                  alt=""
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem' }}
              >
                <img
                  src="extensions/programm5/assets/logos/silver.webp"
                  alt=""
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem' }}
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
                  src="extensions/programm5/assets/logos/lee-mount-care-home-logo.png"
                  alt=""
                  style={{ width: '50%', margin: '0 auto' }}
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem' }}
              >
                <img
                  src="extensions/programm5/assets/logos/HertsAtHomeMediumRBG.png"
                  alt=""
                  style={{ width: '70%', margin: '0 auto' }}
                />
              </div>
              <div
                className="embla__slide slider-image item"
                style={{ margin: 'auto 3rem' }}
              >
                <img
                  src="extensions/programm5/assets/logos/palms-row.png"
                  alt=""
                  style={{ width: '60%', margin: '0 auto' }}
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
          <div className="row">
            <Testimonial
              quote="The Motion team are incredible — they're very skilled and we love having them working with our care homes."
              author="Claire, CEO, Sheffcare"
              image="/assets/images/claire.jpg"
              imagePosition={ImagePosition.Left}
            />
          </div>

          <div
            className="motion-helps-section"
            style={{ paddingBottom: '160px' }}
            id="how-motion-helps-your-care-organisation"
          >
            <div className="row justify-content-center howMotionWorks">
              <div className="col-12 col-lg-8 text-center">
                <div className="title-wrapper">
                  <h2 className="mbr-section-title mbr-fonts-style motionWorksTitle display-2">
                    <strong>How Motion helps your care organisation</strong>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4 card">
                <div
                  className="feature-box"
                  style={{
                    backgroundColor: '#F7F7F7',
                    borderRadius: '10px',
                    padding: '25px',
                    height: '100%',
                  }}
                >
                  <h3
                    className="motionBenefitsTitle mbr-fonts-style"
                    style={{ color: '#385988', paddingBottom: '16px' }}
                  >
                    <strong>Showcase and amplify your care</strong>
                  </h3>
                  <p className="motionBenefitsText mbr-fonts-style display-7">
                    You're already delivering amazing, person-centred care.
                    Motion helps make sure families and key stakeholders
                    actually see it. Personalised, detailed updates are shared
                    automatically, so your team can stay focused on what matters
                    most.
                  </p>
                </div>
              </div>
              <div className="col-4 card">
                <div
                  className="feature-box"
                  style={{
                    backgroundColor: '#F7F7F7',
                    borderRadius: '10px',
                    padding: '25px',
                    height: '100%',
                  }}
                >
                  <h3
                    className="motionBenefitsTitle mbr-fonts-style"
                    style={{ color: '#385988', paddingBottom: '16px' }}
                  >
                    <strong>Meet families where they are</strong>
                  </h3>
                  <p className="motionBenefitsText mbr-fonts-style display-7">
                    We've listened to over 1,000 families, and one thing is
                    clear: what matters most is knowing their loved one is being
                    truly looked after. Whether they're exploring care options
                    or already part of your home, families want connection,
                    clarity, and peace of mind. Every one of our care partners
                    has seen a lift in family satisfaction since using Motion.
                  </p>
                </div>
              </div>
              <div className="col-4 card">
                <div
                  className="feature-box"
                  style={{
                    backgroundColor: '#F7F7F7',
                    borderRadius: '10px',
                    padding: '25px',
                    height: '100%',
                  }}
                >
                  <h3
                    className="motionBenefitsTitle mbr-fonts-style"
                    style={{ color: '#385988', paddingBottom: '16px' }}
                  >
                    <strong>Person-centred, data-driven</strong>
                  </h3>
                  <p className="motionBenefitsText mbr-fonts-style display-7">
                    Motion has been co-designed with over 3,000 residents,
                    families and care providers to ensure people stay at the
                    heart of everything we do. Beyond this, our powerful
                    technology provides you with valuable data and hands-on
                    support to grow.
                  </p>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: '40px' }}>
              <Testimonial
                quote="Knowing what mum is doing, and even more so why she's doing it, gives me peace of mind."
                author="Gill, Daughter of Resident"
                image="/assets/images/testimonials/Gill.png"
                imagePosition={ImagePosition.Right}
              />
            </div>
          </div>
        </div>

        <MotionStoryCarousel />
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
                <h2 className="mbr-section-title mbr-fonts-style motionWorksTitle display-2 text-center">
                  <strong>Knowledge hub</strong>
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
                <a className="link-wrap readBlog" href="/knowledge-hub/tiktok/">
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
                  href="/knowledge-hub/how-to-attract-more-carers-to-your-home/"
                >
                  <p className="mbr-link mbr-fonts-style display-4">
                    Read blog
                  </p>
                </a>
              </div>
            </div>
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
                <h2 className="mbr-section-title mbr-fonts-style display-2 setInMotionTitle">
                  Let's Set Things in Motion
                </h2>
                <p className="text-center subheadingText">
                  Hit the 'Get a Demo' button below and we'll be in touch before
                  you can say "Jack Robinson"
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
                        How Motion helps your care organisation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link display-4"
                        href="/knowledge-hub"
                      >
                        Knowledge hub
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
