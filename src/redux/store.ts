import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {reducer as auth} from './auth';

const rootReducer = combineReducers({
  auth,
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
