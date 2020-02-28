import { TurnOrder } from 'boardgame.io/core';
import boards from 'lib/state/boards';
import energy from 'lib/state/energy';
import drawCardAtStartOfTurn from 'lib/utils/draw-turn-start-card';
import winner from 'lib/state/winner';
import playerCanAttack from 'lib/state/player-can-attack';
import playerCanBeAttacked from 'lib/state/player-can-be-attacked';
import playerCanBeHealed from 'lib/state/player-can-be-healed';
import playerCanUseClassSkill from 'lib/state/player-can-use-class-skill';

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
  if (G.energy[currentPlayer].current >= 2)
    playerCanUseClassSkill.enable(G, currentPlayer);

  // reset both player's interaction hover states
  G.hoveringCardIndex[0] = null;
  G.hoveringCardIndex[1] = null;

  // reset both player's selected card states
  G.selectedCardIndex[0] = null;
  G.selectedCardIndex[1] = null;
  G.selectedCardObject[0] = null;
  G.selectedCardObject[1] = null;

  // reset both player's selected minion states
  G.selectedMinionIndex[0] = null;
  G.selectedMinionIndex[1] = null;
  G.selectedMinionObject[0] = null;
  G.selectedMinionObject[1] = null;

  // reset both player's warcry states
  G.warcryObject[0] = null;
  G.warcryObject[1] = null;
};

const onEnd = (G, ctx) => {
  const { health, turnOrder } = G;

  const PLAYER0_HEALTH = health[turnOrder['0']];
  if (PLAYER0_HEALTH === 0) winner.set(G, turnOrder['0']);
  else winner.set(G, turnOrder['1']);

  // disable all minions canAttack
  boards.disableAllCanAttack(G, '0');
  boards.disableAllCanAttack(G, '1');

  // disable all minions canBeAttacked
  boards.disableAllCanBeAttacked(G, '0');
  boards.disableAllCanBeAttacked(G, '1');

  // disable all minions canBeHealed
  boards.disableAllCanBeHealed(G, '0');
  boards.disableAllCanBeHealed(G, '1');

  // reset both player's canAttack states
  playerCanAttack.disable(G, ['0']);
  playerCanAttack.disable(G, ['1']);

  // reset both player's canBeAttacked states
  playerCanBeAttacked.disable(G, ['0']);
  playerCanBeAttacked.disable(G, ['1']);

  // reset both player's canBeHealed states
  playerCanBeHealed.disable(G, ['0']);
  playerCanBeHealed.disable(G, ['1']);

  // reset both player's interaction hover states
  G.hoveringCardIndex['0'] = null;
  G.hoveringCardIndex['1'] = null;

  // reset both player's selected card states
  G.selectedCardIndex['0'] = null;
  G.selectedCardIndex['1'] = null;
  G.selectedCardObject['0'] = null;
  G.selectedCardObject['1'] = null;

  // reset both player's selected minion states
  G.selectedMinionIndex['0'] = null;
  G.selectedMinionIndex['1'] = null;
  G.selectedMinionObject['0'] = null;
  G.selectedMinionObject['1'] = null;

  // reset both player's warcry states
  G.warcryObject['0'] = null;
  G.warcryObject['1'] = null;
};

export default {
  turn: {
    order: TurnOrder.CUSTOM_FROM('turnOrder'),
    onBegin: (G, ctx) => onBegin(G, ctx),
    onEnd: (G, ctx) => onEnd(G, ctx)
  }
};
