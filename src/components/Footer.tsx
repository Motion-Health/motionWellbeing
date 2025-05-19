import Link from 'next/link';
import React from 'react';

import AppIcon from './AppIcon';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section with Logo and Navigation */}
        <div className={styles.topSection}>
          <div className={styles.logo}>
            <AppIcon variant="white" className={styles.logoIcon} />
          </div>
          <nav className={styles.topNav}>
            <ul className={styles.navList}>
              <li>
                <Link href="/platform">Platform</Link>
              </li>
              <li>
                <Link href="/knowledge-hub">Knowledge hub</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/help">Help</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h3>Contact</h3>
            <a href="mailto:info@motion.org.uk">info@motion.org.uk</a>
            <a href="tel:+447543858684">+44 7543 858 684</a>
          </div>

          {/* Copyright */}
          <div className={styles.copyright}>
            <p>
              Copyright {new Date().getFullYear()} Motion Health Ltd — All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
