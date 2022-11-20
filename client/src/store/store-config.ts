import { createEpicMiddleware } from 'redux-observable';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';
import epics from './epics';

const epicMiddleware = createEpicMiddleware();

export const getStore = () => {
  const combinedReducers = combineReducers(reducers);
  const preloadedState = {};

  const store = configureStore({
    reducer: combinedReducers,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware)
  });

  epicMiddleware.run(epics);

  return store;
};
