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
  Badge,
} from './entities';
import {showToast} from '../../utils';
import {AxiosError} from 'axios';

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
    if (e instanceof AxiosError) {
      showToast(e.response?.data.message);
      return rejectWithValue(e as SerializedError);
    }
  }
});

export const signInThunk = createAsyncThunk<
  SignInResponse,
  SignInPayload,
  {rejectValue: SerializedError}
>('auth/signIn', async ({email, password}, {rejectWithValue}) => {
  try {
    const {data} = await api.auth.signIn({email, password});
    if (data) {
      await AsyncStorage.setItem('token', data.token);
      navigate(screenNames.HOME);
    }
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      showToast(e.response?.data.message);
      return rejectWithValue(e as SerializedError);
    }
  }
});

export const updateUserExperience = createAsyncThunk<
  {data: UserData},
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

export const getUserBadgesThunk = createAsyncThunk<
  Badge[],
  void,
  {rejectValue: SerializedError}
>('user/getBadges', async (_, {rejectWithValue}) => {
  try {
    const {data} = await api.user.getBadges();
    return data;
  } catch (e) {
    return rejectWithValue(e as SerializedError);
  }
});

export const signOutThunk = createAsyncThunk<
  void,
  void,
  {rejectValue: SerializedError}
>('auth/signOut', async (_, {rejectWithValue}) => {
  try {
    await AsyncStorage.clear();
    navigate(screenNames.INITIAL_SCREEN);
  } catch (e) {
    return rejectWithValue(e as SerializedError);
  }
});
