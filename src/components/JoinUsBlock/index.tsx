import React from 'react';

import styles from './JoinUsBlock.module.css';

export default function JoinUsBlock() {
  return (
    <div className="container  ${styles.JoinUsBlockContainer}">
      <img
        src="/assets/images/pricing/man.png"
        className={styles.woman}
        alt="Cartoon Woman"
      />
      <img
        src="/assets/images/pricing/woman.png"
        className={styles.man}
        alt="Cartoon Man"
      />
      <div className={styles.JoinUsBlock}>
        <h1 className={styles.title}>Join Our Trusted Care Partners</h1>
        <div className="col-md-auto col mbr-section-btn centeredButton">
          <a
            href="/get-a-demo"
            className="btn btn-secondary display-4 discoveryButton whiteDemoButton"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
