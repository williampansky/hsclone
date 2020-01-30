import React from 'react';
import YourBoardPlayerArea from './YourBoardPlayArea';
import css from '~/styles/game/components/board.scss';
import YourAvatar from './YourAvatar';
import { useSelector } from 'react-redux';

export default function YourBoard() {
  const yourHealth = useSelector(s => s.yourHealth);

  return (
    <div data-file="YourBoard" className={css.YourBoard}>
      <YourBoardPlayerArea />

      <YourAvatar
        health={yourHealth}
        src="https://i.ytimg.com/vi/lsQ0_c-y-gk/hqdefault.jpg"
      />
    </div>
  );
}
