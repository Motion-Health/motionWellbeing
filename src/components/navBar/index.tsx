import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

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
  return (
    <section
      data-bs-version="5.1"
      className="menu menu1 programm5 cid-tFcg6m8FPY"
      once="menu"
      id="menu1-0"
    >
      <nav
        className={`navbar navbar-dropdown navbar-expand-lg ${
          scrolled ? 'scrolled' : ''
        }`}
      >
        <div className="menu_box container">
          <div className="navbar-brand d-flex">
            <span className="navbar-logo">
              <a href="/">
                <img
                  src="/extensions/programm5/software-development-company/assets/images/logo.svg"
                  alt=""
                />
              </a>
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
                <a className="nav-link link display-4" href="/">
                  Platform
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link display-4" href="/blog">
                  Resource Hub
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link link display-4" href="/blog">
                  Success Stories
                </a>
              </li> */}
              {/* <li className="nav-item">
                  <a className="nav-link link display-4" href="/blog">
                    About
                  </a>
                </li>  */}
              <li className="nav-item midHide">
                <a className="nav-link link display-4" href="/pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item midHide">
                <a className="nav-link link display-4" href="/other-services">
                  Other Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link display-4" href="/login">
                  Login
                </a>
              </li>
            </ul>

            <div
              className="mbr-section-btn-main fixWidth blueDemoButtonContainer"
              role="tablist"
            >
              <a className="blueDemoButton" href="/book-demo">
                Get a Demo
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
