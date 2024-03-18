import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './JoinUsBlock.module.css';

export default function JoinUsBlock() {
 
  return (

      <div className="container  ${styles.JoinUsBlockContainer}">
      <img src="/assets/images/pricing/man.png" className={styles.woman} alt="Cartoon Woman" />
      <img src="/assets/images/pricing/woman.png" className={styles.man} alt="Cartoon Man" />
      <div className={styles.JoinUsBlock}>
      

      <h1 className={styles.title}>Join Our Trusted Care Partners</h1>

      <a href="https://calendly.com/zeezy-1/motion" target="_blank" rel="noreferrer">
        <Button variant="contained" color="primary" className={styles.button}>
          Get a Demo
        </Button>
      </a>
    </div>
    </div>
      

  );
}
