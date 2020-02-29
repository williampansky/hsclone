import boards from 'lib/state/boards';
import health from 'lib/state/health';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createWarcryObject from 'lib/creators/create-warcry-object';
import drawCardAtStartOfTurn from 'lib/utils/draw-turn-start-card';
import playerCanAttack from 'lib/state/player-can-attack';
import playerWeapon from 'lib/state/player-weapon';
import playerShieldPoints from 'lib/state/player-shield-points';
import drawCard from 'lib/moves/draw-card';

const initCoreSpell = (G, ctx, cardId, index) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  // prettier-ignore
  switch (cardId) {
    case 'CORE_129':  return CORE_129(G, ctx, currentPlayer);
    default:          break;
  }
};

const CORE_129 = (G, ctx, player) => {
  const AMOUNT_TO_GAIN = 5;
  playerShieldPoints.add(G, player, AMOUNT_TO_GAIN);
  drawCard(G, ctx, player, 1);
};

export default initCoreSpell;
