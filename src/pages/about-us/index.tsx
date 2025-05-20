import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';

import Footer from '@/components/Footer';
import MotionStoryCarousel from '@/components/MotionStoryCarousel';
import NavBar from '@/components/navBar';
import PageHeader from '@/components/PageHeader';
import backgroundStyles from '@/styles/backgrounds.module.css';

import styles from './styles.module.css';

const aboutText = `We're a driven team with a big belief in the power of social care, shaped by real experience. Motion began with Zeezy (our Founder) volunteering in care homes and took shape during lockdown, when we listened closely to what families and care homes needed most: better connection, more visibility, and less stress.

Since then, we've spoken to thousands of families, worked alongside care professionals, and built Motion together with the people who use it every day.

Our mission is simple. We want to shine a light on the incredible care being delivered across the country, help care homes grow in the right way, and make life a little easier for those at the heart of it all: providers, families, and residents.

Whether you're looking to increase occupancy, save time, or build trust with families, Motion is here to help. We understand your world because we've lived in it, and we've built this with you in mind.`;

const AboutUs = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />
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
      <Script
        src="/extensions/programm5/software-development-company/assets/bootstrap/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/extensions/programm5/software-development-company/assets/smoothscroll/smooth-scroll.js"
        strategy="afterInteractive"
      />
      <Script
        src="/extensions/programm5/software-development-company/assets/ytplayer/index.js"
        strategy="afterInteractive"
      />
      <Script
        src="/extensions/programm5/software-development-company/assets/dropdown/js/navbar-dropdown.js"
        strategy="afterInteractive"
      />
      <Script
        src="/extensions/programm5/software-development-company/assets/embla/embla.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/extensions/programm5/software-development-company/assets/embla/script.js"
        strategy="afterInteractive"
      />
      <Script
        src="/extensions/programm5/software-development-company/assets/mbr-tabs/mbr-tabs.js"
        strategy="afterInteractive"
      />
      <Script
        src="/extensions/programm5/software-development-company/assets/theme/js/script.js"
        strategy="afterInteractive"
      />
      <Script
        src="/extensions/programm5/software-development-company/assets/formoid.min.js"
        strategy="afterInteractive"
      />
      <div
        className={`${styles.pageContainer} ${backgroundStyles.pageGradientBackground}`}
      >
        <NavBar />
        <div className={`container ${styles.container}`}>
          <div className={styles.headerContainer}>
            <PageHeader title="About us" />
          </div>
          <section className={styles.contentSection}>
            <div className={styles.textContainer}>
              <p className={styles.aboutText}>{aboutText}</p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/assets/images/about-us/About us pic.png"
                alt="About us"
                width={400}
                height={400}
                className={styles.aboutImage}
                priority
              />
            </div>
          </section>
        </div>

        <MotionStoryCarousel />

        <section className={styles.valuesSection}>
          <div className={styles.valuesContainer}>
            <h2 className={styles.valuesSectionTitle}>Our values</h2>
            <p className={styles.valuesParagraph}>
              Our values are a reflection of what&apos;s important to our whole
              community across social care, so we formed them in partnership
              with all of our stakeholders.
            </p>
            <p className={styles.valuesParagraph}>
              <span className={styles.valueHeading}>Community</span> — Each and
              every one of us is stronger united. At Motion we are proud of our
              community of care providers, families and residents; all of whom
              have, and continue to, shaped us as an organisation.
            </p>
            <p className={styles.valuesParagraph}>
              <span className={styles.valueHeading}>People-first</span> — Every
              action we take is centred around the people in our community and
              their health and happiness. We act with integrity - doing the
              right thing, always, to ensure that you and those you care for are
              supported.
            </p>
            <p className={styles.valuesParagraph}>
              <span className={styles.valueHeading}>Innovative</span> — We are
              harnessing the power of technology for the progression of social
              care.
            </p>
            <p className={styles.valuesParagraph}>
              <span className={styles.valueHeading}>Quality</span> — We are
              committed to delivering the highest quality service, so that you
              can focus on delivering the highest quality care.
            </p>

            <div className={styles.demoButtonContainer}>
              <Link
                className={`blueDemoButton ${styles.demoButton}`}
                href="/get-a-demo"
              >
                Get a Demo
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
