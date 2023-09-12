import React, { useState } from "react";
import styles from "./clients.module.css";

export const Clients = () => {
  return (
    <section className={styles.clientWrapper}>
      <h2 className="landing-h2">Our clients</h2>
      <div className={styles.clients}>
        <img src="../../assets/logos/bupa.jpg" alt="bupa" />
        <img src="../../assets/logos/sheffcare.jpg" alt="sheffcare" />
        <img src="../../assets/logos/12-trees.jpg" alt="twelvetrees" />
        <img src="../../assets/logos/age-uk.jpg" alt="ageuk" />
        <img
          src="../../assets/logos/ideal-carehomes.jpg"
          alt="idealcarehomes"
        />
        <img src="../../assets/logos/hc-one.jpg" alt="hcone" />
      </div>
    </section>
  );
};
