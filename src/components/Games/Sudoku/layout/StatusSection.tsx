import React from 'react';

import sudoku from '@/components/Games/Sudoku/sudoku.module.css';

import { Action } from '../Action';
import { Difficulty } from '../Difficulty';
import { Mode } from '../Mode';
import { Numbers } from '../Numbers';
import { Timer } from '../Timer';
type StatusSectionProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickNumber: (number: string) => void;
  onClickUndo: () => void;
  onClickErase: () => void;
  onClickHint: () => void;
  onClickMistakesMode: () => void;
  onClickFastMode: () => void;
};

/**
 * React component for the Status Section.
 */
export const StatusSection = (props: StatusSectionProps) => {
  return (
    <section className={sudoku.status}>
      <Difficulty onChange={props.onChange} />
      <Timer />
      <Numbers onClickNumber={(number) => props.onClickNumber(number)} />
      <div className={sudoku.statusActions}>
        <Action action="undo" onClickAction={props.onClickUndo} />
        <Action action="erase" onClickAction={props.onClickErase} />
        <Action action="hint" onClickAction={props.onClickHint} />
        <Mode mode="mistakes" onClickMode={props.onClickMistakesMode} />
        <Mode mode="fast" onClickMode={props.onClickFastMode} />
      </div>
    </section>
  );
};
