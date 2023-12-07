import React from 'react';

import { useSudokuContext } from '@/context/SudokuContext';
import sudoku from '@/pages/wellbeing/games/sudoku/sudoku.module.css';
type NumbersProps = {
  onClickNumber: (number: string) => void;
};

/**
 * React component for the Number Selector in the Status Section.
 */
export const Numbers = ({ onClickNumber }: NumbersProps) => {
  let { numberSelected } = useSudokuContext();

  return (
    <div className={sudoku.statusNumbers}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
        if (numberSelected === number.toString()) {
          return (
            <div
              className={`${sudoku.statusNumber} ${sudoku['statusNumber--selected']}`}
              key={number}
              onClick={() => onClickNumber(number.toString())}
            >
              {number}
            </div>
          );
        } else {
          return (
            <div
              className={sudoku.statusNumber}
              key={number}
              onClick={() => onClickNumber(number.toString())}
            >
              {number}
            </div>
          );
        }
      })}
    </div>
  );
};
