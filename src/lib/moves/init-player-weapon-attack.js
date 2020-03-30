import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerIsAttacking from 'lib/state/player-is-attacking';

/**
 * Sets `selectedMinionIndex` & `selectedMinionObject` of the current player.
 *
 * @param {{}} G
 * @param {{}} ctx
 */
const initPlayerWeaponAttack = (G, ctx) => {
  const { boards, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  const MINION_HAS_GUARD = boards[otherPlayer].find(slot => slot.hasGuard)
    ? true
    : false;

  playerIsAttacking.enable(G, currentPlayer);

  if (MINION_HAS_GUARD) {
    playerCanBeAttacked.disable(G, otherPlayer);
  } else if (!MINION_HAS_GUARD) {
    playerCanBeAttacked.enableByPlayer(G, otherPlayer);
  }

  G.boards[otherPlayer].forEach(slot => {
    if (slot.hasGuard === true) slot.canBeAttackedByPlayer = true;
    else if (MINION_HAS_GUARD) slot.canBeAttackedByPlayer = false;
    else slot.canBeAttackedByPlayer = true;
  });
};

export default initPlayerWeaponAttack;
