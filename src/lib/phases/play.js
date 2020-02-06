import { TurnOrder } from 'boardgame.io/core';
import { deincrementDeck, incrementHand } from '../moves/card-moves';
import {
  disableMinionCanAttack,
  enableMinionCanAttack,
  disableMinionCanBeAttacked,
  enableMinionCanBeAttacked
} from '../moves/minion-moves';

const onBegin = (G, ctx) => {
  const players = G.turnOrder;
  const currentPlayer = ctx.currentPlayer;
  const previousPlayer = players.find(p => p !== currentPlayer);

  // Increments the `total` energy of the `currentPlayer`
  // by one; but not more than ten.
  if (G.energy[ctx.currentPlayer].total !== 10)
    G.energy[ctx.currentPlayer].total++;

  // Then, sets the `current` value to the total; which allows
  // the `currentPlayer` to spend said energy on card play functions.
  G.energy[ctx.currentPlayer].current = G.energy[ctx.currentPlayer].total;

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
  for (let i = 0; i < G.boards[previousPlayer].length; i++) {
    // enable canBeAttacked on their board minions
    if (G.boards[previousPlayer][`slot${i}`].canBeAttacked === false)
      enableMinionCanBeAttacked(G, previousPlayer, [`slot${i}`]);

    // disable canAttack on their board minions
    if (G.boards[previousPlayer][`slot${i}`].canAttack === true)
      disableMinionCanAttack(G, previousPlayer, [`slot${i}`]);
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
