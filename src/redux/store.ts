import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {reducer as auth} from './auth';
import {reducer as questions} from './questions';
import {reducer as leaderboard} from './leaderboard';

const rootReducer = combineReducers({
  auth,
  questions,
  leaderboard,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
