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
const Index = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);

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
          <h1>Creating high quality content</h1>
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
          <h2 className={styles.title}>Introduction</h2>
          <p>
            In the digital age, content is king. But what sets exceptional
            content apart from mere filler? Quality. Let's explore what makes
            content "high-quality" and how you can master the art of crafting
            content that not only captivates but converts.
          </p>

          <img src="/assets/images/blogs/blog-hero.png" alt="Quality Content" />

          <h2 className={styles.title}>1. Understand Your Audience</h2>
          <p>
            The first step in creating compelling content is to know who you're
            speaking to. Understanding your audience's needs, pain points, and
            preferences will enable you to create content that resonates.
          </p>

          <h2 className={styles.title}>2. Research, Research, Research</h2>
          <p>
            You can't provide value without understanding what you're talking
            about. Doing your homework on a subject will not only make your
            content more credible but also more engaging.
          </p>

          <h2 className={styles.title}>3. Prioritize Quality Over Quantity</h2>
          <p>
            It's better to publish one high-quality blog post than five subpar
            ones. Always prioritize the quality of your content. This will not
            only improve your credibility but also your visibility in search
            engines.
          </p>

          <h2 className={styles.title}>4. Keep It Authentic</h2>
          <p>
            Authenticity builds trust. Be yourself and be transparent in your
            content. People are more likely to engage with brands that they feel
            are human and genuine.
          </p>

          <h2 className={styles.title}>5. Keep it Visual</h2>
          <p>
            Visual aids can significantly improve the engagement of your
            content. Whether it's through pictures, infographics, or videos,
            visual content is more likely to be consumed and shared.
          </p>

          <h2 className={styles.title}>Summary</h2>
          <p>
            Creating high-quality content isn't a walk in the park, but the
            benefits far outweigh the efforts. By focusing on the audience,
            doing thorough research, prioritizing quality, being authentic, and
            adding visual elements, you'll be well on your way to crafting
            content that engages and converts.
          </p>

          <p>
            Want to get better at content creation? &nbsp;
            <a href="https://calendly.com/zeezy-1/motion">
              Book a 30-minute demo
            </a>
            &nbsp; of our content marketing platform today.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
