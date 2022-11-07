import {Platform} from 'react-native';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import DeviceInfo from 'react-native-device-info';

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const isAndroid = () => Platform.OS === 'android';

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Field is required'),
  email: Yup.string().email('Invalid email').required('Field is required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Field is required'),
  confirmPassword: Yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .oneOf([Yup.ref('password'), null], "Passwords don't match!")
    .required('Field is required'),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Field is required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Field is required'),
});
export const resetSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Field is required'),
});
export const showToast = (
  text: string,
  type: 'error' | 'success' | 'info' = 'error',
  duration: number = 3000,
  buttonText: string = 'OK',
) =>
  Toast.show({
    type,
    text1: text,
    position: 'bottom',
    visibilityTime: duration,
    props: {buttonText},
  });

export const isInRange = (val: number, min: number, max: number) =>
  val >= min && val <= max;

export const isTablet = () => DeviceInfo.isTablet();
