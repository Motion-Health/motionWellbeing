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
        <title>Carer Recruitment | Motion</title>
        <meta property="og:url" content="https://www.motion.org.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Motion | How to attract more carers to your care home"
        />
        <meta
          name="description"
          content="In the competitive field of care home management, attracting skilled carers is essential, but it often comes with the challenge of balancing quality recruitment with budget constraints. Care home directors can implement several cost-effective strategies to make their facilities more appealing to potential employees without breaking the bank."
        />
        <meta property="og:image" content="./og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Motion | How to attract more carers to your care home"
        />
        <meta name="twitter:image" content="./og-image.jpg" />
        <meta
          property="twitter:description"
          content="In the competitive field of care home management, attracting skilled carers is essential, but it often comes with the challenge of balancing quality recruitment with budget constraints. Care home directors can implement several cost-effective strategies to make their facilities more appealing to potential employees without breaking the bank."
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
                <a href="https://motion.org.uk/">
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
                  <a className="nav-link link display-4" href="/knowledge-hub">
                    Knowledge hub
                  </a>
                </li>
              </ul>

              <div className="mbr-section-btn-main" role="tablist">
                <a className="btn btn-secondary display-4" href="#pricing1-c">
                  Find how we can help
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>

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
            Cost-effective strategies to attract more carers to your care home
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
            In the competitive field of care home management, attracting skilled
            carers is essential, but it often comes with the challenge of
            balancing quality recruitment with budget constraints. Care home
            directors can implement several cost-effective strategies to make
            their facilities more appealing to potential employees without
            breaking the bank. This guide offers practical and budget-friendly
            tips for attracting and retaining dedicated carers.
          </p>
          <img
            src="/assets/images/blogs/blog4/Image-1.jpg"
            alt="Landscape shot of care home"
            className={styles.image}
          />
          <ul>
            <li>
              <h2 className={styles.title}>1. Personalised Recognition:</h2>
              <p>
                Small gestures of appreciation, like handwritten thank-you
                notes, small gifts, or flowers, can go a long way in making
                staff feel valued. These tokens of appreciation are
                cost-effective yet powerful in building a positive workplace
                atmosphere.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>
                2. Foster a Supportive Work Culture:
              </h2>
              <p>
                Creating a supportive and inclusive work environment doesn't
                have to be expensive. Encourage a team-oriented culture where
                every staff member feels respected and heard. Regular team
                meetings and open communication channels can enhance job
                satisfaction without incurring significant costs.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>
                3. Utilise Social Media for Recruitment:
              </h2>
              <p>
                Leverage free or low-cost social media platforms to advertise
                job openings. Platforms like Facebook, LinkedIn, and Twitter can
                be effective in reaching a wide audience. Encourage your current
                staff to share these posts, increasing their reach organically.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>
                4. Implement an Employee Referral Program:
              </h2>
              <p>
                Encourage your existing employees to refer friends or
                acquaintances for open positions. Offer small but meaningful
                incentives for successful hires. This approach can be more
                cost-effective than traditional recruitment methods and often
                results in more reliable candidates.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>5. Offer Flexible Working Hours:</h2>
              <p>
                Flexibility can be a significant draw for potential employees
                and doesn't necessarily require additional financial resources.
                Offering flexible schedules or part-time roles can make your
                care home more attractive to a diverse range of candidates,
                including those who may be balancing other commitments.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>
                6. Provide Opportunities for Skill Development:
              </h2>
              <p>
                Invest in low-cost training programmes or in-house skill
                development sessions. This not only enhances the capabilities of
                your team but also shows your investment in their professional
                growth, making your care home more appealing.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>
                7. Highlight Your Care Home's Unique Features:
              </h2>
              <p>
                Use your existing resources and environment to your advantage.
                Whether it's a beautiful garden, a community-focused approach,
                or specialised care services, highlighting these aspects in your
                recruitment materials can attract candidates who share similar
                values and interests.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>8. Encourage Work-Life Balance:</h2>
              <p>
                Promote a healthy work-life balance with initiatives that don't
                necessarily require a large budget. This can include
                acknowledging the importance of mental health days, offering
                flexible shifts, or organising simple, in-house wellness
                activities.
              </p>
            </li>
          </ul>

          <img
            src="/assets/images/blogs/blog4/Image-2.jpg"
            alt="Care home residents performing physical activity"
            className={styles.image}
          />

          <h2 className={styles.title}>Conclusion:</h2>
          <p>
            Attracting more carers to your care home doesn't always require a
            hefty budget. By implementing these cost-effective strategies, you
            can create an attractive and supportive work environment that
            appeals to potential employees. Remember, investing in your staff,
            whether through recognition, training, or work culture, not only
            benefits them but also enhances the quality of care provided to your
            residents.
          </p>
          <p>
            With creativity and a focus on what truly matters to employees, your
            care home can become a magnet for dedicated carers, all while
            maintaining a responsible budget. For more information and help
            attracting carers then{' '}
            <a href="/get-a-demo/">
              click here to book a 30-minute consultation.
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
