import {Question} from '../../entities';

export interface QuestionsState {
  questionsLoading: boolean;
  questions: Question[];
  questionsError?: string;
  topSelected?: Quiz;
  topSelectedLoading?: boolean;
  topSelectedError?: string;
  categories: Category[];
  categoriesLoading?: boolean;
  categoriesError?: string;
  topic?: Quiz;
  topicLoading?: boolean;
  topicError?: string;
}

export interface Quiz {
  category: string;
  icon: string;
  data: {
    topic: string;
    selectedTimes: number;
    quiz: Question[];
    author: string;
  }[];
  id: number;
  selectedTimes: number;
}

export interface Category {
  label: string;
  icon: string;
}
