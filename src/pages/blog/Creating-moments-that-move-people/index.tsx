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
import { useAccountContext } from '@/context/AccountContext';

import styles from '../blogPost.module.css';
const Index = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const {
    account: { accountStatus },
  } = useAccountContext();
  const blog1 = {
    id: 1,
    name: 'Creating-moments-that-move-people',
    image: '/assets/images/blogs/blog-hero.png',
    description:
      'A dementia-friendly digital wellbeing platform created by Activity Coordinators for Activity Coordinators to deliver outstanding wellbeing for those working and living in care.',
  };

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
          content="A dementia-friendly digital wellbeing platform created by Activity Coordinators for Activity Coordinators to deliver outstanding wellbeing for those working and living in care."
        />
        <meta
          name="description"
          content="A dementia-friendly digital wellbeing platform created by Activity Coordinators for Activity Coordinators to deliver outstanding wellbeing for those working and living in care."
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
          content="A dementia-friendly digital wellbeing platform created by Activity Coordinators for Activity Coordinators to deliver outstanding wellbeing for those working and living in care."
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
          <h1>Creating moments that move people</h1>
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
              {showSocialLinks && (
                <div className="social-links">
                  <IconButton
                    color="primary"
                    aria-label="copy"
                    onClick={() =>
                      navigator.clipboard.writeText(window.location.href)
                    }
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
          <h2 className={styles.title}>Some title</h2>
          <p>
            Motion is a social enterprise on a mission to create moments that
            move people. We passionately believe that everyone should have the
          </p>

          <p>
            Motion is a social enterprise on a mission to create moments that
            move people. We passionately believe that everyone should have the
            opportunity to lead a happy and healthy life.
          </p>

          <img src="/assets/images/blogs/blog-hero.png" alt="blog-hero" />

          <p>
            That's why our team of passionate experts deliver truly
            person-centred wellbeing activities across a broad range of
            categories such as movement, music and culture.
          </p>
          <h2 className={styles.title}>Summary</h2>
          <p>
            Community is at the heart of, which is why we work with{' '}
            <a href="/">Activity Coordinators</a> residents and their families,
            to create services that are loved and connections that are
            meaningful.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
