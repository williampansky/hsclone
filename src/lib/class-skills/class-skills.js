import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createSpellObject from 'lib/creators/create-spell-object';
import createWeaponObject from 'lib/creators/create-weapon-object';
import drawCard from 'lib/moves/draw-card';
import health from 'lib/state/health';
// import playerAttackValue from 'lib/state/player-attack-value';
import playerCanAttack from 'lib/state/player-can-attack';
import playerShieldPoints from 'lib/state/player-shield-points';
import playerUsedClassSkill from 'lib/state/player-used-class-skill';
import playerWeapon from 'lib/state/player-weapon';
import logMessage from 'lib/match-history/log-message';

/**
 * Backstab your opponent for 2 damage.
 * @param {{}} G
 * @param {{}} ctx
 */
export const snipeOpponent = (G, ctx, amount = 2) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  playerUsedClassSkill.enable(G, currentPlayer);
  health.subtract(G, otherPlayer, amount);
};

/**
 * Equip a 1/2 Katar.
 * @param {{}} G
 * @param {{}} ctx
 */
export const equipKatar = (G, ctx) => {
  const { currentPlayer } = ctx;
  playerCanAttack.enable(G, currentPlayer);
  playerWeapon.equip(G, currentPlayer, createWeaponObject('GAME_008'));
  G.playerAttackValue[currentPlayer] = 1;
};

/**
 * Gain a provided amount of shield points.
 * @param {{}} G
 * @param {{}} ctx
 */
export const gainShieldPoints = (G, ctx, amount = 2) => {
  const { currentPlayer } = ctx;
  logMessage(G, ctx, 'GAME_011');
  playerShieldPoints.add(G, currentPlayer, amount);
};

/**
 * Heal yourself or a friendly minion for 2 HP.
 * @param {{}} G
 * @param {{}} ctx
 */
export const initTargetedHeal = (G, ctx) => {
  // const { turnOrder } = G;
  const { currentPlayer } = ctx;
  // const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  G.spellObject[currentPlayer] = createSpellObject('GAME_009');
  G.playerCanBeHealed[currentPlayer] = true;
  G.boards[currentPlayer].forEach(slot => (slot.canBeHealed = true));

  // G.playerCanBeHealed[otherPlayer] = true;
  // G.boards[otherPlayer].forEach(slot => (slot.canBeHealed = true));
};

/**
 * Gain 1 Attack and 1 Shield Point.
 * @param {{}} G
 * @param {{}} ctx
 */
export const initTargetedDamage = (G, ctx, amount = 1) => {
  const { currentPlayer } = ctx;
  playerWeapon.equip(G, currentPlayer, createWeaponObject('GAME_012'));
  playerShieldPoints.add(G, currentPlayer, amount);
};

/**
 * Attack something for 1 damage.
 * @param {{}} G
 * @param {{}} ctx
 */
export const initTargetedSpell = (G, ctx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  G.spellObject[currentPlayer] = createSpellObject('GAME_010');
  G.playerCanBeAttackedBySpell[otherPlayer] = true;
  G.boards[otherPlayer].forEach(slot => {
    if (!slot.isConcealed) slot.canBeAttackedBySpell = true;
  });
};

/**
 * Summon a 1/1 Loyal Knight minion.
 * @param {{}} G
 * @param {{}} ctx
 */
export const summonKnight = (G, ctx) => {
  const { currentPlayer } = ctx;
  if (G.boards[currentPlayer].length === 7) return; // max minions
  G.boards[currentPlayer].push(createBoardSlotObject('GAME_007'));
};

/**
 * Summon a random Mystic Idol.
 * @param {{}} G
 * @param {{}} ctx
 */
export const summonRandomUndeadMinion = (G, ctx) => {
  const idols = ['GAME_003', 'GAME_004', 'GAME_005', 'GAME_006'];
  const { currentPlayer, random } = ctx;

  if (G.boards[currentPlayer].length === 7) return; // max minions

  const randomIdolID = random.Shuffle(idols).shift();
  const randomIdol = createBoardSlotObject(randomIdolID);
  logMessage(G, ctx, 'GAME_002');

  // GAME_005 needs the Guard mechanic
  if (randomIdolID === 'GAME_005') {
    G.boards[currentPlayer].push({
      ...randomIdol,
      hasGuard: true
    });
  } else {
    G.boards[currentPlayer].push(randomIdol);

    // GAME_006 adds player spell damage
    if (randomIdolID === 'GAME_006') {
      G.buffs[currentPlayer].spellDamage = Math.abs(
        G.buffs[currentPlayer].spellDamage + 1
      );
    }
  }
};

/**
 * Trade two health points to draw a card.
 * @param {{}} G
 * @param {{}} ctx
 */
export const tradeHealthForCard = (G, ctx, numToSub = 2, numToDraw = 1) => {
  const { currentPlayer } = ctx;
  health.subtract(G, currentPlayer, numToSub);
  return drawCard(G, ctx, currentPlayer, numToDraw);
};
