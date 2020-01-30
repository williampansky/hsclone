import React from 'react';
import YourBoardPlayerArea from './YourBoardPlayArea';
import css from '~/styles/game/components/board.scss';
import YourAvatar from './YourAvatar';

export default function YourBoard() {
  return (
    <div data-file="YourBoard" className={css.YourBoard}>
      <YourBoardPlayerArea />
      <YourAvatar src="https://i.ytimg.com/vi/lsQ0_c-y-gk/hqdefault.jpg" />
    </div>
  );
}
