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
