import Link from 'next/link';
import React from 'react';

import AppIcon from '@/components/AppIcon';

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
                <Link href="/#how-motion-helps-your-care-organisation">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub">Knowledge hub</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <a href="https://platform.motion.org.uk/wellbeing/dashboard/">
                  Log in
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h3>Contact Us</h3>
            <p>
              <a href="mailto:info@motion.org.uk">info@motion.org.uk</a>
            </p>
            <p>
              <a href="tel:+447543858684">+44 7543 858 684</a>
            </p>
          </div>

          {/* Copyright */}
          <div className={styles.copyright}>
            <p>
              © Copyright {new Date().getFullYear()} Motion Health Ltd - All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
