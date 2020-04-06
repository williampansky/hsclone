import { generateNameHTML } from './html.log';

const logMinionAttackedMinionMessage = (
  G,
  currentPlayer,
  otherPlayer,
  index
) => {
  const YOUR_MINION = G.selectedMinionObject[currentPlayer];
  const THEIR_MINION = G.boards[otherPlayer][index];
  const YM_NAME = generateNameHTML(YOUR_MINION.minionData);
  const TM_NAME = generateNameHTML(THEIR_MINION.minionData);

  return `Player ${currentPlayer}'s ${YM_NAME} attacked Player ${otherPlayer}'s ${TM_NAME} for ${YOUR_MINION.currentAttack} damage.`;
};

export default logMinionAttackedMinionMessage;
