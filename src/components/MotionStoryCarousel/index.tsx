import React from 'react';

import styles from './MotionStoryCarousel.module.css';

interface StoryItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}

const storyItems: StoryItem[] = [
  {
    year: '2017',
    title: 'Volunteering in care homes',
    description:
      "I (Zeezy) started volunteering in care homes and LOVED it. I was amazed by the stories I'd hear and people I'd meet (both residents and staff).",
    image: '/assets/images/placeholder.jpg',
  },
  {
    year: '2019',
    title: 'I met Edith',
    description:
      "Whilst volunteering and delivering activities sessions in Hallamshire Care Home I met a wonderful lady called Edith. To this day Edith is the most inspiring person I've ever met!",
    image: '/assets/images/placeholder.jpg',
  },
  {
    year: '2020',
    title: 'COVID-19 lockdown',
    description:
      "The pandemic meant I couldn't go into care homes any more, so we developed technology that meant we could livestream in. It was around this point that Edith told me how much she wanted to go swimming.",
    image: '/assets/images/placeholder.jpg',
  },
  {
    year: '2021',
    title: 'It kept families connected',
    description:
      'The tech we developed meant that families could remain connected with their loved ones in spite of where they are in the world.',
    image: '/assets/images/placeholder.jpg',
  },
  {
    year: '2022',
    title: 'We kept innovating',
    description:
      'We worked with over 3,000 care providers, residents and families to continue to develop our service; ensuring it is truly person-centred.',
    image: '/assets/images/placeholder.jpg',
  },
  {
    year: '2022',
    title: 'I took Edith swimming',
    description:
      'I was finally able to take Edith swimming! Despite not swimming for decades she was like a duck to water and showed me up big time!',
    image: '/assets/images/placeholder.jpg',
  },
  {
    year: '2023',
    title: "We've delivered results",
    description:
      "We've worked in partnership with incredible care providers to deliver meaningful impact and help them to grow. We're proud of our +100 Net-Promoter-Score.",
    image: '/assets/images/placeholder.jpg',
  },
  {
    year: '2024',
    title: 'Built a passionate team',
    description:
      "I've been lucky to build a team of driven and passionate individuals who all have first-hand experience with social care.",
    image: '/assets/images/placeholder.jpg',
  },
  {
    year: '2025',
    title: "It's only the beginning",
    description:
      "We're on a mission to support you to improve and amplify care; and it really is the very start. We truly believe it's an exciting time for social care!",
    image: '/assets/images/placeholder.jpg',
  },
  {
    year: '2025',
    title: "We're still best-friends",
    description:
      'I still get to pop in and see Edith weekly. She often reminds me how much better she is at swimming than I am.',
    image: '/assets/images/placeholder.jpg',
  },
];

const MotionStoryCarousel: React.FC = () => {
  return (
    <section className={styles.storyCarouselSection}>
      <h2 className={styles.sectionTitle}>
        <strong>The Motion story</strong>
      </h2>
      <div className={styles.storyContainer}>
        {storyItems.map((item, index) => (
          <div key={index} className={styles.storyCard}>
            <div className={styles.storyCardInner}>
              <div className={styles.storyImageContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.storyImage}
                />
              </div>
              <div className={styles.storyContent}>
                <span className={styles.storyYear}>{item.year}</span>
                <h3 className={styles.storyTitle}>{item.title}</h3>
                <p className={styles.storyDescription}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MotionStoryCarousel;
