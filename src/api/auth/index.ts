import {client} from '../api.config';

export default {
  signUp: (payload: {email: string; password: string; name: string}) =>
    client.post('auth/registration', payload, {
      baseURL: 'http://localhost:7001/',
    }),
  signIn: (payload: {email: string; password: string}) =>
    client.post('auth/login', payload, {
      baseURL: 'http://localhost:7001/',
    }),
};
