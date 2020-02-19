import boards from 'lib/state/boards';
import selectMinion from 'lib/moves/select-minion';

/**
 * Attacks a minion (index) with the current player's selectedMinionObject.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 */
const attackMinion = (G, ctx, index) => {
  const { selectedMinionIndex, selectedMinionObject, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  const ATTACKING_MINION = selectedMinionObject[currentPlayer];
  const ATTACKING_MINION_INDEX = selectedMinionIndex[currentPlayer];
  // eject if ATTACKING_MINION can't attack
  if (ATTACKING_MINION && !ATTACKING_MINION.canAttack) return;

  const MINION_BEING_ATTACKED = G.boards[otherPlayer][index];
  const MINION_BEING_ATTACKED_INDEX = index;
  // eject if MINION_BEING_ATTACKED can't be attacked
  if (MINION_BEING_ATTACKED && !MINION_BEING_ATTACKED.canBeAttacked) return;

  // Subtract `ATTACKING_MINION.currentAttack`
  // from MINION_BEING_ATTACKED_INDEX's currentHealth value
  boards.subtractFromMinionHealth(
    G,
    otherPlayer,
    MINION_BEING_ATTACKED_INDEX,
    ATTACKING_MINION.currentAttack
  );

  // Subtract `MINION_BEING_ATTACKED.currentAttack`
  // from ATTACKING_MINION_INDEX's currentHealth value
  boards.subtractFromMinionHealth(
    G,
    currentPlayer,
    ATTACKING_MINION_INDEX,
    MINION_BEING_ATTACKED.currentAttack
  );

  // disable ATTACKING_MINION's ability to attack
  boards.disableCanAttack(G, currentPlayer, ATTACKING_MINION_INDEX);

  // reset currentPlayer's selectedMinionIndex & selectedMinionObject value
  selectMinion(G, ctx);

  // kill ANY minions with health <= 0 and reset states
  boards.killMinionIfHealthReachesZero(
    G,
    currentPlayer,
    ATTACKING_MINION_INDEX
  );
  boards.killMinionIfHealthReachesZero(
    G,
    otherPlayer,
    MINION_BEING_ATTACKED_INDEX
  );
};

export default attackMinion;
