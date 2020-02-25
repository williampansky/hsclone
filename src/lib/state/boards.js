// prettier-ignore
import { _dMCA, _dAMCA, _eMCA, _eAMCA } from 'lib/state/board-methods/can-attack';
// prettier-ignore
import { _dMCBA, _dAMCBA, _eMCBA, _eAMCBA } from 'lib/state/board-methods/can-be-attacked';
// prettier-ignore
import { _dMCBH, _dAMCBH, _eMCBH, _eAMCBH } from 'lib/state/board-methods/can-be-healed';
import { _dAMT, _dHMT, _dWT } from 'lib/state/board-methods/determinations';
import { _kM, _kM0 } from 'lib/state/board-methods/kill-minion';
import { _aTMH, _sFMH } from 'lib/state/board-methods/minion-health';
import { _pC } from 'lib/state/board-methods/place-card-on-board';

// prettier-ignore
const boards = {
  __DATA_MODEL: {
    '0': [],
    '1': []
  },

  // minion health
  addToMinionHealth: (G, player, index, amount) => _aTMH(G, player, index, amount),
  subtractFromMinionHealth: (G, player, index, amount) => _sFMH(G, player, index, amount),

  // target determination
  determineAttackTargets: (G, player) => _dAMT(G, player),
  determineHealTargets: (G, player) => _dHMT(G, player),
  determineWarcryTargets: (G, player) => _dWT(G, player),

  // canAttack
  disableCanAttack: (G, player, index) => _dMCA(G, player, index),
  disableAllCanAttack: (G, player) => _dAMCA(G, player),
  enableCanAttack: (G, player, index) => _eMCA(G, player, index),
  enableAllCanAttack: (G, player) => _eAMCA(G, player),
  
  // canBeAttacked
  disableCanBeAttacked: (G, player, index) => _dMCBA(G, player, index),
  disableAllCanBeAttacked: (G, player) => _dAMCBA(G, player),
  enableCanBeAttacked: (G, player, index) => _eMCBA(G, player, index),
  enableAllCanBeAttacked: (G, player) => _eAMCBA(G, player),

  // canBeHealed
  disableCanBeHealed: (G, player, index) => _dMCBH(G, player, index),
  disableAllCanBeHealed: (G, player, index) => _dAMCBH(G, player, index),
  enableCanBeHealed: (G, player, index) => _eMCBH(G, player, index),
  enableAllCanBeHealed: (G, player, index) => _eAMCBH(G, player, index),

  // kill minion methods
  killMinion: (G, ctx, player, boardSlot, index) => _kM(G, ctx, player, boardSlot, index),
  killMinionIfHealthIsZero: (G, ctx, player, boardSlot, index) => _kM0(G, ctx, player, boardSlot, index),

  // card placement
  placeCardOnBoard: (G, player, boardSlotObject, index) => _pC(G, player, boardSlotObject, index),
};

export default boards;
