import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Game } from '@/components/Games/Sudoku/Game';
import { GameWindow } from '@/components/GameWindow';
import { SudokuProvider } from '@/context/SudokuContext';

const SudokuGame = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter(); // Use the router
  useEffect(() => {
    // Set isClient to true once component has mounted
    setIsClient(true);
  }, []);
  const handleResume = () => {
    // Code to resume the game
    console.log('Resuming game');
  };

  const handleRestart = () => {
    // Code to restart the game
    // refresh the page
    router.reload();
  };
  const game = {
    name: 'Sudoku',
    description:
      'Fill in the grid so that every row, every column, and every 3x3 box contains the digits 1 through 9.',
    instructions:
      'Fill in the grid so that every row, every column, and every 3x3 box contains the digits 1 through 9.',
  };

  return (
    <>
      <GameWindow
        game={game}
        onRestart={handleRestart}
        onResume={handleResume}
      />
      <SudokuProvider>
        <Game />
      </SudokuProvider>
    </>
  );
};

export default SudokuGame;
