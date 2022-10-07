import {createSlice} from '@reduxjs/toolkit';
import {QuestionsState} from './entities';
import {getQuestionsThunk} from './thunk';

const initialState: QuestionsState = {
  questionsLoading: false,
  questions: [],
  questionsError: '',
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getQuestionsThunk.pending, state => {
      state.questionsLoading = true;
    });
    builder.addCase(getQuestionsThunk.fulfilled, (state, {payload}) => {
      state.questionsLoading = false;
      state.questions = payload;
    });
    builder.addCase(getQuestionsThunk.rejected, (state, {payload}) => {
      state.questionsLoading = false;
      state.questionsError = payload?.message;
    });
  },
});

export default questionsSlice;
