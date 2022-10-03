import {createSlice} from '@reduxjs/toolkit';
import {signInThunk, signUpThunk} from './thunk';
import {AuthState} from './entities';

const initialState: AuthState = {
  loading: false,
  email: '',
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUpThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(signUpThunk.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.email = payload.email;
      state.name = payload.name;
      state.data = payload.data;
    });
    builder.addCase(signUpThunk.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
    builder.addCase(signInThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(signInThunk.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.email = payload.email;
      state.name = payload.name;
      state.data = payload.data;
    });
    builder.addCase(signInThunk.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

export default authSlice;
