export const castWarycrySpell = (G, ctx, warcry, targetContext, target) => {
  const { id } = warcry;

  // clear warcryObject
  G.warcryObject[ctx.currentPlayer] = null;

  // prettier-ignore
  switch (id) {
    case 'CORE_001':  return ATTACK_WITH_CORE_001(G, ctx, targetContext, target);
    default:          return null;
  }
};

const ATTACK_WITH_CORE_001 = (G, ctx, targetContext, target) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  if (targetContext === 'player') {
    G.health[target] = G.health[target] - 1;
  }

  if (targetContext === 'minion') {
    G.boards[otherPlayer][target].minionData.health =
      G.boards[otherPlayer][target].minionData.health - 1;
  }

  // kill minion if its health <= 0 and reset states
  if (G.boards[otherPlayer][target].minionData.health <= 0) {
    G.boards[otherPlayer].splice(target, 1);
  }
};
