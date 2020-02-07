import { TurnOrder } from 'boardgame.io/core';
import { deincrementDeck, incrementHand } from '../moves/card-moves';
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
  if (G.players[ctx.currentPlayer].hand.length <= 9) {
    deincrementDeck(G, ctx, ctx.currentPlayer); // set counts[player].deck
    incrementHand(G, ctx, ctx.currentPlayer); // set counts[player].hand

    G.players[ctx.currentPlayer].hand.push(
      G.players[ctx.currentPlayer].deck.splice(0, 1)[0]
    );
  } else {
    // if you are holding ten cards, your next card will be discarded
    G.playedCards[ctx.currentPlayer].push(
      G.players[ctx.currentPlayer].deck.splice(0, 1)[0]
    );
  }

  // enable/disable their board minions
  for (let i = 0; i < G.boards[PREVIOUS_PLAYER].length; i++) {
    // enable canBeAttacked on their board minions
    if (G.boards[PREVIOUS_PLAYER][`slot${i}`].canBeAttacked === false)
      enableMinionCanBeAttacked(G, PREVIOUS_PLAYER, [`slot${i}`]);

    // disable canAttack on their board minions
    if (G.boards[PREVIOUS_PLAYER][`slot${i}`].canAttack === true)
      disableMinionCanAttack(G, PREVIOUS_PLAYER, [`slot${i}`]);
  }

  // enable/disable your board minions
  for (let i = 0; i < G.boards[ctx.currentPlayer].length; i++) {
    // disable canBeAttacked on your board minions
    if (G.boards[ctx.currentPlayer][`slot${i}`].canBeAttacked === true)
      disableMinionCanBeAttacked(G, ctx.currentPlayer, [`slot${i}`]);

    // enable canAttack on your board minions
    if (G.boards[ctx.currentPlayer][`slot${i}`].canAttack === false)
      enableMinionCanAttack(G, ctx.currentPlayer, [`slot${i}`]);
  }
};

export default {
  turn: {
    order: TurnOrder.CUSTOM_FROM('turnOrder'),
    onBegin: (G, ctx) => onBegin(G, ctx)
  }
};
