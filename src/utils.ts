import {Platform} from 'react-native';

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const isAndroid = () => Platform.OS === 'android';
