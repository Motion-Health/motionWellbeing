import styles from '../blogPost.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookIcon from '@mui/icons-material/Facebook';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';

import Head from 'next/head';
import router from 'next/router';
import React, { useState } from 'react';
import { Footer } from '@/components/Home/Footer';



const Index = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  return (
    <div className="white-background">
      <Head>
        <title>When to Invest in Marketing for Your Care Home? | Motion Marketing</title>
        <meta property="og:url" content="https://www.motion.org.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Motion Marketing | Sharing stories about later life"
        />
        <meta
          name="description"
          content="Telling stories that move people. Motion is a marketing agency that helps brands connect with their audience through powerful storytelling."
        />
        <meta property="og:image" content="./og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Creating moments that move people | Motion"
        />
        <meta name="twitter:image" content="./og-image.jpg" />
        <meta
          property="twitter:description"
          content="Motion Wellbeing is a digital wellbeing platform empowering care homes to plan, deliver and showcase outstanding, person-centred wellbeing activities."
        />
        <link
          rel="stylesheet"
          href="/extensions/programm5/software-development-company/assets/css/styles.css"
        />
        <link
          rel="stylesheet"
          href="/extensions/programm5/software-development-company/assets/css/styles.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        ></link>
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

        <link rel="stylesheet" href="/assets/blog.css" />
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Wv6PpD"
        ></script>
        <script src="/extensions/programm5/software-development-company/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/extensions/programm5/software-development-company/assets/smoothscroll/smooth-scroll.js"></script>
        <script src="/extensions/programm5/software-development-company/assets/ytplayer/index.js"></script>
        <script src="/extensions/programm5/software-development-company/assets/dropdown/js/navbar-dropdown.js"></script>
        <script src="/extensions/programm5/software-development-company/assets/embla/embla.min.js"></script>
        <script src="/extensions/programm5/software-development-company/assets/embla/script.js"></script>
        <script src="/extensions/programm5/software-development-company/assets/mbr-tabs/mbr-tabs.js"></script>
        <script src="/extensions/programm5/software-development-company/assets/theme/js/script.js"></script>
        <script src="/extensions/programm5/software-development-company/assets/formoid.min.js"></script>
      </Head>

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
                <a href="//">
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

      <IconButton
        className={styles.backArrow}
        color="primary"
        onClick={() => router.push('/blog')}
        sx={{ padding: 3 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <div className={styles.blogHero}>
        <div className={styles.blogHeroContent}>
          <h1> When to Invest in Marketing for Your Care Home?</h1>
          <div className={styles.shareToolbar}>
            <div>
              <img src="/assets/icons/ph_time.svg" alt="share" />
              <p className={styles.time}>4 Minute Read</p>
            </div>
            <div>
              <button onClick={() => setShowSocialLinks(!showSocialLinks)}>
                <p>Share</p>
                <img src="/assets/icons/ph_share.svg" alt="share" />
              </button>
              {linkCopied && (
                <div className={styles.notification}>
                  Link copied to clipboard!
                </div>
              )}
              {showSocialLinks && (
                <div className="social-links">
                  <IconButton
                    color="primary"
                    aria-label="copy"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      setLinkCopied(true);
                      setTimeout(() => setLinkCopied(false), 3000); // Hide after 3 seconds
                    }}
                  >
                    <FileCopyIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    aria-label="mail"
                    onClick={() =>
                      (window.location.href = `mailto:?subject=Check out this blog post&body=${window.location.href}`)
                    }
                  >
                    <MailOutlineIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    aria-label="facebook"
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer.php?u=${window.location.href}`
                      )
                    }
                  >
                    <FacebookIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    aria-label="linkedin"
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`
                      )
                    }
                  >
                    <LinkedInIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    aria-label="whatsapp"
                    onClick={() =>
                      window.open(
                        `https://api.whatsapp.com/send?text=${window.location.href}`
                      )
                    }
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </div>
              )}
            </div>
          </div>
          <h2 className={styles.title}>Introduction</h2>
          <p>
          Marketing is a crucial tool in attracting privately funded Families. Families need a way of finding you and it's your job to make that easy!
          </p>
          <img
            src="/assets/images/blogs/blog4/Image-1.jpg"
            alt="Marketing on white drawn on white background"
            className={styles.image}
          />
          <h2 className={styles.title}>When is the Right Time to Invest in Marketing?</h2>
          <p>
          Marketing your care home gets more and more effective the longer you do it. This is because it enables you to build a brand and an identity. If you haven't started or have let it go by the waist side then NOW is the time to start investing in it again!

          </p>


          <p>
          There are however some times when you can supercharge your marketing.The best opportunity to give your marketing a push are:
          </p>

          <ul>
            <li><strong  className={styles.title}>New Milestones:</strong><p>Launching a new facility or service, or celebrating an achievement? Capitalising on these events can give a huge boost to your marketing efforts.
            </p></li>
            <li><strong  className={styles.title}>Seasonal Events:</strong><p>Christmas, Easter, Halloween, and other holidays are the perfect time to get creative with your marketing. These events are a great way to engage with your audience and showcase your home.
            </p></li>
            <li><strong  className={styles.title}>Market Changes:</strong><p> Stay responsive to shifts in industry trends or regulations. These are prime opportunities to showcase your care services as a market leader. A perfect example of this is the ongoing CQC changes.
            </p></li>
            <li><strong  className={styles.title}>Post-Improvement Phase:</strong><p>How Should Care Homes Approach Market After upgrading facilities or services, let your community know. It's a great way to renew interest and attract new residents.
            </p></li>
            <li><strong  className={styles.title}>Special Offers:</strong><p> Offering a special deal or discount is a great way to attract new residents. This is especially true if you are launching a new service or facility.
            </p></li>
          </ul>
          <img
            src="/assets/images/blogs/blog4/Image-2.jpg"
            alt="The word analytics on a creative background"
            className={styles.image}
          />

          <h2 className={styles.title}>How Should Care Homes Approach Marketing?</h2>
          <ul>
            <li><strong  className={styles.title}>Website:</strong><p> Your website is the first place potential residents and their families will look. It is important to have a website that is easy to navigate and showcases your home in the best possible light. It should also be mobile-friendly and have a clear call to action.
            </p></li>
            <li><strong  className={styles.title}>Search Engine Optimisation (SEO):</strong><p> SEO is a great way to improve your website's visibility on search engines. This is done by using keywords and phrases that are relevant to your business. It also involves creating content that is engaging and informative.
            </p></li>
            <li><strong  className={styles.title}>Content Marketing:</strong><p> Content marketing is a great way to attract new residents and their families. It involves creating content that is relevant to your target audience and sharing it on social media.
            </p></li>
            <li><strong  className={styles.title}>Social Media:</strong><p> Social media is a great way to engage with your audience and build a community. It also allows you to share content that is relevant to your target audience.
            </p></li>
            <li><strong  className={styles.title}>Online Reviews:</strong><p> Online reviews are a great way to build trust and credibility. They also allow you to showcase your home in the best possible light.
            </p></li>
            <li><strong  className={styles.title}>Monitor and Adapt:</strong><p> It is really important to ask every inquiry how they found you. This will help you to understand what is working and what isn't. You can then adapt your marketing strategy accordingly.
            </p></li>
          </ul>


          <h2 className={styles.title}>Conclusion</h2>
          <p>
           For care homes, marketing isn't just about visibility; it's about building trust and showcasing your commitment to quality care. The right investment in marketing can make a significant difference. Stay tuned to market trends, be strategic in your approach, and most importantly, tell the story of your care home’s unique value.
          </p>
          <h2 className={styles.title}>
            How can Motion help you with your marketing?
          </h2>
          <p>
           🌟 Interested in elevating your marketing strategy? Discover how Motion can guide you through this journey.
          </p>
          <div className="CTA-button">
            <a
              className="btn btn-secondary display-4 "
              href="https://calendly.com/zeezy-1/motion"
            >
              Book a Discovery Call.
            </a>
          </div>
        </div>
      </div>


      <Footer></Footer>

    </div>
  );
};

export default Index;
