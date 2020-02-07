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

export const attackMinion = (G, ctx, slotNumber) => {};
