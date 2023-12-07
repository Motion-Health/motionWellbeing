import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Pong from '@/components/Games/Pong';
import { GameWindow } from '@/components/GameWindow';

// Dynamically import the Snake component with SSR disabled

const SnakeGame = () => {
  const [isClient, setIsClient] = useState(false);
  const [restartNum, setRestartNum] = useState(0);
  const router = useRouter(); // Use the router
  useEffect(() => {
    // Set isClient to true once component has mounted
    setIsClient(true);
  }, []);
  const game = {
    id: 1,
    name: 'Pong',
    description: 'A classic game of Pong',
    instructions:
      'Move the paddle up and down to hit the ball. Dont let the ball get past you!',
    link: '/wellbeing/games/pong',
  };

  const handleResume = () => {
    // Code to resume the game
    console.log('Resuming game');
  };
  const handleRestart = () => {
    console.log('Restarting game');
    setRestartNum(restartNum + 1); // Call the passed onRestart prop to reset the game state
  };
  return (
    <>
      <GameWindow
        game={game}
        onRestart={handleRestart}
        onResume={handleResume}
      />

      <div>
        <Pong restart={restartNum} />
      </div>
    </>
  );
};

export default SnakeGame;
