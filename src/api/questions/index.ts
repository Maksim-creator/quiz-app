import {client} from '../api.config';
import {baseLocalUrl} from '../constants';

export default {
  getQuestions: (payload: {category: string; topic: string; limit: number}) =>
    client.post('quizzes', payload, {baseURL: baseLocalUrl}),
  getTopSelected: () =>
    client.get('quizzes/topSelected', {baseURL: baseLocalUrl}),
  getCategories: () =>
    client.get('quizzes/categories', {baseURL: baseLocalUrl}),
  getTopics: (category: string) =>
    client.post('quizzes/topics', {category}, {baseURL: baseLocalUrl}),
};
