import React, { useEffect, useState } from "react";
import { TetrisProvider } from "@/hooks/useTetris";
import Tetris from "@/components/Games/Tetris/Tetris";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from 'next/head';
import styles from './../gameDefaults.module.css';

const TetrisGame = () => {
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
