import { generateNameHTML } from './html.log';
import TYPE from 'enums/type.enums';
import exists from 'utils/element.exists';

const logMinionAttackedPlayerMessage = (G, currentPlayer, otherPlayer) => {
  const YOUR_MINION = G.selectedMinionObject[currentPlayer];
  if (!exists(YOUR_MINION)) return;
  const YM_NAME = generateNameHTML(YOUR_MINION.minionData, TYPE[1]);

  return `Player ${currentPlayer}'s ${YM_NAME} attacked Player ${otherPlayer} for ${YOUR_MINION.currentAttack} damage.`;
};

export default logMinionAttackedPlayerMessage;
