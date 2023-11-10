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
          <h1> Boosting Care Home Enquiries with Wellbeing Activities</h1>
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
            Care homes are a place where older adults and vulnerable people are
            given the support they need. It’s important that a care home can
            maintain occupancy levels to continue to deliver outstanding care
            and invest in developing the team and support on offer. One
            effective strategy to increase leads and maintain high occupancy
            rates is to focus on showcasing the activities that residents get up
            to on a day-to-day basis. By ‘wellbeing activities’ we mean anything
            that can improve someone's physical, psychological or emotional
            wellbeing — from chair-based exercise to arts & crafts.. It’s about
            being person centred after all!
          </p>

          <p>
            In this blog, we'll explore 5 ways that care home activities can be
            a powerful tool for generating leads and fostering a positive
            culture
          </p>

          <img
            src="/assets/images/blogs/blog1/Image-1.webp"
            alt="Care home residents performing stretches"
            className={styles.image}
          />
          <h2 className={styles.title}>1. Enhanced Quality of Life</h2>
          <p>
            Engaging activities can significantly enhance the quality of life
            for residents in a care home. When potential residents and their
            families see that a care home prioritises the emotional, mental, and
            physical well-being of its residents, it naturally becomes a more
            attractive choice. Quality of life is a key selling point for care
            homes, and activities are a tangible way to demonstrate this
            commitment.
          </p>
          <h2 className={styles.title}>2. Word of Mouth and Referrals</h2>
          <p>
            When residents and their families are happy with the activities and
            social life in a care home, they're more likely to share their
            positive experiences with others. Word of mouth and referrals is one
            of the strong forms of leads. Satisfied residents and their families
            may recommend the care home to their friends and family, increasing
            the chances of new residents moving in.
          </p>
          <h2 className={styles.title}>3. Building a Strong Online Presence</h2>
          <p>
            In today's digital age, an online presence is crucial for generating
            leads. Care homes that regularly share their activities and events
            on their website and social media platforms tend to attract more
            interest. Potential residents and their families often research care
            homes online, and engaging content can set your home apart. Share
            stories, photos, and videos of residents enjoying activities to give
            a sense of the community's vibrancy.
          </p>
          <img
            src="/assets/images/blogs/blog1/Image-2.webp"
            alt="Motion team and care home resident smiling"
            className={styles.image}
          />
          <h2 className={styles.title}>4. Community Partnerships</h2>
          <p>
            Engaging with the local community can be an excellent way to
            increase leads. By hosting activities that involve the broader
            community, care homes can foster positive relationships with
            potential residents and their families. Community partnerships can
            lead to more inquiries and applications, as well as a positive
            reputation in the area.
          </p>
          <h2 className={styles.title}>
            5. Offering person-centred activities
          </h2>
          <p>
            Being person-centred is all about meeting the needs and interests of
            a resident. Having a full and varied activity plan, and showcasing
            this online tells your potential clients that you are able to cater
            to their need and take a person-centred approach across all aspect
            of your home.
          </p>
          <h2 className={styles.title}>Summary</h2>
          <p>
            Care homes that prioritise wellbeing activities and showcase these
            well are more likely to increase leads and maintain high occupancy
            rates. These activities not only improve the wellbeing of residents
            but also serve as a powerful marketing tool. Through word of mouth,
            online presence, community engagement, person-centred activities,
            and positive testimonials, care homes can build a strong reputation
            that attracts new residents and their families. In the end, it's a
            win-win situation – residents benefit from a fulfilling life, and
            care homes benefit from increased leads and a thriving community.
          </p>
          <p>
            If you’d like to know more about how you can generate more enquiries
            with wellbeing activities,&nbsp;
            <a href="/how-we-can-help">
              book a 30 minute discovery call
            </a>
            &nbsp;of our wellbeing and marketing platform today.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
