import React from 'react';
import css from './avatar.module.scss';

export default function TheirAvatar(props) {
  const { G, ctx, moves, allCards, isActive, src } = props;
  const PLAY_ORDER = G.turnOrder;
  const CURRENT_PLAYER = ctx.currentPlayer;
  const PREVIOUS_PLAYER = PLAY_ORDER.find(player => player !== CURRENT_PLAYER);

  const THEIR_HEALTH = G.health[PREVIOUS_PLAYER];

  const atkMinionIdx = G.selectedMinionIndexObject[CURRENT_PLAYER];
  const atkMinionObj = G.boards[CURRENT_PLAYER][`slot${atkMinionIdx}`];
  const atkMinionsAtk = atkMinionObj && atkMinionObj.minionData.attack;

  // console.log(atkMinionIdx, atkMinionObj, atkMinionsAtk);

  const CAN_BE_ATTACKED =
    isActive && G.selectedMinionIndexObject[CURRENT_PLAYER] !== null;

  function handleClick() {
    if (!CAN_BE_ATTACKED) return;
    console.log('PREVIOUS_PLAYER', PREVIOUS_PLAYER);
    moves.attackPlayer(PREVIOUS_PLAYER, atkMinionsAtk);
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
