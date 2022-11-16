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
  getLeaderboard: () =>
    client.get('users/leaderboard', {baseURL: baseLocalUrl}),
  uploadAvatar: (data: any) =>
    client.post('users/upload', data, {
      headers: {
        Accept: 'application/json',
      },
      baseURL: baseLocalUrl,
    }),
  getAvatar: () =>
    client.get('users/getAvatar', {
      baseURL: baseLocalUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    }),
  getUserLeader: () => client.get('users/leader', {baseURL: baseLocalUrl}),
};
