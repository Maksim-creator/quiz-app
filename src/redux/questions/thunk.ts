import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api';
import {Question} from '../../entities';
import {SerializedError} from '../auth/entities';
import {Quiz} from './entities';

export const getQuestionsThunk = createAsyncThunk<
  Question[],
  {category: string; count: number; topic: string},
  {rejectValue: SerializedError}
>(
  'questions/getQuestions',
  async ({category, count, topic}, {rejectWithValue}) => {
    try {
      const payload = {category, topic, limit: count};

      const {data} = await api.questions.getQuestions(payload);
      console.log(data);
      return data;
    } catch (e) {
      rejectWithValue(e as SerializedError);
    }
  },
);

export const getTopSelectedThunk = createAsyncThunk<
  Quiz,
  void,
  {rejectValue: SerializedError}
>('questions/getTopSelected', async (_, {rejectWithValue}) => {
  try {
    const {data} = await api.questions.getTopSelected();
    return data;
  } catch (e) {
    rejectWithValue(e as SerializedError);
  }
});

export const getCategoriesThunk = createAsyncThunk<
  {label: string; icon: string}[],
  void,
  {rejectValue: SerializedError}
>('questions/getCategories', async (_, {rejectWithValue}) => {
  try {
    const {data} = await api.questions.getCategories();
    return data;
  } catch (e) {
    rejectWithValue(e as SerializedError);
  }
});

export const getTopicsThunk = createAsyncThunk<
  Quiz,
  {category: string},
  {rejectValue: SerializedError}
>('questions/getTopics', async ({category}, {rejectWithValue}) => {
  try {
    const {data} = await api.questions.getTopics(category);
    return data;
  } catch (e) {
    rejectWithValue(e as SerializedError);
  }
});
