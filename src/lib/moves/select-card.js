import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import RACE from 'enums/race.enums';
import selectedCardIndex from 'lib/state/selected-card-index';
import selectedCardObject from 'lib/state/selected-card-object';
import SPELLTYPE from 'enums/spellType.enums';
import TYPE from 'enums/type.enums';

/**
 * Sets the `selectedCardIndex` and `selectedCardObject`
 * of the current player's card.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} cardObject
 * @param {number} index
 */
const selectCard = (G, ctx, cardObject = null, index = null) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  selectedCardIndex.set(G, currentPlayer, index);
  selectedCardObject.set(G, currentPlayer, cardObject);

  if (cardObject === null) return;

  const { id, spellContext, spellType, type, warcryNumber } = cardObject;
  G.selectedCardType[currentPlayer] = type;
  G.selectedCardSpellType[currentPlayer] = spellType;
  G.selectedCardSpellContext[currentPlayer] = spellContext;
  G.playerSpellDamage[currentPlayer] = warcryNumber;

  if ((type === TYPE[2] || TYPE[3]) && spellType === SPELLTYPE[2]) {
    switch (id) {
      // Deal 1 damage to a selected target.
      case 'CORE_044':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      case 'CORE_046':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeBuffed = true;
        });
        break;

      case 'CORE_047':
        playerCanBeHealed.enable(G, currentPlayer);
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeHealed = true;
        });
        break;

      // Choose an enemy minion; deal 4 damage to it and 1 damage to all other enemies.
      case 'CORE_050':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Deal 5 damage and then draw a card.
      case 'CORE_051':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Attack something for 2 damage.
      case 'CORE_053':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      case 'CORE_056':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeDebuffed = true;
        });
        break;

      // If you control a Creature, deal 5 damage to a target—else, deal 3 damage.
      case 'CORE_058':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Deal 3 damage to a character and Disable it.
      case 'CORE_066':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Deal 6 targeted damage.
      case 'CORE_069':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Transform a minion into a 1/1 Creature.
      case 'CORE_070':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      case 'CORE_073':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeBuffed = true;
        });
        break;

      case 'CORE_074':
        G.boards[currentPlayer].forEach(slot => {
          slot.canReceiveEnergyShield = true;
        });
        break;

      case 'CORE_075':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeDebuffed = true;
        });
        break;

      case 'CORE_077':
        playerCanBeHealed.enable(G, currentPlayer);
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeHealed = true;
        });
        break;

      case 'CORE_078':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeBuffed = true;
        });
        break;

      // Attack something for 3 damage and then draw a card.
      case 'CORE_080':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Deal 2 targeted damage.
      case 'CORE_083':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Give a minion +2 Health points and then draw a card.
      case 'CORE_086':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeBuffed = true;
        });
        break;

      // Double a minion's current Health value.
      case 'CORE_088':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeBuffed = true;
        });
        break;

      // Kill an enemy minion that has 3 or less Attack.
      case 'CORE_089':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed && slot.currentAttack <= 3)
            slot.canBeAttackedBySpell = true;
        });
        break;

      // Kill an enemy minion that has 5 or more Attack.
      case 'CORE_090':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed && slot.currentAttack >= 5)
            slot.canBeAttackedBySpell = true;
        });
        break;

      case 'CORE_092':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Deal 2 damage to one of your enemy's undamaged minions.
      case 'CORE_093':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed && slot.currentHealth === slot.totalHealth)
            slot.canBeAttackedBySpell = true;
        });
        break;

      case 'CORE_096':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Deal 1 targeted damage and then draw a card.
      case 'CORE_097':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Kill an any enemy minion.
      case 'CORE_101':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      case 'CORE_103':
        G.boards[currentPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeBuffed = true;
        });
        break;

      // Deal 1 damage to an enemy character and Disable it.
      case 'CORE_105':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      case 'CORE_106':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeBuffed = true;
        });
        break;

      case 'CORE_107':
        G.boards[currentPlayer].forEach(slot => {
          slot.canReceiveOnslaught = true;
        });
        break;

      case 'CORE_109':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      case 'CORE_113':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeSacrificed = true;
        });
        break;

      case 'CORE_114':
        G.boards[otherPlayer].forEach(slot => {
          slot.canBeExpired = true;
        });
        break;

      // Deal 1 damage to a minion. If that kills it, draw a card.
      case 'CORE_115':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Deal 4 damage. Discard a random card.
      case 'CORE_116':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Deal 2 damage and heal yourself for that amount.
      case 'CORE_119':
        playerCanBeAttacked.enableBySpell(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      // Blast a minion for 4 damage.
      case 'CORE_120':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
        });
        break;

      case 'CORE_123':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeBuffed = true;
        });
        break;

      // Obliterate an already damaged minion.
      case 'CORE_126':
        G.boards[otherPlayer].forEach(slot => {
          if (slot.totalHealth > slot.currentHealth)
            slot.canBeAttackedBySpell = true;
        });
        break;

      default:
        break;
    }
  }
};

export default selectCard;
