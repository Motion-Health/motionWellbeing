import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

// Dynamically import the Snake component with SSR disabled
import Snake from '@/components/Games/Snake/Snake';
import { GameWindow } from '@/components/GameWindow';
import { useCompleteActivity } from '@/services/activities/useCompleteActivity';

const SnakeGame = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter(); // Use the router
  const completeActivity = useCompleteActivity();
  const completeActivityCalled = useRef(false);

  useEffect(() => {
    if (!completeActivityCalled.current) {
      completeActivityCalled.current = true;
      completeActivity.mutate(
        { activityId: 201 },
        {
          onSuccess: (res) => {
            console.log('res', res);
          },
        }
      );
    }
  }, []);
  useEffect(() => {
    // Set isClient to true once component has mounted
    setIsClient(true);
  }, []);
  const [restart, setRestart] = useState(0);
  const game = {
    id: 1,
    name: 'Snake',
    description: 'A classic game of snake',
    instructions:
      'Use the arrow keys to move the snake around the screen. Eat the apples to grow longer. Avoid hitting yourself.',
    link: '/wellbeing/games/snake-game',
  };
  const handleResume = () => {
    // Code to resume the game
    console.log('Resuming game');
  };

  const handleRestart = () => {
    // Code to restart the game
    setRestart((prevRestart) => prevRestart + 1);
    console.log('Restarting game');
  };

  return (
    <>
      <GameWindow
        game={game}
        onRestart={handleRestart}
        onResume={handleResume}
      />

      {isClient && (
        <Snake
          color1="#41a019"
          color2="#a01919"
          restart={restart}
          backgroundColor="#ebebeb"
        />
      )}
    </>
  );
};

export default SnakeGame;
