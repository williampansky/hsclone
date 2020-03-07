import drawCard from 'lib/moves/draw-card';
import health from 'lib/state/health';
import playerShieldPoints from 'lib/state/player-shield-points';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import playerWeapon from 'lib/state/player-weapon';
import createWeaponObject from 'lib/creators/create-weapon-object';
import createSpellObject from 'lib/creators/create-spell-object';

/**
 * Backstab your opponent for 2 damage.
 * @param {{}} G
 * @param {{}} ctx
 */
export const backstabOpponent = (G, ctx, amount = 2) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  health.subtract(G, otherPlayer, amount);
};

/**
 * Equip a 1/2 Shuriken throwing star.
 * @param {{}} G
 * @param {{}} ctx
 */
export const equipShuriken = (G, ctx) => {
  const { currentPlayer } = ctx;
  playerWeapon.equip(G, currentPlayer, createWeaponObject('GAME_008'));
};

/**
 * Gain a provided amount of shield points.
 * @param {{}} G
 * @param {{}} ctx
 */
export const gainShieldPoints = (G, ctx, amount = 2) => {
  const { currentPlayer } = ctx;
  return playerShieldPoints.add(G, currentPlayer, amount);
};

/**
 * Heal yourself or a friendly minion for 2 HP.
 * @param {{}} G
 * @param {{}} ctx
 */
export const initTargetedHeal = (G, ctx) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  G.spellObject[currentPlayer] = createSpellObject('GAME_009');
  G.playerCanBeHealed[currentPlayer] = true;
  G.boards[currentPlayer].forEach(slot => (slot.canBeHealed = true));

  G.playerCanBeHealed[otherPlayer] = true;
  G.boards[otherPlayer].forEach(slot => (slot.canBeHealed = true));
};

/**
 * Gain 1 Attack and 1 Shield Point.
 * @param {{}} G
 * @param {{}} ctx
 */
export const initTargetedDamage = (G, ctx, amount = 1) => {
  const { currentPlayer } = ctx;
  playerWeapon.equip(G, currentPlayer, createWeaponObject('GAME_011'));
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
  G.playerCanBeAttacked[otherPlayer] = true;
  G.boards[otherPlayer].forEach(slot => (slot.canBeAttackedBySpell = true));
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
export const summonRandomIdol = (G, ctx) => {
  const { currentPlayer, random } = ctx;

  if (G.boards[currentPlayer].length === 7) return; // max minions

  const idols = ['GAME_003', 'GAME_004', 'GAME_005', 'GAME_006'];
  const randomIdolID = random.Shuffle(idols);
  const randomIdol = createBoardSlotObject(randomIdolID[0]);

  // GAME_005 needs the Guard mechanic
  if (randomIdolID[0] === 'GAME_005') {
    G.boards[currentPlayer].push({
      ...randomIdol,
      hasGuard: true
    });
  } else {
    G.boards[currentPlayer].push(randomIdol);
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
