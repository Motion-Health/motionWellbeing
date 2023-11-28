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
        onClick={() => router.push('/blog')}
        sx={{ padding: 3 }}
      >
        <ArrowBackIcon />
      </IconButton>

      <div className={styles.blogHero}>
        <div className={styles.blogHeroContent}>
          <h1>
            Joyful Jingles and Festive Fun: Unwrapping the Magic of Christmas
            Activities in Care Homes
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
            The twinkling lights, the scent of cinnamon in the air, and the
            joyous melodies of carols—it's the most wonderful time of the year,
            and care homes are transforming into winter wonderlands filled with
            the spirit of Christmas. In this blog, we unwrap the magic of
            Christmas activities in care homes, where residents and staff come
            together to create cherished moments and kindle the warmth of the
            season.
          </p>
          <ul>
            <li>
              <p>
                <b>Deck the Halls:</b> Festive Decorations and Crafts — The
                journey into the Christmas season begins with the transformation
                of the care home into a festive haven. Residents and staff join
                forces to deck the halls with handmade decorations, wreaths, and
                twinkling lights. Crafting sessions become merry workshops,
                where creativity knows no bounds, and the joy of making is as
                delightful as the finished product.
              </p>
            </li>
            <li>
              <p>
                <b>Santa's Workshop:</b> Gift Wrapping and Secret Santa
                Surprises — The spirit of giving comes alive in Santa's
                Workshop, where residents become elves, wrapping carefully
                chosen gifts for their peers. Secret Santa exchanges add an
                element of surprise and joy, creating anticipation and
                excitement that transcends age and brings smiles to every face.
              </p>
            </li>
          </ul>
          <img
            src="/assets/images/blogs/blog7/Image-1.webp"
            alt="Christmas decorations"
            className={styles.image}
          />
          <ul>
            <li>
              <p>
                <b>Melodies of the Season:</b> Carol Singing and Music Therapy —
                The air is filled with the sweet sounds of carols as residents
                gather for festive sing-alongs. Music therapy sessions take on a
                magical twist, with classic Christmas tunes bringing a sense of
                nostalgia and comfort. Choirs and musical performances add an
                extra layer of enchantment to the holiday season.
              </p>
            </li>
            <li>
              <p>
                <b>Gastronomic Delights:</b> Christmas Cooking and Baking
                Sessions The aroma of gingerbread, the sizzle of roasting
                chestnuts—Christmas in a care home is a feast for the senses.
                Residents roll up their sleeves for festive cooking and baking
                sessions, creating traditional treats and indulging in the joy
                of sharing culinary experiences.
              </p>
            </li>
            <li>
              <p>
                <b>Movies and Holiday Classics:</b>Cinematic Celebrations — The
                cozy corners of the care home transform into mini cinemas, with
                residents enjoying classic Christmas movies and heartwarming
                tales of the season. Movie afternoons become opportunities for
                shared stories, laughter, and the simple joy of a good film in
                good company.
              </p>
            </li>
          </ul>

          <h2 className={styles.title}>Conclusion</h2>
          <p>
            In care homes, Christmas isn't just a season; it's a magical
            tapestry woven with the threads of joy, togetherness, and shared
            memories. As residents and staff come together to create festive
            decorations, exchange gifts, sing carols, indulge in culinary
            delights, and enjoy cinematic celebrations, the true spirit of
            Christmas blossoms. These activities not only enrich the holiday
            season but create a sense of belonging and joy that lasts well
            beyond the tinsel and mistletoe. In care homes, Christmas is not
            just celebrated; it's lived, shared, and cherished in the hearts of
            all who call it home.
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
