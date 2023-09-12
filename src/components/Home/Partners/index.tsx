import React, { useState } from "react";

import styles from "./clients.module.css";

export const Partners = () => {
  return (
    <section className={styles.clientWrapper}>
      <h2>Partners and supporters</h2>
      <div className={styles.clients}>
        <img src="../../assets/partners/seuk.png" alt="SEUK" />
        <img src="../../assets/partners/tnl.png" alt="TNL" />
        <img src="../../assets/partners/shu.png" alt="SHU" />
        <img src="../../assets/partners/uos.png" alt="UOS" />
        <img src="../../assets/partners/sct.png" alt="SCT" />
        <img src="../../assets/partners/ukri.jpg" alt="UKRI" />
      </div>
    </section>
  );
};
