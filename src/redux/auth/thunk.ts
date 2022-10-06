import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api';
import {navigate} from '../../navigation/navigationService';
import {screenNames} from '../../navigation/screenNames';
import {
  SignInPayload,
  SignUpPayload,
  SerializedError,
  SignInResponse,
  SignUpResponse,
  UserData,
} from './entities';

export const signUpThunk = createAsyncThunk<
  SignUpResponse,
  SignUpPayload,
  {rejectValue: SerializedError}
>('auth/signUp', async ({email, password, name}, {rejectWithValue}) => {
  try {
    const {data} = await api.auth.signUp({email, password, name});
    navigate(screenNames.HOME_SCREEN);
    await AsyncStorage.setItem('token', data.token);
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
    await AsyncStorage.setItem('token', data.token);

    return data;
  } catch (e) {
    return rejectWithValue(e as SerializedError);
  }
});

export const updateUserExperience = createAsyncThunk<
  UserData,
  {points: number},
  {rejectValue: SerializedError}
>('auth/userExperience', async ({points}, {rejectWithValue}) => {
  try {
    const {data} = await api.user.updateExperience({points});
    return data;
  } catch (e) {
    return rejectWithValue(e as SerializedError);
  }
});
