import { generateNameHTML } from './html.log';
import TYPE from 'enums/type.enums';

export const logGame009Message = (G, currentPlayer, index) => {
  const YOUR_SPELL = G.spellObject[currentPlayer];
  const SPELL_NAME = generateNameHTML(YOUR_SPELL, TYPE[3]);

  if (index !== null) {
    const YOUR_MINION = G.boards[currentPlayer][index];
    const MINION_NAME = generateNameHTML(YOUR_MINION.minionData, TYPE[1]);
    return `Player ${currentPlayer} cast ${SPELL_NAME} on ${MINION_NAME}.`;
  } else {
    return `Player ${currentPlayer} cast ${SPELL_NAME} on themself.`;
  }
};

export const logGame010Message = (G, currentPlayer, otherPlayer, index) => {
  const YOUR_SPELL = G.spellObject[currentPlayer];
  const SPELL_NAME = generateNameHTML(YOUR_SPELL, TYPE[3]);

  if (index !== null) {
    const THEIR_MINION = G.boards[otherPlayer][index];
    const MINION_NAME = generateNameHTML(THEIR_MINION.minionData, TYPE[1]);
    return `Player ${currentPlayer} cast ${SPELL_NAME} on ${MINION_NAME}.`;
  } else {
    return `Player ${currentPlayer} cast ${SPELL_NAME} on Player ${otherPlayer}.`;
  }
};
