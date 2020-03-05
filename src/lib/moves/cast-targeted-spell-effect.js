import { discardCardFromHandByIndex } from 'lib/moves/discard-card';
import boards from 'lib/state/boards';
import copyCardToPlayedCards from 'lib/utils/copy-card-to-played-cards';
import counts from 'lib/state/counts';
import deselectCard from './deselect-card';
import drawCard from './draw-card';
import energy from 'lib/state/energy';
import health from 'lib/state/health';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import removeCardFromHand from 'lib/utils/remove-card-from-hand';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

/**
 * Casts a targeted Warcry spell object.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} playerCtx Either SELF || OPPONENT
 * @param {string} targetCtx Target context; MINION || PLAYER
 * @param {string} index Target index if targetCtx is MINION
 */
const castTargetedSpellEffect = (G, ctx, playerCtx, targetCtx, index) => {
  const { selectedCardObject, turnOrder } = G;
  const { currentPlayer, random } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  if (selectedCardObject[currentPlayer] === null) return;
  const { id, cost, uuid } = selectedCardObject[currentPlayer];
  const THEIR_SLOT = G.boards[otherPlayer][index];
  const YOUR_SLOT = G.boards[currentPlayer][index];

  energy.subtract(G, currentPlayer, cost);
  deselectCard(G, ctx);
  copyCardToPlayedCards(G, currentPlayer, id);
  removeCardFromHand(G, currentPlayer, uuid);
  counts.deincrementHand(G, currentPlayer);

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

  switch (id) {
    case 'CORE_044':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 1);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    case 'CORE_046':
      G.boards[currentPlayer][index] = {
        ...YOUR_SLOT,
        currentAttack: YOUR_SLOT.currentAttack + 2,
        currentHealth: YOUR_SLOT.currentHealth + 2,
        hasGuard: true,
        totalAttack: YOUR_SLOT.totalAttack + 2,
        totalHealth: YOUR_SLOT.totalHealth + 2
      };
      break;

    case 'CORE_056':
      G.boards[otherPlayer][index].currentHealth = 1;
      break;

    case 'CORE_115':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 1);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      if (THEIR_SLOT.currentHealth === 0) drawCard(G, ctx, currentPlayer, 1);
      break;

    case 'CORE_116':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, 4);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, 4);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }

      discardCardFromHandByIndex(
        G,
        currentPlayer,
        random.Die(G.players[currentPlayer].hand.length)
      );
      break;

    case 'CORE_119':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, 2);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, 2);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }

      health.add(G, currentPlayer, 2);
      break;

    case 'CORE_120':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 4);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    case 'CORE_123':
      G.boards[currentPlayer][index].canAttack = true;
      break;

    case 'CORE_126':
      boards.killMinion(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    default:
      break;
  }
};

export default castTargetedSpellEffect;
