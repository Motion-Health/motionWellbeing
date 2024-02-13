/* eslint-disable @next/next/no-sync-scripts */
import { Grid } from '@mui/material';

import BlogCard from '@/components/Blog/BlogCard';

import styles from './blog.module.css';

const Index = () => {
  const blogs = [
    { id: 1, name: 'SEO Explained' },
    {
      id: 3,
      name: 'How to Attract more Carers to your Home',
    },
    {
      id: 4,
      name: 'When to Invest in Marketing for Care Homes',
    },
    {
      id: 5,
      name: 'How can you Remove Bad Reviews on Indeed?',
    },
    {
      id: 6,
      name: 'Creating a Successful Sales Funnel For your Care Home',
    },
    {
      id: 7,
      name: 'What is TikTok and Should your Care Home be Using it?',
    },
    {
      id: 8,
      name: 'Why the Adult Social Care Sector is Poised for Explosive Growth',
    },
    {
      id: 9,
      name: 'How to Get Your Care Homes Featured on BBC News',
    },
    {
      id: 10,
      name: "'Nothing About Us Without Us': What We’ve Learned from Co-Designing Services with Care Homes",
    },
  ];

  return (
    <>
      <title>Knowledge hub | Motion Marketing</title>
      <meta property="og:url" content="https://www.motion.org.uk" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Motion Marketing | Knowlegde Hub" />
      <meta
        name="description"
        content="The Knowledge Hub is a collection of resources to help you understand marketing and sales for your care home."
      />
      <meta property="og:image" content="./og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Knowlegde Hub | Motion" />
      <meta name="twitter:image" content="./og-image.jpg" />
      <meta
        property="twitter:description"
        content="The Knowledge Hub is a collection of resources to help you understand marketing and sales for your care home."
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/css/styles.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/web/assets/mobirise-icons2/mobirise2.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap-grid.min.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap-reboot.min.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/dropdown/css/style.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/socicon/css/styles.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/theme/css/style.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/recaptcha.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/mobirise/css/mbr-additional.css"
      />

      <script src="/extensions/programm5/software-development-company/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/smoothscroll/smooth-scroll.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/ytplayer/index.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/dropdown/js/navbar-dropdown.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/embla/embla.min.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/embla/script.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/mbr-tabs/mbr-tabs.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/theme/js/script.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/formoid.min.js"></script>
      <script
        async
        type="text/javascript"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Wv6PpD"
      ></script>
      <section
        data-bs-version="5.1"
        className="menu menu1 programm5 cid-tFcg6m8FPY"
        once="menu"
        id="menu1-0"
      >
        <nav className="navbar navbar-dropdown navbar-expand-lg">
          <div className="menu_box container">
            <div className="navbar-brand d-flex">
              <span className="navbar-logo">
                <a href="https://marketing.motion.org.uk/">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav nav-dropdown"
                data-app-modern-menu="true"
              >
                <li className="nav-item">
                  <a className="nav-link link display-4" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link display-4" href="/blog">
                    Knowledge Hub
                  </a>
                </li>
              </ul>

              <div className="mbr-section-btn-main" role="tablist">
                <a
                  className="btn btn-secondary display-4"
                  href="https://calendly.com/zeezy-1/motion"
                >
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <div className={styles.blogHero}>
        <div className={styles.blogHeroContent}>
          <h1>Knowledge Hub</h1>
          <p>
            We've compiled these quick and easy resources to de-mystify
            marketing and sales for your care home.
          </p>
        </div>
      </div>
      <div className={styles.blogContainer}>
        <Grid container className={styles.Cards}>
          {blogs.reverse().map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Grid>
      </div>

      <section
        data-bs-version="5.1"
        className="footer1 programm5 cid-tFcguy0QTa"
        once="footers"
        id="footer1-9"
      >
        <div className="container">
          <div className="row footMargin">
            <div className="col-12 col-lg-6">
              <div className="title-wrapper">
                <span className="navbar-logo">
                  <a href="/">
                    <img
                      src="/extensions/programm5/software-development-company/assets/images/logo.svg"
                      alt="Motion Logo"
                    />
                  </a>
                </span>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <label className="mbr-desc mbr-fonts-style display-7 signupText">
                Sign up to our newsletter to be first to hear about news and
                updates:
              </label>
              <div className="klaviyo-form-UcvnLw"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="contacts-wrapper">
                <ul className="list mbr-fonts-style display-4">
                  <li className="item-wrap">
                    Sheffield Science Park Cooper Buildings, Arundel St,
                    Sheffield City Centre, Sheffield S1 2NS
                  </li>
                  <li className="item-wrap">info@motion.org.uk</li>
                  <li className="item-wrap">+44 7543 858684</li>
                  <li className="item-wrap">
                    <a href="/assets/documents/GDPR-Policy.pdf">GDPR Policy</a>
                  </li>
                  <li className="item-wrap">
                    <a href="/assets/documents/Our-Values.pdf">Our Values</a>
                  </li>
                  <li className="item-wrap">
                    <a href="/assets/documents/Privacy-Policy.pdf">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="social-row">
                <div className="soc-item">
                  <a href="https://instagram.com/motion.org.uk" target="_blank">
                    <span className="mbr-iconfont socicon socicon-instagram" />
                  </a>
                </div>
                <div className="soc-item">
                  <a href="https://facebook.com/motion.org.uk" target="_blank">
                    <span className="mbr-iconfont socicon socicon-facebook" />
                  </a>
                </div>
                <div className="soc-item">
                  <a
                    href="https://linkedin.com/company/motion-org-uk"
                    target="_blank"
                  >
                    <span className="mbr-iconfont socicon socicon-linkedin" />
                  </a>
                </div>
                <div className="soc-item">
                  <a
                    href="https://www.tiktok.com/@zeezy_motion"
                    target="_blank"
                  >
                    <span className="mbr-iconfont socicon socicon-tiktok" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <p className="mbr-fonts-style copyright display-4">
                © Copyright 2024 Motion Health Ltd - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
