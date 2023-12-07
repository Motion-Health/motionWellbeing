import React from 'react';

import { useSudokuContext } from '@/context/SudokuContext';
import sudoku from '@/pages/wellbeing/games/sudoku/sudoku.module.css';

type DifficultyProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

/**
 * React component for the Difficulty Selector.
 */
export const Difficulty = (props: DifficultyProps) => {
  let { difficulty } = useSudokuContext();

  return (
    <div className={sudoku.statusDifficulty}>
      <span className={sudoku.statusDifficultyText}>
        Difficulty:&nbsp;&nbsp;
      </span>
      <select
        name="status__difficulty-select"
        className={sudoku.statusDifficultySelect}
        defaultValue={difficulty}
        onChange={props.onChange}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
};
