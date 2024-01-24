import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p className={styles.rights}>© 2024. All rights reserved.</p>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="/assets/documents/Privacy-Policy.pdf" rel="noopener" target="_blank">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/assets/documents/GDPR-Policy.pdf" rel="noopener" target="_blank">
                GDPR
              </a>
            </li>
            <li>
              <a href="/assets/documents/Impact-Report.pdf" rel="noopener" target="_blank">
                Impact Report
              </a>
            </li>
            <li>
              <a href="/assets/documents/Our-Values.pdf" rel="noopener" target="_blank">
                Our Values
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
