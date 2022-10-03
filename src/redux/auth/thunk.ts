import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api';
import {navigate} from '../../navigation/navigationService';
import {screenNames} from '../../navigation/screenNames';
import {
  SignInPayload,
  SignUpPayload,
  SerializedError,
  SignInResponse,
  SignUpResponse,
} from './entities';

export const signUpThunk = createAsyncThunk<
  SignUpResponse,
  SignUpPayload,
  {rejectValue: SerializedError}
>('auth/signUp', async ({email, password, name}, {rejectWithValue}) => {
  try {
    const {data} = await api.auth.signUp({email, password, name});
    navigate(screenNames.HOME_SCREEN);

    return data;
  } catch (e) {
    return rejectWithValue(e as SerializedError);
  }
});

export const signInThunk = createAsyncThunk<
  SignInResponse,
  SignInPayload,
  {rejectValue: SerializedError}
>('auth/signIn', async ({email, password}, {rejectWithValue}) => {
  try {
    const {data} = await api.auth.signIn({email, password});
    navigate(screenNames.HOME_SCREEN);

    return data;
  } catch (e) {
    return rejectWithValue(e as SerializedError);
  }
});
