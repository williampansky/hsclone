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
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  energy.incrementTotal(G, currentPlayer);
  energy.matchTotal(G, currentPlayer);
  drawCardAtStartOfTurn(G, ctx);

  G.boards[currentPlayer].forEach((slot, i) => {
    // disable can be attacked on your board minions
    boards.disableCanBeAttacked(G, currentPlayer, i);

    // enable canAttack on your board minions
    if (slot.currentAttack >= 1 && !slot.isDisabled) {
      boards.enableCanAttack(G, currentPlayer, i);
    }

    // reset player's minion stats back to total values,
    // which should reset turn-only enhancements
    slot.currentAttack = slot.totalAttack;

    // handle disabled mechanic
    if (slot.isDisabled === true) {
      // deincrement isDisabledFor integer
      slot.isDisabledFor = Math.abs(slot.isDisabledFor - 1);

      // re-enable minion if disabled integer hits zero
      if (slot.isDisabledFor === 0) slot.isDisabled = false;
    } else {
      slot.isDisabledFor = 2;
    }

    // handle expiration mechanic
    if (slot.willExpire === true) {
      // deincrement willExpireIn integer
      slot.willExpireIn = Math.abs(slot.willExpireIn - 1);

      // kill minion if expiration integer hits zero
      if (slot.willExpireIn === 0)
        boards.killMinion(G, ctx, currentPlayer, slot, i);
    } else {
      slot.willExpireIn = 2;
    }
  });

  G.boards[otherPlayer].forEach((slot, i) => {
    // reset player's minion stats back to total values,
    // which should reset turn-only enhancements
    slot.currentAttack = slot.totalAttack;

    // handle disabled mechanic
    if (slot.isDisabled === true) {
      // deincrement isDisabledFor integer
      slot.isDisabledFor = Math.abs(slot.isDisabledFor - 1);

      // re-enable minion if disabled integer hits zero
      if (slot.isDisabledFor === 0) slot.isDisabled = false;
    } else {
      slot.isDisabledFor = 2;
    }

    // handle expiration mechanic
    if (slot.willExpire === true) {
      // deincrement willExpireIn integer
      slot.willExpireIn = Math.abs(slot.willExpireIn - 1);

      // kill minion if expiration integer hits zero
      if (slot.willExpireIn === 0)
        boards.killMinion(G, ctx, otherPlayer, slot, i);
    } else {
      slot.willExpireIn = 2;
    }
  });

  // reset isDisabled state back to false
  playerIsDisabled.disable(G, currentPlayer);

  // // either set attack value to weapon's attack
  // if (G.playerWeapon[currentPlayer] !== null) {
  //   const atkValue = G.playerWeapon[currentPlayer].attack;
  //   playerAttackValue.set(G, currentPlayer, atkValue);
  // } else {
  //   // or reset playerAttackValue state back to false
  //   playerAttackValue.reset(G, currentPlayer);
  // }

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
  if (GAME_CONFIG.debugData.enableDebugCard === true) {
    const debugCardID = GAME_CONFIG.debugData.debugCard;
    G.players[ctx.currentPlayer].hand.push(getCardByID(debugCardID));
    counts.incrementHand(G, ctx.currentPlayer);
  }
};

const onEnd = (G, ctx) => {
  // reset player[0] minion states
  G.boards['0'].forEach((slot, i) => {
    G.boards['0'][i] = {
      ...slot,
      canAttack: false,
      canBeAttackedByMinion: false,
      canBeAttackedByPlayer: false,
      canBeAttackedBySpell: false,
      canBeAttackedByWarcry: false,
      canBeBuffed: false,
      canBeHealed: false
    };
  });

  // reset player[1] minion states
  G.boards['1'].forEach((slot, i) => {
    G.boards['1'][i] = {
      ...slot,
      canAttack: false,
      canBeAttackedByMinion: false,
      canBeAttackedByPlayer: false,
      canBeAttackedBySpell: false,
      canBeAttackedByWarcry: false,
      canBeBuffed: false,
      canBeHealed: false
    };
  });

  // reset player states
  G.playerCanAttack = { '0': false, '1': false };
  G.playerCanBeAttackedByMinion = { '0': false, '1': false };
  G.playerCanBeAttackedByPlayer = { '0': false, '1': false };
  G.playerCanBeAttackedBySpell = { '0': false, '1': false };
  G.playerCanBeAttackedByWarcry = { '0': false, '1': false };
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

  // reset animation states
  G.animationStates.playerIsAttackingPlayer['0'] = false;
  G.animationStates.playerIsAttackingPlayer['1'] = false;
};

const endIf = G => {
  const PLAYER0_HEALTH = G.health[G.turnOrder['0']];
  if (PLAYER0_HEALTH === 0) G.winner = G.turnOrder['0'];
  else G.winner = G.turnOrder['1'];
};

export default {
  turn: {
    order: TurnOrder.CUSTOM_FROM('turnOrder'),
    onBegin: (G, ctx) => onBegin(G, ctx),
    onEnd: (G, ctx) => onEnd(G, ctx)
    // endIf: G => endIf(G)
  }
};
