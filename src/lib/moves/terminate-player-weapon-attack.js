import boards from 'lib/state/boards';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerIsAttacking from 'lib/state/player-is-attacking';

/**
 * Disables currentPlayer's playerIsAttacking boolean.
 * @param {{}} G
 * @param {{}} ctx
 */
const terminatePlayerWeaponAttack = (G, ctx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  playerIsAttacking.disable(G, currentPlayer);
  playerCanBeAttacked.disable(G, otherPlayer);
  boards.disableAllCanBeAttacked(G, otherPlayer);
};

export default terminatePlayerWeaponAttack;
