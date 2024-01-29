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

import styles from '../blogPost.module.css';


const Index = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  return (
    <div className="white-background">
      <Head>
        <title>
        How do you create a sales funnel for your care home? | Motion Marketing
        </title>
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
          <h1>How do you create a sales funnel for your care home?</h1>
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
          
          First off, what is a sales funnel? 
          <br/>
          A sales funnel is a marketing model that maps out a customer's journey when purchasing a service or a bed in your home. The model uses a funnel as an analogy because many potential customers may begin at the top end of the sales process, and only a fraction of these people make a purchase. For a care home, the funnel is the journey the residents or their families go through when choosing a care home.
Your job is to define the funnel stages and reduce the number of people who drop out at each stage. This is a great way to grow your care home and organically increase occupancy.
 </p>
          <p>
          Your job is to define the funnel stages and reduce the number of people who drop out at each stage. This is a great way to grow your care home and organically increase occupancy.
            <br/><br/>The stages of the funnel for care homes can vary, but we have broken it down into four stages:
            <ul>
              <li>Cold Audience</li>
              <li>Warm Audience</li>
              <li>Hot Audience</li>
              <li>Decision</li>
            </ul>



          </p>
          <img
            src="/assets/images/blogs/blog6/thumbnail.webp"
            alt="Indeed Logo"
            className={styles.image}
          />
          <h2 className={styles.title}>
          1. Cold Audience:
          </h2>
          <p>
          The cold audience is at the top of the funnel; here is where you are trying to attract new people to your services. At this stage, you are trying to create awareness of your care home and the services you provide.
          <br/>
          The main channels for attracting a cold audience are social media, organic website traffic, physical marketing, word of mouth, and sponsorship of community events. A new technology becoming increasingly relevant for attracting new customers is TikTok and Instagram reels.
          <br/>
          You aim to collect contact information to move them to the next stage of the funnel. This can be done with a lead magnet, a free piece of content you offer in exchange for their contact information.
          </p>
          <h2 className={styles.title}>
          2. Warm Audience:
          </h2>
          <p>
          This middle stage is crucial in building trust with potential residents and their families. You will have their contact information, and now you need to deliver content to help them build confidence in your home. To do this, engage them with stories of resident experiences, detailed information about your services, and testimonials. Utilise email newsletters, informative blog posts, and social media posts to keep them engaged. The potential resident may not be ready to move to a care home or domiciliary care; however, keeping them engaged with your content will make you the first choice when they are ready.
          </p>
          <h2 className={styles.title}>
          3. Hot Audience:
          </h2>
          <p>
          At this stage, your audience is seriously considering your care home for their needs. They are likely comparing you with other options. Here, <strong>personalised</strong> communication becomes critical. Offer in-person or virtual tours, one-on-one consultations, and detailed guides on the specifics of your care services. This could include how you handle special care needs, lifestyle activities, and community integration. From our survey of 50 families, wellbeing activities were ranked 100% of the time as a top 3 factor in choosing a care home. So, showcasing your wellbeing activities and how you deliver them is vital.
          </p>
          <h2 className={styles.title}>
          4. Decision:
          </h2>
          <p>
          In this final stage, a family decides to move forward with your care home. Make this process as smooth as possible. Provide clear, concise information on the next steps, costs, and what they can expect. Ensure all their questions are answered and they feel confident in their choice. After their decision, focus on a seamless onboarding experience to affirm they made the right choice.
          </p>
          <h2 className={styles.title}>
          Post Decision/Tesimonials:
          </h2>
          <p>
          Once a resident has moved in, you can use them as a marketing asset to attract new residents. This can be done by asking them to leave a review on Google or by creating a video testimonial. This is crucial for building trust with potential residents and their families.
          </p>
          <h2 className={styles.title}>
          Conclusion:
          </h2>
          <p>
          The sales funnel is a great way to grow your care home and increase your occupancy organically. The key is to define the funnel stages and reduce the number of people who drop out at each stage. It's also important to remember that the funnel is not linear, and people can jump between stages. A great example is if you offer a domiciliary care service, the resident is already in the hot audience stage, and you can skip the cold and warm audience stages.
          </p>
          <h2 className={styles.title}>
            How can Motion help you?
          </h2>
          <p>
            🌟 Interested in elevating your marketing strategy and building a solid marketing funnel? Discover how
            Motion can guide you through this journey.
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
