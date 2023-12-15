import { Grid } from '@mui/material';
import Head from 'next/head';

import BlogCard from '@/components/Blog/BlogCard';
import { Footer } from '@/components/Home/Footer';
import { Header } from '@/components/Home/header/Header';

import styles from './blog.module.css';
const Index = () => {
  const blogs = [
    { id: 1, name: 'Boosting Care Home Enquiries with Wellbeing Activities' },
    {
      id: 2,
      name: 'The Power of High-Quality Visual Content in Care Home Lead Generation',
    },
    {
      id: 3,
      name: '5 Tried & Tested Fundraising Ideas for Care Home Activities',
    },
    {
      id: 4,
      name: 'How we made a care home residents swimming dream come true!',
    },
    {
      id: 5,
      name: 'The new CQC Single Assessment Framework and wellbeing activities',
    },
    { id: 6, name: 'The Art of Storytelling to Generate Leads for Care Homes' },
    {
      id: 7,
      name: 'Joyful Jingles and Festive Fun: Unwrapping the Magic of Christmas Activities in Care Homes',
    },
    {
      id: 8,
      name: 'How Care Homes Can Make the Most of their Local Community',
    },
  ];
  return (
    <div className="white-background">
      <Head>
        <title>Knowledge hub | Motion Wellbeing</title>
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

      <div className={styles.blogHero}>
        <div className={styles.blogHeroContent}>
          <h1>Knowledge hub</h1>
          <p>
            Learn about how wellbeing activities and marketing can improve
            quality of life of residents, improve staff wellbeing and increase
            enquiries with our quick-read blogs and resources.
          </p>
        </div>
      </div>
      <div className={styles.blogContainer}>
        <Grid container className={styles.Cards}>
          {blogs.reverse().map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Grid>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Index;
