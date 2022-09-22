import {screenNames} from './screenNames';
import {Question} from '../entities';

export type NavigationStack = {
  [screenNames.INITIAL_SCREEN]: undefined;
  [screenNames.HOME_SCREEN]: undefined;
  [screenNames.QUIZ_SELECTION]: undefined;
  [screenNames.QUIZ_SCREEN]: {categoryName: string; imageUrl: string};
  [screenNames.RESULT]: {
    score: number;
    questions: Question[];
  };
};
