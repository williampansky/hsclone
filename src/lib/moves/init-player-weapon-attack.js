import playerIsAttacking from 'lib/state/player-is-attacking';
import boards from 'lib/state/boards';

/**
 * Sets `selectedMinionIndex` & `selectedMinionObject` of the current player.
 *
 * @param {{}} G
 * @param {{}} ctx
 */
const initPlayerWeaponAttack = (G, ctx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  playerIsAttacking.enable(G, currentPlayer);
  boards.determineAttackTargets(G, otherPlayer);
};

export default initPlayerWeaponAttack;
