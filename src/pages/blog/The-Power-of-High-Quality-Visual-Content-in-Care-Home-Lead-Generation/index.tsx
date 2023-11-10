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
          <h1>
            The Power of High-Quality Visual Content in Care Home Lead
            Generation
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
          <p>
            In the age of the internet and digital marketing, care homes seeking
            to generate leads must recognise and leverage the profound impact of
            visual content. A picture is worth a thousand words, they say, and
            in the context of care homes, this couldn't be more accurate. In
            this blog, we'll delve into the importance of high-quality visual
            content for care homes striving to attract potential residents and
            their families.
          </p>
          <img
            src="/assets/images/blogs/blog2/Image-1.webp"
            alt="Landscape shot of care home"
            className={styles.image}
          />
          <ul>
            <li>
              <p>
                <b>First Impressions Matter</b> — When individuals or families
                are researching care homes for their loved ones, the first
                impression often comes from visual content. High-quality images
                and videos create a positive and welcoming initial impression. A
                clean, well-organised, and aesthetically pleasing website with
                appealing visuals can set the tone for a successful customer
                journey.
              </p>
            </li>
            <li>
              <p>
                <b>Conveying a Sense of Comfort and Care</b> — Visual content,
                such as photos of well-designed living spaces and communal areas
                can communicate a sense of comfort, care, and attention to
                detail. Potential residents and their families want to see where
                they'll be living and understand that the care home provides a
                safe and inviting environment.
              </p>
            </li>
            <li>
              <p>
                <b>Showcasing Activities</b> — Activities are a major way to
                demonstrate that residents in your home have a positive quality
                of life. Whether it's arts & crafts or exercise, photos and
                videos of residents participating in activities conveys the
                vibrancy of life within the care home.
              </p>
            </li>
            <li>
              <p>
                <b>Emotional Connection</b> — Visual content has the unique
                ability to create an emotional connection.. When potential
                residents and their families see happy residents, compassionate
                caregivers, and a warm, welcoming environment, they are more
                likely to feel a connection and envision their loved ones being
                part of the community.
              </p>
            </li>
            <li>
              <p>
                <b>
                  Search Engine Optimisation (SEO) & Social Media Engagement
                </b>{' '}
                - Search engines and social media platforms are valuable tools
                for lead generation. High-quality visual content on your website
                and platforms like Facebook can attract a targetted audience and
                encourage sharing, increasing the care home's reach and
                generating leads from interested parties.
              </p>
            </li>
          </ul>

          <img
            src="/assets/images/blogs/blog2/Image-2.webp"
            alt="Care home residents performing physical activity"
            className={styles.image}
          />

          <h2 className={styles.title}>Summary</h2>
          <p>
            The importance of high-quality visual content for care homes in
            their lead generation efforts cannot be overstated. It forms the
            foundation for creating a positive first impression, showcasing
            wellbeing activities and building trust and credibility. Visual
            content not only allows care homes to showcase their amenities and
            activities but also forges emotional connections with potential
            residents and their families. By harnessing the power of visual
            content, care homes can enhance their online presence and ultimately
            attract and convert more leads, helping families find the best care
            solution for their loved ones. Book a 30 minute discovery call today
            to learn about how we can support you to generate more leads through
            wellbeing and marketing.
          </p>

          <p>
            Want to get better at content creation? &nbsp;
            <a href="/how-we-can-help">
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
