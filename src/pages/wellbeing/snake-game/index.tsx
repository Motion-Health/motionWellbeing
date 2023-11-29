
import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { Main } from '@/templates/Main';
// Dynamically import the Snake component with SSR disabled
import Snake from '@/components/Games/Snake/Snake';

const SnakeGame = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true once component has mounted
    setIsClient(true);
  }, []);

  return (
    <>
    <Main>
      <Head>
        <title>Profile | Motion Wellbeing</title>
      </Head>
      {isClient && (
        <Snake
          color1="#248ec2"
          color2="#1d355e"
          backgroundColor="#ebebeb"
        />
      )}
    </Main>
    </>
  );
};

export default SnakeGame;
