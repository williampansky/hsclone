import { TurnOrder } from 'boardgame.io/core';
import { drawSingleCardAtStartOfCurrentPlayersTurn } from '../moves/card-moves';
import {
  incrementTotalEnergy,
  matchCurrentWithTotalEnergy
} from '../moves/energy-moves';
import {
  disableMinionCanAttack,
  enableMinionCanAttack,
  disableMinionCanBeAttacked,
  enableMinionCanBeAttacked
} from '../moves/minion-moves';

const onBegin = (G, ctx) => {
  const PLAY_ORDER = G.turnOrder;
  const CURRENT_PLAYER = ctx.currentPlayer;
  const PREVIOUS_PLAYER = PLAY_ORDER.find(player => player !== CURRENT_PLAYER);

  incrementTotalEnergy(G, CURRENT_PLAYER);
  matchCurrentWithTotalEnergy(G, CURRENT_PLAYER);
  drawSingleCardAtStartOfCurrentPlayersTurn(G, ctx);

  // enable canBeAttacked & disable canAttack on THEIR board slots
  for (let i = 0; i < Object.keys(G.boards[PREVIOUS_PLAYER]).length; i++) {
    enableMinionCanBeAttacked(G, PREVIOUS_PLAYER, i + 1);
    disableMinionCanAttack(G, PREVIOUS_PLAYER, i + 1);
  }

  // disable canBeAttacked & enable canAttack on YOUR board slots
  for (let i = 0; i < Object.keys(G.boards[CURRENT_PLAYER]).length; i++) {
    disableMinionCanBeAttacked(G, CURRENT_PLAYER, i + 1);
    enableMinionCanAttack(G, CURRENT_PLAYER, i + 1);
  }
};

export default {
  turn: {
    order: TurnOrder.CUSTOM_FROM('turnOrder'),
    onBegin: (G, ctx) => onBegin(G, ctx)
  }
};
