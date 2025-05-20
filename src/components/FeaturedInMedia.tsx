import React from 'react';

import styles from './FeaturedInMedia.module.css';

const FeaturedInMedia = () => {
  return (
    <section className={styles.featuredMediaSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className={styles.featuredText}>
              We&apos;re award-winning and newsworthy!
            </p>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logoItem}>
            <div className={styles.logoWrapper}>
              <img
                src="/assets/images/featured-in-media/ukri-innovate-uk-square-logo.png"
                alt="Innovate UK logo"
                width={70}
                height={50}
                className={styles.mediaLogo}
              />
            </div>
          </div>
          <div className={styles.logoItem}>
            <div className={styles.logoWrapper}>
              <img
                src="/assets/images/featured-in-media/ford-philanthropy.png"
                alt="Ford Philanthropy logo"
                width={130}
                height={65}
                className={styles.mediaLogo}
              />
            </div>
          </div>
          <div className={styles.logoItem}>
            <div className={styles.logoWrapper}>
              <img
                src="/assets/images/featured-in-media/UnLtd logo 300dpi.png"
                alt="UnLtd logo"
                width={70}
                height={45}
                className={styles.mediaLogo}
              />
            </div>
          </div>
          <div className={styles.logoItem}>
            <div className={styles.logoWrapper}>
              <img
                src="/assets/images/featured-in-media/fedex.png"
                alt="FedEx logo"
                width={70}
                height={45}
                className={styles.mediaLogo}
              />
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.logoItem}>
            <div className={styles.logoWrapper}>
              <img
                src="/assets/images/featured-in-media/BBC_Logo_2021.svg"
                alt="BBC logo"
                width={70}
                height={40}
                className={styles.mediaLogo}
              />
            </div>
          </div>
          <div className={styles.logoItem}>
            <div className={styles.logoWrapper}>
              <img
                src="/assets/images/featured-in-media/The-Times-Logo.png"
                alt="The Times logo"
                width={140}
                height={90}
                className={`${styles.mediaLogo} ${styles.timesLogo}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInMedia;
