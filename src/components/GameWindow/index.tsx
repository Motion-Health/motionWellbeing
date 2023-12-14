// Assuming you've created a CSS module
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import mainTheme from '@/styles/theme.module.css';

import window from './window.module.css';
export const GameWindow = ({ game, onRestart, onResume }) => {
  const [windowActive, setWindowActive] = useState(false);
  const router = useRouter(); // Use the router
  return (
    <>
      <div
        className={`${window.makeActive} ${
          windowActive ? window.activeButtonActive : ''
        }`}
      >
        <button
          className={window.activeButton}
          onClick={() => setWindowActive(!windowActive)}
        >
          {'>'}
        </button>
      </div>

      <div
        className={`${window.gameWindow} ${
          windowActive ? window.makeWindowActive : ''
        }`}
      >
        <div className={window.text}>
          <Head>
            <title>{game.name} | Motion Wellbeing</title>
          </Head>
          <h1>{game.name}</h1>
          <p>{game.description}</p>
          <p>{game.instructions}</p>
        </div>
        <div className={window.buttons}>
          <button
            className={`${mainTheme.bigButton} ${mainTheme.dangerButton}`}
            onClick={() => router.push('/wellbeing/activities/?filter=Games')}
          >
            Exit
          </button>
          <button
            className={`${mainTheme.bigButton} ${mainTheme.button}`}
            onClick={() => {
              setWindowActive(false);
              onRestart();
            }}
          >
            Restart
          </button>
          <button
            className={`${mainTheme.bigButton} ${mainTheme.Gobutton}`}
            onClick={() => {
              setWindowActive(false);
              onResume();
            }}
          >
            Resume
          </button>
        </div>
      </div>
    </>
  );
};
