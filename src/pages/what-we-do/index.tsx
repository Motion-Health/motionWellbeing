import Head from 'next/head';
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
    <div className="white-background">
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

      <Header />
      <div className={styles.steps}>
        <div className={styles.stepsImage}>
          <img src="/assets/images/what-we-do-image.png" alt="" />
        </div>
        <div className={styles.stepsContent}>
          <div
            className={`${styles.productCard} ${
              expandedCard === 'discover' ? styles.expanded : ''
            }`}
            style={{ backgroundColor: '#9347b8' }}
            onClick={() =>
              setExpandedCard(expandedCard !== 'discover' ? 'discover' : null)
            }
          >
            <h1>Get started</h1>
            <p>
              Start your Motion journey with hands-on support from our wellbeing
              and marketing experts. We will work with your team to understand
              how we can tailor our support to meet the wellbeing needs of your
              residents and marketing needs of your service. Once this has been
              established we deliver comprehensive training to your team to
              ensure we hit the ground running together!
            </p>
          </div>
          <div
            className={`${styles.productCard} ${
              expandedCard === 'deliver' ? styles.expanded : ''
            }`}
            style={{ backgroundColor: '#7D83D1' }}
            onClick={() =>
              setExpandedCard(expandedCard !== 'deliver' ? 'deliver' : null)
            }
          >
            <h1>Boost wellbeing</h1>
            <div className={styles.flexDisplay}>
              <div className={styles.laptopContainer}>
                <div
                  className={`${styles.screenContent} `}
                  style={{ overflow: 'hidden', top: `25px`, left: `97px` }}
                >
                  <img
                    style={{ transform: `translateX(${slideNumber}%)` }}
                    className={`${styles.screenContent} ${
                      slideOut && styles.slideOut
                    }`}
                    src={'/assets/images/product/schedule.png'}
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

              <div className={styles.fillAvailable}>
                <div
                  className={styles.featureButton}
                  onMouseEnter={() => {
                    setSlideNumber(0); // Set the current screen to null
                  }}
                  onClick={() => setSlideNumber(0)}
                >
                  Plan
                </div>
                <div
                  className={styles.featureButton}
                  onMouseEnter={() => {
                    setSlideNumber(-100); // Set the current screen to null
                  }}
                  onClick={() => setSlideNumber(-100)}
                >
                  Deliver
                </div>
                <div
                  className={styles.featureButton}
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
              deliver person-centred activities with the ‘Wellbeing activities’
              library and automatically generate reports for your regulatory
              body.
            </p>
          </div>

          <div
            className={`${styles.productCard} ${
              expandedCard === 'spread' ? styles.expanded : ''
            }`}
            style={{ backgroundColor: '#64C3EE' }}
            onClick={() =>
              setExpandedCard(expandedCard !== 'spread' ? 'spread' : null)
            }
          >
            <h1>Generate leads</h1>
            <p>
              As a care provider one of your biggest marketing assets is your
              wellbeing provision. Our marketing experts support you to showcase
              your activities in order to increase the attractiveness of your
              care service and ultimately generate more leads.
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
