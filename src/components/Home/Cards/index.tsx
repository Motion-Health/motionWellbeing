import React, { useState } from "react";

import styles from "./cards.module.css";

export const Cards = () => {
  return (
    <section id="services" className={styles.cardWrapper}>
      <div className={styles.card}>
        <img
          src="../../assets/home/card1.jpg"
          alt="Tailored Exercise Sessions"
        />
        <h2>Tailored exercise sessions</h2>
        <p>
          Person-centred, engaging exercise sessions live-streamed exclusively
          to your residents with the same Motivator (instructor) each time.
          Equipment included FREE of charge. £45/session.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfZBMCd1K_foSowiax_FqGJfVYp5kAtzgu-OqOQioaiUk1URQ/viewform"
          target="_blank"
        >
          Try them out
        </a>
      </div>

      <div className={styles.cardAlternative}>
        <img src="../../assets/home/card2.jpg" alt="Motion Wellbeing" />
        <h2>Motion Wellbeing</h2>
        <p>
          A dementia-friendly digital wellbeing platform created by Activity 
          Coordinators for Activity Coordinators to deliver outstanding wellbeing 
          for those working and living in care.
        </p>
        <a href="/wellbeing/create-account" target="_blank">
          Sign up for FREE
        </a>
      </div>
    </section>
  );
};
