import Image from 'next/legacy/image';
import React from 'react';

import styles from './cards.module.css';

export const Cards = () => {
  return (
    <section id="services" className={styles.cardWrapper}>
      <div className={styles.cardAlternative}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/home/card3.webp"
            alt="Motion Wellbeing"
            width={460}
            height={320}
            layout="fixed"
            priority
          />
        </div>
        <h2>Motion Wellbeing</h2>
        <p>
          A dementia-friendly digital wellbeing platform created by Activity
          Coordinators for Activity Coordinators to deliver outstanding
          wellbeing for those working and living in care.
        </p>
        <a
          href="/wellbeing/create-account"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign up for FREE
        </a>
      </div>
    </section>
  );
};
