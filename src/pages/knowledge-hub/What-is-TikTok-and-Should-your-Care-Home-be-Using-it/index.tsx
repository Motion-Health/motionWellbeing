import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookIcon from '@mui/icons-material/Facebook';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';
import Head from 'next/head';
import router from 'next/router';
import React, { useEffect, useState } from 'react';

import { Footer } from '@/components/Home/Footer';
import NavBar from '@/components/navBar';

import styles from '../blogPost.module.css';

const Index = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Wv6PpD";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="white-background">
      <Head>
        <title>
          What is TikTok and Should your Care Home be Using it ?| Motion
          Marketing
        </title>
        <meta property="og:url" content="https://www.motion.org.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Motion | TikTok and Should your Care Home be Using it?"
        />
        <meta
          name="description"
          content="TikTok is a platform for short videos (under 3 Minutes) delivered to people through a complex algorithm that predicts what you might like."
        />
        <meta property="og:image" content="./og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Motion | TikTok and Should your Care Home be Using it?"
        />
        <meta name="twitter:image" content="./og-image.jpg" />
        <meta
          property="twitter:description"
          content="TikTok is a platform for short videos (under 3 Minutes) delivered to people through a complex algorithm that predicts what you might like."
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
          <h1>What is TikTok, and Should your Care Home be Using it?</h1>
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
          <h2 className={styles.title}>What is TikTok?</h2>
          <p>
            TikTok is a platform for short videos (under 3 Minutes) delivered to
            people through a complex algorithm that predicts what you might
            like.
            <br />
          </p>
          <h2 className={styles.title}>
            So why is there so much interest in TikTok?
          </h2>
          <p>
            The main benefit of TikTok is that it allows people to see videos
            they didn't subscribe to. So what does this mean for you? This means
            that people can find out about you without searching for you. This
            makes it a potent tool for marketing.
          </p>
          <h2 className={styles.title}>Why is it relevant to care homes?</h2>
          <p>
            Whilst some think TikTok is just used by the younger generation, in
            fact, millions of people over the age of 50 use TikTok. This allows
            it to work as a marketing tool to engage potential residents'
            families, but it is also a great way to recruit new staff and build
            a brand.
          </p>
          <h2 className={styles.title}>Does it even work?</h2>
          <p>
            {' '}
            Yes, have a look at{' '}
            <a href="https://www.bbc.co.uk/news/uk-england-wiltshire-68117244">
              {' '}
              Wiltshires viral silent disco.{' '}
            </a>
          </p>
          <img
            src="/assets/images/blogs/blog7/disco.webp"
            alt="Indeed Logo"
            className={styles.image}
          />
          <h2 className={styles.title}>
            How can you use TikTok to market your care home?
          </h2>
          <p>
            You can use TikTok for your care home for two reasons: to engage
            with your community to fill the top of your sales funnel and recruit
            new staff. However, luckily, showcasing your care home in the right
            light can work to do both for you!
            <br />
            <strong>
              As a warning, however, always ensure that the content posted is
              respectful of the residents and their families.
            </strong>
            <br />
          </p>
          <h2 className={styles.title}>Ideas for content:</h2>
          <ul>
            <li>
              <strong>Resident stories:</strong> Share heartwarming stories of
              residents, showcasing their life experiences and personalities.
              This humanizes your care home and helps viewers connect
              emotionally, demonstrating the compassionate environment you
              have.
            </li>
            <li>
              <strong>Staff stories:</strong> Highlight the dedication and
              skills of your staff. Share their experiences and motivations
              for working in elder care. This can help in attracting
              like-minded professionals and showcasing the quality of care
              provided.
            </li>
            <li>
              <strong>Events:</strong> Showcase the various events and
              activities that take place in your care home. Whether it's
              themed parties, music events, or art classes, this illustrates a
              vibrant, engaging community life.
            </li>
            <li>
              <strong>Activities:</strong> Share clips of daily activities,
              from exercise sessions to craft workshops. This not only
              demonstrates the range of activities available but also the
              active and inclusive lifestyle residents enjoy.
            </li>
          </ul>

          <h2 className={styles.title}>Conclusion:</h2>
          <p>
            TikTok is a great way to engage with your community and build your
            brand. It is also a great way to recruit new staff. However, always
            ensure you respect the residents and their families.
          </p>
          <h2 className={styles.title}>How can Motion help you?</h2>
          <p>
            🌟 Struggling to create engaging TikTok content for your care home?
            Book a Discovery Call with Motion to explore innovative marketing
            strategies.
          </p>
          <div className="CTA-button">
            <a
              className="btn btn-secondary display-4 "
              href="https://calendly.com/zeezy-1/motion"
            >
              Get a demo.
            </a>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
