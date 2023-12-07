import React from 'react';

import sudoku from '@/pages/wellbeing/games/sudoku/sudoku.module.css';
type ModeProps = {
  mode: string;
  onClickMode: () => void;
};

/**
 * React component for the Mistakes Mode / Fast Mode
 * elements in the Status Section.
 */
export const Mode = (props: ModeProps) => {
  return (
    <div
      className={
        props.mode === 'mistakes'
          ? sudoku.statusActionMistakesMode
          : sudoku.statusActionFastMode
      }
    >
      <label
        className={
          props.mode === 'mistakes'
            ? sudoku.statusActionMistakesModeSwitch
            : sudoku.statusActionFastModeSwitch
        }
      >
        <input type="checkbox" />
        <span
          className={
            props.mode === 'mistakes'
              ? sudoku.statusActionMistakeModeSlider
              : sudoku.statusActionFastModeSlider
          }
          onClick={props.onClickMode}
        ></span>
      </label>
      <p className={sudoku.statusActionText}>
        {props.mode === 'mistakes' ? 'Mistakes Mode' : 'Fast Mode'}
      </p>
    </div>
  );
};
