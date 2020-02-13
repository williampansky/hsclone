import { subtract } from 'mathjs';
import {
  disableMinionCanAttack,
  selectAttackingMinion
} from '../moves/minion-moves';
import { subtractFromMinionHealth } from '../minions/minions.health';

export const attackMinion = (G, ctx, index) => {
  const { boards, selectedMinionIndex, selectedMinionObject, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  const ATTACKING_MINION = selectedMinionObject[currentPlayer];
  const ATTACKING_MINION_INDEX = selectedMinionIndex[currentPlayer];
  const MINION_BEING_ATTACKED = boards[otherPlayer][index];
  const MINION_BEING_ATTACKED_INDEX = boards[otherPlayer][index];

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
  if (boards[currentPlayer][ATTACKING_MINION_INDEX].minionData.health <= 0) {
    boards[currentPlayer].splice(ATTACKING_MINION_INDEX, 1);
  }

  if (boards[otherPlayer][index].minionData.health <= 0) {
    boards[otherPlayer].splice(index, 1);
  }
};
