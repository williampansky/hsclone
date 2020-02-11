import React from 'react';
import css from './avatar.module.scss';
import { getCardByID } from '../../lib/utils/get-card-by-id';

export default function TheirAvatar({
  G,
  ctx,
  moves,
  events,
  reset,
  undo,
  redo,
  step,
  log,
  gameID,
  theirID,
  gameMetadata,
  isActive,
  isMultiplayer,
  isConnected,
  credentials,
  src
}) {
  const CURRENT_PLAYER = ctx.currentPlayer;
  const THEIR_HEALTH = G.health[theirID];
  const THEIR_BOARD = G.boards[theirID];

  const selectedCardIdFromHand =
    G.players[CURRENT_PLAYER] &&
    G.players[CURRENT_PLAYER].hand &&
    G.players[CURRENT_PLAYER].hand[G.selectedCardIndex[CURRENT_PLAYER]];
  const selectedCardObj = getCardByID(selectedCardIdFromHand);
  const selectedCardType = selectedCardObj && selectedCardObj.type;

  const selectedMinionObj = G.selectedMinionObject[CURRENT_PLAYER];
  const selectedMinionAtk = selectedMinionObj && selectedMinionObj.attack;
  // const selectedMinionIdx = THEIR_BOARD.find()
  // const atkMinionObj = G.boards[CURRENT_PLAYER][`slot${atkMinionIdx}`];

  const CARD_IS_MINION =
    G.selectedCardIndex[CURRENT_PLAYER] !== null &&
    selectedCardType === 'MINION';

  const CARD_IS_SPELL =
    G.selectedCardIndex[CURRENT_PLAYER] !== null &&
    selectedCardType === 'SPELL';

  const WARCRY_IS_ACTIVE = G.warcryObject[CURRENT_PLAYER] !== null;

  const CAN_BE_ATTACKED =
    isActive &&
    (G.selectedMinionIndex[CURRENT_PLAYER] !== null ||
      (G.selectedCardIndex[CURRENT_PLAYER] !== null && CARD_IS_SPELL) ||
      G.warcryObject[CURRENT_PLAYER]);
  // THEIR_BOARD['slot1'].hasGuard === false &&
  // THEIR_BOARD['slot2'].hasGuard === false &&
  // THEIR_BOARD['slot3'].hasGuard === false &&
  // THEIR_BOARD['slot4'].hasGuard === false &&
  // THEIR_BOARD['slot5'].hasGuard === false &&
  // THEIR_BOARD['slot6'].hasGuard === false &&
  // THEIR_BOARD['slot7'].hasGuard === false;

  function handleClick() {
    if (!CAN_BE_ATTACKED || CARD_IS_MINION) return;

    if (CARD_IS_SPELL)
      return moves.attackPlayerWithSpell(G.selectedCardIndex[CURRENT_PLAYER]);

    if (WARCRY_IS_ACTIVE)
      return moves.castWarycrySpell(G.warcryObject[CURRENT_PLAYER], theirID);

    return moves.attackPlayer(theirID, selectedMinionAtk);
  }

  return (
    <div
      data-file="TheirAvatar"
      className={[
        css['player-avatar'],
        css['their-avatar'],
        CAN_BE_ATTACKED ? css['player-avatar--can_be_attacked'] : ''
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
