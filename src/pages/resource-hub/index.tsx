/* eslint-disable @next/next/no-sync-scripts */
import { Grid } from '@mui/material';
import { useState } from 'react';

import BlogCard from '@/components/Blog/BlogCard';
import NavBar from '@/components/navBar';

import styles from './blog.module.css';

const tags = ['Marketing', 'News', 'Sales', 'Technology', 'Wellbeing'];

const Index = () => {
  const [selectedTags, setSelectedTags] = useState([]); // This will be used to filter the blogs based on the selected tags
  const blogs = [
    { id: 1, name: 'SEO Explained', tags: ['Marketing', 'Technology'] },
    {
      id: 3,
      name: 'How to Attract more Carers to your Home',
      tags: ['Sales', 'Wellbeing'],
    },
    {
      id: 4,
      name: 'When to Invest in Marketing for Care Homes',
      tags: ['Marketing', 'News'],
    },
    {
      id: 5,
      name: 'How can you Remove Bad Reviews on Indeed?',
      tags: ['Sales', 'Technology'],
    },
    {
      id: 6,
      name: 'Creating a Successful Sales Funnel For your Care Home',
      tags: ['Sales', 'Marketing'],
    },
    {
      id: 7,
      name: 'What is TikTok and Should your Care Home be Using it?',
      tags: ['Technology', 'News'],
    },
    {
      id: 8,
      name: 'Why the Adult Social Care Sector is Poised for Explosive Growth',
      tags: ['News', 'Wellbeing'],
    },
    {
      id: 9,
      name: 'How to Get Your Care Homes Featured on BBC News',
      tags: ['News', 'Marketing'],
    },
    {
      id: 10,
      name: "'Nothing About Us Without Us': What We’ve Learned from Co-Designing Services with Care Homes",
      tags: ['Wellbeing', 'Technology'],
    },
    {
      id: 11,
      name: 'Getting Better Feedback and Reviews for Your Care Home',
      tags: ['Sales', 'Wellbeing'],
    },
    {
      id: 12,
      name: 'What Families Care About When Looking for a Care Home',
      tags: ['Sales', 'Marketing'],
    },
  ];

  return (
    <>
      <title>Resource Hub | Motion</title>
      <meta property="og:url" content="https://www.motion.org.uk" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Motion | Knowlegde Hub" />
      <meta
        name="description"
        content="The Resource Hub is a collection of resources to help you understand marketing and sales for your care home."
      />
      <meta property="og:image" content="./og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Resource Hub | Motion" />
      <meta name="twitter:image" content="./og-image.jpg" />
      <meta
        property="twitter:description"
        content="The Resource Hub is a collection of resources to help you understand marketing and sales for your care home."
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

      <NavBar />

      <div
        style={{
          background:
            'radial-gradient(circle at -11% 10%, #385988 -33%, #FDFCED 30%, transparent 50%), radial-gradient(circle at 0% 73%, #385988 -30%, #FDFCED 30%, transparent 50%), radial-gradient(circle at 77% 48%, #385988 -30%, #FDFCED 30%, transparent 50%)',
        }}
      >
        <div className={styles.blogHero}>
          <div className={styles.blogHeroContent}>
            <h1>Resource Hub</h1>
            <p>
              We've compiled these quick and easy resources to de-mystify
              marketing and sales for your care home.
            </p>
          </div>
        </div>
        <div className={styles.tagsContainer}>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <button
                key={tag}
                className={selectedTags.includes(tag) ? styles.selected : ''}
                onClick={() => {
                  if (selectedTags.includes(tag)) {
                    setSelectedTags(selectedTags.filter((t) => t !== tag));
                  } else {
                    setSelectedTags([...selectedTags, tag]);
                  }
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.blogContainer}>
          <Grid container className={styles.Cards}>
            {blogs
              .filter((blog) =>
                selectedTags.length === 0
                  ? true
                  : blog.tags.some((tag) => selectedTags.includes(tag))
              )
              .slice(0, 3)
              .map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
          </Grid>
          <div className={styles.KlavioForm + '  klaviyo-form-XyjpZS'}></div>
          <Grid container className={styles.Cards}>
            {blogs
              .filter((blog) =>
                selectedTags.length === 0
                  ? true
                  : blog.tags.some((tag) => selectedTags.includes(tag))
              )
              .slice(3)
              .map((blog) => (
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
              <div className="col-12">
                <div className="title-wrapper">
                  <span className="navbar-logo">
                    <a href="/">
                      <img
                        src="/extensions/programm5/software-development-company/assets/images/logo.svg"
                        alt=""
                      />
                    </a>
                  </span>
                  <nav>
                    <ul className="list mbr-fonts-style display-4">
                      <li className="nav-item">
                        <a className="nav-link link display-4" href="/">
                          Platform
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link display-4" href="/resource-hub">
                          Resource Hub
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link display-4" href="/resource-hub">
                          Success Stories
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link display-4" href="/resource-hub">
                          About
                        </a>
                      </li>
                      <li className="nav-item midHide">
                        <a className="nav-link link display-4" href="/sblog">
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item midHide">
                        <a className="nav-link link display-4" href="/resource-hub">
                          Other Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link display-4" href="/resource-hub">
                          Login
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="contacts-wrapper">
                  <ul className="list mbr-fonts-style display-4">
                    <li className="item-wrap">
                      <strong>Address</strong>
                    </li>
                    <li className="item-wrap">
                      Sheffield Science Park Cooper Buildings, Arundel St,
                      Sheffield City Centre, Sheffield S1 2NS
                    </li>
                    <li className="item-wrap w-100">
                      <strong>Contact</strong>
                    </li>
                    <li className="item-wrap w-100">info@motion.org.uk</li>
                    <li className="item-wrap w-100">+44 7543 858684</li>
                  </ul>
                </div>
                <div className="social-row">
                  <div className="soc-item">
                    <a
                      href="https://instagram.com/motion.org.uk"
                      target="_blank"
                    >
                      <span className="mbr-iconfont socicon socicon-instagram" />
                    </a>
                  </div>
                  <div className="soc-item">
                    <a
                      href="https://facebook.com/motion.org.uk"
                      target="_blank"
                    >
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
              <div className="col-12 col-lg-6">
                <label className="mbr-desc mbr-fonts-style display-7 signupText">
                  Sign up to our newsletter to be first to hear about news and
                  updates:
                </label>
                <div className="klaviyo-form-UcvnLw"></div>
              </div>
              <div className="col-12 col-lg-6"></div>
              <div className="col-12">
                <p className="mbr-fonts-style copyright display-4">
                  © Copyright 2024 Motion Health Ltd - All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
