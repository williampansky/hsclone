import { generateNameHTML } from './html.log';
import TYPE from 'enums/type.enums';
import exists from 'utils/element.exists';

const logKillMinionMessage = (G, player, index) => {
  const MINION = G.boards[player][index];
  if (!exists(MINION)) return;
  const MINION_NAME = generateNameHTML(MINION.minionData, TYPE[1]);

  return `Player ${player}'s ${MINION_NAME} was slain.`;
};

export default logKillMinionMessage;
