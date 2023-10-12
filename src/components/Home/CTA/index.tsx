import styles from './CTA.module.css';

export const CTA = () => {
  return (
    <section className={styles.CTAWrapper}>
      <div className={styles.CTA}>
        <div>
          <blockquote>
            “The Motion team are incredible - They are so committed to helping
            our residents. We love having them working with our care homes.”
          </blockquote>
          <cite>Claire - Sheffcare</cite>
        </div>
        <div className={styles.googleReview}>
          <img
            src="../../assets/home/google-logo.png"
            alt="google review 5 stars"
          />
          <a
            href="https://www.google.com/search?rls=en&q=motion+exercise+cic&ie=UTF-8&oe=UTF-8#lrd=0x4879798012de9795:0xff19ecac76d5c760,1"
            target="_blank"
          >
            Read Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};
