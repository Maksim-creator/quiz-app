import {client} from '../api.config';
import {baseLocalUrl} from '../constants';

export default {
  getAccountInfo: (payload: {email: string}) =>
    client.post('users/user', payload, {baseURL: baseLocalUrl}),
  updateExperience: (payload: {points: number}) =>
    client.put('users/updatePoints', payload, {
      baseURL: baseLocalUrl,
    }),
  getBadges: () => client.get('/badges', {baseURL: baseLocalUrl}),
};
