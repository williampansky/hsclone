import { generateNameHTML } from './html.log';

const logKillMinionMessage = (G, player, index) => {
  const MINION = G.boards[player][index];
  const MINION_NAME = generateNameHTML(MINION.minionData);

  return `Player ${player}'s ${MINION_NAME} was slain.`;
};

export default logKillMinionMessage;
