import { discardCardFromHandByIndex } from 'lib/moves/discard-card';
import boards from 'lib/state/boards';
import copyCardToPlayedCards from 'lib/utils/copy-card-to-played-cards';
import counts from 'lib/state/counts';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import deselectCard from './deselect-card';
import drawCard from './draw-card';
import energy from 'lib/state/energy';
import health from 'lib/state/health';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import playerIsDisabled from 'lib/state/player-is-disabled';
import RACE from 'enums/race.enums';
import removeCardFromHand from 'lib/utils/remove-card-from-hand';
import TARGET_CONTEXT from 'enums/target-context.enum';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import logMessage from 'lib/match-history/log-message';

/**
 * Casts a targeted Warcry spell object.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {string} playerCtx Either SELF || OPPONENT
 * @param {string} targetCtx Target context; MINION || PLAYER
 * @param {string} index Target index if targetCtx is MINION
 */
const castTargetedSpell = (G, ctx, playerCtx, targetCtx, index) => {
  const { selectedCardObject, spellObject, turnOrder } = G;
  const { currentPlayer, random } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  if (spellObject[currentPlayer] !== null) {
    const { id } = spellObject[currentPlayer];
    return castTargetedClassSkill(G, ctx, playerCtx, targetCtx, index, id);
  }

  if (selectedCardObject[currentPlayer] === null) return;
  const { id, cost, uuid } = selectedCardObject[currentPlayer];
  const THEIR_SLOT = G.boards[otherPlayer][index];
  const YOUR_SLOT = G.boards[currentPlayer][index];
  const YOUR_BASE_SPELL_DAMAGE = G.playerSpellDamage[currentPlayer];
  const YOUR_SPELL_BUFF = G.buffs[currentPlayer].spellDamage;
  const YOUR_SPELL_DMG = Math.abs(YOUR_BASE_SPELL_DAMAGE + YOUR_SPELL_BUFF);

  if (targetCtx === WARCRY_TARGET_CONTEXT[1]) {
    logMessage(G, ctx, 'castTargetedSpell-minion', null, index);
  } else {
    logMessage(G, ctx, 'castTargetedSpell-player');
  }

  energy.subtract(G, currentPlayer, cost);
  deselectCard(G, ctx);
  copyCardToPlayedCards(G, currentPlayer, id);
  removeCardFromHand(G, currentPlayer, uuid);
  counts.deincrementHand(G, currentPlayer);

  switch (id) {
    // Deal 1 damage to a selected target.
    case 'CORE_044':
      boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Give a minion <strong>Guard</strong>, then +2 Attack and +2 Health.
    case 'CORE_046':
      G.boards[currentPlayer][index] = {
        ...YOUR_SLOT,
        currentAttack: Math.abs(YOUR_SLOT.currentAttack + 2),
        currentHealth: Math.abs(YOUR_SLOT.currentHealth + 2),
        hasGuard: true,
        isConcealed: false,
        totalAttack: Math.abs(YOUR_SLOT.totalAttack + 2),
        totalHealth: Math.abs(YOUR_SLOT.totalHealth + 2)
      };
      break;

    // Restore 8 points of Health.
    case 'CORE_047':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.add(G, currentPlayer, YOUR_SPELL_DMG);
      } else {
        boards.addToMinionHealth(G, currentPlayer, index, YOUR_SPELL_DMG);
      }
      break;

    // Choose an enemy minion; deal 4 damage to it and 1 damage to all other enemies.
    case 'CORE_050':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
        G.boards[otherPlayer].forEach((slot, i) => {
          boards.subtractFromMinionHealth(
            G,
            otherPlayer,
            i,
            Math.abs(YOUR_SPELL_DMG - 3)
          );
          boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
        });
      } else {
        health.subtract(G, otherPlayer, Math.abs(YOUR_SPELL_DMG - 3));
        G.boards[otherPlayer].forEach((slot, i) => {
          if (i === index) {
            boards.subtractFromMinionHealth(G, otherPlayer, i, YOUR_SPELL_DMG);
            boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
          } else {
            boards.subtractFromMinionHealth(
              G,
              otherPlayer,
              i,
              Math.abs(YOUR_SPELL_DMG - 3)
            );
            boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
          }
        });
      }
      break;

    // Deal 5 damage and then draw a card.
    case 'CORE_051':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }
      break;

    // Attack something for 2 damage.
    case 'CORE_053':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
        drawCard(G, ctx, currentPlayer, 1);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
        drawCard(G, ctx, currentPlayer, 1);
      }
      break;

    // Change a minion's Health down to 1.
    case 'CORE_056':
      G.boards[otherPlayer][index] = {
        ...G.boards[otherPlayer][index],
        currentHealth: 1,
        totalHealth: 1
      };
      break;

    // Deal 4 targeted damage.
    case 'CORE_058':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }
      break;

    // Deal 3 damage to a character and Disable it.
    case 'CORE_066':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
        playerIsDisabled.enable(G, otherPlayer);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
        G.boards[otherPlayer][index].isDisabled = true;
      }
      break;

    // Deal 6 targeted damage.
    case 'CORE_069':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }
      break;

    // Transform a minion into a 1/1 Creature.
    case 'CORE_070':
      G.boards[otherPlayer][index] = createBoardSlotObject('CORE_070a');
      break;

    // Give a minion +3 Attack.
    case 'CORE_073':
      G.boards[currentPlayer][index].currentAttack = Math.abs(
        G.boards[currentPlayer][index].currentAttack + 3
      );
      G.boards[currentPlayer][index].totalAttack = Math.abs(
        G.boards[currentPlayer][index].totalAttack + 3
      );
      break;

    // Give a minion <strong>Energy Shield</strong>.
    case 'CORE_074':
      G.boards[currentPlayer][index].hasEnergyShield = true;
      break;

    // Change a minion's Attack down to 1.
    case 'CORE_075':
      if (G.boards[otherPlayer][index].currentAttack === 0) return;
      G.boards[otherPlayer][index] = {
        ...G.boards[otherPlayer][index],
        currentAttack: 1,
        totalAttack: 1
      };
      break;

    // Restore 6 Health to yourself or a friendly minion.
    case 'CORE_077':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.add(G, currentPlayer, YOUR_SPELL_DMG);
      } else {
        boards.addToMinionHealth(G, currentPlayer, index, YOUR_SPELL_DMG);
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
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
        drawCard(G, ctx, currentPlayer, 1);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
        drawCard(G, ctx, currentPlayer, 1);
      }
      break;

    // Deal 2 targeted damage.
    case 'CORE_083':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }
      break;

    // Give a minion +2 Health points and then draw a card.
    case 'CORE_086':
      G.boards[currentPlayer][index].currentHealth = Math.abs(
        G.boards[currentPlayer][index].currentHealth + 2
      );
      G.boards[currentPlayer][index].totalHealth = Math.abs(
        G.boards[currentPlayer][index].totalHealth + 2
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
      boards.subtractFromMinionHealth(G, otherPlayer, index, 9000);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Kill an enemy minion that has 5 or more Attack.
    case 'CORE_090':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 9000);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Take control of over one of your opponent's minions.
    case 'CORE_092':
      if (G.boards[currentPlayer].length === 7) {
        return;
      } else {
        const MINION = G.boards[otherPlayer].splice(index, 1);
        G.boards[currentPlayer].push(MINION[0]);
      }
      break;

    // Deal 2 damage to one of your enemy's undamaged minions.
    case 'CORE_093':
      boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // <em>Disable</em> an enemy minion.
    case 'CORE_096':
      G.boards[otherPlayer][index].isDisabled = true;
      break;

    // Deal 1 targeted damage and then draw a card.
    case 'CORE_097':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
        drawCard(G, ctx, currentPlayer, 1);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
        drawCard(G, ctx, currentPlayer, 1);
      }
      break;

    // Kill an any enemy minion.
    case 'CORE_101':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 9000);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Restore a minion to full Health and give it <strong>Guard</strong>.
    case 'CORE_103':
      G.boards[currentPlayer][index] = {
        ...G.boards[currentPlayer][index],
        currentHealth: G.boards[currentPlayer][index].totalHealth,
        hasGuard: true,
        isConcealed: false
      };
      break;

    // Deal 1 damage to an enemy character and Disable it.
    case 'CORE_105':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
        playerIsDisabled.enable(G, otherPlayer);
      } else {
        G.boards[otherPlayer][index].isDisabled = true;
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }
      break;

    // Give a friendly character +3 Attack this turn.
    case 'CORE_106':
      G.boards[currentPlayer][index] = {
        ...G.boards[currentPlayer][index],
        currentAttack: G.boards[currentPlayer][index].currentAttack + 3,
        totalAttack: G.boards[currentPlayer][index].totalAttack + 3
      };
      break;

    // Give a minion <strong>Onslaught</strong>.
    case 'CORE_107':
      G.boards[currentPlayer][index].hasOnslaught = true;
      break;

    // Transform a minion into a 0/1 Creature with <strong>Guard</strong>.
    case 'CORE_109':
      G.boards[otherPlayer][index] = {
        ...createBoardSlotObject('CORE_109a'),
        hasGuard: true,
        isConcealed: false
      };
      break;

    // Gain 5 health by sacrificing one of your Undead minions.
    case 'CORE_113':
      boards.killMinion(G, ctx, currentPlayer, YOUR_SLOT, index);
      health.add(G, currentPlayer, 5);
      break;

    // Choose <i>any</i> enemy minion; kill it at the start of your next turn.
    case 'CORE_114':
      G.boards[otherPlayer][index].willExpire = true;
      G.boards[otherPlayer][index].canBeExpired = false;
      break;

    // Deal 1 damage to a minion. If that kills it, draw a card.
    case 'CORE_115':
      boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      if (THEIR_SLOT.currentHealth === 0) drawCard(G, ctx, currentPlayer, 1);
      break;

    // Deal 4 damage. Discard a random card.
    case 'CORE_116':
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
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
        health.subtract(G, otherPlayer, YOUR_SPELL_DMG);
      } else {
        boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }

      health.add(G, currentPlayer, YOUR_SPELL_DMG);
      break;

    // Blast a minion for 4 damage.
    case 'CORE_120':
      boards.subtractFromMinionHealth(G, otherPlayer, index, YOUR_SPELL_DMG);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    // Give a friendly minion <strong>Stampede</strong>.
    case 'CORE_123':
      G.boards[currentPlayer][index].canAttack = true;
      break;

    // Obliterate an already damaged minion.
    case 'CORE_126':
      boards.subtractFromMinionHealth(G, otherPlayer, index, 9000);
      boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      break;

    default:
      break;
  }

  G.playerSpellDamage[currentPlayer] = 0;
  G.spellObject[currentPlayer] = null;
  G.warcryObject[currentPlayer] = null;

  // disable all player can be attacked
  playerCanBeAttacked.disable(G, '0');
  playerCanBeAttacked.disable(G, '1');

  // disable all playerCanBeHealed
  playerCanBeHealed.disable(G, '0');
  playerCanBeHealed.disable(G, '1');

  // disable all can be attacked
  boards.disableAllCanBeAttacked(G, '0');
  boards.disableAllCanBeAttacked(G, '1');

  // disable all can be attacked
  boards.disableAllCanBeBuffed(G, '0');
  boards.disableAllCanBeBuffed(G, '1');

  // disable all canBeHealed
  boards.disableAllCanBeHealed(G, '0');
  boards.disableAllCanBeHealed(G, '1');
};

