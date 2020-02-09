import React from 'react';
import avatars from '../../config/avatars.config';
import css from './board.module.scss';
import TheirAvatar from '../avatars/TheirAvatar';
import TheirBoardPlayerArea from './TheirBoardPlayArea';

export default function TheirBoard(props) {
  const { health } = props;
  // const theirHealth = useSelector(s => s.theirHealth);
  // const { username, hero, id } = useSelector(s => s.them);
  // const avatar = hero && avatars[hero.toLowerCase()];

  return (
    <div data-file="TheirBoard" className={css['their-board']}>
      <TheirAvatar health={health} src={avatars.mage} {...props} />
      <TheirBoardPlayerArea {...props} />
    </div>
  );
}
