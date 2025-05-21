/* eslint-disable @next/next/no-sync-scripts */
import { useState } from 'react';
import { useEffect } from 'react';

import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';
import NavBar from '@/components/navBar';
import PageHeader from '@/components/PageHeader';

import styles from './blog.module.css';

const tags = ['Marketing', 'News', 'Sales', 'Technology', 'Wellbeing'];

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Wv6PpD';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // This will be used to filter the blogs based on the selected tags
  const blogs = [
    { id: 1, name: 'SEO explained', tags: ['Marketing', 'Technology'] },
    {
      id: 3,
      name: 'How to attract more carers to your home',
      tags: ['Sales', 'Wellbeing'],
    },
    {
      id: 4,
      name: 'When to invest in marketing for care homes',
      tags: ['Marketing', 'News'],
    },
    {
      id: 5,
      name: 'How can you remove bad reviews on Indeed?',
      tags: ['Sales', 'Technology'],
    },
    {
      id: 6,
      name: 'Creating a successful sales funnel for your care home',
      tags: ['Sales', 'Marketing'],
    },
    {
      id: 7,
      name: 'What is TikTok and should your care home be using it?',
      tags: ['Technology', 'News'],
    },
    {
      id: 8,
      name: 'Why the adult social care sector is poised for explosive growth',
      tags: ['News', 'Wellbeing'],
    },
    {
      id: 9,
      name: 'How to get your care homes featured on BBC News',
      tags: ['News', 'Marketing'],
    },
    {
      id: 10,
      name: "'Nothing about us without us': what we've learned from co-designing services with care homes",
      tags: ['Wellbeing', 'Technology'],
    },
    {
      id: 11,
      name: 'Getting better feedback and reviews for your care home',
      tags: ['Sales', 'Wellbeing'],
    },
    {
      id: 12,
      name: 'What families care about when looking for a care home',
      tags: ['Sales', 'Marketing'],
    },
  ];

  return (
    <>
      <title>Knowledge hub | Motion</title>
      <meta property="og:url" content="https://www.motion.org.uk" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Motion | Knowledge hub" />
      <meta
        name="description"
        content="The Knowledge hub is a collection of resources to help you understand marketing and sales for your care home."
      />
      <meta property="og:image" content="./og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Knowledge hub | Motion" />
      <meta name="twitter:image" content="./og-image.jpg" />
      <meta
        property="twitter:description"
        content="The Knowledge hub is a collection of resources to help you understand marketing and sales for your care home."
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/css/styles.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/web/assets/mobirise-icons2/mobirise2.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap-grid.min.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/bootstrap/css/bootstrap-reboot.min.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/dropdown/css/style.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/socicon/css/styles.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/theme/css/style.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/recaptcha.css"
      />
      <link
        rel="stylesheet"
        href="/extensions/programm5/software-development-company/assets/mobirise/css/mbr-additional.css"
      />

      <script src="/extensions/programm5/software-development-company/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/smoothscroll/smooth-scroll.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/ytplayer/index.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/dropdown/js/navbar-dropdown.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/embla/embla.min.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/embla/script.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/mbr-tabs/mbr-tabs.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/theme/js/script.js"></script>
      <script src="/extensions/programm5/software-development-company/assets/formoid.min.js"></script>

      <NavBar />

      <div
        style={{
          background: `radial-gradient(circle at -11% 10%, #6c8dbc -33%, #fdfbe8b8 30%, transparent 50%), radial-gradient(circle at 0% 73%, #6c8dbc -30%, #fdfced85 30%, transparent 50%), radial-gradient(circle at 77% 48%, #6c8dbc -30%, #fdfced85 30%, transparent 50%)`,
        }}
      >
        <div className={styles.blogHero}>
          <div className={styles.blogHeroContent}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PageHeader title="Knowledge hub" />
            </div>
            <p>
              We&apos;ve compiled these quick and easy resources to de-mystify
              marketing and sales for your care home.
            </p>
          </div>
        </div>
        <div className={styles.tagsContainer}>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <button
                key={tag}
                className={selectedTags.includes(tag) ? styles.selected : ''}
                onClick={() => {
                  if (selectedTags.includes(tag)) {
                    setSelectedTags(selectedTags.filter((t) => t !== tag));
                  } else {
                    setSelectedTags([...selectedTags, tag]);
                  }
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.blogContainer}>
          <div className="container">
            <div className="row">
              {blogs
                .filter((blog) =>
                  selectedTags.length === 0
                    ? true
                    : blog.tags.some((tag) => selectedTags.includes(tag))
                )
                .slice(0, 3)
                .map((blog) => (
                  <div
                    key={blog.id}
                    className="col-12 col-lg-4 col-md-6 mb-4 d-flex"
                  >
                    <BlogCard
                      title={blog.name}
                      imageUrl={`/assets/images/blogs/blog${blog.id}/thumbnail.webp`}
                      imageAlt={blog.name}
                      linkUrl={`/knowledge-hub/${blog.name
                        .replace(/ /g, '-')
                        .replace(/[^a-zA-Z0-9-]/g, '')}`}
                      className="w-100"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.KlavioForm + '  klaviyo-form-XyjpZS'}></div>
          <div className="container">
            <div className="row">
              {blogs
                .filter((blog) =>
                  selectedTags.length === 0
                    ? true
                    : blog.tags.some((tag) => selectedTags.includes(tag))
                )
                .slice(3)
                .map((blog) => (
                  <div
                    key={blog.id}
                    className="col-12 col-lg-4 col-md-6 mb-4 d-flex"
                  >
                    <BlogCard
                      title={blog.name}
                      imageUrl={`/assets/images/blogs/blog${blog.id}/thumbnail.webp`}
                      imageAlt={blog.name}
                      linkUrl={`/knowledge-hub/${blog.name
                        .replace(/ /g, '-')
                        .replace(/[^a-zA-Z0-9-]/g, '')}`}
                      className="w-100"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Index;
