import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

import { Footer } from '@/components/Home/Footer';
import { Header } from '@/components/Home/header/Header';

import styles from './product.module.css';
const Index = () => {
  const [expandedCard, setExpandedCard] = useState('discover');
  const [currentScreen, setCurrentScreen] = useState(
    '/assets/images/product/dashboard.png'
  ); // Default screen
  const [newScreen, setNewScreen] = useState(
    '/assets/images/product/dashboard.png'
  ); // Default screen
  const [slideNumber, setSlideNumber] = useState(0);
  const [slideOut, setSlideOut] = useState(false);
  return (
    <div>
      <Head>
        <title>Creating moments that move people | Motion Wellbeing</title>
        <meta property="og:url" content="https://www.motionexercise.co.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Creating moments that move people | Motion Wellbeing"
        />
        <meta
          property="og:description"
          content="A dementia-friendly digital wellbeing platform created by Activity Coordinators for Activity Coordinators to deliver outstanding wellbeing for those working and living in care."
        />
        <meta
          name="description"
          content="A dementia-friendly digital wellbeing platform created by Activity Coordinators for Activity Coordinators to deliver outstanding wellbeing for those working and living in care."
        />
        <meta property="og:image" content="./og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Creating moments that move people | Motion"
        />
        <meta name="twitter:image" content="./og-image.jpg" />
        <meta
          property="twitter:description"
          content="A dementia-friendly digital wellbeing platform created by Activity Coordinators for Activity Coordinators to deliver outstanding wellbeing for those working and living in care."
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onLoad={() => {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/zeezy-1/motion?hide_landing_page_details=1&hide_gdpr_banner=1',
            parentElement: document.getElementById('calendly-inline-widget'),
          });
        }}
      />
      <Header />
      <main className={styles.main}>
        <div className={styles.motionTitle}>
          <h2>How Motion Wellbeing works</h2>
        </div>
        <div className={styles.steps}>
          <div className={styles.stepsImage}>
            <div
              className={styles.started}
              onClick={() => setExpandedCard('discover')}
            >
              <div>
                <img
                  className={styles.icon}
                  src={'/assets/images/product/Icons/Vectorstarted.svg'}
                  alt="Motion icon"
                />
              </div>
              <h1>1. Get started</h1>
            </div>
            <img
              className={styles.arrowTwo}
              style={{
                transform: 'translateX(140px) translateY(5px)',
              }}
              src={'/assets/images/product/Icons/ArrowOne.png'}
              alt="arrow"
            />
            <div
              className={styles.boost}
              onClick={() => setExpandedCard('deliver')}
            >
              <div>
                <img
                  className={styles.icon}
                  src={'/assets/images/product/Icons/Vectorboost.svg'}
                  alt="Motion icon"
                />
              </div>
              <h1>2. Boost wellbeing</h1>
            </div>
            <img
              className={styles.arrowTwo}
              style={{
                transform: 'translateX(-130px) translateY(-50px)',
              }}
              src={'/assets/images/product/Icons/ArrowTwo.png'}
              alt="arrow"
            />
            <div
              className={styles.spread}
              onClick={() => setExpandedCard('spread')}
            >
              <div>
                <img
                  className={styles.icon}
                  src={'/assets/images/product/Icons/Vectorleads.svg'}
                  alt="Motion icon"
                />
              </div>
              <h1>3. Spread the word</h1>
            </div>
          </div>
          <div className={styles.stepsContent}>
            <div
              className={`${styles.productCard} ${
                expandedCard === 'discover' ? styles.expanded : ''
              }`}
              style={{
                // backgroundColor: '#efd1ff',
                // backgroundColor: 'hwb(194deg 63% 0% / 100%)',
                backgroundColor: '#e0faf3',
                paddingBottom: `80px`,
                borderRadius: `15px 15px 0px 0px`,
              }}
              onClick={() => setExpandedCard('discover')}
            >
              <button
                className={styles.closeButton}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the card from expanding
                  if (expandedCard === 'discover') {
                    setExpandedCard('');
                  } else {
                    setExpandedCard('discover');
                  }
                }}
              >
                {expandedCard === 'discover' ? 'X' : <KeyboardArrowDownIcon />}
              </button>
              <h1>Get started</h1>
              <div className={styles.flexText}>
                <img
                  className={styles.startedImage}
                  src={'/assets/images/product/get-started.jpg'}
                  alt="Zeezy demonstrating the Motion platform"
                />
                <p>
                  Start your Motion journey with hands-on support from our
                  wellbeing and marketing experts. We will work with your team
                  to understand how we can tailor our support to meet the
                  wellbeing needs of your residents and marketing needs of your
                  service. Once this has been established we deliver
                  comprehensive training to your team to ensure we hit the
                  ground running together!
                </p>
              </div>
            </div>
            <div
              className={`${styles.productCard} ${
                expandedCard === 'deliver' ? styles.expanded : ''
              }`}
              style={{
                // backgroundColor: '#d1d5ff',
                // backgroundColor: 'hwb(207deg 52% 0% / 114%)',
                // backgroundColor: '#f68eb7',
                backgroundColor: '#feecf3',

                marginTop: `-15px`,
                paddingBottom: `169px`,
                borderRadius: `15px 15px 10px 10px`,
              }}
              onClick={() => setExpandedCard('deliver')}
            >
              <button
                className={styles.closeButton}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the card from expanding
                  if (expandedCard === 'deliver') {
                    setExpandedCard('');
                  } else {
                    setExpandedCard('deliver');
                  }
                }}
              >
                {expandedCard === 'deliver' ? 'X' : <KeyboardArrowDownIcon />}
              </button>
              <h1>Boost wellbeing</h1>
              <div className={styles.flexDisplay}>
                <div className={styles.laptopContainer}>
                  <div
                    className={`${styles.screenContent} `}
                    style={{ overflow: 'hidden' }}
                  >
                    <img
                      style={{ transform: `translateX(${slideNumber}%)` }}
                      className={`${styles.screenContent} ${
                        slideOut && styles.slideOut
                      }`}
                      src={'/assets/images/product/schedual.webp'}
                      alt="Schedule activities"
                    />

                    <img
                      style={{ transform: `translateX(${slideNumber + 100}%)` }}
                      className={`${styles.screenContent} 
                  }`}
                      src={'/assets/images/product/activity.png'}
                      alt="Activity"
                    />
                    <img
                      style={{ transform: `translateX(${slideNumber + 200}%)` }}
                      className={`${styles.screenContent} 
                  }`}
                      src={'/assets/images/product/dashboard.png'}
                      alt="Motion dashboard"
                    />
                  </div>

                  <img
                    className={styles.laptopFrame}
                    src="/assets/images/product/laptop-frame.png"
                    alt="Laptop frame"
                  />
                </div>
                <div className={styles.phoneContainer}>
                  <div
                    className={`${styles.screenContent} `}
                    style={{ overflow: 'hidden' }}
                  >
                    <img
                      style={{ transform: `translateX(${slideNumber}%)` }}
                      className={`${styles.screenContent} ${
                        slideOut && styles.slideOut
                      }`}
                      src={'/assets/images/product/schedual.webp'}
                      alt="Schedule activities"
                    />

                    <img
                      style={{ transform: `translateX(${slideNumber + 100}%)` }}
                      className={`${styles.screenContent} 
                  }`}
                      src={'/assets/images/product/activity.png'}
                      alt="Activity"
                    />
                    <img
                      style={{ transform: `translateX(${slideNumber + 200}%)` }}
                      className={`${styles.screenContent} 
                  }`}
                      src={'/assets/images/product/dashboard.png'}
                      alt="Motion dashboard"
                    />
                  </div>

                  <img
                    className={styles.laptopFrame}
                    src="/assets/images/product/phone-frame.png"
                    alt="Laptop frame"
                  />
                </div>

                <div className={styles.fillAvailable}>
                  <div
                    className={`${styles.featureButton} ${
                      slideNumber === 0 && styles.active
                    }`}
                    onMouseEnter={() => {
                      setSlideNumber(0); // Set the current screen to null
                    }}
                    onClick={() => setSlideNumber(0)}
                  >
                    Plan
                  </div>
                  <div
                    className={`${styles.featureButton} ${
                      slideNumber === -10 && styles.active
                    }`}
                    onMouseEnter={() => {
                      setSlideNumber(-100); // Set the current screen to null
                    }}
                    onClick={() => setSlideNumber(-100)}
                  >
                    Deliver
                  </div>
                  <div
                    className={`${styles.featureButton} ${
                      slideNumber === -200 && styles.active
                    }`}
                    onMouseEnter={() => {
                      setSlideNumber(-200); // Set the current screen to null
                    }}
                    onClick={() => setSlideNumber(-200)}
                  >
                    Evidence
                  </div>
                </div>
              </div>

              <p>
                The easy to use platform has been designed alongside care
                providers to meet the wellbeing needs of your residents and
                service users. Get inspired and save time with ‘My planner’,
                deliver person-centred activities with the ‘Wellbeing
                activities’ library and automatically generate reports for your
                regulatory body.
              </p>
            </div>

            <div
              className={`${styles.productCard} ${
                expandedCard === 'spread' ? styles.expanded : ''
              }`}
              style={{
                // backgroundColor: '#d1f1ff',
                // backgroundColor: 'hwb(228 47% 0% / 1)',
                backgroundColor: `#d1e7ff`,
                marginTop: `-95px`,
                zIndex: `2`,
              }}
              onClick={() => setExpandedCard('spread')}
            >
              <button
                className={styles.closeButton}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the card from expanding
                  // toggleCard('spread');
                  if (expandedCard === 'spread') {
                    setExpandedCard('');
                  } else {
                    setExpandedCard('spread');
                  }
                }}
              >
                {expandedCard === 'spread' ? 'X' : <KeyboardArrowDownIcon />}
              </button>
              <h1>Generate leads</h1>
              <div className={styles.flexText}>
                <img
                  className={styles.startedImage}
                  src={'/assets/images/product/communityGame.webp'}
                  alt="Zeezy demonstrating the Motion platform"
                />
                <p>
                  As a care provider one of your biggest marketing assets is
                  your wellbeing provision. Our marketing experts support you to
                  showcase your activities in order to increase the
                  attractiveness of your care service and ultimately generate
                  more leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.discoveryBackground}>
        <h1 className={styles.discoveryTitle}>Book your free discovery call</h1>
        <div className={styles.discoveryText}>
          Not sure where to start? Let us help you by making some personalised
          recommendations for your wellbeing activities and how to use these in
          your marketing!
        </div>
        <div
          id="calendly-inline-widget"
          style={{ minWidth: 320, height: 650 }}
          data-auto-load="false"
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
