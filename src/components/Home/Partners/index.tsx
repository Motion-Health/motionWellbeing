import Image from "next/legacy/image"; // Import the Image component from Next.js
import React from "react";

import styles from "./clients.module.css";

export const Partners = () => {
  return (
    <section className={styles.clientWrapper}>
      <h2>Partners and supporters</h2>
      <div className={styles.clients}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/partners/seuk.png"
            alt="SEUK"
            layout="responsive"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/partners/keyfund.webp"
            alt="Keydfund"
            layout="responsive"
            width={250}
            height={150}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/partners/shu.png"
            alt="SHU"
            layout="responsive"
            width={250}
            height={150}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/partners/uos.png"
            alt="UOS"
            layout="responsive"
            width={250}
            height={150}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/partners/sct.png"
            alt="SCT"
            layout="responsive"
            width={250}
            height={150}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/partners/ukri.jpg"
            alt="UKRI"
            layout="responsive"
            width={250}
            height={150}
          />
        </div>
      </div>
    </section>
  );
};
