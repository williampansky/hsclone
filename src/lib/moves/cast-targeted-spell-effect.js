import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import boards from 'lib/state/boards';
import energy from 'lib/state/energy';
import deselectCard from './deselect-card';
import copyCardToPlayedCards from 'lib/utils/copy-card-to-played-cards';
import removeCardFromHand from 'lib/utils/remove-card-from-hand';
import counts from 'lib/state/counts';
import drawCard from './draw-card';

/**
 * Casts a targeted Warcry spell object.
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} playerCtx Either SELF || OPPONENT
 * @param {string} targetCtx Target context; MINION || PLAYER
 * @param {string} targetIdx Target index if targetCtx is MINION
 */
const castTargetedSpellEffect = (G, ctx, playerCtx, targetCtx, targetIdx) => {
  const { selectedCardObject, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  if (selectedCardObject[currentPlayer] === null) return;
  const { id, cost, uuid } = selectedCardObject[currentPlayer];
  const THEIR_SLOT = G.boards[otherPlayer][targetIdx];
  const YOUR_SLOT = G.boards[otherPlayer][targetIdx];

  // prettier-ignore
  switch (id) {
    case 'CORE_115':  CORE_115(G, ctx, currentPlayer, otherPlayer, THEIR_SLOT, targetIdx); break;
    case 'CORE_120':  CORE_120(G, ctx, otherPlayer, THEIR_SLOT, targetIdx); break;
    case 'CORE_123':  CORE_123(G, currentPlayer, targetIdx); break;
    case 'CORE_126':  CORE_126(G, ctx, otherPlayer, THEIR_SLOT, targetIdx); break;
    default:          return;
  }

  // clear warcryObject
  G.warcryObject[currentPlayer] = null;

  // disable all playerCanBeAttacked
  playerCanBeAttacked.disable(G, '0');
  playerCanBeAttacked.disable(G, '1');

  // disable all playerCanBeHealed
  playerCanBeHealed.disable(G, '0');
  playerCanBeHealed.disable(G, '1');

  // disable all canBeAttacked
  boards.disableAllCanBeAttacked(G, '0');
  boards.disableAllCanBeAttacked(G, '1');

  // disable all canBeAttacked
  boards.disableAllCanBeBuffed(G, '0');
  boards.disableAllCanBeBuffed(G, '1');

  // disable all canBeHealed
  boards.disableAllCanBeHealed(G, '0');
  boards.disableAllCanBeHealed(G, '1');

  energy.subtract(G, currentPlayer, cost);
  deselectCard(G, ctx);
  copyCardToPlayedCards(G, currentPlayer, id);
  removeCardFromHand(G, currentPlayer, uuid);
  counts.deincrementHand(G, currentPlayer);
};

const CORE_115 = (G, ctx, currentPlayer, otherPlayer, boardSlot, index) => {
  boards.subtractFromMinionHealth(G, otherPlayer, index, 1);
  boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, boardSlot, index);
  if (boardSlot.currentHealth === 0) drawCard(G, ctx, currentPlayer, 1);
};

const CORE_120 = (G, ctx, player, boardSlot, index) => {
  boards.subtractFromMinionHealth(G, player, index, 4);
  boards.killMinionIfHealthIsZero(G, ctx, player, boardSlot, index);
};

const CORE_123 = (G, player, index) => {
  G.boards[player][index].canAttack = true;
};

const CORE_126 = (G, ctx, player, boardSlot, index) => {
  return boards.killMinion(G, ctx, player, boardSlot, index);
};

export default castTargetedSpellEffect;
