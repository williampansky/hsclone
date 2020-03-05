import boards from 'lib/state/boards';
import createSpellObject from 'lib/creators/create-spell-object';
import drawCard from 'lib/moves/draw-card';
import getCardByID from 'lib/utils/get-card-by-id';
import playerCanAttack from 'lib/state/player-can-attack';
import playerShieldPoints from 'lib/state/player-shield-points';
import playWeaponByCardId from 'lib/weapons/play-weapon-card-by-id';
import health from 'lib/state/health';
import RACE from 'enums/race.enums';

const initCoreSpell = (G, ctx, cardId, index) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const spellObj = getCardByID(cardId);
  const damageNumber = spellObj && spellObj.warcryNumber;

  // const YOUR_BOARD = G.boards[currentPlayer];
  const THEIR_BOARD = G.boards[otherPlayer];

  function getRandomIndex(length) {
    return Math.floor(Math.random() * (length - 0) + 0);
  }

  const theirRandomIdx1 = getRandomIndex(THEIR_BOARD.length);
  const theirRandomIdx2 = getRandomIndex(THEIR_BOARD.length);

  switch (cardId) {
    // Give your equipped weapon 2 additional attack points.
    case 'CORE_094':
      if (!G.playerWeapon[currentPlayer]) return;
      G.playerWeapon[currentPlayer].attack =
        G.playerWeapon[currentPlayer].attack + 2;
      break;

    // Deal 3 damage to the enemy player.
    case 'CORE_095':
      health.subtract(G, otherPlayer, 3);
      break;

    // Draw a card and also deal 1 damage to all enemy minions.
    case 'CORE_098':
      drawCard(G, ctx, currentPlayer, 1);
      G.boards[otherPlayer].forEach((slot, i) => {
        boards.subtractFromMinionHealth(G, otherPlayer, i, 1);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
      });
      break;

    // Draw the next 4 cards from your deck.
    case 'CORE_102':
      drawCard(G, ctx, currentPlayer, 4);
      break;

    // Give your Idols +2 additional Health.
    case 'CORE_104':
      G.boards[currentPlayer].forEach(slot => {
        if (slot.minionData.race === RACE[7]) {
          slot.currentHealth = slot.currentHealth + 2;
        }
      });
      break;

    // For one turn only; give your minions +3 attack.
    case 'CORE_111':
      G.boards[currentPlayer].forEach(slot => {
        slot.currentAttack = slot.currentAttack + 3;
      });
      break;

    // Deal 3 damage to everyone.
    case 'CORE_121':
      health.subtract(G, currentPlayer, damageNumber);
      G.boards[currentPlayer].forEach((slot, i) => {
        boards.subtractFromMinionHealth(G, currentPlayer, i, damageNumber);
        boards.killMinionIfHealthIsZero(G, ctx, currentPlayer, slot, i);
      });

      health.subtract(G, otherPlayer, damageNumber);
      G.boards[otherPlayer].forEach((slot, i) => {
        boards.subtractFromMinionHealth(G, otherPlayer, i, damageNumber);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
      });
      break;

    // Attack every minion for 1 damage.
    case 'CORE_124':
      G.boards[currentPlayer].forEach((slot, i) => {
        boards.subtractFromMinionHealth(G, currentPlayer, i, damageNumber);
        boards.killMinionIfHealthIsZero(G, ctx, currentPlayer, slot, i);
      });

      G.boards[otherPlayer].forEach((slot, i) => {
        boards.subtractFromMinionHealth(G, otherPlayer, i, damageNumber);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
      });
      break;

    // Attack two random enemy minions for 2 damage each.
    case 'CORE_125':
      G.boards[otherPlayer].forEach((slot, i) => {
        if (i === theirRandomIdx1 || i === theirRandomIdx2) {
          boards.subtractFromMinionHealth(G, otherPlayer, i, damageNumber);
          boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
        }
      });
      break;

    case 'CORE_126':
      G.spellObject[currentPlayer] = createSpellObject(cardId);
      G.boards[otherPlayer].forEach((slot, i) => {
        if (slot.currentHealth !== slot.totalHealth)
          boards.enableCanBeAttacked(G, otherPlayer, i);
      });
      break;

    case 'CORE_127':
      playerCanAttack.enable(G, currentPlayer);
      playWeaponByCardId(G, currentPlayer, cardId);
      break;

    case 'CORE_129':
      playerShieldPoints.add(G, currentPlayer, damageNumber);
      drawCard(G, ctx, currentPlayer, 1);
      break;

    default:
      break;
  }
};

export default initCoreSpell;
