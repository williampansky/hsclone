import React from 'react';
import css from './avatar.module.scss';

export default function TheirAvatar(props) {
  const { G, ctx, moves, playerID, isActive, src } = props;
  const CURRENT_PLAYER = ctx.currentPlayer;
  const THEIR_NUMBER = Number(playerID) === 0 ? 1 : 0;

  const THEIR_HEALTH = G.health[THEIR_NUMBER];

  const atkMinionIdx = G.selectedMinionIndexObject[CURRENT_PLAYER];
  const atkMinionObj = G.boards[CURRENT_PLAYER][`slot${atkMinionIdx}`];
  const atkMinionsAtk = atkMinionObj && atkMinionObj.minionData.attack;

  const CAN_BE_ATTACKED =
    isActive &&
    (G.selectedMinionIndexObject[CURRENT_PLAYER] !== null ||
      G.selectedCardIndexObject[CURRENT_PLAYER] !== null);

  function handleClick() {
    if (!CAN_BE_ATTACKED) return;
    moves.attackPlayer(THEIR_NUMBER, atkMinionsAtk);
  }

  return (
    <div
      data-file="TheirAvatar"
      className={[
        css['player-avatar'],
        css['their-avatar'],
        CAN_BE_ATTACKED && css['player-avatar--can_be_attacked']
      ].join(' ')}
      onClick={() => handleClick()}
    >
      <div className={[css['player-health']].join(' ')}>{THEIR_HEALTH}</div>
      <div className={css['avatar-image-wrapper']}>
        {src && (
          <div
            className={css['avatar-image']}
            style={{ backgroundImage: `url(${src})` }}
          />
        )}
      </div>
    </div>
  );
}

TheirAvatar.defaultProps = {
  backgroundColor: 'white'
};
