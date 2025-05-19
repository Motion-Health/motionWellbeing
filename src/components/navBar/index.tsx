import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handles smooth scrolling to the section when already on the homepage
  const scrollToSection = (e: React.MouseEvent) => {
    // Only handle scrolling if we're already on the homepage
    if (router.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById(
        'how-motion-helps-your-care-organisation'
      );
      if (section) {
        // Get the section's position
        const sectionPosition = section.getBoundingClientRect().top;
        // Calculate position with offset (100px up from the default position)
        const offsetPosition = sectionPosition + window.pageYOffset - 100;

        // Scroll to the adjusted position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  // Check for hash in URL when component mounts
  useEffect(() => {
    // Check if there's a hash in the URL
    if (router.asPath.includes('#how-motion-helps-your-care-organisation')) {
      setTimeout(() => {
        const section = document.getElementById(
          'how-motion-helps-your-care-organisation'
        );
        if (section) {
          // Get the section's position
          const sectionPosition = section.getBoundingClientRect().top;
          // Calculate position with offset (100px up from the default position)
          const offsetPosition = sectionPosition + window.scrollY - 100;

          // Scroll to the adjusted position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 300); // Slight delay to ensure the page is fully loaded
    }
  }, [router.asPath]);

  return (
    <section
      data-bs-version="5.1"
      className="menu menu1 programm5 cid-tFcg6m8FPY"
      id="menu1-0"
    >
      <nav
        className={`navbar navbar-dropdown navbar-expand-lg ${
          scrolled ? 'scrolled' : ''
        }`}
        style={{ paddingTop: '12px', paddingBottom: '12px' }}
      >
        <div
          className="menu_box container"
          style={{ paddingTop: '0', paddingBottom: '0' }}
        >
          <div className="navbar-brand d-flex">
            <span className="navbar-logo">
              <Link href="/">
                <img
                  src="/extensions/programm5/software-development-company/assets/images/logo.svg"
                  alt=""
                />
              </Link>
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-bs-toggle="collapse"
              data-target="#navbarSupportedContent"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="hamburger">
                <span />
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
              <li className="nav-item">
                <Link
                  href="/#how-motion-helps-your-care-organisation"
                  className="nav-link link display-4"
                  onClick={scrollToSection}
                >
                  Platform
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link display-4" href="/knowledge-hub">
                  Knowledge hub
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link display-4" href="/about-us">
                  About us
                </Link>
              </li>
              {/* <li className="nav-item midHide">
                <Link className="nav-link link display-4" href="/pricing">
                  Pricing
                </Link>
              </li> */}
              {/* <li className="nav-item midHide">
                <a
                  className="nav-link link display-4"
                  href="https://careers.motion.org.uk"
                >
                  Careers
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link link display-4"
                  href="https://platform.motion.org.uk/wellbeing/dashboard/"
                >
                  Log in
                </a>
              </li>
            </ul>

            <div
              className="mbr-section-btn-main fixWidth blueDemoButtonContainer"
              role="tablist"
            >
              <Link className="blueDemoButton" href="/get-a-demo">
                Get a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
