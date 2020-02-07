import { TurnOrder } from 'boardgame.io/core';
import { deincrementDeckCount, incrementHandCount } from '../moves/card-moves';
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
  drawCardAtStartOfCurrentPlayersTurn(G, ctx);

  // enable canBeAttacked & disable canAttack on THEIR board slots
  for (let i = 0; i < G.boards[PREVIOUS_PLAYER].length; i++) {
    enableMinionCanBeAttacked(G, PREVIOUS_PLAYER, i);
    disableMinionCanAttack(G, PREVIOUS_PLAYER, i);
  }

  // disable canBeAttacked & enable canAttack on YOUR board slots
  for (let i = 0; i < G.boards[CURRENT_PLAYER].length; i++) {
    disableMinionCanBeAttacked(G, CURRENT_PLAYER, i);
    enableMinionCanAttack(G, CURRENT_PLAYER, i);
  }
};

export default {
  turn: {
    order: TurnOrder.CUSTOM_FROM('turnOrder'),
    onBegin: (G, ctx) => onBegin(G, ctx)
  }
};
