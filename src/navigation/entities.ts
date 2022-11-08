import {screenNames} from './screenNames';
import {Question} from '../entities';

export type NavigationStack = {
  [screenNames.INITIAL_SCREEN]: undefined;
  [screenNames.USER_PROFILE]: undefined;
  [screenNames.QUIZ_SELECTION]: {categoryName?: string};
  [screenNames.QUIZ_SCREEN]: {
    categoryName: string;
    topicName: string;
    author: string;
  };
  [screenNames.RESULT]: {
    score: number;
    questions: Question[];
  };
  [screenNames.SIGN_UP]: undefined;
  [screenNames.SIGN_IN]: undefined;
  [screenNames.DISCOVER]: undefined;
  [screenNames.HOME]: undefined;
  [screenNames.STATISTICS]: undefined;
  [screenNames.TOPICS]: {category: string};
  [screenNames.RECOVERY_SCREEN]: undefined;
};
