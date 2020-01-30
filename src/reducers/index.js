import { combineReducers } from '@reduxjs/toolkit';

import goldSlice from 'features/gold/gold.slice';
// import cardsSlice from 'features/cards/cards.slice';
// import matchSlice from 'features/match/match.slice';
import yourEnergySlice from '~/features/energy/yourEnergy.slice';
import yourEnergyTotalSlice from '~/features/energy/yourEnergyTotal.slice';
import theirEnergySlice from '~/features/energy/theirEnergy.slice';
import theirEnergyTotalSlice from '~/features/energy/theirEnergyTotal.slice';
import yourHandSlice from 'features/yourHand/yourHand.slice';
import yourBoardSlice from 'features/yourBoard/yourBoard.slice';
// import targetingSlice from 'features/targeting/targeting.slice';

const rootReducer = combineReducers({
  gold: goldSlice,
  // cards: cardsSlice,
  // match: matchSlice,
  theirEnergy: theirEnergySlice,
  theirEnergyTotal: theirEnergyTotalSlice,
  yourEnergy: yourEnergySlice,
  yourEnergyTotal: yourEnergyTotalSlice,
  yourHand: yourHandSlice,
  yourBoard: yourBoardSlice
  // targeting: targetingSlice
});

export default rootReducer;
