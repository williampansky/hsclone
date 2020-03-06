import GAME_CONFIG from 'config/game.config';
import { TurnOrder } from 'boardgame.io/core';
import boards from 'lib/state/boards';
import energy from 'lib/state/energy';
import drawCardAtStartOfTurn from 'lib/utils/draw-turn-start-card';
import winner from 'lib/state/winner';
import playerCanAttack from 'lib/state/player-can-attack';
import playerCanUseClassSkill from 'lib/state/player-can-use-class-skill';
import getCardByID from 'lib/utils/get-card-by-id';
import counts from 'lib/state/counts';
import playerIsDisabled from 'lib/state/player-is-disabled';
import playerAttackValue from 'lib/state/player-attack-value';

const onBegin = (G, ctx) => {
  const { currentPlayer } = ctx;

  energy.incrementTotal(G, currentPlayer);
  energy.matchTotal(G, currentPlayer);
  drawCardAtStartOfTurn(G, ctx);

  G.boards[currentPlayer].forEach((slot, i) => {
    // disable canBeAttacked on your board minions
    boards.disableCanBeAttacked(G, currentPlayer, i);

    // enable canAttack on your board minions
    if (slot.currentAttack >= 1) {
      boards.enableCanAttack(G, currentPlayer, i);
    }

    // reset current player's minion stats back to total values,
    // which should reset turn-only enhancements
    slot.currentAttack = slot.totalAttack;

    // reset isDisabled state back to false
    slot.isDisabled = false;

    // kill minion if willExpire = true
    if (slot.willExpire === true) {
      boards.killMinion(G, ctx, currentPlayer, slot, i);
    }
  });

  // reset isDisabled state back to false
  playerIsDisabled.disable(G, currentPlayer);

  // either set attack value to weapon's attack
  if (G.playerWeapon[currentPlayer] !== null) {
    const atkValue = G.playerWeapon[currentPlayer].attack;
    playerAttackValue.set(G, currentPlayer, atkValue);
  } else {
    // or reset playerAttackValue state back to false
    playerAttackValue.reset(G, currentPlayer);
  }

  // if player has enough energy; enable playerCanUseClassSkill
  if (!GAME_CONFIG.debugData.enableCost)
    playerCanUseClassSkill.enable(G, currentPlayer);
  else if (G.energy[currentPlayer].current >= 2)
    playerCanUseClassSkill.enable(G, currentPlayer);

  // if player has weapon, enable attack
  if (G.playerWeapon[currentPlayer] !== null)
    playerCanAttack.enable(G, currentPlayer);

  // reset card states
  G.hoveringCardIndex = { '0': null, '1': null };
  G.selectedCardIndex = { '0': null, '1': null };
  G.selectedCardObject = { '0': null, '1': null };

  // reset minion states
  G.selectedMinionIndex = { '0': null, '1': null };
  G.selectedMinionObject = { '0': null, '1': null };

  // reset warcry states
  G.warcryObject = { '0': null, '1': null };

  // DEBUG
  if (
    GAME_CONFIG.debugData.debugCard !== null ||
    GAME_CONFIG.debugData.debugCard !== '' ||
    GAME_CONFIG.debugData.debugCard !== false
  ) {
    const debugCardID = GAME_CONFIG.debugData.debugCard;
    G.players[ctx.currentPlayer].hand.push(getCardByID(debugCardID));
    counts.incrementHand(G, ctx.currentPlayer);
  }
};

const onEnd = (G, ctx) => {
  const { health, turnOrder } = G;

  const PLAYER0_HEALTH = health[turnOrder['0']];
  if (PLAYER0_HEALTH === 0) winner.set(G, turnOrder['0']);
  else winner.set(G, turnOrder['1']);

  // reset player[0] minion states
  G.boards['0'].forEach((slot, i) => {
    G.boards['0'][i] = {
      ...slot,
      canAttack: false,
      canBeAttacked: false,
      canBeBuffed: false,
      canBeHealed: false
    };
  });

  // reset player[1] minion states
  G.boards['1'].forEach((slot, i) => {
    G.boards['1'][i] = {
      ...slot,
      canAttack: false,
      canBeAttacked: false,
      canBeBuffed: false,
      canBeHealed: false
    };
  });

  // reset player states
  G.playerCanAttack = { '0': false, '1': false };
  G.playerCanBeAttacked = { '0': false, '1': false };
  G.playerCanBeHealed = { '0': false, '1': false };
  G.playerIsAttacking = { '0': false, '1': false };

  // reset card states
  G.hoveringCardIndex = { '0': null, '1': null };
  G.selectedCardIndex = { '0': null, '1': null };
  G.selectedCardObject = { '0': null, '1': null };

  // reset minion states
  G.selectedMinionIndex = { '0': null, '1': null };
  G.selectedMinionObject = { '0': null, '1': null };

  // reset warcry states
  G.warcryObject = { '0': null, '1': null };
};

export default {
  turn: {
    order: TurnOrder.CUSTOM_FROM('turnOrder'),
    onBegin: (G, ctx) => onBegin(G, ctx),
    onEnd: (G, ctx) => onEnd(G, ctx)
  }
};
