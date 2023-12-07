import React, { useEffect, useState } from 'react';

import { GameWindow } from '@/components/GameWindow';
import mainTheme from '@/styles/theme.module.css';

import styles from './colourGame.module.css';
// Dynamically import the Snake component with SSR disabled

let overlayStyle = {
  visibility: 'hidden',
  opacity: '0%',
};

let modalStyle = {
  transform: 'translate(0%, 0%)',
};

const ColourGame = () => {
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState('');
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    gameState === 'next level' && setLevel(level + 1);

    return () => {
      setGameState('');
    };
  }, [gameState, level]);

  useEffect(() => {
    if (gameState === 'game over') {
      overlayStyle = {
        opacity: '100%',
      };
      modalStyle = {
        transform: 'translate(0%, 50%)',
      };
    }

    return () => {
      overlayStyle = {
        visibility: 'hidden',
        opacity: '0%',
      };

      modalStyle = {
        transform: 'translate(0%, 0%)',
      };
    };
  }, [gameState]);

  useEffect(() => {
    score > highestScore && setHighestScore(score);
  }, [score, highestScore]);

  const resetGame = () => {
    setGameState('new game');
    setScore(0);
    setLevel(1);
  };

  const handleResume = () => {
    // Code to resume the game
    console.log('Resuming game');
  };

  const handleRestart = () => {
    // Code to restart the game
    console.log('Restarting game');
  };
  const game = {
    name: 'Colour Game',
    description: 'For each level only pick the colour once',
    instructions: 'For each level only pick the colour once.',
  };
  return (
    <>
      <GameWindow
        game={game}
        onRestart={handleRestart}
        onResume={handleResume}
      />

      <header>
        <Stats level={level} score={score} highestScore={highestScore} />
      </header>
      <main className={styles.center}>
        <Cards
          level={level}
          gameState={gameState}
          setGameState={setGameState}
          setScore={setScore}
          score={score}
        />
      </main>
      <GameOver
        highestScore={highestScore}
        overlayStyle={overlayStyle}
        modalStyle={modalStyle}
        resetGame={resetGame}
      />
    </>
  );
};

function GameOver({ highestScore, overlayStyle, modalStyle, resetGame }) {
  return (
    <div className={styles.overlay} style={overlayStyle}>
      <div className={styles.gameOverModal} style={modalStyle}>
        <h2>You lost...</h2>
        <h3>Higherst Score: {highestScore}</h3>
        <p>You clicked the same colour twice.</p>
        <button
          className={`${mainTheme.smallButton} ${mainTheme.button}`}
          onClick={resetGame}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

function Stats({ level, score, highestScore }) {
  return (
    <div className={styles.stats}>
      <div>
        <h2>Level: {level}</h2>
        <h2>Highest Score: {highestScore}</h2>
      </div>
      <div className={styles.score}>
        <h1>Score: {score}</h1>
      </div>
      <hr />
    </div>
  );
}

function Card({ hexCode, name, handleClick }) {
  return (
    <div className={styles.card} data-color={hexCode} onClick={handleClick}>
      <div className={styles.color} style={{ backgroundColor: hexCode }}></div>
      <p className={styles.colorText} style={{ color: hexCode }}>
        {name}
      </p>
    </div>
  );
}

const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));

const shuffleArray = (arr) => {
  let j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
};

function Cards({ level, gameState, setGameState, setScore, score }) {
  const [colorsArray, setColorsArray] = useState([]);

  const generateColorsArray = async (level) => {
    let newColors = [];
    let previousRGBs = [];
    for (let i = 0; i < level + 3; i++) {
      let r = randomBetween(0, 254);
      let g = randomBetween(0, 254);
      let b = randomBetween(0, 254);
      let rgb = `${r},${g},${b}`;
      while (previousRGBs.includes(rgb)) {
        r = randomBetween(0, 254);
        g = randomBetween(0, 254);
        b = randomBetween(0, 254);
        rgb = `${r},${g},${b}`;
      }
      previousRGBs.push(rgb);
      const response = await fetch(
        `https://www.thecolorapi.com/id?rgb=${r},${g},${b}`
      );
      const data = await response.json();
      newColors = [
        ...newColors,
        { hex: data.hex.value, name: data.name.value, isClicked: false },
      ];
    }
    setColorsArray(newColors);
  };

  const handleCardClick = (e) => {
    const hexCode = e.currentTarget.dataset.color;
    const array = [...colorsArray];
    array.map((color) => {
      if (color.hex === hexCode) {
        if (color.isClicked) {
          setGameState('game over');
        } else {
          color.isClicked = true;
          setScore(score + 1);
        }
      }
    });
    setColorsArray(shuffleArray(array));
    checkIfAllAreClicked() && setGameState('next level');
  };

  const checkIfAllAreClicked = () => {
    for (let i = 0; i < colorsArray.length; i++) {
      if (!colorsArray[i].isClicked) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    generateColorsArray(level);
  }, [level]);

  useEffect(() => {
    gameState === 'new game' && generateColorsArray(level);

    return () => {
      setGameState('');
    };
  }, [gameState, level, setGameState]);

  return (
    <div className={styles.cardsContainer}>
      {colorsArray.map((color) => {
        return (
          <Card
            key={color.hex}
            hexCode={color.hex}
            name={color.name}
            handleClick={handleCardClick}
          />
        );
      })}
    </div>
  );
}

export default ColourGame;