const castTargetedClassSkill = (G, ctx, playerCtx, targetCtx, index, id) => {
  const { spellObject, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  if (spellObject[currentPlayer] === null) return;
  const THEIR_SLOT = G.boards[otherPlayer][index];

  G.lastPlayedCardId = id;

  switch (id) {
    case 'GAME_009':
      // Heal for 2 HP
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        logMessage(G, ctx, 'GAME_009', null);
        health.add(G, currentPlayer, 2);
      } else {
        logMessage(G, ctx, 'GAME_009', null, index);
        boards.addToMinionHealth(G, currentPlayer, index, 2);
      }
      break;

    case 'GAME_010':
      // Deal 1 damage to a selected target.
      if (targetCtx === WARCRY_TARGET_CONTEXT[2]) {
        logMessage(G, ctx, 'GAME_010', null);
        health.subtract(G, otherPlayer, 1);
        G.lastTargeted = { context: TARGET_CONTEXT[2], index: null };
      } else {
        logMessage(G, ctx, 'GAME_010', null, index);
        G.lastTargeted = { context: TARGET_CONTEXT[2], index: index };
        boards.subtractFromMinionHealth(G, otherPlayer, index, 1);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, THEIR_SLOT, index);
      }
      break;

    default:
      break;
  }

  G.playerSpellDamage[currentPlayer] = 0;
  G.spellObject[currentPlayer] = null;
  G.warcryObject[currentPlayer] = null;

  // disable all player can be attacked
  playerCanBeAttacked.disable(G, '0');
  playerCanBeAttacked.disable(G, '1');

  // disable all playerCanBeHealed
  playerCanBeHealed.disable(G, '0');
  playerCanBeHealed.disable(G, '1');

  // disable all can be attacked
  boards.disableAllCanBeAttacked(G, '0');
  boards.disableAllCanBeAttacked(G, '1');

  // disable all can be attacked
  boards.disableAllCanBeBuffed(G, '0');
  boards.disableAllCanBeBuffed(G, '1');

  // disable all canBeHealed
  boards.disableAllCanBeHealed(G, '0');
  boards.disableAllCanBeHealed(G, '1');
};

export default castTargetedSpell;
