import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookIcon from '@mui/icons-material/Facebook';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';
import Head from 'next/head';
import router from 'next/router';
import { useState } from 'react';

import { Footer } from '@/components/Home/Footer';
import { Header } from '@/components/Home/header/Header';

import styles from '../blogPost.module.css';
import React from 'react';
const Index = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  return (
    <div className="white-background">
      <Head>
        <title>Creating moments that move people | Motion Wellbeing</title>
        <meta property="og:url" content="https://www.motionexercise.co.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Creating moments that move people | Motion Wellbeing"
        />
        <meta
          property="og:description"
          content="Bridging the Gap: How Care Homes Can Make the Most of their Local Community."
        />
        <meta
          name="description"
          content="Bridging the Gap: How Care Homes Can Make the Most of their Local Community."
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
          content="Bridging the Gap: How Care Homes Can Make the Most of their Local Community."
        />
      </Head>

      <Header />

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
          <h1>Bridging the Gap: How Care Homes Can Make the Most of their Local Community </h1>
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
          <p>Establishing strong ties with your local community can enhance the well-being of residents, break down inter-generational barriers, and contribute to an improved culture. In this blog, we'll explore the different ways care homes can actively engage with their local communities. </p>
          <h2 className={styles.title}>Collaborate with Local Schools</h2>
          <p>Establishing partnerships with local schools and colleges can create mutually beneficial relationships. This collaboration could involve educational programs, intergenerational activities, or volunteering opportunities. Students can gain valuable experience while residents benefit from the energy and enthusiasm of younger generations. Start by reaching out to a community contact at your local school!</p>
          <h2 className={styles.title}>Joining Community Events</h2>
          <p>Participating in local events, festivals, and markets is an excellent way for care homes to showcase their presence. Setting up booths, hosting activities, or simply having a visible presence in the community can help break down barriers and promote understanding between residents and the broader society. Keep an eye on your letter box for upcoming events and markets!

          </p>
          <img
            src="/assets/images/blogs/blog8/Image-1.webp"
            alt="Golf in society at Motion Community Games"
            className={styles.image}
          />
          <h2 className={styles.title}>Utilising Technology</h2>

          <p>In an increasingly digital world, care homes can leverage technology to connect with the community. This could involve creating social media pages to share stories, events, and updates, or organising virtual events that allow community members to interact with residents without physically visiting the facility. 
          </p>

          <h2 className={styles.title}>Cultural Exchange Programs</h2>
          <p>Organising cultural exchange programs can foster a sense of unity and understanding. Care homes can invite local artists, musicians, or performers to showcase their talents, or residents can share their own experiences and skills with the community. This promotes a sense of inclusivity and shared identity.

          </p>

          <img
            src="/assets/images/blogs/blog8/Image-2.webp"
            alt="Care home resident and Motion"
            className={styles.image}
          />
          <h2 className={styles.title}>Conclusion</h2>

          <p>
          Building strong ties between care homes and the local community is a win-win situation. Not only does it enhance the quality of life for residents, but it also contributes to the creation of a more compassionate and connected society. Try these out in the New Year and see how you get on! 
          </p>

         
          <p>
          If you’re interested in learning how Motion can support your care home, &nbsp;
            <a href="/how-we-can-help">Book a 30 minute discovery call</a>
            &nbsp;today.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
