import React from 'react';
import YourBoardPlayerArea from './YourBoardPlayArea';
import css from '~/styles/game/components/board.scss';

export default function YourBoard() {
  return (
    <div data-file="YourBoard" className={css.YourBoard}>
      <YourBoardPlayerArea />
    </div>
  );
}
