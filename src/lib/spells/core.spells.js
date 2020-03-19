import boards from 'lib/state/boards';
import createSpellObject from 'lib/creators/create-spell-object';
import drawCard from 'lib/moves/draw-card';
import getCardByID from 'lib/utils/get-card-by-id';
import playerCanAttack from 'lib/state/player-can-attack';
import playerShieldPoints from 'lib/state/player-shield-points';
import playWeaponByCardId from 'lib/weapons/play-weapon-card-by-id';
import health from 'lib/state/health';
import RACE from 'enums/race.enums';
import counts from 'lib/state/counts';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import energy from 'lib/state/energy';
import playerAttackValue from 'lib/state/player-attack-value';

const initCoreSpell = (G, ctx, cardId, index) => {
  const { turnOrder } = G;
  const { currentPlayer, random } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const spellObj = getCardByID(cardId);
  const damageNumber = spellObj && spellObj.warcryNumber;

  // const YOUR_BOARD = G.boards[currentPlayer];
  const THEIR_BOARD = G.boards[otherPlayer];
  // const THEIR_HAND = G.players[otherPlayer].hand;

  function getRandomIndex(length) {
    return Math.floor(Math.random() * (length - 0) + 0);
  }

  function getRandomCardId(array) {
    return random.Shuffle(array)[0];
  }

  // const theirRandomCardId = getRandomCardId(THEIR_HAND);
  const theirRandomIdx1 = getRandomIndex(THEIR_BOARD.length);
  const theirRandomIdx2 = getRandomIndex(THEIR_BOARD.length);
  const theirRandomIdx3 = getRandomIndex(THEIR_BOARD.length);

  switch (cardId) {
    // Obtain 1 extra Energy Point for this turn only.
    case 'CORE_043':
      G.energy[currentPlayer].current = Math.abs(
        G.energy[currentPlayer].current + 1
      );
      break;

    // Give yourself +2 Attack this turn and 2 Armor points.
    case 'CORE_045':
      playerCanAttack.enable(G, currentPlayer);
      playerAttackValue.set(G, currentPlayer, 2);
      playerShieldPoints.add(G, currentPlayer, 2);
      break;

    // Give your characters +2 Attack this turn.
    case 'CORE_048':
      G.boards[currentPlayer].forEach(slot => {
        slot.currentAttack = slot.currentAttack + 1;
      });
      break;

    // Gain an empty Energy Point.
    case 'CORE_049':
      energy.incrementTotal(G, currentPlayer);
      break;

    // Summon a random Creature companion minion.
    case 'CORE_057':
      if (G.boards[currentPlayer].length === 7) return; // max minions

      const entourage = ['CORE_057a', 'CORE_057b', 'CORE_057c'];
      const randomEntourageID = random.Shuffle(entourage);
      const randomEntourage = createBoardSlotObject(randomEntourageID[0]);

      // CORE_057a needs the Stampede mechanic
      if (randomEntourageID[0] === 'CORE_057a') {
        G.boards[currentPlayer].push({
          ...randomEntourage,
          canAttack: true
        });
      }

      // CORE_057b gives your other Creatures with +1 Attack.
      if (randomEntourageID[0] === 'CORE_057b') {
        G.boards[currentPlayer].forEach(slot => {
          slot.currentAttack = slot.currentAttack + 1;
          slot.totalAttack = slot.totalAttack + 1;
        });

        G.boards[currentPlayer].push({
          ...randomEntourage,
          hasBoon: true
        });
      }

      // CORE_057c the Guard mechanic
      if (randomEntourageID[0] === 'CORE_057c') {
        G.boards[currentPlayer].push({
          ...randomEntourage,
          hasGuard: true
        });
      }
      break;

    // Choose two enemies at random and deal 2 damage to each of them.
    case 'CORE_060':
      G.boards[otherPlayer].forEach((slot, i) => {
        if (i === theirRandomIdx1 || i === theirRandomIdx2) {
          boards.subtractFromMinionHealth(G, otherPlayer, i, damageNumber);
          boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
        }
      });
      break;

    // Choose three enemies at random and deal 1 damage to each of them.
    case 'CORE_063':
      G.boards[otherPlayer].forEach((slot, i) => {
        if (
          i === theirRandomIdx1 ||
          i === theirRandomIdx2 ||
          i === theirRandomIdx3
        ) {
          boards.subtractFromMinionHealth(G, otherPlayer, i, damageNumber);
          boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
        }
      });
      break;

    // Summon two 0/2 minions with <strong>Guard</strong>.
    case 'CORE_064':
      if (G.boards[currentPlayer].length === 7) return; // max minions
      if (G.boards[currentPlayer].length <= 5)
        G.boards[currentPlayer].push(createBoardSlotObject('CORE_064a'));
      if (G.boards[currentPlayer].length <= 6)
        G.boards[currentPlayer].push(createBoardSlotObject('CORE_064a'));
      break;

    // Draw the next 2 cards from your deck.
    case 'CORE_065':
      G.boards[otherPlayer].forEach((slot, i) => {
        boards.subtractFromMinionHealth(G, otherPlayer, i, 1);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
      });
      break;

    // Draw the next 2 cards from your deck.
    case 'CORE_067':
      drawCard(G, ctx, currentPlayer, 2);
      break;

    // Disable every enemy minion.
    case 'CORE_068':
      G.boards[otherPlayer].forEach((slot, i) => {
        slot.isDisabled = true;
      });
      break;

    // Deal 4 damage to every enemy minion.
    case 'CORE_072':
      G.boards[otherPlayer].forEach((slot, i) => {
        boards.subtractFromMinionHealth(G, otherPlayer, i, 4);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
      });
      break;

    // Attack all enemies for 2 damage.
    case 'CORE_079':
      health.subtract(G, otherPlayer, 2);
      G.boards[otherPlayer].forEach((slot, i) => {
        boards.subtractFromMinionHealth(G, otherPlayer, i, 2);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
      });
      break;

    // Create a copy of one of the cards in your opponent's hand.
    case 'CORE_084':
      // if (G.players[currentPlayer].hand.length === 10) return;
      // G.players[currentPlayer].hand.push(getCardByID(theirRandomCardId));
      // counts.incrementHand(G, currentPlayer);
      break;

    // Restore 5 Health to yourself.
    case 'CORE_087':
      health.add(G, currentPlayer, 5);
      break;

    // Deal 2 damage to all of your enemies and then restore
    // that amount of Health to yourself and all your minions.
    case 'CORE_091':
      health.subtract(G, otherPlayer, 2);
      G.boards[otherPlayer].forEach((slot, i) => {
        boards.subtractFromMinionHealth(G, otherPlayer, i, 2);
        boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
      });

      health.add(G, currentPlayer, 2);
      G.boards[currentPlayer].forEach((_, i) => {
        boards.addToMinionHealth(G, currentPlayer, i, 2);
      });
      break;

    // Return one of your opponent's minions to their hand.
    case 'CORE_096':
      G.boards[otherPlayer].forEach(slot => {
        slot.canBeReturned = true;
      });

      health.add(G, currentPlayer, 2);
      G.boards[currentPlayer].forEach((_, i) => {
        boards.addToMinionHealth(G, currentPlayer, i, 2);
      });
      break;

    // Give your equipped weapon 2 additional attack points.
    case 'CORE_094':
      if (!G.playerWeapon[currentPlayer]) return;
      playerAttackValue.set(G, currentPlayer, 2);
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
        if (slot.minionData.race === RACE[6]) {
          slot.currentHealth = slot.currentHealth + 2;
          slot.totalHealth = slot.totalHealth + 2;
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
