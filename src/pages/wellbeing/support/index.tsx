import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from './support.module.css';
const Login = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Get Support | Motion Wellbeing</title>
        <meta
          name="Get Support | Motion Wellbeing"
          content="Get Support | Motion Wellbeing"
        />
      </Head>

      <IconButton
        color="primary"
        onClick={() => router.push('/')}
        sx={{ padding: 3 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <div className={styles.supportContainer}>
        <div className={styles.support}>
          <img src="/assets/images/support/zeezy.webp" />
          <div>
            <h1>Get support</h1>
            <p>
              We're here to help. If you have any questions or need support,
              please get in touch with us.
            </p>
            {/* add pjhone and email  with icon */}
            <p>
              <strong>Email:</strong>
              <a href="mailto:zeezy@motionexercise.co.uk">
                zeezy@motionexercise.co.uk
              </a>
            </p>
            <p>
              <strong>Phone:</strong>
              <a href="tel:07543858684">07543 858684</a>
            </p>

            
            <div className={styles.actionButtons}>
            <button
              className={styles.supportButton}
              // go to previous Page

              onClick={() => window.history.back()}
            >
              Go back
            </button>
              <button
                className={styles.callButton}
                onClick={() => window.open('tel:07543858684')}
              >
                Call now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
