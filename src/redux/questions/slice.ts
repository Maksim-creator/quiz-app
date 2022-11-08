import {createSlice} from '@reduxjs/toolkit';
import {QuestionsState} from './entities';
import {
  getCategoriesThunk,
  getQuestionsThunk,
  getTopicsThunk,
  getTopSelectedThunk,
} from './thunk';

const initialState: QuestionsState = {
  questionsLoading: false,
  questions: [],
  questionsError: '',
  categories: [],
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
      state.questionsError = payload?.response.data.message;
    });
    builder.addCase(getTopSelectedThunk.pending, state => {
      state.topSelectedLoading = true;
    });
    builder.addCase(getTopSelectedThunk.fulfilled, (state, {payload}) => {
      state.topSelectedLoading = false;
      state.topSelected = payload;
    });
    builder.addCase(getTopSelectedThunk.rejected, (state, {payload}) => {
      state.topSelectedLoading = false;
      state.topSelectedError = payload?.response.data.message;
    });
    builder.addCase(getCategoriesThunk.pending, state => {
      state.categoriesLoading = true;
    });
    builder.addCase(getCategoriesThunk.fulfilled, (state, {payload}) => {
      state.questionsLoading = false;
      state.categories = payload;
    });
    builder.addCase(getCategoriesThunk.rejected, (state, {payload}) => {
      state.categoriesLoading = true;
      state.categoriesError = payload?.response.data.message;
    });
    builder.addCase(getTopicsThunk.pending, state => {
      state.topicLoading = true;
    });
    builder.addCase(getTopicsThunk.fulfilled, (state, {payload}) => {
      state.topicLoading = false;
      state.topic = payload;
    });
    builder.addCase(getTopicsThunk.rejected, (state, {payload}) => {
      state.topicLoading = false;
      state.topicError = payload?.response.data.message;
    });
  },
});

export default questionsSlice;
