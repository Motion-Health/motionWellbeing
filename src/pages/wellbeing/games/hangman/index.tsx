import React, { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';
import HangmanDraw from '@/components/Games/Hangman/HangmanDraw';
import HangmanWord from '@/components/Games/Hangman/HangmanWord';
import Keyboard from '@/components/Games/Hangman/Keyboard';
import { Toaster, toast } from 'react-hot-toast';
import styles from './hangman.module.css';
import router, { useRouter } from 'next/router';
function hangman() {
  const [wordToGuess, setWordToGuess] = useState('');
  const [guessLetters, setGuessLetters] = useState<string[]>([]);
  const router = useRouter(); // Use the router
  useEffect(() => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
  }, []);

  // take and filter the letters we guess
  const incorrectLetters = guessLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every(letter => guessLetters.includes(letter));

  const addGuessLetter = useCallback((letter: string) => {
    if (guessLetters.includes(letter) || isLoser || isWinner) {
      return
    } else {
      setGuessLetters(currentLetters => [...currentLetters, letter])
    }
  }, [guessLetters, isLoser, isWinner])

  // keyboard event handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) {
        return
      } else {
        e.preventDefault();
        addGuessLetter(key);
      }
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessLetters]);

  useEffect(() => {
    if (isWinner) {
      toast('Congratulations, you won!', {
        icon: '👏',
        duration: 5000
      });
    }
  }, [isWinner]);

  useEffect(() => {
    if (isLoser) {
      toast.error('You lost, please refresh the page!', {
        duration: 5000
      })
    }
  }, [isLoser, wordToGuess]);

  return (
    <div className={styles.hangmanContainer}>
      <h1>Hangman</h1>
      <p>Guess the word by clicking on the letters. You have 6 lives.</p>
      <button onClick={() => router.back()}>Go Back</button>
      <div className={styles.content}>
        <Toaster />
        {/* I want to know how many times I chose the wrong letter */}
        <HangmanDraw numberOfGuess={incorrectLetters.length} />
        <HangmanWord
          result={isLoser}
          guessLetters={guessLetters}
          wordToGuess={wordToGuess}
        />
        <div className={styles.selfStretch}>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetter={guessLetters.filter(letter => wordToGuess.includes(letter))}
            inactiveLetter={incorrectLetters}
            addGuessLetter={addGuessLetter}
          />
        </div>
      </div>
    </div>
  )
}

export default hangman