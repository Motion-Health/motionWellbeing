import styles from './about.module.css';
export const About = () => {
  return (
    <section id="about" className={styles.aboutWrapper}>
      <div>
        <img
          className={styles.image}
          src="/assets/home/about.webp" // Adjust the path if necessary
          alt="About us image"
          width={891}
          height={594}
        />
        <div className={styles.about}>
          <h2 className="landing-h2">About us</h2>

          <p>
            Motion is a social enterprise on a mission to create moments that
            move people. We passionately believe that everyone should have the
            opportunity to lead a happy and healthy life.
          </p>
          <p>
            That's why our team of passionate experts deliver truly
            person-centred wellbeing activities across a broad range of
            categories such as movement, music and culture.
          </p>
          <p>
            Community is at the heart of everything we do, which is why we work
            with Activity Coordinators, residents and their families, to create
            services that are loved and connections that are meaningful.
          </p>
        </div>
      </div>
      <div className={styles.alternative}>
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoAlternative}
            src="https://www.youtube.com/embed/3wcCZ0G_yak?rel=0"
            title="Motion Moments YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.about}>
          <h2 className="landing-h2">Motion Moments</h2>
          <p>
            Our holistic approach to health and wellbeing creates special
            moments. They give Activity Coordinators the time and space they
            deserve, they provide residents with new, exciting and fulfilling
            experiences.
          </p>
          <p>
            At the heart of each moment are people and their stories, that
            demonstrate our impact. Watch now.
          </p>
        </div>
      </div>
      <div>
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/BvIoTdYOPTE?rel=0"
            title="Events YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.about}>
          <h2 className="landing-h2">Events</h2>
          <p>
            Motion is a community made up of a diverse group of people from
            different backgrounds and with interesting stories to tell. Our
            events: 'The Motion Community Games' brings together care homes,
            community groups and our partners to put on a joyful day of
            activities, games and connection!
          </p>
          <p>Sign up for the next Motion Community Games.</p>
          <a
            href="https://www.eventbrite.com/cc/motion-community-games-2023-1841259"
            className={styles.clearButton}
            target="_blank"
          >
            Take Part
          </a>
        </div>
      </div>
    </section>
  );
};
