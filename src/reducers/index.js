import { combineReducers } from '@reduxjs/toolkit';

// import goldSlice from 'features/gold/gold.slice';
// import cardsSlice from 'features/cards/cards.slice';
// import matchSlice from 'features/match/match.slice';
import theirBoardSlice from 'features/boards/theirBoard.slice';
import theirEnergySlice from '~/features/energy/theirEnergy.slice';
import theirEnergyTotalSlice from '~/features/energy/theirEnergyTotal.slice';
import theirHealthSlice from 'features/players/theirHealth.slice';

import yourBoardSlice from '~/features/boards/yourBoard.slice';
import yourEnergySlice from '~/features/energy/yourEnergy.slice';
import yourEnergyTotalSlice from '~/features/energy/yourEnergyTotal.slice';
import yourHandSlice from 'features/yourHand/yourHand.slice';
import yourHealthSlice from 'features/players/yourHealth.slice';

import turnSlice from 'features/turn/turn.slice';

import minionCanAttackSlice from 'features/targeting/minionCanAttack.slice';
import minionIsAttackingSlice from 'features/targeting/minionIsAttacking.slice';

const rootReducer = combineReducers({
  // gold: goldSlice,
  // cards: cardsSlice,
  // match: matchSlice,

  // their stats
  theirEnergy: theirEnergySlice,
  theirEnergyTotal: theirEnergyTotalSlice,
  theirHealth: theirHealthSlice,
  theirBoard: theirBoardSlice,

  // your stats
  yourEnergy: yourEnergySlice,
  yourEnergyTotal: yourEnergyTotalSlice,
  yourHealth: yourHealthSlice,
  yourHand: yourHandSlice,
  yourBoard: yourBoardSlice,

  minionCanAttack: minionCanAttackSlice,
  minionIsAttacking: minionIsAttackingSlice,

  // turns
  turn: turnSlice
});

export default rootReducer;
