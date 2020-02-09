import { subtract } from 'mathjs';

export const disableMinionCanAttack = (G, player, slotNumber) => {
  if (G.boards[player][`slot${slotNumber}`].minionData === null) return;
  return (G.boards[player][`slot${slotNumber}`].canAttack = false);
};

export const enableMinionCanAttack = (G, player, slotNumber) => {
  if (G.boards[player][`slot${slotNumber}`].minionData === null) return;
  return (G.boards[player][`slot${slotNumber}`].canAttack = true);
};

export const disableMinionCanBeAttacked = (G, player, slotNumber) => {
  if (G.boards[player][`slot${slotNumber}`].minionData === null) return;
  return (G.boards[player][`slot${slotNumber}`].canBeAttacked = false);
};

export const enableMinionCanBeAttacked = (G, player, slotNumber) => {
  if (G.boards[player][`slot${slotNumber}`].minionData === null) return;
  return (G.boards[player][`slot${slotNumber}`].canBeAttacked = true);
};

export const selectMinionForAttack = (G, ctx, slotNumber) => {
  Number(ctx.currentPlayer) === 0
    ? (G.selectedMinionIndexObject[0] = slotNumber)
    : (G.selectedMinionIndexObject[1] = slotNumber);
};

// prettier-ignore
export const attackMinion = (G, ctx, slotNumber) => {
  const { selectedMinionIndexObject, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const selectedMinion = selectedMinionIndexObject[currentPlayer];
  const MINION_ATTACKING = G.boards[currentPlayer][`slot${selectedMinion}`];
  const MINION_BEING_ATTACKED = G.boards[otherPlayer][`slot${slotNumber}`];

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
  G.boards[currentPlayer][`slot${selectedMinion}`].minionData.health = newAttackedHealth;
  
  // subtract attacking minion's attack value from the minion being attacked's health value.
  G.boards[otherPlayer][`slot${slotNumber}`].minionData.health = newBeingAttackedHealth;

  // disable MINION_ATTACKING's ability to attack
  disableMinionCanAttack(G, currentPlayer, selectedMinion);

  // reset currentPlayer's selectedMinionIndexObject value
  selectMinionForAttack(G, ctx, null);

  // kill any minions with health <= 0
  if (G.boards[currentPlayer][`slot${selectedMinion}`].minionData.health <= 0)
    G.boards[currentPlayer][`slot${selectedMinion}`].minionData = null;
  if (G.boards[otherPlayer][`slot${slotNumber}`].minionData.health <= 0)
    G.boards[otherPlayer][`slot${slotNumber}`].minionData = null;
};

export const attackPlayer = (G, ctx, player, attack) => {
  const { selectedMinionIndexObject } = G;
  const { currentPlayer } = ctx;
  const selectedMinion = selectedMinionIndexObject[currentPlayer];

  // disable MINION_ATTACKING's ability to attack
  disableMinionCanAttack(G, currentPlayer, selectedMinion);

  // subtract attack from player's health value
  const newHealth = subtract(G.health[player], attack);
  G.health[player] = newHealth;
};
