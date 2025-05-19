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

import Footer from '@/components/Footer';
import NavBar from '@/components/navBar';

import styles from '../blogPost.module.css';
const Index = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the email to your newsletter service here
    console.log(`Submitting email ${email}`);
  };
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
        <title>SEO Explained | Motion</title>
        <meta property="og:url" content="https://www.motion.org.uk" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Motion | SEO Explained" />
        <meta
          name="description"
          content="Understanding SEO: A Key Tool for Care Home Visibility Online"
        />
        <meta property="og:image" content="./og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Motion | SEO Explained" />
        <meta name="twitter:image" content="./og-image.jpg" />
        <meta
          property="twitter:description"
          content="Understanding SEO: A Key Tool for Care Home Visibility Online"
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
          <h1>Understanding SEO: A Key Tool for Care Home Visibility Online</h1>
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
          <h1 className={styles.biggerTitle}>Introduction</h1>
          <p>
            In today's digital era, having a strong online presence is vital for
            any business, including care homes.With 90% of care home enquiries
            coming from online being able to stand out in this market is more
            important than ever. One of the fundamental ways to enhance this
            online presence is through Search Engine Optimisation (SEO). For
            many care home directors and staff who may not be familiar with
            digital marketing strategies, SEO can seem like a complex concept.
            However, it's a crucial tool to understand and utilise. In this
            blog, we'll break down what SEO is and why it's essential for care
            homes.
          </p>
          <img
            src="/assets/images/blogs/blog3/Image-1.png"
            alt="Interactive tablet in care home"
            className={styles.image}
          />
          <h1 className={styles.biggerTitle}>What is SEO?</h1>
          <p>
            Search Engine Optimisation, or SEO, is the practice of increasing
            the quantity and quality of traffic to your website through organic
            search engine results. It involves optimising your website and its
            content so that search engines like Google, Bing, or Yahoo can
            easily find and rank it higher in search results.
          </p>

          <strong>SEO is the process that helps you do that.</strong>
          <h1 className={styles.biggerTitle}>Keywords:</h1>
          <h2 className={styles.title}>Key Parts of SEO:</h2>
          <p>
            These are the words people use when they search for care homes
            online. By knowing these words and using them on your website, you
            can help the right people find you. When choosing keywords, you must
            be strategic, ensuring you get the best results by balancing factors
            such as the target demographic and the current competition.
          </p>

          <h2 className={styles.title}>Good Content:</h2>
          <p>
            Your website should have helpful and interesting information about
            your care home. This needs to be updated regularly and up to date
            with the latest interests from your demographic.
          </p>

          <h2 className={styles.title}>Easy-to-Use Website: </h2>
          <p>
            Your website should load quickly and be easy to use, even on phones.
            On top of this the code needs to be formatted in a way that is easy
            for bots to read.
          </p>
          <h2 className={styles.title}>Backlinks:</h2>

          <p>
            When other websites link to your site, it's like a vote of
            confidence that can help you rank higher in search results. Ensuring
            you have a good level of backlinks and ensure there from the correct
            sources.
          </p>

          <h1 className={styles.biggerTitle}>
            Why SEO is Important for Care Homes
          </h1>
          <h2 className={styles.title}>1. Be Seen by the Right People</h2>
          <p>
            You want families looking for care homes to find your website. Being
            one of the first results they see increases your chances of being
            noticed.
          </p>

          <h2 className={styles.title}>2. No Extra Cost for Traffic</h2>
          <p>
            Unlike ads, you don't have to pay every time someone clicks on your
            website through a Google search. This makes SEO a budget-friendly
            way to attract visitors.
          </p>

          <h2 className={styles.title}>3. Build Trust</h2>
          <p>
            People often trust websites that appear at the top of search
            results. A higher ranking can make your care home seem more
            reliable.
          </p>

          <h2 className={styles.title}>4. Keep Up with Competitors</h2>
          <p>
            Other care homes are likely using SEO. To keep up or get ahead, you
            should too.
          </p>

          <h1 className={styles.biggerTitle}>
            To get started here are the basics you need to get you covered:
          </h1>
          <h2 className={styles.title}>Check Your Website:</h2>
          <p>
            People often trust websites that appear at the top of search
            results. A higher ranking can make your care home seem more
            reliable.
          </p>
          <h2 className={styles.title}>Find the Right Keywords:</h2>
          <p>
            Think about what words families might use to find a care home and
            use those words on your site.
          </p>
          <h2 className={styles.title}>Create Helpful Content:</h2>
          <p>Write about what makes your care home special and useful.</p>
          <h2 className={styles.title}>Make Your Site Work Well:</h2>
          <p>
            Make sure your site is fast and works on mobile phones and is
            accessible.
          </p>

          <p>
            This will give you a good foundation to begin, however if you want
            to further increase your rankings to be competitive and attract the
            most customers then more advanced methods can be used. Feel free to
            reach out to motion for help by booking a Discovery Call.{' '}
          </p>
          <div className="CTA-button">
            <a className="btn btn-secondary display-4 " href="/get-a-demo">
              Get a demo.
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
