import boards from 'lib/state/boards';
import createSpellObject from 'lib/creators/create-spell-object';
import drawCard from 'lib/moves/draw-card';
import getCardByID from 'lib/utils/get-card-by-id';
import playerCanAttack from 'lib/state/player-can-attack';
import playerShieldPoints from 'lib/state/player-shield-points';
import playWeaponByCardId from 'lib/weapons/play-weapon-card-by-id';
import health from 'lib/state/health';

const initCoreSpell = (G, ctx, cardId, index) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const spellObj = getCardByID(cardId);
  const damageNumber = spellObj && spellObj.warcryNumber;

  // prettier-ignore
  switch (cardId) {
    case 'CORE_120':  return CORE_121(G, ctx, otherPlayer, damageNumber);
    case 'CORE_121':  return CORE_121(G, ctx, currentPlayer, otherPlayer, damageNumber);
    case 'CORE_123':  return CORE_123(G, ctx, currentPlayer);
    case 'CORE_124':  return CORE_124(G, ctx, currentPlayer, otherPlayer, cardId);
    case 'CORE_125':  return CORE_125(G, ctx, otherPlayer, cardId);
    case 'CORE_126':  return CORE_126(G, ctx, currentPlayer, otherPlayer, cardId);
    case 'CORE_127':  return CORE_127(G, ctx, currentPlayer, cardId);
    case 'CORE_129':  return CORE_129(G, ctx, currentPlayer, cardId);
    default:          break;
  }
};

const CORE_121 = (G, ctx, currentPlayer, otherPlayer, damageNumber) => {
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
};

const CORE_123 = (G, ctx, player) => {
  // boards.enableAllCanBeBuffed(G, player);
};

const CORE_124 = (G, ctx, currentPlayer, otherPlayer, cardId) => {
  const cardObj = getCardByID(cardId);
  const warcryNumber = cardObj && cardObj.warcryNumber;

  G.boards[currentPlayer].forEach((slot, i) => {
    boards.subtractFromMinionHealth(G, currentPlayer, i, warcryNumber);
    boards.killMinionIfHealthIsZero(G, ctx, currentPlayer, slot, i);
  });

  G.boards[otherPlayer].forEach((slot, i) => {
    boards.subtractFromMinionHealth(G, otherPlayer, i, warcryNumber);
    boards.killMinionIfHealthIsZero(G, ctx, otherPlayer, slot, i);
  });
};

const CORE_125 = (G, ctx, player, cardId) => {
  const cardObj = getCardByID(cardId);
  const warcryNumber = cardObj && cardObj.warcryNumber;
  const board = G.boards[player];
  const boardLength = board && board.length;

  const randomIdx1 = Math.floor(Math.random() * (boardLength - 0) + 0);
  const randomIdx2 = Math.floor(Math.random() * (boardLength - 0) + 0);

  boards.subtractFromMinionHealth(G, player, randomIdx1, warcryNumber);
  boards.killMinionIfHealthIsZero(
    G,
    ctx,
    player,
    G.boards[player][randomIdx1],
    randomIdx1
  );

  boards.subtractFromMinionHealth(G, player, randomIdx2, warcryNumber);
  boards.killMinionIfHealthIsZero(
    G,
    ctx,
    player,
    G.boards[player][randomIdx2],
    randomIdx2
  );
};

const CORE_126 = (G, ctx, currentPlayer, otherPlayer, cardId) => {
  G.spellObject[currentPlayer] = createSpellObject(cardId);
  G.boards[otherPlayer].forEach((slot, i) => {
    if (slot.currentHealth !== slot.totalHealth)
      boards.enableCanBeAttacked(G, otherPlayer, i);
  });
};

const CORE_127 = (G, ctx, player, cardId) => {
  playerCanAttack.enable(G, player);
  playWeaponByCardId(G, player, cardId);
};

const CORE_129 = (G, ctx, player, cardId) => {
  const cardObj = getCardByID(cardId);
  const warcryNumber = cardObj && cardObj.warcryNumber;
  playerShieldPoints.add(G, player, warcryNumber);
  drawCard(G, ctx, player, 1);
};

export default initCoreSpell;
