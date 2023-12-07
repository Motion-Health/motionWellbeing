import React from 'react';

import sudoku from '@/components/Games/Sudoku/sudoku.module.css';
type HeaderProps = {
  onClick: () => void;
};

/**
 * React component for the Header Section.
 */
export const Header = (props: HeaderProps) => {
  return (
    <header className={sudoku.header}>
      <h1>
        Su<span className={sudoku.headerGroupOne}>do</span>
        <span className={sudoku.headerGroupTwo}>ku</span>
      </h1>
      <h2 onClick={props.onClick}>New Game</h2>
    </header>
  );
};
