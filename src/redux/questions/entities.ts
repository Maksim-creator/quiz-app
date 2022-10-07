import {Question} from '../../entities';

export interface QuestionsState {
  questionsLoading: boolean;
  questions: Question[];
  questionsError?: string;
}
