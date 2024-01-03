import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import HangmanDraw from '@/components/Games/Hangman/HangmanDraw';
import HangmanWord from '@/components/Games/Hangman/HangmanWord';
import Keyboard from '@/components/Games/Hangman/Keyboard';
import { GameWindow } from '@/components/GameWindow';
import { useCompleteActivity } from '@/services/activities/useCompleteActivity';

import styles from './hangman.module.css';
import words from './wordList.json';
function hangman() {
  const [wordToGuess, setWordToGuess] = useState('');
  const [guessLetters, setGuessLetters] = useState<string[]>([]);
  const router = useRouter(); // Use the router
  const completeActivityCalled = useRef(false);
  const completeActivity = useCompleteActivity();
  useEffect(() => {
    if (!completeActivityCalled.current) {
      completeActivityCalled.current = true;
      completeActivity.mutate(
        { activityId: 205 },
        {
          onSuccess: (res) => {
            console.log('res', res);
          },
        }
      );
    }
  }, []);
  useEffect(() => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
  }, []);

  // take and filter the letters we guess
  const incorrectLetters = guessLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner =
    wordToGuess &&
    wordToGuess.split('').every((letter) => guessLetters.includes(letter));

  const addGuessLetter = useCallback(
    (letter: string) => {
      if (guessLetters.includes(letter) || isLoser || isWinner) {
        return;
      } else {
        setGuessLetters((currentLetters) => [...currentLetters, letter]);
      }
    },
    [guessLetters, isLoser, isWinner]
  );

  // keyboard event handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) {
        return;
      } else {
        e.preventDefault();
        addGuessLetter(key);
      }
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessLetters]);

  useEffect(() => {
    if (isWinner && wordToGuess) {
      toast('Congratulations, you won!', {
        icon: '👏',
        duration: 5000,
      });
    }
  }, [isWinner, wordToGuess]);

  useEffect(() => {
    if (isLoser) {
      toast.error('You lost, please refresh the page!', {
        duration: 5000,
      });
    }
  }, [isLoser, wordToGuess]);
  const game = {
    id: 1,
    name: 'Hangman',
    description: 'Guess the word by clicking on the letters. You have 6 lives.',
    instructions:
      'Guess the word by clicking on the letters. You have 6 lives.',
    link: '/wellbeing/games/hangman',
  };
  const handleResume = () => {
    // Code to resume the game
    console.log('Resuming game');
  };

  const handleRestart = () => {
    // Code to restart the game
    // refresh the page
    router.reload();
  };

  return (
    <div className={styles.hangmanContainer}>
      <GameWindow
        game={game}
        onRestart={handleRestart}
        onResume={handleResume}
      />
      <div className={styles.content}>
        <Toaster />

        <div className={styles.column}>
          <HangmanDraw numberOfGuess={incorrectLetters.length} />

          <div className={styles.selfStretch}>
            <Keyboard
              disabled={isWinner || isLoser}
              activeLetter={guessLetters.filter((letter) =>
                wordToGuess.includes(letter)
              )}
              inactiveLetter={incorrectLetters}
              addGuessLetter={addGuessLetter}
            />
          </div>
        </div>
        <HangmanWord
          result={isLoser}
          guessLetters={guessLetters}
          wordToGuess={wordToGuess}
        />
        {(isWinner || isLoser) && (
          <button className={styles.restartButton} onClick={handleRestart}>
            Restart Game
          </button>
        )}
      </div>
    </div>
  );
}

export default hangman;
