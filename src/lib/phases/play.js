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

  // draw a card every turn; you can hold a max of ten cards at a time.
  if (G.players[CURRENT_PLAYER].hand.length <= 9) {
    deincrementDeckCount(G, CURRENT_PLAYER); // set counts[player].deck
    incrementHandCount(G, CURRENT_PLAYER); // set counts[player].hand

    G.players[CURRENT_PLAYER].hand.push(
      G.players[CURRENT_PLAYER].deck.splice(0, 1)[0]
    );
  } else {
    // if you are holding ten cards, your next card will be discarded
    G.playedCards[CURRENT_PLAYER].push(
      G.players[CURRENT_PLAYER].deck.splice(0, 1)[0]
    );
  }

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
