import { generateNameHTML } from './html.log';
import TYPE from 'enums/type.enums';

const logCastTargetedSpellAtMinionMessage = (
  G,
  currentPlayer,
  otherPlayer,
  index
) => {
  const YOUR_CARD = G.selectedCardObject[currentPlayer];
  const THEIR_MINION = G.boards[otherPlayer][index];
  const YC_NAME = generateNameHTML(YOUR_CARD, TYPE[3]);
  const TM_NAME = generateNameHTML(THEIR_MINION.minionData, TYPE[1]);

  return `Player ${currentPlayer} cast ${YC_NAME} at Player ${otherPlayer}'s ${TM_NAME} for ${YOUR_CARD.warcryNumber} damage.`;
};

export default logCastTargetedSpellAtMinionMessage;
