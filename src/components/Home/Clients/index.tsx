import Image from 'next/legacy/image'; // Import the Image component from next/image
import React from 'react';

import styles from './clients.module.css';

export const Clients = () => {
  return (
    <section className={styles.clientWrapper}>
      <h2 className="landing-h2">Our clients</h2>
      <div className={styles.clients}>
        {/* Update the img tags to use the Image component */}
        <div className={styles.clientLogo}>
          <Image
            src="/assets/logos/bupa.jpg"
            alt="bupa"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.clientLogo}>
          <Image
            src="/assets/logos/sheffcare.jpg"
            alt="sheffcare"
            width={250}
            height={150}
            layout="responsive"
          />
        </div>
        <div className={styles.clientLogo}>
          <Image
            src="/assets/logos/12-trees.jpg"
            alt="twelvetrees"
            width={250}
            height={150}
            layout="responsive"
          />
        </div>
        <div className={styles.clientLogo}>
          <Image
            src="/assets/logos/age-uk.jpg"
            alt="ageuk"
            width={250}
            height={150}
            layout="responsive"
          />
        </div>
        <div className={styles.clientLogo}>
          <Image
            src="/assets/logos/ideal-carehomes.jpg"
            alt="idealcarehomes"
            width={250}
            height={150}
            layout="responsive"
          />
        </div>
        <div className={styles.clientLogo}>
          <Image
            src="/assets/logos/hc-one.jpg"
            alt="hcone"
            width={150}
            height={150}
            layout="responsive"
            className={styles.hcOne}
          />
        </div>
      </div>
    </section>
  );
};
