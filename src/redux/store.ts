import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {reducer as auth} from './auth';
import {reducer as questions} from './questions';

const rootReducer = combineReducers({
  auth,
  questions,
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
