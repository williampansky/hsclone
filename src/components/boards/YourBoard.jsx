import React from 'react';
import YourBoardPlayerArea from '../YourBoardPlayArea';
import css from './board.module.scss';
import YourAvatar from '../YourAvatar';
import avatars from '../../config/avatars.config';

export default function YourBoard({ avatar, health }) {
  // const yourHealth = useSelector(s => s.yourHealth);
  // const { username, hero, id } = useSelector(s => s.you);
  // const avatar = hero && avatars[hero.toLowerCase()];

  return (
    <div data-file="YourBoard" className={css['your-board']}>
      <YourBoardPlayerArea />
      <YourAvatar health={health} />
    </div>
  );
}
