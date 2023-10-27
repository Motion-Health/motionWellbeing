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
          <h1> 5-Tried-Tested-Fundraising-Ideas-for-Care-Home-Activities</h1>
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
            Activity Coordinators play a vital role in the wellbeing, happiness
            and health of residents in care homes. To provide the best possible
            experiences and activities, care homes sometimes rely on fundraising
            efforts to supplement their budgets. In this blog, we'll explore
            various creative and effective ways for carers to fundraise for
            their care home's activities budget, ensuring that residents
            continue to enjoy a fulfilling and vibrant lifestyle.
          </p>
          <img
            src="/assets/images/blogs/blog3/Image-1.webp"
            alt="Interactive tablet in care home"
            className={styles.image}
          />
          <h2 className={styles.title}>1. Organise Fun Events</h2>

          <p>
            One of the most engaging ways to raise funds is by organising fun
            events within the care home or in the local community. Consider
            hosting events like bake sales, craft fairs, talent shows, or themed
            parties. Get residents involved in the planning and execution of
            these events, making them more enjoyable for everyone.
          </p>

          <h2 className={styles.title}>2. Crowdfunding Campaigns</h2>
          <p>
            Embrace technology and use crowdfunding platforms for raising funds.
            Create a compelling campaign by telling a story on platforms like
            GoFundMe, Kickstarter, or Indiegogo, outlining the activities and
            experiences you aim to provide for the residents. Encourage friends,
            family, and the community to contribute. This works well if you are
            fundraising for a specific item or activity, e.g. an interactive
            tablet or a day out.
          </p>
          <h2 className={styles.title}>4. Sponsorship Opportunities</h2>
          <p>
            Reach out to local businesses for sponsorship opportunities. Offer
            advertising space within the care home or at events in exchange for
            financial support. This can be a mutually beneficial arrangement, as
            businesses gain exposure while helping fund activities for
            residents.
          </p>
          <img
            src="/assets/images/blogs/blog3/Image-2.webp"
            alt="Motion and Activity Coordinator Community"
            className={styles.image}
          />
          <h2 className={styles.title}>5. Resident Art Sales</h2>

          <p>
            Many care home residents have hidden talents, including painting,
            crafts, or knitting. Plan an activity where you encourage them to
            create art or craft items that can be sold to the community, staff
            and families. These sales not only contribute to the activities
            budget but also boost residents' self-esteem and provide a sense of
            purpose.
          </p>

          <h2 className={styles.title}>6. Grant Applications</h2>
          <p>
            Explore grant opportunities from local or national foundations or
            non-profit organisations that support older adults, social care
            and/or wellbeing. Most areas have a ‘Community Foundation’ that have
            grants you can apply for. A good application will have a specific
            request with a strong justification of the impact it will create.
          </p>
          <h2 className={styles.title}>Summary</h2>
          <p>
            Activity Coordinators in care homes go above and beyond to provide
            enriching experiences and activities for their residents. Funding
            these activities can be challenging, but we’re here to share our
            years of experience supporting Activity Coordinators to raise funds
            and improve the quality of life of residents.&nbsp;
            <a href="https://calendly.com/zeezy-1/motion">
              Book a 30 minute discovery call
            </a>
            &nbsp;today to chat about how we can help you to fundraise. of our
            wellbeing and marketing platform today.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
