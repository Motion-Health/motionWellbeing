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
          Getting Your Care Home Better Feedback and Reviews | Motion
        </title>
        <meta property="og:url" content="https://www.motion.org.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Motion | Getting Your Care Home Better Feedback and Reviews"
        />
        <meta
          name="description"
          content="Getting Your Care Home Better Feedback and Reviews"
        />
        <meta property="og:image" content="./og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Motion | Getting Your Care Home Better Feedback and Reviews"
        />
        <meta name="twitter:image" content="./og-image.jpg" />
        <meta
          property="twitter:description"
          content="Getting Your Care Home Better Feedback and Reviews"
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
          <h1>Getting Your Care Home Better Feedback and Reviews</h1>
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
            Care home reviews and feedback are a key element of your marketing
            and sales strategy. Whether it’s confidential feedback that a
            residents’ family member has shared with you or a review on Google
            that’s been left. Feedback and reviews are important pieces of
            ‘social proof’, which your other prospects and leads will hold in
            high-regard when searching for a care home.
          </p>
          <p>
            Here are three simple and easy ways to improve your care homes’
            feedback and reviews:
          </p>
          <h2 className={styles.title}>Ask For It!</h2>
          <p>
            Our research with family members of residents showed us that 70% of
            care homes ask for feedback either once every 6 months or not at
            all! The first step of improving feedback is by asking for it and
            doing so at least once per month. There are a number of ways to
            implement this: a feedback form (Google, Typeform, Microsoft), a
            personalised email, a phone call — whatever works best for you and
            your team!
            <br />
          </p>
          <img
            src="/assets/images/blogs/blog11/Image-1.webp"
            alt="Net Promoter Score"
          />

          <h2 className={styles.title}>
            Improve Net-Promoter-Score and gain valuable insights
          </h2>
          <p>
            ‘Net-Promoter-Score’ (NPS) is the gold standard metric when it comes
            to measuring customer satisfaction and you can get it by asking one
            simple question: “How likewise is it that you would recommend
            *insert name of care home* to a friend or colleague?”. The best
            thing about asking for feedback and reviews is that it actually has
            a positive impact on your current customers and improves your NPS,
            because it shows that you truly care about the opinion and thoughts
            of your customers. Asking for feedback and reviews regularly
            provides you with rich and valuable data that will help you to
            improve your services in cost and time-effective ways.
          </p>
          <h2 className={styles.title}>Action and Response</h2>
          <p>
            Once you have care home reviews and feedback you can start to make
            improvements and, importantly, share these with your residents’
            families who initially asked for the feedback through your regular
            email/form/phone call!
          </p>
          <h2 className={styles.title}>Keeping the loop going</h2>
          <p>
            Finally, this creates a positive feedback loop, which is what this
            process is all about. A tight feedback loop is what will improve
            your customer satisfaction, your reviews and, ultimately, your
            residents’ experience!
          </p>

          <h2 className={styles.title}>How can Motion help you?</h2>
          <p>
            🌟If you’re interested in learning how we can support your care home
            to get better feedback and reviews, book a demo call today!
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
