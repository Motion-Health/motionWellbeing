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
      <title>Motion Marketing</title>
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
                <a
                  className="btn btn-secondary display-4"
                  href="https://calendly.com/zeezy-1/motion"
                >
                  Book a Discovery Call
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
                <h2 className="mbr-section-title statTitle mbr-fonts-style display-2">
                  <span>90%</span> of privately funded families find their
                  chosen care service online
                </h2>
                <h1 className="mbr-section-title mbr-fonts-style display-1">
                  Want to unlock the power of digital marketing for your{' '}
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Care Home?',
                      3000,
                      ' ',
                      100,
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
                        Marketing Strategy
                      </p>
                    </div>
                    <div className="tag-item">
                      <svg
                        className="customIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                      </svg>

                      <p className="mbr-tag mbr-fonts-style display-7">
                        SEO &amp; Social Media
                      </p>
                    </div>
                    <div className="tag-item">
                      <svg
                        className="customIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
                      </svg>
                      <p className="mbr-tag mbr-fonts-style display-7">
                        Website Design
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mbr-section-btn">
                  <a
                    className="btn btn-secondarydisplay-4 services-button btn-secondary"
                    href="#features6-6"
                  >
                    Our Services
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
                  clients incredible stories. Whether it's
                  <strong> recruiting staff</strong>,
                  <strong> increasing occupancy</strong> with self-funding
                  families or <strong>improving brand awareness</strong> — you
                  can rest assured that Motion will take care of the you.
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
                    +
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
                <h2 className="mbr-section-title mbr-fonts-style display-2  blacktitle ">
                  Our Services
                </h2>
              </div>
            </div>
            <div className="servicesGrid">
              <div id="tab1" className="tab-pane in active">
                <svg
                  className="customServiceIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                >
                  <path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
                </svg>
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  Marketing Strategy
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Discover the power of compelling brand strategy. Our expert
                  team crafts unique branding solutions that resonate with your
                  audience, ensuring your brand stands out in today's
                  competitive marketplace.
                </p>
              </div>
              <div id="tab2" className="tab-pane">
                <svg
                  className="customServiceIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                </svg>
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  SEO
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Boost your online visibility with our specialized SEO
                  services. We optimize your website to rank higher in search
                  engine results, driving more organic traffic and helping you
                  reach the right customers.
                </p>
              </div>
              <div id="tab3" className="tab-pane" role="tabpanel">
                <svg
                  className="customServiceIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                </svg>
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  Social Media Management
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Engage and grow your audience with our social media management
                  services. We create and manage top-performing social media
                  campaigns, tailored to foster community and build lasting
                  relationships with your followers.
                </p>
              </div>
              <div id="tab4" className="tab-pane" role="tabpanel">
                <svg
                  className="customServiceIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h420v-140H160v140Zm500 0h140v-360H660v360ZM160-460h420v-140H160v140Z" />
                </svg>
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  Website
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Create an impactful online presence with our professional
                  website development. Our team designs and develops custom,
                  user-friendly websites that not only look great but also
                  perform seamlessly on all devices.
                </p>
              </div>
              <div id="tab5" className="tab-pane" role="tabpanel">
                <svg
                  className="customServiceIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M280-240q-17 0-28.5-11.5T240-280v-80h520v-360h80q17 0 28.5 11.5T880-680v600L720-240H280ZM80-280v-560q0-17 11.5-28.5T120-880h520q17 0 28.5 11.5T680-840v360q0 17-11.5 28.5T640-440H240L80-280Zm520-240v-280H160v280h440Zm-440 0v-280 280Z" />
                </svg>
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  Chatbots
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  Enhance customer interaction with our intelligent chatbot
                  solutions. Our chatbots provide instant, 24/7 assistance to
                  your customers, improving response times and boosting overall
                  satisfaction.
                </p>
              </div>
              <div id="tab5" className="tab-pane" role="tabpanel">
                <svg
                  className="customServiceIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z" />
                </svg>
                <h3 className="mbr-section-title customTitle mbr-fonts-style display-2">
                  Branding
                </h3>
                <p className="mbr-desc mbr-fonts-style display-7">
                  A clear set of guidelines that consistently communicates your
                  brand, its values and what makes it special.
                </p>
              </div>
            </div>
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
                  Check out our latest blogs and articles to help you grow your
                  care home
                </h2>
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
                  SEO is the process of optimizing your website to rank higher
                  in search engine results pages, thereby increasing the amount
                  of organic (or free) traffic your website receives.
                </p>
                <a className="link-wrap" href="/blog/SEO-Explained/">
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
                  href="blog/Protect-your-carehome-with-this-Cyber-Security-Cheatsheat/"
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
                  href="/blog/How-to-attract-more-careers-to-your-home/"
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
        className="form1 programm5 cid-tFcgDM3awY"
        id="form1-d"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-wrapper">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  It's time for someone to shout about how amazing you are for
                  onces
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
                Sign up to our newsltter to be first to hear about news and
                updates:
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
                    Sheffield Science Park Cooper Buildings, Arundel St,
                    Sheffield City Centre, Sheffield S1 2NS
                  </li>
                  <li className="item-wrap">info@motion.org.uk</li>
                  <li className="item-wrap">+44 7543 858684</li>
                  <li className="item-wrap">
                    <a href="public/assets/documents/GDPR-Policy.pdf">
                      GDPR Policy
                    </a>
                  </li>
                  <li className="item-wrap">
                    <a href="public/assets/documents/Our-Values.pdf">
                      Our Values
                    </a>
                  </li>
                  <li className="item-wrap">
                    <a href="public/assets/documents/Privacy-Policy.pdf">
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
