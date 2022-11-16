import {createSlice} from '@reduxjs/toolkit';
import {getLeaderboardThunk, getUserLeaderThunk} from './thunk';
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
    builder.addCase(getUserLeaderThunk.pending, state => {
      state.leaderLoading = true;
    });
    builder.addCase(getUserLeaderThunk.fulfilled, (state, action) => {
      state.leaderLoading = false;
      state.leader = action.payload;
    });
    builder.addCase(getUserLeaderThunk.rejected, (state, action) => {
      state.leaderLoading = false;
      state.leaderError = action.error.message;
    });
  },
});

export default leaderboardSlice;
