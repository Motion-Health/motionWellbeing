import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import Tetris from '@/components/Games/Tetris/Tetris';
import { TetrisProvider } from '@/hooks/useTetris';
import { useCompleteActivity } from '@/services/activities/useCompleteActivity';

import styles from './../gameDefaults.module.css';

const TetrisGame = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter(); // Use the router
  useEffect(() => {
    // Set isClient to true once component has mounted
    setIsClient(true);
  }, []);
  const completeActivity = useCompleteActivity();
  const completeActivityCalled = useRef(false);

  useEffect(() => {
    if (!completeActivityCalled.current) {
      completeActivityCalled.current = true;
      completeActivity.mutate(
        { activityId: 206 },
        {
          onSuccess: (res) => {
            console.log('res', res);
          },
        }
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Profile | Motion Wellbeing</title>
      </Head>
      <h1>Tetris</h1>
      <p>
        Play the classic Tetris game. Navigate the snake to eat the apples and
        grow longer. Don't run into the walls or your own tail!
      </p>
      <button className={styles.backButton} onClick={() => router.back()}>
        Go Back
      </button>

      <TetrisProvider>
        <Tetris />
      </TetrisProvider>
    </>
  );
};

export default TetrisGame;
