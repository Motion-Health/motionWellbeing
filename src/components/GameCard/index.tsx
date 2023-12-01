import React from 'react';

import styles from './GameCard.module.css'; // Ensure the path is correct

export const GameCard = ({ game }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{game.name}</h3>
      <p className={styles.description}>{game.description}</p>
      <p className={styles.instructions}>{game.instructions}</p>
      <a href={game.link} className={styles.link}>
        Play Game
      </a>
    </div>
  );
};
