import { add, subtract } from 'mathjs';

export const getCardFromDeck = (G, ctx, card) => {
  const { players, numberOfCardsInTheirHand } = G;
  const { currentPlayer } = ctx;
  const playerNumber = Number(currentPlayer);

  if (playerNumber !== players[playerNumber])
    add(Number(numberOfCardsInTheirHand), 1);

  players[playerNumber].cards.push(card);
};

export const playMinionCard = (G, ctx, slotNumber, card) => {
  const { boards } = G;
  const { currentPlayer } = ctx;
  const playerNumber = Number(currentPlayer) + 1;

  boards[`player${playerNumber}`][`slot${slotNumber}`] = card;
};

export const playSpellCard = (G, ctx, card, target) => {
  const { boards } = G;
  const { currentPlayer } = ctx;
  const playerNumber = Number(currentPlayer) + 1;

  boards[`player${playerNumber}`][`slot${target}`] = card;
};
