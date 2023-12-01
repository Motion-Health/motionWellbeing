import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// Dynamically import the Snake component with SSR disabled
import Snake from '@/components/Games/Snake/Snake';

import styles from './../gameDefaults.module.css';

const SnakeGame = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter(); // Use the router
  useEffect(() => {
    // Set isClient to true once component has mounted
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Profile | Motion Wellbeing</title>
      </Head>
      <h1>Snake Game</h1>
      <p>
        Play the classic Snake game. Navigate the snake to eat the apples and
        grow longer. Don't run into the walls or your own tail!
      </p>
      <button className={styles.backButton} onClick={() => router.back()}>
        Go Back
      </button>
      {isClient && (
        <Snake color1="#248ec2" color2="#1d355e" backgroundColor="#ebebeb" />
      )}
    </>
  );
};

export default SnakeGame;
