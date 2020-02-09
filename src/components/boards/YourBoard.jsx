import React from 'react';
import YourBoardPlayerArea from './YourBoardPlayArea';
import css from './board.module.scss';
import YourAvatar from '../avatars/YourAvatar';
import avatars from '../../config/avatars.config';

export default function YourBoard(props) {
  const { G, ctx, playerID } = props;
  const { health, playerClass } = G;
  const PLAYER_CLASS = playerClass[playerID];

  return (
    <div data-file="YourBoard" className={css['your-board']}>
      <YourBoardPlayerArea {...props} />
      <YourAvatar health={health} src={avatars[PLAYER_CLASS]} {...props} />
    </div>
  );
}
