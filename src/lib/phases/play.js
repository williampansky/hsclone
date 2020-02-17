import { TurnOrder } from 'boardgame.io/core';
import boards from 'lib/state/boards';
import energy from 'lib/state/energy';
import drawCardAtStartOfTurn from 'lib/utils/draw-turn-start-card';
import winner from 'lib/state/winner';

const onBegin = (G, ctx) => {
  const PLAY_ORDER = G.turnOrder;
  const CURRENT_PLAYER = ctx.currentPlayer;
  const PREVIOUS_PLAYER = PLAY_ORDER.find(player => player !== CURRENT_PLAYER);

  // const YOUR_BOARD = G.boards[CURRENT_PLAYER];
  // const THEIR_BOARD = G.boards[PREVIOUS_PLAYER];

  energy.incrementTotal(G, CURRENT_PLAYER);
  energy.matchTotal(G, CURRENT_PLAYER);
  drawCardAtStartOfTurn(G, ctx);

  // for (let i = 0; i < G.boards[PREVIOUS_PLAYER].length; i++) {
  //   // enable canAttack on your preview board minions
  //   disableMinionCanAttack(G, PREVIOUS_PLAYER, i);
  // }

  for (let i = 0; i < G.boards[CURRENT_PLAYER].length; i++) {
    // disable canBeAttacked on your board minions
    boards.disableCanBeAttacked(G, CURRENT_PLAYER, i);

    // enable canAttack on your board minions
    boards.enableCanAttack(G, CURRENT_PLAYER, i);
  }

  // // enable canBeAttacked & disable canAttack on THEIR board slots
  // for (let i = 0; i < Object.keys(THEIR_BOARD).length; i++) {
  //   enableMinionCanBeAttacked(G, PREVIOUS_PLAYER, i);
  //   disableMinionCanAttack(G, PREVIOUS_PLAYER, i);
  // }

  // // disable canBeAttacked & enable canAttack on YOUR board slots
  // for (let i = 0; i < Object.keys(YOUR_BOARD).length; i++) {
  //   disableMinionCanBeAttacked(G, CURRENT_PLAYER, i);
  //   enableMinionCanAttack(G, CURRENT_PLAYER, i);
  // }

  // reset both player's interaction hover states
  G.hoveringCardIndex[0] = null;
  G.hoveringCardIndex[1] = null;

  // reset both player's selected card states
  G.selectedCardIndex[0] = null;
  G.selectedCardIndex[1] = null;
  G.selectedCardObject[0] = null;
  G.selectedCardObject[1] = null;

  // reset both player's selected minion states
  G.selectedMinionIndex[0] = null;
  G.selectedMinionIndex[1] = null;
  G.selectedMinionObject[0] = null;
  G.selectedMinionObject[1] = null;

  // reset both player's warcry states
  G.warcryObject[0] = null;
  G.warcryObject[1] = null;
};

const onEnd = (G, ctx) => {
  const { health, turnOrder } = G;
  const CURRENT_PLAYER = ctx.currentPlayer;
  const PREVIOUS_PLAYER = turnOrder.find(player => player !== CURRENT_PLAYER);

  const PLAYER0_HEALTH = health[turnOrder['0']];
  if (PLAYER0_HEALTH === 0) winner.set(G, turnOrder['0']);
  else winner.set(G, turnOrder['1']);

  // disable all minions canAttack
  for (let i = 0; i < G.boards[CURRENT_PLAYER].length; i++)
    boards.disableCanAttack(G, CURRENT_PLAYER, i);
  for (let i = 0; i < G.boards[PREVIOUS_PLAYER].length; i++)
    boards.disableCanAttack(G, PREVIOUS_PLAYER, i);

  // reset both player's interaction hover states
  G.hoveringCardIndex[0] = null;
  G.hoveringCardIndex[1] = null;

  // reset both player's selected card states
  G.selectedCardIndex[0] = null;
  G.selectedCardIndex[1] = null;
  G.selectedCardObject[0] = null;
  G.selectedCardObject[1] = null;

  // reset both player's selected minion states
  G.selectedMinionIndex[0] = null;
  G.selectedMinionIndex[1] = null;
  G.selectedMinionObject[0] = null;
  G.selectedMinionObject[1] = null;

  // reset both player's warcry states
  G.warcryObject[0] = null;
  G.warcryObject[1] = null;
};

export default {
  turn: {
    order: TurnOrder.CUSTOM_FROM('turnOrder'),
    onBegin: (G, ctx) => onBegin(G, ctx),
    onEnd: (G, ctx) => onEnd(G, ctx)
  }
};
