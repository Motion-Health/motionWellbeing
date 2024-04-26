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
    script.src = "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Wv6PpD";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="white-background">
      <Head>
        <title>Cyber Security | Motion</title>
        <meta property="og:url" content="https://www.motion.org.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Motion | Sharing stories about later life"
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
                  <a className="nav-link link display-4" href="/resource-hub">
                    Knowledge Hub
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
        onClick={() => router.push('/resource-hub')}
        sx={{ padding: 3 }}
      >
        <ArrowBackIcon />
      </IconButton>

      <div className={styles.blogHero}>
        <div className={styles.blogHeroContent}>
          <h1>
            Cyber Security Basics for Care Homes: Protecting Your Residents and
            Business
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
            In today's digital age, care homes are not just about providing
            physical safety and comfort to residents; they also need to ensure
            the digital protection of their sensitive information. Poor cyber
            security can have serious consequences, including the potential
            closure of your care home. Understanding and implementing basic
            cyber security measures is crucial. Below is a straightforward
            checklist designed to help care home directors and staff secure
            their digital infrastructure effectively.
          </p>
          <ul>
            <li>
              <h2 className={styles.title}>1. Utilising a Password Manager:</h2>
              <p>
                A password manager is a simple yet effective tool for
                maintaining strong, unique passwords for all your accounts. It
                helps in avoiding common pitfalls like using easily guessable
                passwords or repeating the same password across multiple
                platforms. This tool can significantly reduce the risk of
                unauthorised access to your systems.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>
                2. Keeping Systems and Computers Up to Date:
              </h2>
              <p>
                Regularly updating your computers and systems is vital. Software
                updates often include critical patches for security
                vulnerabilities. By ensuring that all your technology is
                up-to-date, you minimise the risk of being exploited through
                known weaknesses.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>
                3. Having a Response Plan for Cyber Incidents:
              </h2>
              <p>
                In the event of a cyber-attack, having a predefined action plan
                is essential. This plan should outline the steps to be taken to
                mitigate the impact, including whom to contact, how to contain
                the breach, and how to communicate the issue to staff and
                residents' families, if necessary.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>
                4. Encrypting Sensitive Information:
              </h2>
              <p>
                Encryption is a powerful tool in protecting sensitive data, such
                as resident information and employee records. By encrypting this
                data, you ensure that even if it falls into the wrong hands, it
                remains unreadable and secure.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>5. Regular System Backups:</h2>
              <p>
                Conducting regular backups of your system can save you from
                catastrophic data loss. In case of a cyber-attack or system
                failure, having up-to-date backups will allow you to restore
                critical information quickly.
              </p>
            </li>
            <li>
              <h2 className={styles.title}>
                6. Conducting Staff Cybersecurity Training:
              </h2>
              <p>
                One of the most common ways cyber criminals gain access is
                through uninformed or careless employees. Regular training for
                your staff on basic cyber security practices can significantly
                reduce this risk. This training should cover topics like
                identifying phishing attempts, secure handling of sensitive
                information, and best practices for digital communication.
              </p>
            </li>
          </ul>

          <h2 className={styles.title}>Conclusion and Further Resources:</h2>
          <p>
            Implementing these simple steps can greatly enhance your care home's
            cyber security, protecting both your residents and your business
            from digital threats. Remember, in the digital world, being
            proactive is always better than being reactive. If you want to find
            out more or would like a comprehensive cyber security audit, please
            get in touch with us today.
            <a href="https://calendly.com/zeezy-1/motion">
              Click here to book a 30-minute consulatation
            </a>
          </p>
        </div>
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
                      alt=""
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
              <div class="klaviyo-form-UcvnLw"></div>
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
    </div>
  );
};

export default Index;
