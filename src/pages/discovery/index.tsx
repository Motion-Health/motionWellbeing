import { Grid } from '@mui/material';
import Head from 'next/head';

import { Footer } from '@/components/Home/Footer';
import { Header } from '@/components/Home/header/Header';

import styles from '../blog/blog.module.css';
const Index = () => {
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

      <div className={styles.blogHero}>
        <div className={styles.blogHeroContent}>
          <h1>Knowledge Hub</h1>
          <p>The go to place for all things wellbeing.</p>
        </div>
      </div>
      <div className={styles.blogContainer}>
        <Grid container className={styles.Cards}></Grid>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
