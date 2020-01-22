import { configureStore } from '@reduxjs/toolkit';

import rootReducer from 'rootReducer';
const rootReducerPath = 'rootReducer';

const store = configureStore({
  reducer: rootReducer
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(rootReducerPath, () => {
    const newRootReducer = require(rootReducerPath).default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
