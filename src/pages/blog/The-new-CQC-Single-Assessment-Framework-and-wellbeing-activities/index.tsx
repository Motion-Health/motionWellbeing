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
        <meta property="og:url" content="https://www.motion.org.uk" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Creating moments that move people | Motion Wellbeing"
        />
        <meta
          property="og:description"
          content="The new CQC Single Assessment Framework and wellbeing activities"
        />
        <meta
          name="description"
          content="The new CQC Single Assessment Framework and wellbeing activities."
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
          content="The new CQC Single Assessment Framework and wellbeing activities."
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
            The new CQC Single Assessment Framework and wellbeing activities
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
            With the introduction of the Care Quality Commission's (CQC) Single
            Assessment Framework, there is an increased focus on evidence-based
            practices to assess and improve the quality of care provided; and an
            opportunity to get more out of your wellbeing activities. This blog
            is a guide on how to effectively evidence wellbeing activities in
            alignment with the new CQC Single Assessment Framework.
          </p>
          <p>
            The CQC Single Assessment Framework is designed to streamline the
            assessment process, enabling a more comprehensive and consistent
            evaluation of the quality of care across health and social care
            settings. It emphasises the importance of person-centred care,
            promoting individual wellbeing, and ensuring a positive living
            environment for residents. Here are 5 ways that you can make the
            most of your wellbeing activities:
          </p>

          <ul>
            <li>
              <p>
                <b>Person-Centred Activity Plans</b> — Develop group and
                individualised plans that are tailored to the unique needs and
                preferences of each resident. Clearly document how wellbeing
                activities are aligned with residents' preferences, cultural
                backgrounds, and interests.
              </p>
            </li>
            <img
              src="/assets/images/blogs/blog5/Image-1.webp"
              alt="Motion Wellbeing dashboard"
              className={styles.image}
            />
            <li>
              <p>
                <b>Engagement and Participation</b> — Regularly assess resident
                engagement and participation in wellbeing activities. Maintain
                records of attendance, feedback, and any adaptations made to
                activities based on resident input. This will demonstrate a
                commitment to involving residents in decisions about their
                lifestyles.
              </p>
            </li>
            <li>
              <p>
                <b>Outcome Measures</b> — Utilise outcome measures to assess the
                impact of wellbeing activities on residents' physical,
                emotional, and social wellbeing. This doesn’t have to be overly
                complicated. Surveys and emoticon scales before and after are
                great ways to measure the impact of wellbeing activities. Use
                this data to continually refine and improve the activities
                offered.
              </p>
            </li>
            <img
              src="/assets/images/blogs/blog5/Image-2.webp"
              alt="Emoticon scale"
              className={styles.image}
            />
            <li>
              <p>
                <b>Environmental Considerations</b> — Evaluate the care home
                environment to ensure it promotes wellbeing. Document any
                modifications or improvements made to communal spaces, outdoor
                areas, and individual living spaces to enhance residents'
                overall quality of life.
              </p>
            </li>
          </ul>

          <h2 className={styles.title}>Conclusion</h2>
          <p>
            Incorporating wellbeing activities in your care home is not only
            about enhancing the lives of residents but also about meeting the
            expectations set by regulatory bodies such as the CQC. By
            documenting and evidencing your commitment to person-centred care
            and individual wellbeing, you not only comply with regulations but
            also contribute to creating a positive and enriching environment for
            those working and living in your care. Remember, the journey towards
            ‘outstanding’ in care is ongoing, and the evidence you collect will
            guide you in continually improving the quality of life for your
            residents.
          </p>

          <p>
            Want to get better at content creation? &nbsp;
            <a href="/how-we-can-help">Book a 30-minute demo</a>
            &nbsp; of our content marketing platform today.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
