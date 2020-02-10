import { subtract } from 'mathjs';
import { initCoreWarcry } from '../warcrys/core.warcrys';

export const disableMinionCanAttack = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].canAttack = false);
};

export const enableMinionCanAttack = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].canAttack = true);
};

export const disableMinionCanBeAttacked = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].canBeAttacked = false);
};

export const enableMinionCanBeAttacked = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].canBeAttacked = true);
};

export const disableMinionHasGuard = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].hasGuard = false);
};

export const enableMinionHasGuard = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].hasGuard = true);
};

export const selectMinionForAttack = (G, ctx, card, index) => {
  selectAttackingMinionIndex(G, ctx, index);
  selectAttackingMinionObject(G, ctx, card);
};

export const selectAttackingMinionIndex = (G, ctx, slotNumber) => {
  Number(ctx.currentPlayer) === 0
    ? (G.selectedMinionIndex[0] = slotNumber)
    : (G.selectedMinionIndex[1] = slotNumber);
};

export const selectAttackingMinionObject = (G, ctx, minion) => {
  Number(ctx.currentPlayer) === 0
    ? (G.selectedMinionObject[0] = minion)
    : (G.selectedMinionObject[1] = minion);
};

export const initMinionWarcry = (G, ctx, slotNumber, cardId) => {
  return initCoreWarcry(G, ctx, slotNumber, cardId);
};

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
  selectMinionForAttack(G, ctx, null, null);

  // kill ANY minions with health <= 0 and reset states
  if (G.boards[currentPlayer][selectedMinion].minionData.health <= 0) {
    G.boards[currentPlayer].splice(selectedMinion, 1);
  }

  if (G.boards[otherPlayer][index].minionData.health <= 0) {
    G.boards[otherPlayer].splice(index, 1);
  }
};

export const attackPlayer = (G, ctx, player, attack) => {
  const { selectedMinionIndex } = G;
  const { currentPlayer } = ctx;

  const selectedMinion = selectedMinionIndex[currentPlayer];
  if (selectedMinion === null) return;

  // disable MINION_ATTACKING's ability to attack
  disableMinionCanAttack(G, currentPlayer, selectedMinion);

  // reset currentPlayer's selectedMinionIndex value
  selectMinionForAttack(G, ctx, null, null);

  // subtract attack from player's health value
  const newHealth = subtract(G.health[player], attack);
  G.health[player] = newHealth;
};
