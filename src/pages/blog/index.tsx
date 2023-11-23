import { Grid } from '@mui/material';
import Head from 'next/head';

import BlogCard from '@/components/Blog/BlogCard';
import { Footer } from '@/components/Home/Footer';
import { Header } from '@/components/Home/header/Header';

import styles from './blog.module.css';
const Index = () => {
  const blog1 = {
    id: 1,
    link: 'Boosting-Care-Home-Enquiries-with-Wellbeing-Activities',
    name: 'Boosting Care Home Enquiries with Wellbeing Activities',
    image: '/assets/images/blogs/blog1/thumbnail.webp',
  };
  const blog2 = {
    id: 2,

    link: 'The-Power-of-High-Quality-Visual-Content-in-Care-Home-Lead-Generation',
    name: 'The Power of High-Quality Visual Content in Care Home Lead Generation',
    image: '/assets/images/blogs/blog2/Thumbnail.webp',
  };
  const blog3 = {
    id: 3,
    name: '5 Tried & Tested Fundraising Ideas for Care Home Activities',
    link: '5-Tried-Tested-Fundraising-Ideas-for-Care-Home-Activities',
    image: '/assets/images/blogs/blog3/Thumbnail.webp',
  };
  const blog4 = {
    id: 4,
    name: 'How we made a care home residents swimming dream come true!',
    link: 'How-we-made-a-care-home-residents-swimming-dream-come-true',
    image: '/assets/images/blogs/blog4/Thumbnail.webp',
  };
  const blog5 = {
    id: 5,
    name: 'The new CQC Single Assessment Framework and wellbeing activities',
    link: 'The-new-CQC-Single-Assessment-Framework-and-wellbeing-activities',
    image: '/assets/images/blogs/blog5/thumbnail.webp',
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
          <p>
            Learn about how wellbeing activities and marketing can improve
            quality of life of residents, improve staff wellbeing and increase
            enquiries with our quick-read blogs and resources.
          </p>
        </div>
      </div>
      <div className={styles.blogContainer}>
        <Grid container className={styles.Cards}>
          <BlogCard blog={blog5}></BlogCard>
          <BlogCard blog={blog4}></BlogCard>
          <BlogCard blog={blog3}></BlogCard>
          <BlogCard blog={blog2}></BlogCard>
          <BlogCard blog={blog1}></BlogCard>
        </Grid>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
