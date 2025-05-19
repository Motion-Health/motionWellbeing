import Link from 'next/link';
import React, { useEffect } from 'react';

import AppIcon from '@/components/AppIcon';

import styles from './Footer.module.css';

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Wv6PpD';
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
                <Link href="/knowledge-hub">Knowledge Hub</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
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

        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <h3>
              Sign up to our newsletter and be the first to hear about news and
              updates
            </h3>
            <div
              className={`klaviyo-form-UcvnLw ${styles.newsletterForm}`}
            ></div>
          </div>
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
