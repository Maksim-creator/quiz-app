import {client} from '../api.config';
import {baseLocalUrl} from '../constants';

export default {
  signUp: (payload: {email: string; password: string; name: string}) =>
    client.post('auth/registration', payload, {
      baseURL: baseLocalUrl,
    }),
  signIn: (payload: {email: string; password: string}) =>
    client.post('auth/login', payload, {
      baseURL: baseLocalUrl,
    }),
  resetPassword: (payload: {email: string}) =>
    client.post('/resetPassword', payload, {
      baseURL: baseLocalUrl,
    }),
};
