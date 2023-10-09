import { useRef } from 'react';

import styles from './form.module.css';

export const Contact = () => {
  const myRef: any = useRef(null);

  return (
    <section id="contact" className={styles.formWrapper}>
      <h2>How can we help?</h2>
      <div className={styles.form}>
        <form
          className={styles.formInputs}
          id="contactForm"
          ref={myRef}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input required type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input required type="email" id="email" name="email" />
            </div>
          </div>
          <label htmlFor="message">Message</label>
          <textarea required id="message" name="message" />

          <p>
            <button
              name="Send Message"
              className="w-full lg:w-auto storybook-button storybook-button--large storybook-button--primary"
              type="submit"
            >
              Send Message
            </button>
          </p>
        </form>
        <div className={styles.companyDetails}>
          <p>
            <a href="tel:07543858684">07543 858 684</a>
          </p>
          <p>
            <a href="mailto:info@motionexercise.co.uk ">
              info@motionexercise.co.uk
            </a>
          </p>
          <address>
            Motion Exercise CIC, <br />
            Kroto Innovation Centre, <br />
            318 Broad Lane, <br />
            Sheffield, <br />
            S3 7HQ
          </address>

          <div className=" mt-4 flex">
            <a
              className={styles.socials}
              href="https://www.facebook.com/motionexercise"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="64" rx="32" fill="#0C437D" />
                <path
                  d="M35.015 23.09V27.5H41.015L40.19 33.905H35.015V50H28.4V33.905H23V27.5H28.4V22.46C28.4 16.985 31.745 14 36.635 14C38.975 14 40.985 14.18 41.57 14.255V19.985H38.18C35.525 19.985 35.015 21.245 35.015 23.105V23.09Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              className={styles.socials}
              href="https://www.instagram.com/motionexercise/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="64" rx="32" fill="#0C437D" />
                <path
                  d="M48.3875 38.8025C48.2525 41.4425 47.6525 43.7825 45.7175 45.7175C43.7825 47.6525 41.4425 48.2525 38.8025 48.3875C36.0725 48.5375 27.9125 48.5375 25.1975 48.3875C22.5575 48.2525 20.2175 47.6525 18.2825 45.7175C16.3475 43.7825 15.7475 41.4425 15.6125 38.8025C15.4625 36.0725 15.4625 27.9125 15.6125 25.1825C15.7475 22.5425 16.3475 20.2025 18.2825 18.2675C20.2175 16.3325 22.5575 15.7325 25.1975 15.6125C27.9275 15.4625 36.0875 15.4625 38.8025 15.6125C41.4425 15.7475 43.7825 16.3475 45.7175 18.2825C47.6525 20.2175 48.2525 22.5575 48.3875 25.1975C48.5375 27.9275 48.5375 36.0875 48.3875 38.8025ZM45.5375 31.9925C45.5375 29.5925 45.7325 24.4325 44.8775 22.2725C44.2925 20.8175 43.1825 19.7075 41.7425 19.1375C39.5825 18.2825 34.4225 18.4775 32.0225 18.4775C29.6225 18.4775 24.4625 18.2825 22.3025 19.1375C20.8475 19.7225 19.7375 20.8325 19.1675 22.2725C18.3125 24.4325 18.5075 29.5925 18.5075 31.9925C18.5075 34.3925 18.3125 39.5525 19.1675 41.7125C19.7525 43.1675 20.8625 44.2775 22.3025 44.8475C24.4625 45.7025 29.6225 45.5075 32.0225 45.5075C34.4225 45.5075 39.5825 45.7025 41.7425 44.8475C43.1975 44.2625 44.3075 43.1525 44.8775 41.7125C45.7325 39.5525 45.5375 34.3925 45.5375 31.9925ZM40.4675 31.9925C40.4675 36.6725 36.6875 40.4525 32.0075 40.4525C27.3275 40.4525 23.5475 36.6725 23.5475 31.9925C23.5475 27.3125 27.3275 23.5325 32.0075 23.5325C36.6875 23.5325 40.4675 27.3125 40.4675 31.9925ZM37.5125 31.9925C37.5125 28.9625 35.0525 26.4875 32.0075 26.4875C28.9625 26.4875 26.5025 28.9475 26.5025 31.9925C26.5025 35.0375 28.9775 37.4975 32.0075 37.4975C35.0375 37.4975 37.5125 35.0375 37.5125 31.9925ZM40.8125 25.1525C39.7175 25.1525 38.8325 24.2675 38.8325 23.1725C38.8325 22.0775 39.7175 21.1925 40.8125 21.1925C41.9075 21.1925 42.7775 22.0775 42.7775 23.1725C42.7775 24.2675 41.8925 25.1525 40.8125 25.1525Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              className={styles.socials}
              href="https://www.youtube.com/channel/UCWgS--l2ajsmlsA95r3_4uQ/videos"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="64" rx="32" fill="#0C437D" />
                <path
                  d="M50 32.03C50 32.03 50 37.97 49.25 40.82C48.83 42.395 47.615 43.58 46.07 44C43.265 44.765 32 44.765 32 44.765C32 44.765 20.75 44.765 17.93 44C16.385 43.58 15.155 42.395 14.75 40.82C14 37.97 14 32.03 14 32.03C14 32.03 14 26.09 14.75 23.24C15.17 21.665 16.385 20.435 17.93 20.015C20.735 19.25 32 19.25 32 19.25C32 19.25 43.265 19.25 46.07 20.015C47.615 20.435 48.845 21.665 49.25 23.24C50 26.09 50 32.03 50 32.03ZM37.73 32.03L28.325 26.63V37.415L37.73 32.03Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              className={styles.socials}
              href="https://www.linkedin.com/company/motion-exercise-cic/?originalSubdomain=uk"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="64" rx="32" fill="#0C437D" />
                <path
                  d="M18 20.4825C18 18.5607 19.5066 17 21.3618 17C23.217 17 24.7236 18.5607 24.7236 20.4825C24.7236 22.4043 23.217 23.9959 21.3618 23.9959C19.5066 23.9959 18 22.4043 18 20.4825ZM18.4632 45.9974V26.6374H24.2679V45.9974H18.4632ZM40.2003 45.9974V36.5741C40.2003 34.3273 40.1555 31.4484 37.1821 31.4484C34.2088 31.4484 33.7008 33.8887 33.7008 36.4142V46H27.9036V26.6374H33.4717V29.279H33.5539C34.3284 27.757 36.2209 26.1525 39.0448 26.1525C44.9192 26.1525 46 30.1586 46 35.3643V46H40.2003V45.9974Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
