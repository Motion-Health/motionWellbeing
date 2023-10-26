import { Grid } from '@mui/material';
import Head from 'next/head';

import BlogCard from '@/components/Blog/BlogCard';
import { Footer } from '@/components/Home/Footer';
import { Header } from '@/components/Home/header/Header';
import { useAccountContext } from '@/context/AccountContext';

import styles from './blog.module.css';
const Index = () => {
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

      <div className={styles.blogHero}>
        <div className={styles.blogHeroContent}>
          <h1>Knowledge Hub</h1>
          <p>The go to place for all things wellbeing.</p>
        </div>
      </div>
      <div className={styles.blogContainer}>
        <Grid container className={styles.Cards}>
          <BlogCard blog={blog1}></BlogCard>
        </Grid>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
