import { generateNameHTML } from './html.log';

const logCastTargetedSpellAtPlayerMessage = (G, currentPlayer, otherPlayer) => {
  const YOUR_CARD = G.selectedCardObject[currentPlayer];
  const YC_NAME = generateNameHTML(YOUR_CARD);

  return `Player ${currentPlayer} cast ${YC_NAME} at Player ${otherPlayer} for ${YOUR_CARD.warcryNumber} damage.`;
};

export default logCastTargetedSpellAtPlayerMessage;
