import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

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
  baseURL: 'https://quizapi.io/api/v1',
  transformResponse: transformResponse,
});
