import React from "react";

import sudoku from "@/components/Games/Sudoku/sudoku.module.css";
import { useSudokuContext } from "@/context/SudokuContext";

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
