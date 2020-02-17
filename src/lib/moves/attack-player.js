import boards from 'lib/state/boards';
import health from 'lib/state/health';
import selectMinion from 'lib/moves/select-minion';

/**
 * Attacks a player with the current player's selectedMinionObject.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 */
const attackPlayer = (G, ctx) => {
  const { selectedMinionIndex, selectedMinionObject, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  const PLAYER_BEING_ATTACKED = otherPlayer;
  const ATTACKING_MINION = selectedMinionObject[currentPlayer];
  const ATTACKING_MINION_INDEX = selectedMinionIndex[currentPlayer];
  // eject if ATTACKING_MINION can't attack
  if (ATTACKING_MINION && !ATTACKING_MINION.canAttack) return;

  // eject if a PLAYER_BEING_ATTACKED's minion has gaurd
  for (let i = 0; i < G.boards[otherPlayer].length; i++) {
    if (G.boards[otherPlayer][i] && G.boards[otherPlayer][i].hasGuard) return;
  }

  // Subtract `ATTACKING_MINION.currentAttack`
  // from PLAYER_BEING_ATTACKED's health value
  health.subtract(G, PLAYER_BEING_ATTACKED, ATTACKING_MINION.currentAttack);

  // disable ATTACKING_MINION's ability to attack
  boards.disableCanAttack(G, currentPlayer, ATTACKING_MINION_INDEX);

  // reset currentPlayer's selectedMinionIndex & selectedMinionObject value
  selectMinion(G, ctx);
};

export default attackPlayer;
