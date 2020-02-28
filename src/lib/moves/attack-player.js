import boards from 'lib/state/boards';
import health from 'lib/state/health';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import selectMinion from 'lib/moves/select-minion';
import playerShieldPoints from 'lib/state/player-shield-points';

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

  // remove shieldPoints first, then health
  if (G.playerShieldPoints[otherPlayer] !== 0) {
    const preDIFF = Math.abs(
      G.playerShieldPoints[otherPlayer] - ATTACKING_MINION.currentAttack
    );

    playerShieldPoints.remove(G, otherPlayer, ATTACKING_MINION.currentAttack);
    if (G.playerShieldPoints[otherPlayer] === 0)
      health.subtract(G, PLAYER_BEING_ATTACKED, preDIFF);
  } else {
    // Subtract `ATTACKING_MINION.currentAttack`
    // from PLAYER_BEING_ATTACKED's health value
    health.subtract(G, PLAYER_BEING_ATTACKED, ATTACKING_MINION.currentAttack);
  }

  // disable ATTACKING_MINION's ability to attack
  boards.disableCanAttack(G, currentPlayer, ATTACKING_MINION_INDEX);

  // reset currentPlayer's selectedMinionIndex & selectedMinionObject value
  selectMinion(G, ctx);

  // then disable opponent minions canBeAttacked
  boards.disableAllCanBeAttacked(G, otherPlayer);

  // disable all playerCanBeAttacked
  playerCanBeAttacked.disable(G, '0');
  playerCanBeAttacked.disable(G, '1');

  // disable all playerCanBeHealed
  playerCanBeHealed.disable(G, '0');
  playerCanBeHealed.disable(G, '1');
};

export default attackPlayer;
