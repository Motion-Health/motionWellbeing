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
import NavBar from '@/components/navBar';

import styles from '../blogPost.module.css';

const Index = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  return (
    <div className="white-background">
      <Head>
        <title>
          How to Get Your Care Homes Featured on BBC News | Motion Marketing
        </title>
        <meta property="og:url" content="https://www.motion.org.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Motion Marketing | How to Get Your Care Homes Featured on BBC News"
        />
        <meta
          name="description"
          content="How to Get Your Care Homes Featured on BBC News"
        />
        <meta property="og:image" content="./og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Motion Marketing | How to Get Your Care Homes Featured on BBC News"
        />
        <meta name="twitter:image" content="./og-image.jpg" />
        <meta
          property="twitter:description"
          content="How to Get Your Care Homes Featured on BBC News"
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

      <NavBar />

      <IconButton
        className={styles.backArrow}
        color="primary"
        onClick={() => router.push('/resource-hub')}
        sx={{ padding: 3 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <div className={styles.blogHero}>
        <div className={styles.blogHeroContent}>
          <h1>How to Get Your Care Homes Featured on BBC News</h1>
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
            For care homes local media outlets are absolute GOLD when it comes
            to increasing the awareness of your service locally and, ultimately,
            generating more leads.
          </p>
          <p>
            We got care homes a feature on a primetime BBC News: Look North
            slot, which translated into them being inundated with enquiries in
            the week that followed. How we did it is more an art than a science,
            but here a a few key things that helped us get the feature:
          </p>
          <img
            src="/assets/images/blogs/blog9/Image-1.webp"
            alt="BBC look north feature"
          />
          <h2 className={styles.title}>Created a Compelling Story</h2>
          <p>
            The news only goes after the very best stories, so we made sure that
            we had something that was of interest to the broader news agenda
            regarding social care and involved key stakeholders in the local
            region, e.g. Lord Mayor.
            <br />
          </p>

          <h2 className={styles.title}>Made it Easy for Them</h2>
          <p>
            We did the leg work and essentially gave them a story on social care
            and integrating older adults back into our community, and were
            flexible in answering the phone to them; which in-turn made it
            easier for them to capture and share the story.
          </p>
          <h2 className={styles.title}>Used Our Network</h2>
          <p>
            Sometimes who you know trumps what you know (for better or worse)
            and we were lucky that someone in our team had a connection at BBC
            Sheffield who was able to connect us with the Look North team. Don’t
            be afraid to ask people, you never know who they might know!
            <br />
            Like I said, these things aren't an exact science and there are lots
            of factors that will influence whether or not your story gets picked
            up, but starting to make connections with local media outlets is a
            great starting point and could pay off big time in the future!
          </p>
          <h2 className={styles.title}>How Can We Help?</h2>
          <p>
            Interested in learning how your care home can reach and get coverage
            from local media outlets? Book a demo call today!
          </p>

          <div className="CTA-button">
            <a
              className="btn btn-secondary display-4 "
              href="https://calendly.com/zeezy-1/motion"
            >
              Get a Demo.
            </a>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
