import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import selectedCardIndex from 'lib/state/selected-card-index';
import selectedCardObject from 'lib/state/selected-card-object';
import SPELLTYPE from 'enums/spellType.enums';
import TYPE from 'enums/type.enums';
import RACE from 'enums/race.enums';
import playerCanBeHealed from 'lib/state/player-can-be-healed';

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

  const { id, spellContext, spellType, type } = cardObject;
  G.selectedCardType[currentPlayer] = type;
  G.selectedCardSpellType[currentPlayer] = spellType;
  G.selectedCardSpellContext[currentPlayer] = spellContext;

  if (type === TYPE[3] && spellType === SPELLTYPE[2]) {
    switch (id) {
      case 'CORE_044':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeAttacked = true;
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

      case 'CORE_050':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeAttacked = true;
        });
        break;

      case 'CORE_051':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeAttacked = true;
        });
        break;

      case 'CORE_053':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeAttacked = true;
        });
        break;

      case 'CORE_056':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeDebuffed = true;
        });
        break;

      case 'CORE_058':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeAttacked = true;
        });
        break;

      case 'CORE_066':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeAttacked = true;
        });
        break;

      case 'CORE_069':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeAttacked = true;
        });
        break;

      case 'CORE_070':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeAttacked = true;
        });
        break;

      case 'CORE_073':
        G.boards[currentPlayer].forEach(slot => {
          slot.canbeDebuffed = true;
        });
        break;

      case 'CORE_074':
        G.boards[currentPlayer].forEach(slot => {
          slot.canReceiveEnergyShield = true;
        });
        break;

      case 'CORE_075':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeDebuffed = true;
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

      case 'CORE_080':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeAttacked = true;
        });
        break;

      case 'CORE_083':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeAttacked = true;
        });
        break;

      case 'CORE_086':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeBuffed = true;
        });
        break;

      case 'CORE_088':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeBuffed = true;
        });
        break;

      case 'CORE_089':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed && slot.currentAttack <= 3)
            slot.canbeAttacked = true;
        });
        break;

      case 'CORE_090':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed && slot.currentAttack >= 5)
            slot.canbeAttacked = true;
        });
        break;

      case 'CORE_092':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeStolen = true;
        });
        break;

      case 'CORE_093':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed && slot.totalHealth === slot.currentHealth)
            slot.canbeAttacked = true;
        });
        break;

      case 'CORE_096':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canbeReturned = true;
        });
        break;

      case 'CORE_097':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttacked = true;
        });
        break;

      case 'CORE_101':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttacked = true;
        });
        break;

      case 'CORE_103':
        G.boards[currentPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeBuffed = true;
        });
        break;

      case 'CORE_105':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttacked = true;
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

      case 'CORE_113':
        G.boards[currentPlayer].forEach(slot => {
          if (slot.minionData.race === RACE[3]) slot.canbeSacrificed = true;
        });
        break;

      case 'CORE_114':
        G.boards[otherPlayer].forEach(slot => {
          slot.canbeExpired = true;
        });
        break;

      case 'CORE_115':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttacked = true;
        });
        break;

      case 'CORE_116':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttacked = true;
        });
        break;

      case 'CORE_119':
        playerCanBeAttacked.enable(G, otherPlayer);
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttacked = true;
        });
        break;

      case 'CORE_120':
        G.boards[otherPlayer].forEach(slot => {
          if (!slot.isConcealed) slot.canBeAttacked = true;
        });
        break;

      case 'CORE_123':
        G.boards[currentPlayer].forEach(slot => {
          slot.canBeBuffed = true;
        });
        break;

      case 'CORE_126':
        G.boards[otherPlayer].forEach(slot => {
          if (slot.totalHealth > slot.currentHealth) slot.canBeAttacked = true;
        });
        break;

      default:
        break;
    }
  }
};

export default selectCard;
