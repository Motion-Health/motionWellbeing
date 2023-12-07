import React from 'react';

import sudoku from '@/pages/wellbeing/games/sudoku/sudoku.module.css';
/**
 * React component for the Footer Section.
 */
export const Footer = () => {
  return (
    <footer className={sudoku.footer}>
      <p>
        &#169; 2020 Amith Raravi - source code on{' '}
        <a href="https://github.com/raravi/sudoku">Github</a>
      </p>
    </footer>
  );
};
