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
import RACE from 'enums/race.enums';
import playerIsDisabled from 'lib/state/player-is-disabled';

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
    // Deal 1 damage to a selected target.
    case 'CORE_044':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 1);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Give a minion <strong>Guard</strong>, then +2 Attack and +2 Health.
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

    // Restore 8 points of Health.
    case 'CORE_047':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.add(G, currentPlayer, 5);
      } else {
        boards.addToMinionHealth(G, currentPlayer, index, 5);
      }
      break;

    // Choose an enemy minion; deal 4 damage to it and 1 damage to all other enemies.
    case 'CORE_050':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, 4);
        G.boards[otherPlayer].forEach((slot, i) => {
          boards.subtractFromMinionHealth(G, otherPlayer, i, 1);
          boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
        });
      } else {
        health.subtract(G, otherPlayer, 1);
        G.boards[otherPlayer].forEach((slot, i) => {
          if (i === index) {
            boards.subtractFromMinionHealth(G, otherPlayer, i, 4);
            boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
          } else {
            boards.subtractFromMinionHealth(G, otherPlayer, i, 1);
            boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
          }
        });
      }
      break;

    // Attack something for 2 damage.
    case 'CORE_053':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 2);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Change a minion's Health down to 1.
    case 'CORE_056':
      G.boards[otherPlayer][index].currentHealth = 1;
      break;

    // If you control a creature, deal 5 damage to a target—else, deal 3 damage.
    case 'CORE_058':
      if (THEIR_SLOT.race === RACE[2]) {
        boards.subtractFromMinionHealth(G, otherPlayer, index, 5);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, 3);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }
      break;

    // Deal 3 damage to a character and Disable it.
    case 'CORE_066':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, 3);
        playerIsDisabled.enable(G, otherPlayer);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, 3);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
        G.boards[otherPlayer][index].isDisabled = true;
      }
      break;

    // Deal 6 targeted damage.
    case 'CORE_069':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, 6);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, 6);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }
      break;

    // Transform a minion into a 1/1 Creature.
    case 'CORE_070':
      G.boards[otherPlayer][index] = {
        ...G.boards[otherPlayer][index],
        currentAttack: 1,
        currentHealth: 1,
        minionData: {
          ...G.boards[otherPlayer][index].minionData,
          race: RACE[2]
        },
        totalAttack: 1,
        totalHealth: 1
      };
      break;

    // Change a minion's Health down to 1.
    case 'CORE_073':
      G.boards[currentPlayer][index].currentAttack = Math.abs(
        G.boards[currentPlayer][index].currentAttack + 3
      );
      break;

    // Give a minion <strong>Energy Shield</strong>.
    case 'CORE_074':
      G.boards[currentPlayer][index].hasEnergyShield = true;
      break;

    // Change a minion's Health down to 1.
    case 'CORE_075':
      G.boards[otherPlayer][index].currentAttack = 1;
      break;

    // Restore 6 Health to yourself or a friendly minion.
    case 'CORE_077':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.add(G, currentPlayer, 6);
      } else {
        boards.addToMinionHealth(G, otherPlayer, index, 6);
      }
      break;

    // Give a minion +4 Attack and +4 Health.
    case 'CORE_078':
      G.boards[currentPlayer][index] = {
        ...G.boards[currentPlayer][index],
        currentAttack: G.boards[currentPlayer][index].currentAttack + 4,
        currentHealth: G.boards[currentPlayer][index].currentHealth + 4,
        totalAttack: G.boards[currentPlayer][index].totalAttack + 4,
        totalHealth: G.boards[currentPlayer][index].totalHealth + 4
      };
      break;

    // Attack something for 3 damage and then draw a card.
    case 'CORE_080':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, 3);
        drawCard(G, ctx, currentPlayer, 1);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, 3);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
        drawCard(G, ctx, currentPlayer, 1);
      }
      break;

    // Deal 2 targeted damage.
    case 'CORE_083':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, 2);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, 2);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }
      break;

    // Give a minion +2 Health points and then draw a card.
    case 'CORE_086':
      G.boards[currentPlayer][index].currentHealth = Math.abs(
        G.boards[currentPlayer][index].currentHealth + 2
      );
      drawCard(G, ctx, currentPlayer, 1);
      break;

    // Double a minion's current Health value.
    case 'CORE_088':
      G.boards[currentPlayer][index].currentHealth = Math.abs(
        G.boards[currentPlayer][index].currentHealth * 2
      );
      break;

    // Kill an enemy minion that has 3 or less Attack.
    case 'CORE_089':
      boards.killMinion(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Kill an enemy minion that has 5 or more Attack.
    case 'CORE_090':
      boards.killMinion(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Deal 2 damage to one of your enemy's undamaged minions.
    case 'CORE_093':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 2);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Give your equipped weapon 2 additional attack points.
    case 'CORE_094':
      if (!G.playerWeapon[currentPlayer]) return;
      G.playerWeapon[currentPlayer].attack =
        G.playerWeapon[currentPlayer].attack + 2;
      break;

    // Deal 1 targeted damage and then draw a card.
    case 'CORE_097':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, 1);
        drawCard(G, ctx, currentPlayer, 1);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, 1);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
        drawCard(G, ctx, currentPlayer, 1);
      }
      break;

    // Restore a minion to full Health and give it <strong>Guard</strong>.
    case 'CORE_103':
      G.boards[currentPlayer][index] = {
        ...G.boards[currentPlayer][index],
        currentHealth: G.boards[currentPlayer][index].totalHealth,
        hasGuard: true
      };
      break;

    // Deal 1 damage to an enemy character and Disable it.
    case 'CORE_105':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, 1);
        playerIsDisabled.enable(G, otherPlayer);
      } else {
        G.boards[otherPlayer][index].isDisabled = true;
        boards.subtractFromMinionHealth(G, otherPlayer, index, 1);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }
      break;

    // Give a friendly character +3 Attack this turn.
    case 'CORE_106':
      G.boards[currentPlayer][index].currentAttack =
        G.boards[currentPlayer][index].currentAttack + 3;
      break;

    // Give a minion <strong>Onslaught</strong>.
    case 'CORE_107':
      G.boards[currentPlayer][index].hasOnslaught = true;
      break;

    // Gain 5 health by sacrificing one of your Undead minions.
    case 'CORE_113':
      if (THEIR_SLOT.race === RACE[4]) {
        boards.killMinion(G, ctx, currentPlayer, YOUR_SLOT, index);
        health.add(G, currentPlayer, 5);
      }
      break;

    // Deal 1 damage to a minion. If that kills it, draw a card.
    case 'CORE_115':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 1);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      if (THEIR_SLOT.currentHealth === 0) drawCard(G, ctx, currentPlayer, 1);
      break;

    // Deal 4 damage. Discard a random card.
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

    // Deal 2 damage and heal yourself for that amount.
    case 'CORE_119':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, 2);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, 2);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }

      health.add(G, currentPlayer, 2);
      break;

    // Blast a minion for 4 damage.
    case 'CORE_120':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 4);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Give a friendly minion <strong>Stampede</strong>; but it can only attack enemy minions.
    case 'CORE_123':
      G.boards[currentPlayer][index].canAttack = true;
      break;

    // Obliterate an already damaged minion.
    case 'CORE_126':
      boards.killMinion(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    default:
      break;
  }
};

export default castTargetedSpellEffect;
