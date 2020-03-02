import GAME_CONFIG from 'config/game.config';
import { TurnOrder } from 'boardgame.io/core';
import boards from 'lib/state/boards';
import energy from 'lib/state/energy';
import drawCardAtStartOfTurn from 'lib/utils/draw-turn-start-card';
import winner from 'lib/state/winner';
import playerCanAttack from 'lib/state/player-can-attack';
import playerCanUseClassSkill from 'lib/state/player-can-use-class-skill';
import getCardByID from 'lib/utils/get-card-by-id';

const onBegin = (G, ctx) => {
  const { currentPlayer } = ctx;

  energy.incrementTotal(G, currentPlayer);
  energy.matchTotal(G, currentPlayer);
  drawCardAtStartOfTurn(G, ctx);

  for (let i = 0; i < G.boards[currentPlayer].length; i++) {
    // disable canBeAttacked on your board minions
    boards.disableCanBeAttacked(G, currentPlayer, i);

    // enable canAttack on your board minions
    boards.enableCanAttack(G, currentPlayer, i);
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
  G.players[ctx.currentPlayer].hand.push(getCardByID('CORE_122'));
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
