import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api';
import {SerializedError} from '../auth/entities';

export const getLeaderboardThunk = createAsyncThunk<
  {totalExperience: number; name: string}[],
  void
>('leaderboard/getLeaderboard', async (_, {rejectWithValue}) => {
  try {
    const {data} = await api.user.getLeaderboard();
    return data;
  } catch (e) {
    return rejectWithValue(e as SerializedError);
  }
});
