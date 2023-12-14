import router from 'next/router';
import React from 'react';

import styles from './GameCard.module.css'; // Ensure the path is correct

export const GameCard = ({ game }) => {
  return (
    <div className={styles.card} onClick={() => router.push(game.link)}>
      <div className={styles.imageContainer}>
        <img
          src={game.image}
          alt={`${game.name} image`}
          className={styles.image}
        />
      </div>
      <div>
        <h3 className={styles.title}>{game.name}</h3>
        <p className={styles.description}>{game.players}</p>
        <p className={styles.instructions}>
          <ul>
            {game.instructions.split('\n').map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};
