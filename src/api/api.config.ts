import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import {setWith} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseQuizUrl} from './constants';

const transformResponse = (data: any) => {
  try {
    if (data) {
      const json = JSON.parse(data);

      if (json === Object(json)) {
        return camelcaseKeys(json, {deep: true});
      }

      return json;
    }
    return '';
  } catch (e) {
    console.error('Can not parse response data', data);
    return '';
  }
};

export const client = axios.create({
  baseURL: baseQuizUrl,
  transformResponse: transformResponse,
});

client.interceptors.request.use(async (requestConfig: any) => {
  try {
    return setWith(
      requestConfig,
      'headers.Authorization',
      await AsyncStorage.getItem('token'),
    );
  } catch (e) {
    return null;
  }
});
