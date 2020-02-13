import {
  disableMinionCanAttack,
  selectAttackingMinion
} from '../moves/minion-moves';
import {
  subtractFromMinionHealth,
  killMinionIfHealthReachesZero
} from '../minions/minions.health';

export const attackMinionWithMinion = (G, ctx, index) => {
  const { boards, selectedMinionIndex, selectedMinionObject, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  const ATTACKING_MINION = selectedMinionObject[currentPlayer];
  const ATTACKING_MINION_INDEX = selectedMinionIndex[currentPlayer];
  if (ATTACKING_MINION && !ATTACKING_MINION.canAttack) return;

  const MINION_BEING_ATTACKED = boards[otherPlayer][index];
  const MINION_BEING_ATTACKED_INDEX = index;
  if (MINION_BEING_ATTACKED && !MINION_BEING_ATTACKED.canBeAttacked) return;

  // Subtract `ATTACKING_MINION.currentAttack`
  // from MINION_BEING_ATTACKED_INDEX's currentHealth value
  subtractFromMinionHealth(
    G,
    otherPlayer,
    MINION_BEING_ATTACKED_INDEX,
    ATTACKING_MINION.currentAttack
  );

  // Subtract `MINION_BEING_ATTACKED.currentAttack`
  // from ATTACKING_MINION_INDEX's currentHealth value
  subtractFromMinionHealth(
    G,
    currentPlayer,
    ATTACKING_MINION_INDEX,
    MINION_BEING_ATTACKED.currentAttack
  );

  // disable ATTACKING_MINION's ability to attack
  disableMinionCanAttack(G, currentPlayer, ATTACKING_MINION_INDEX);

  // reset currentPlayer's selectedMinionIndex & selectedMinionObject value
  selectAttackingMinion(G, ctx, null, null);

  // kill ANY minions with health <= 0 and reset states
  killMinionIfHealthReachesZero(G, currentPlayer, ATTACKING_MINION_INDEX);
  killMinionIfHealthReachesZero(G, otherPlayer, MINION_BEING_ATTACKED_INDEX);
};
