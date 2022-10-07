import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api';
import {Question} from '../../entities';
import {SerializedError} from '../auth/entities';

export const getQuestionsThunk = createAsyncThunk<
  Question[],
  {category: string; count: number},
  {rejectValue: SerializedError}
>('questions/getQuestions', async ({category, count}, {rejectWithValue}) => {
  try {
    const {data} = await api.questions.getQuestions(category, count);

    return data.filter(
      (item: Question) => item.multipleCorrectAnswers === 'false',
    );
  } catch (e) {
    rejectWithValue(e as SerializedError);
  }
});
