import React from 'react';
import css from './board.module.scss';
import TheirAvatar from '../avatars/TheirAvatar';
import TheirBoardPlayerArea from './TheirBoardPlayArea';
import avatars from '../../config/avatars.config';

export default function TheirBoard(props) {
  const { G, ctx, playerID } = props;
  const { health, playerClass } = G;
  const THEIR_NUMBER = Number(playerID) === 0 ? 1 : 0;
  const PLAYER_CLASS = playerClass[THEIR_NUMBER];

  return (
    <div data-file="TheirBoard" className={css['their-board']}>
      <TheirAvatar health={health} src={avatars[PLAYER_CLASS]} {...props} />
      <TheirBoardPlayerArea {...props} />
    </div>
  );
}
