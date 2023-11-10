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
          <h1>How we made a care home residents swimming dream come true!</h1>
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
            Edith is a resident at Hallamshire Care Home, a care home that we’ve
            provided wellbeing activities to since 2019! To us, being
            person-centred is about truly getting to know our clients and
            finding ways to go above and beyond, so when we learned about how
            Edith loved going swimming as a child, but hadn’t been able to go in
            decades, we made it our mission to get her doing laps of a swimming
            pool again. Here’s how we made it happen, step-by-step:
          </p>
          <img
            src="/assets/images/blogs/blog4/Image-1.webp"
            alt="Landscape shot of care home"
            className={styles.image}
          />
          <ul>
            <li>
              <h2 className={styles.title}>Step 1: We were curious</h2>
              <p>
                Being curious is one of our core values. We recognise that every
                client is different and that’s what makes them special. We take
                the time to truly get to know our clients and ask questions that
                enable us to improve their quality of life. In a virtual
                feedback session with Edith and Vicky (Activity Coordinator),
                Edith said to us “I used to love going swimming when I was at
                school. We were a squadron, there were four of us you see. It
                was the best thing from school, and I really, really miss it. I
                loved it that much I wish I could go now and dive in and have a
                swim because that is the one thing I miss”. We didn’t know how
                to make this a reality, but we knew we’d find a way!
              </p>
            </li>
            <li>
              <h2 className={styles.title}>Step 2: Contacted local partners</h2>
              <p>
                Our first port of call was to contact facilities with swimming
                pools. A quick Google search revealed that Ponds Forge Sports
                Centre was closest to Hallamshire Care Home. They are a part of
                an organisation called Sheffield City Trust so we reached out to
                their Health & Wellbeing Manager to see if there was anything
                they could do. After a bit of waiting they got back to us and
                were keen to help us make Edith’s dream come true. We met with
                them and their Swimming Manager to arrange a private swim for
                Edith. It’s likely that you will have a swimming pool and other
                facilities nearby who you can phone or email — don’t be afraid
                to reach out. If you do, try and make the ‘ask’ nice and
                straightforward!
              </p>
            </li>
            <li>
              <h2 className={styles.title}>
                Step 3: Worked with Hallamshire Care Home
              </h2>
              <p>
                We worked with Hallamshire Care Home to schedule the best time
                and date for the swimming, based on the dates we’d been given by
                the Swimming Manager. It was important to have a few options to
                allow for flexibility!
              </p>
            </li>
            <li>
              <h2 className={styles.title}>Step 4: Health & Safety</h2>
              <p>
                Doing anything like this comes with a certain level of risk, so
                it was important that we mitigated these by conducting detailed
                risk assessments which helped us to ensure everything was in
                place, from the right outfit to the lifeguard!
              </p>
            </li>
            <li>
              <h2 className={styles.title}>Step 5: The big day!</h2>
              <p>
                Then came the day we were all looking forward to.. Edith
                swimming for the first time in decades! Edith took to the water
                better than any of us could have imagined, going straight for
                her trusty breaststroke. The look on her face was priceless and
                made this all worth it!
              </p>
            </li>
          </ul>

          <img
            src="/assets/images/blogs/blog4/Image-2.webp"
            alt="Care home residents performing physical activity"
            className={styles.image}
          />

          <h2 className={styles.title}>Summary</h2>
          <p>
            Being able to make this happen for Edith has been one of the
            highlights of our journey with Motion! It’s special moments like
            this that really encapsulate why we do what we do.
          </p>
          <p>
            If you’d like to know more about how we can help to boost wellbeing
            and make residents&rsquo; dreams come true,{' '}
            <a href="/how-we-can-help">
              book a 30-minute demo
            </a>{' '}
            call with Zeezy today.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
