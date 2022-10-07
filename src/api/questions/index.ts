import {client} from '../api.config';
import {xApiKey} from '../../constants';

export default {
  getQuestions: (category: string, count: number) =>
    client.get(`/questions?category=${category}&limit=${count}`, {
      headers: {
        'X-Api-Key': xApiKey,
      },
    }),
};
