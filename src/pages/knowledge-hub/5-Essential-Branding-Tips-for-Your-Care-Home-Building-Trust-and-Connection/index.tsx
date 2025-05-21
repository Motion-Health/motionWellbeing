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
import { useEffect } from 'react';

import Footer from '@/components/Footer';
import NavBar from '@/components/navBar';

import styles from '../blogPost.module.css';

const Index = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Wv6PpD';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="white-background">
      <Head>
        <title>
          Why the adult social care sector is poised for explosive growth |
          Motion
        </title>
        <meta property="og:url" content="https://www.motion.org.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Motion | Why the adult social care sector is poised for explosive growth"
        />
        <meta
          name="description"
          content="Why the adult social care sector is poised for explosive growth"
        />
        <meta property="og:image" content="./og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Motion | Why the adult social care sector is poised for explosive growth"
        />
        <meta name="twitter:image" content="./og-image.jpg" />
        <meta
          property="twitter:description"
          content="Why the adult social care sector is poised for explosive growth"
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

      <NavBar />

      <IconButton
        className={styles.backArrow}
        color="primary"
        onClick={() => router.push('/knowledge-hub')}
        sx={{ padding: 3 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <div className={styles.blogHero}>
        <div className={styles.blogHeroContent}>
          <h1>
            Why the adult social care sector is poised for explosive growth
          </h1>
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
            <br />
            Something that has sometimes been overlooked by some in the care
            sector is the massive growth which is about to occur. This allows
            for an opportunity for care homes to grow and expand their services.
          </p>
          <p>
            The looming expansion in the adult social care sector is largely
            fueled by an aging population, a result of advancements in
            healthcare that extend life expectancy. This demographic evolution
            presents a unique opportunity for care homes to adapt and meet the
            increasing demand for quality services.
          </p>
          <h2 className={styles.title}>A Surge in Demand Is Coming</h2>
          <p>
            In terms of demographics, the current UK population is just under
            1.8 million; however, in just 16 years, this is about to grow by
            900,000 to 2.76 million. This is a massive shift which will require
            the care services sector to supply these beds for this. Looking at
            the demographic figures, now is one of the best times to be in the
            care industry! The figure below shows the change in demographics,
            with 2040 on the left and 2024 on the right.
            <br />
          </p>
          <img
            src="/assets/images/blogs/blog8/Image-1.jpg"
            alt="ONS Population pyramid"
          />

          <h2 className={styles.title}>Navigating the Challenges Ahead</h2>
          <p>
            However, it's not all smooth sailing. The sector faces its share of
            challenges, notably staff shortages, exacerbated by visa
            restrictions in the UK. This squeeze on staffing is a critical issue
            that care home directors must address proactively to ensure the
            quality of care doesn't suffer. I see this potentially resulting in
            an increased cost for carers due to insufficient demand.
          </p>
          <h2 className={styles.title}>Opportunity Knocks</h2>
          <p>
            Despite these challenges, the situation spells a massive opportunity
            for care homes. With the anticipated boom in demand, there's
            potential for increased occupancy and growth.
            <br />
            But it's not just about having the capacity; it's also about
            excelling in service delivery. The upcoming generation of care home
            residents and families have significantly better access to{' '}
            <strong>data</strong>, which will increasingly be used to determine
            where to send their loved ones. This is why it's crucial to appeal
            to this new market correctly and how they choose their care home.
          </p>
          <h2 className={styles.title}>A Call to Action</h2>
          <p>
            Is your home ready for this sustained growth? Will you be able to
            capitilise on this market change and growth?
          </p>
          <p>
            This is an exciting time to be in the care sector, but it comes with
            the responsibility to adapt, innovate, and continually strive for
            excellence. For care home directors, this means anticipating the
            increase in demand and being prepared to meet it. Secondly, it means
            correctly marketing to the next generation of residents and their
            families using digital marketing.
          </p>
          <h2 className={styles.title}>How can Motion help you?</h2>
          <p>
            🌟If you want to see how we can help with your marketing, book a
            demo call now!
          </p>
          <div className="CTA-button">
            <a className="btn btn-secondary display-4 " href="/get-a-demo">
              Get a demo
            </a>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
