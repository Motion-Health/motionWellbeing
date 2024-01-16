import React, { useState } from 'react';
import CountUp from 'react-countup';
import { TypeAnimation } from 'react-type-animation';
import VisibilitySensor from 'react-visibility-sensor';

import { useAccountContext } from '@/context/AccountContext';
const Index = () => {
  const {
    account: { accountStatus },
  } = useAccountContext();

  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the email to your newsletter service here
    console.log(`Submitting email ${email}`);
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
      <meta name="description" content="" />
      <title>Software Development Company</title>
      <link rel="canonical" href="https://mobirise.com" />
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
                <a href="extensions/programm5/index.html">
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
                  <a
                    className="nav-link link display-4"
                    href="extensions/programm5/index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link display-4" href="/blog">
                    Knowledge Hub
                  </a>
                </li>
              </ul>

              <div className="mbr-section-btn-main" role="tablist">
                <a className="btn btn-secondary display-4" href="#pricing1-c">
                  Find how we can help
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
            <div className="col-12 col-lg-7">
              <div className="title-wrapper">
                <h1 className="mbr-section-title mbr-fonts-style display-1">
                  Want to unlock the power of digital marketing for your{' '}
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Carehome?',
                      3000,
                      'Care Agency?',
                      3000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </h1>
                <div className="tags-wrapper">
                  <div className="tags-wrap">
                    <div className="tag-item">
                      <svg
                        className="customIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        height={24}
                        viewBox="0 -960 960 960"
                        width={24}
                      >
                        <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
                      </svg>
                      <p className="mbr-tag mbr-fonts-style display-7">
                        Brand Strategy
                      </p>
                    </div>
                    <div className="tag-item">
                      <svg
                        className="customIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        height={24}
                        viewBox="0 -960 960 960"
                        width={24}
                      >
                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
                      </svg>
                      <p className="mbr-tag mbr-fonts-style display-7">
                        SEO &amp; Social Media
                      </p>
                    </div>
                    <div className="tag-item">
                      <svg
                        className="customIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        height={24}
                        viewBox="0 -960 960 960"
                        width={24}
                      >
                        <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z" />
                      </svg>
                      <p className="mbr-tag mbr-fonts-style display-7">
                        Website Design
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mbr-section-btn">
                  <a className="btn btn-secondary display-4" href="#">
                    Learn More
                  </a>
                </div>
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
        <div className="container-fluid">
          <div className="row position-relative">
            <div
              className="embla"
              data-skip-snaps="true"
              data-align="center"
              data-contain-scroll="trimSnaps"
              data-loop="true"
              data-auto-play="true"
              data-auto-play-interval={6}
              data-draggable="true"
            >
              <div className="embla__viewport">
                <div className="embla__container">
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
                    <img
                      src="extensions/programm5/assets/logos/bupa.jpg"
                      alt=""
                    />
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
                </div>
              </div>
              <button className="embla__button embla__button--prev">
                <span
                  className="mbr-iconfont mobi-mbri-left mobi-mbri"
                  aria-hidden="true"
                />
                <span className="sr-only visually-hidden visually-hidden">
                  Previous
                </span>
              </button>
              <button className="embla__button embla__button--next">
                <span
                  className="mbr-iconfont mobi-mbri-right mobi-mbri"
                  aria-hidden="true"
                />
                <span className="sr-only visually-hidden visually-hidden">
                  Next
                </span>
              </button>
            </div>
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
            <div className="col-12 col-lg-6">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  About us:
                </h2>
                <img src="extensions/programm5/assets/images/HCH.jpeg" alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="text-wrapper">
                <p className="mbr-text mbr-fonts-style display-7">
                  We know how important it is find a partner that really
                  understands you. At Motion we have over 5 years experience
                  working within the social care sector and showcasing our
                  clients incredible stories. Whether it's recruiting staff,
                  increasing occupancy with self-funding families or improving
                  brand awareness — you can rest assured that Motion will take
                  care of the you.
                </p>
              </div>
            </div>
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
            <div className="col-12 col-lg-4 card">
              <div className="card-wrapper">
                <h3 className="mbr-card-title mbr-fonts-style display-2">
                  <strong>
                    <CountUp start={0} end={2000} duration={3} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </strong>
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Enquiries Generated
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 card">
              <div className="card-wrapper">
                <h3 className="mbr-card-title mbr-fonts-style display-2">
                  <strong>
                    <CountUp start={0} end={100} duration={3} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    %
                  </strong>
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Of Clients Said They'd Recommend Motion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="tabs1 programm5 cid-tFcgABlMo6"
        id="tabs1-b"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  Our Services
                </h2>
              </div>
            </div>
            <div className="servicesGrid">
              <div id="tab1" className="tab-pane in active">
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  Brand Strategy
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Discover the power of compelling brand strategy. Our expert
                  team crafts unique branding solutions that resonate with your
                  audience, ensuring your brand stands out in today's
                  competitive marketplace.
                </p>
                <div className="mbr-section-btn servicesStart">
                  <a className="btn btn-secondary display-4" href="#">
                    Start now
                  </a>
                </div>
              </div>
              <div id="tab2" className="tab-pane">
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  SEO
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Boost your online visibility with our specialized SEO
                  services. We optimize your website to rank higher in search
                  engine results, driving more organic traffic and helping you
                  reach the right customers.
                </p>
                <div className="mbr-section-btn servicesStart">
                  <a className="btn btn-secondary display-4" href="#">
                    Start now
                  </a>
                </div>
              </div>
              <div id="tab3" className="tab-pane" role="tabpanel">
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  Social Media Management
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Engage and grow your audience with our social media management
                  services. We create and manage top-performing social media
                  campaigns, tailored to foster community and build lasting
                  relationships with your followers.
                </p>
                <div className="mbr-section-btn servicesStart">
                  <a className="btn btn-secondary display-4" href="#">
                    Start now
                  </a>
                </div>
              </div>
              <div id="tab4" className="tab-pane" role="tabpanel">
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  Website
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Create an impactful online presence with our professional
                  website development. Our team designs and develops custom,
                  user-friendly websites that not only look great but also
                  perform seamlessly on all devices.
                </p>
                <div className="mbr-section-btn servicesStart">
                  <a className="btn btn-secondary display-4" href="#">
                    Start now
                  </a>
                </div>
              </div>
              <div id="tab5" className="tab-pane" role="tabpanel">
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  Chatbots
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Enhance customer interaction with our intelligent chatbot
                  solutions. Our chatbots provide instant, 24/7 assistance to
                  your customers, improving response times and boosting overall
                  satisfaction.
                </p>
                <div className="mbr-section-btn servicesStart">
                  <a className="btn btn-secondary display-4" href="#">
                    Start now
                  </a>
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
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  Check out our latest blogs and articles to help you grow your
                  care home
                </h2>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 card">
              <div className="card-wrapper">
                <div className="title-wrap">
                  <div className="title">
                    <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                      SEO Explained
                    </h3>
                  </div>
                </div>
                <p className="mbr-text mbr-fonts-style display-5">
                  SEO is the process of optimizing your website to rank higher
                  in search engine results pages, thereby increasing the amount
                  of organic (or free) traffic your website receives.
                </p>
                <a className="link-wrap" href="#">
                  <p className="mbr-link mbr-fonts-style display-4">
                    Read more
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 card">
              <div className="card-wrapper">
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
                <a className="link-wrap" href="#">
                  <p className="mbr-link mbr-fonts-style display-4">
                    Read more
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 card">
              <div className="card-wrapper">
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
                <a className="link-wrap" href="#">
                  <p className="mbr-link mbr-fonts-style display-4">
                    Read more
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section data-bs-version="5.1" class="slider1 programm5 mbr-embla cid-tFcgtIIPnX" id="slider1-8">
    <div class="container-fluid">
  <div class="row position-relative">
      <div class="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true" data-auto-play-interval="5" data-draggable="true">
          <div class="embla__viewport">
              <div class="embla__container">
                  <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                      <div class="card-wrap">
                          <div class="item-wrapper position-relative">
                              <div class="image-wrap">
                                  <img src="extensions/programm5/software-development-company/assets/images/image14.jpg" alt="">
                              </div>
                          </div>
                          <div class="content-wrap">
                              <div class="name-wrapper">
                                  <div class="name-wrap">
                                      <h4 class="mbr-name mbr-fonts-style display-7">
                                          <strong>Frances Boyd</strong>
                                      </h4>
                                      <p class="mbr-role mbr-fonts-style display-4">
                                          Software Engineer/Developer
                                      </p>
                                  </div>
                                  <a class="link-wrap" href="#">
                                      <p class="mbr-link mbr-fonts-style display-4">
                                          View more
                                      </p>
                                  </a>
                              </div>
                              <p class="mbr-text mbr-fonts-style display-7">
                                  Employees may provide feedback on the overall work environment, including
                                  factors such as office culture, teamwork, and employee morale. Positive feedback
                                  might include a supportive and collaborative work environment, open
                                  communication channels, and a positive company culture that promotes growth and
                                  learning.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                      <div class="card-wrap">
                          <div class="item-wrapper position-relative">
                              <div class="image-wrap">
                                  <img src="extensions/programm5/software-development-company/assets/images/image3.jpg" alt="">
                              </div>
                          </div>
                          <div class="content-wrap">
                              <div class="name-wrapper">
                                  <div class="name-wrap">
                                      <h4 class="mbr-name mbr-fonts-style display-7">
                                          <strong>Carla Newman</strong>
                                      </h4>
                                      <p class="mbr-role mbr-fonts-style display-4">
                                          Full Stack Developer
                                      </p>
                                  </div>
                                  <a class="link-wrap" href="#">
                                      <p class="mbr-link mbr-fonts-style display-4">
                                          View more
                                      </p>
                                  </a>
                              </div>
                              <p class="mbr-text mbr-fonts-style display-7">
                                  Employees may provide feedback on the leadership and management within the
                                  company. Positive feedback might include effective leadership, clear
                                  communication of company goals and expectations, and supportive management
                                  styles.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                      <div class="card-wrap">
                          <div class="item-wrapper position-relative">
                              <div class="image-wrap">
                                  <img src="extensions/programm5/software-development-company/assets/images/image4.jpg" alt="">
                              </div>
                          </div>
                          <div class="content-wrap">
                              <div class="name-wrapper">
                                  <div class="name-wrap">
                                      <h4 class="mbr-name mbr-fonts-style display-7">
                                          <strong>James Copeland</strong>
                                      </h4>
                                      <p class="mbr-role mbr-fonts-style display-4">
                                          Mobile App Developer
                                      </p>
                                  </div>
                                  <a class="link-wrap" href="#">
                                      <p class="mbr-link mbr-fonts-style display-4">
                                          View more
                                      </p>
                                  </a>
                              </div>
                              <p class="mbr-text mbr-fonts-style display-7">
                                  Employees may provide feedback on the company's commitment to employee
                                  growth and development. Positive feedback might include opportunities for
                                  skill enhancement, training programs, mentoring, and career advancement
                                  pathways.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="embla__slide slider-image item" style="margin-left: 2rem; margin-right: 2rem;">
                      <div class="card-wrap">
                          <div class="item-wrapper position-relative">
                              <div class="image-wrap">
                                  <img src="extensions/programm5/software-development-company/assets/images/image5.jpg" alt="">
                              </div>
                          </div>
                          <div class="content-wrap">
                              <div class="name-wrapper">
                                  <div class="name-wrap">
                                      <h4 class="mbr-name mbr-fonts-style display-7">
                                          <strong>Troy George</strong>
                                      </h4>
                                      <p class="mbr-role mbr-fonts-style display-4">
                                          Quality Assurance Engineer/Tester
                                      </p>
                                  </div>
                                  <a class="link-wrap" href="#">
                                      <p class="mbr-link mbr-fonts-style display-4">
                                          View more
                                      </p>
                                  </a>
                              </div>
                              <p class="mbr-text mbr-fonts-style display-7">
                                  Positive feedback might include flexible working hours, remote work options,
                                  and supportive policies that prioritize employee well-being. Negative
                                  feedback could highlight long working hours, excessive workload, or a lack
                                  of work-life balance.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <button class="embla__button embla__button--prev">
              <span class="mbr-iconfont mobi-mbri-left mobi-mbri" aria-hidden="true"></span>
              <span class="sr-only visually-hidden visually-hidden">Previous</span>
          </button>
          <button class="embla__button embla__button--next">
              <span class="mbr-iconfont mobi-mbri-right mobi-mbri" aria-hidden="true"></span>
              <span class="sr-only visually-hidden visually-hidden">Next</span>
          </button>
      </div>
  </div>
    </div>
</section>
<section data-bs-version="5.1" class="content6 programm5 cid-tFcgz9Nwuf" id="content6-a">
    <div class="container">
  <div class="row">
      <div class="col-12 col-lg-4">
          <div class="title-wrapper">
              <h2 class="mbr-section-title mbr-fonts-style display-2">
                  The quality of the software is assessed
              </h2>
          </div>
      </div>
      <div class="col-12 col-lg-8">
          <ul class="list mbr-fonts-style display-7">
              <li class="item-wrap">Software should meet its intended purpose</li>
              <li class="item-wrap">The software should be dependable and consistently perform</li>
              <li class="item-wrap">
                  Performance assessment involves evaluating how efficiently the software operates
              </li>
              <li class="item-wrap">
                  Usability assessment focuses on how easy it is for users to interact with the software
              </li>
          </ul>
      </div>
  </div>
    </div>
</section> */}
      <section
        data-bs-version="5.1"
        className="content4 programm5 cid-tFckpILCGl"
        id="content4-e"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  The company's main partner
                </h2>
              </div>
              <div className="card-wrapper">
                <div className="card-wrap">
                  <div className="icon-wrapper">
                    <img
                      className="partnerQuote"
                      src="/extensions/programm5/assets/images/claire.jpg"
                      alt="Claire - CEO"
                    />
                  </div>
                  <p className="mbr-text mbr-fonts-style display-7">
                    "The Motion team are incredible — they're very skilled and
                    we love having them working with our care homes." — Claire,
                    CEO, Sheffcare
                  </p>
                </div>
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
            <div className="col-12 col-lg-6">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  Send us a message
                </h2>
                <p className="mbr-desc mbr-fonts-style display-7">
                  We look forward to your questions and requests
                </p>
                <div className="person-wrapper">
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
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 mx-auto mbr-form"
              data-form-type="formoid"
            >
              <form
                action="https://mobirise.eu/"
                method="POST"
                className="mbr-form form-with-styler"
                data-form-title="Form Name"
              >
                <input
                  type="hidden"
                  name="email"
                  data-form-email="true"
                  defaultValue="IbzxXQPJStSdWtPj3oq84i7BdqHv2ktfIQrfiE9si6uqWZrelRS/JGb+pjrwkkzMVifYwZhg4i0eapY4nq9MB8J8n5CsJg1+8Ic6V+4I/RfeCok1Y39kl05aRCVa8gZB.gzEfBE+/c7+FtsT/9yAvMCpTjFrVFpkTdyzUG5XOw4fNoGJfPxBxvZLfWBJ3WR7ws3EpCQvkgHYIaM+HBnLVOYCvlgBC0P6PSL3+rDY05ZwS/yD0Bo39yrzn0VN6x1YT"
                />
                <div className="row">
                  <div
                    hidden="hidden"
                    data-form-alert=""
                    className="alert alert-success col-12"
                  >
                    Thanks for filling out the form!
                  </div>
                  <div
                    hidden="hidden"
                    data-form-alert-danger=""
                    className="alert alert-danger col-12"
                  >
                    {' '}
                    Oops...! some problem!
                  </div>
                </div>
                <div className="dragArea row">
                  <div
                    className="col-lg-6 col-md-12 col-sm-12 form-group mb-3"
                    data-for="name"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      data-form-field="name"
                      className="form-control display-7"
                      defaultValue=""
                      id="name-form1-d"
                    />
                  </div>
                  <div
                    className="col-lg-6 col-md-12 col-sm-12 form-group mb-3"
                    data-for="number"
                  >
                    <input
                      type="number"
                      name="number"
                      placeholder="Phone"
                      data-form-field="number"
                      className="form-control display-7"
                      max={100}
                      min={0}
                      step={1}
                      defaultValue=""
                      id="number-form1-d"
                    />
                  </div>
                  <div
                    className="col-lg-12 col-md-12 col-sm-12 form-group mb-3"
                    data-for="email"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your e-mail"
                      data-form-field="email"
                      className="form-control display-7"
                      defaultValue=""
                      id="email-form1-d"
                    />
                  </div>
                  <div
                    className="col-lg-12 col-md-12 col-sm-12 form-group mb-3"
                    data-for="textarea"
                  >
                    <textarea
                      name="textarea"
                      placeholder="Your message"
                      data-form-field="textarea"
                      className="form-control display-7"
                      id="textarea-form1-d"
                      defaultValue={''}
                    />
                  </div>
                  <div className="col-md-auto col mbr-section-btn">
                    <button
                      type="submit"
                      className="btn btn-secondary display-4"
                    >
                      Send now
                    </button>
                  </div>
                </div>
              </form>
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
                  <a href="extensions/programm5/index.html">
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
                Signup to our newsletter:
              </label>
              <form className="emailForm" onSubmit={handleSubmit}>
                <input
                  id="newsletter-email"
                  type="email"
                  className="form-control display-7"
                  value={email}
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="signUp btn btn-secondary display-4"
                  type="submit"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="contacts-wrapper">
                <ul className="list mbr-fonts-style display-4">
                  <li className="item-wrap">
                    Kroto Innovation Centre, North Campus, 318 Broad Lane,
                    Sheffield
                  </li>
                  <li className="item-wrap">info@motion.org.uk</li>
                  <li className="item-wrap">+44 7543 858684</li>
                  <li className="item-wrap">Privacy Policy</li>
                  <li className="item-wrap">Terms of Use</li>
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
              </div>
            </div>
            <div className="col-12">
              <p className="mbr-fonts-style copyright display-4">
                © Copyright 2030 Motion - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
