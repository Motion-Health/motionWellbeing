import Image from 'next/image';
import React from 'react';

import styles from './cards.module.css';

export const Cards = () => {
  return (
    <section id="services" className={styles.cardWrapper}>
      {/* <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/home/card1.jpg"
            alt="Tailored Exercise Sessions"
            width={451}
            height={440}
            layout="responsive"
          />
        </div>
        <h2>Tailored exercise sessions</h2>
        <p>
          Person-centred, engaging exercise sessions live-streamed exclusively
          to your residents with the same Motivator (instructor) each time.
          Equipment included FREE of charge. £45/session.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfZBMCd1K_foSowiax_FqGJfVYp5kAtzgu-OqOQioaiUk1URQ/viewform"
          target="_blank"
          rel="noopener noreferrer" // Added rel for security
        >
          Try them out
        </a>
      </div> */}

      <div className={styles.cardAlternative}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/home/card2.jpg"
            alt="Motion Wellbeing"
            width={600}
            height={400}
            layout="responsive"
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
