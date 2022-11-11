import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {reducer as auth} from './auth';
import {reducer as questions} from './questions';
import {reducer as leaderboard} from './leaderboard';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  auth,
  questions,
  leaderboard,
});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['questions'],
};

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
