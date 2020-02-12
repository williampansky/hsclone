import { subtract } from 'mathjs';
import {
  disableMinionCanAttack,
  selectAttackingMinion
} from '../moves/minion-moves';

// prettier-ignore
export const attackMinion = (G, ctx, index) => {
  const { selectedMinionIndex, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const selectedMinion = selectedMinionIndex[currentPlayer];
  const MINION_ATTACKING = G.boards[currentPlayer][index];
  const MINION_BEING_ATTACKED = G.boards[otherPlayer][index];

  // MINION_ATTACKING attack & health
  const attackingAttack = MINION_ATTACKING.minionData.attack;
  const attackingHealth = MINION_ATTACKING.minionData.health;

  // MINION_BEING_ATTACKED attack & health
  const beingAttackedAttack = MINION_BEING_ATTACKED.minionData.attack;
  const beingAttackedHealth = MINION_BEING_ATTACKED.minionData.health;

  // new MINION_ATTACKING health value after subtracting `beingAttackedAttack`
  const newAttackedHealth = subtract(attackingHealth, beingAttackedAttack);

  // new MINION_BEING_ATTACKED health value after subtracting `attackingAttack`
  const newBeingAttackedHealth = subtract(beingAttackedHealth, attackingAttack);
  
  // subtract minion being attacked's attack value from the attacking minion's health value.
  G.boards[currentPlayer][selectedMinion].minionData.health = newAttackedHealth;
  
  // subtract attacking minion's attack value from the minion being attacked's health value.
  G.boards[otherPlayer][index].minionData.health = newBeingAttackedHealth;

  // disable MINION_ATTACKING's ability to attack
  disableMinionCanAttack(G, currentPlayer, selectedMinion);

  // reset currentPlayer's selectedMinionIndex value
  selectAttackingMinion(G, ctx, null, null);

  // kill ANY minions with health <= 0 and reset states
  if (G.boards[currentPlayer][selectedMinion].minionData.health <= 0) {
    G.boards[currentPlayer].splice(selectedMinion, 1);
  }

  if (G.boards[otherPlayer][index].minionData.health <= 0) {
    G.boards[otherPlayer].splice(index, 1);
  }
};
