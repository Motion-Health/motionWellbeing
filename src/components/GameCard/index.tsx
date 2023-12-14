import router from 'next/router';
import React from 'react';

import styles from './GameCard.module.css'; // Ensure the path is correct

export const GameCard = ({ game }) => {
  return (
    <div className={styles.card} onClick={() => router.push(game.link)}>
      <div className={styles.imageContainer}>
        <img src={game.image} className={styles.image} />
      </div>
      <div>
        <h3 className={styles.title}>{game.name}</h3>
        <p className={styles.description}>{game.description}</p>
        <p className={styles.instructions}>{game.instructions}</p>
      </div>
    </div>
  );
};
