import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FacebookIcon from "@mui/icons-material/Facebook";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";
import Head from "next/head";
import router from "next/router";
import { useState } from "react";

import { Footer } from "@/components/Home/Footer";
import { Header } from "@/components/Home/header/Header";

import styles from "../blogPost.module.css";
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
          content="Motion Wellbeing is a digital wellbeing platform empowering care homes to plan, deliver and showcase outstanding, person-centred wellbeing activities."
        />
        <meta
          name="description"
          content="Motion Wellbeing is a digital wellbeing platform empowering care homes to plan, deliver and showcase outstanding, person-centred wellbeing activities."
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
      </Head>

      <Header />

      <IconButton
        className={styles.backArrow}
        color="primary"
        onClick={() => router.push("/blog")}
        sx={{ padding: 3 }}
      >
        <ArrowBackIcon />
      </IconButton>

      <div className={styles.blogHero}>
        <div className={styles.blogHeroContent}>
          <h1>The Art of Storytelling to Generate Leads for Care Homes</h1>
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
            Care homes are places where compassion and understanding are at the
            forefront, therefore storytelling becomes a powerful tool to make
            connections with potential clients. Beyond the bricks and mortar,
            the heart of a care home lies in the stories it tells — narratives
            of resilience, warmth, and community; all things that connect with
            people on a human level. In this blog, we explore the art of
            storytelling and how care homes can harness its magic to generate
            leads, inviting families to envision a home where their loved ones
            can live joyful and healthy lives.
          </p>
          <h3 className={styles.title}>The types of stories you can tell</h3>
          <ul>
            <li>
              <p>
                <b>Personal resident moments</b> — People connect with people,
                so sharing a powerful moment for a resident in your care home is
                going to be an effective and reliable way to reach your desired
                audience. For instance, this might be an activity that a
                resident has done for the first time in decades or a story of
                them engaging with the local community.
              </p>
            </li>
            <li>
              <p>
                <b>Success stories</b> — Your care home is likely to be brimming
                with positive news that you should be shouting from the rooftops
                about. An improved inspection report? A positive bit of
                feedback? Both examples of things your audience wants to hear
                about.
              </p>
            </li>
            <li>
              <p>
                <b>Staff celebrations</b> — Your team members working in your
                care home(s) are incredible sources of inspiration and truly
                embody person-centred care. Show how valued they are and
                communicate their caring nature with a blog post showcasing
                them.
              </p>
            </li>
            <li>
              <p>
                <b>Themed events and activities</b> — Days throughout the year
                like Remembrance Day and Christmas are fantastic opportunities
                to show what your care home has been getting up to and offer
                peace of mind to families who want to know their loved ones are
                making the most of important celebrations.
              </p>
            </li>
            <h3 className={styles.title}>Strategies for telling stories</h3>
            <li>
              <p>
                <b>Story arc</b> - Every good story has a narrative underpinning
                it. This may be a challenge that someone overcame or a
                historical connection that makes the story particularly special.
                Take the reader on a journey.
              </p>
            </li>
            <li>
              <p>
                <b>Imagery</b> - As the saying goes “a picture is worth a
                thousand words” and this couldn’t be more true in this instance.
                Good-quality photographs with resident(s) smiling.
              </p>
            </li>
            <li>
              <p>
                <b>Share!</b> - A brilliant story is no good if no one sees it.
                Make sure that it is optimised for SEO (search engine
                optimisation) and posted across your digital marketing channels
                e.g. Facebook.
              </p>
            </li>
            <li>
              <p>
                <b>Keep it short and impactful</b> - It is likely that the
                person reading this has limited time. Tell the story but try to
                be concise and straight to the point. Images are a great way to
                reduce the amount of text you need to tell a story.
              </p>
            </li>
            <li>
              <p>
                <b>Get creative</b> - While blogs are an effective way to share
                stories, think about other mediums. Do you have a member of
                staff that enjoys Tiktok and would like to have a go at making
                videos telling stories? Could the stories be condensed and
                shared to Facebook?
              </p>
            </li>
          </ul>

          <h2 className={styles.title}>Conclusion</h2>
          <p>
            I’m sure it goes without saying, but be sure to only share stories
            that you have permission to do so. By weaving narratives of
            residents, staff, success stories, and community life, care homes
            can open their doors through words, inviting families to explore the
            enriching tapestry of care and compassion waiting within. These
            stories not only generate leads but create a narrative that
            resonates with the hearts of those seeking a home where their loved
            one will receive truly person-centred care. For some inspiration
            check out our blog:{" "}
            <a href="/blog/How-we-made-a-care-home-residents-swimming-dream-come-true/">
              How we made a care home residents swimming dream come true!
            </a>{" "}
            or <a href="/how-we-can-help">book a discovery call</a> to learn how
            we can support you to tell better stories.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
