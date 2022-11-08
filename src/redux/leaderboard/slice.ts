import {createSlice} from '@reduxjs/toolkit';
import {getLeaderboardThunk} from './thunk';
import {InitialState} from './entinties';

const initialState: InitialState = {
  leaderboard: [],
  leaderboardLoading: false,
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLeaderboardThunk.pending, state => {
      state.leaderboardLoading = true;
    });
    builder.addCase(getLeaderboardThunk.fulfilled, (state, action) => {
      state.leaderboardLoading = false;
      state.leaderboard = action.payload;
    });
    builder.addCase(getLeaderboardThunk.rejected, (state, action) => {
      state.leaderboardLoading = false;
      state.leaderboard = [];
      state.leaderboardError = action.error.message;
    });
  },
});

export default leaderboardSlice;
