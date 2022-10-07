import {createSlice} from '@reduxjs/toolkit';
import {
  signInThunk,
  signOutThunk,
  signUpThunk,
  updateUserExperience,
} from './thunk';
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
      state.error = '';
    });
    builder.addCase(signUpThunk.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload?.response.data.message;
    });
    builder.addCase(signInThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(signInThunk.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.email = payload.email;
      state.name = payload.name;
      state.data = payload.data;
      state.error = '';
    });
    builder.addCase(signInThunk.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload?.response.data.message;
    });
    builder.addCase(updateUserExperience.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateUserExperience.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(updateUserExperience.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(signOutThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(signOutThunk.fulfilled, () => ({
      ...initialState,
    }));
    builder.addCase(signOutThunk.rejected, state => {
      state.loading = false;
    });
  },
});

export default authSlice;
