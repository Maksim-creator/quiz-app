import {isAndroid} from './utils';

export const xApiKey = 'bkbUKh3iV0hLIuCsht7H9uKt1HU2nIwCOSqzGgh1';

export const quotes = [
  {
    quote:
      '"Success is one percent inspiration, ninety-nine percent perspiration"',
    author: ' - Thomas Edison',
  },
  {
    quote: '"Never regret anything that made you smile."',
    author: ' - Mark Twain',
  },
  {
    quote: '"Kill them with success and bury them with a smile."',
    author: ' - Unknown',
  },
];

export const animations = [
  {
    path: require('./assets/dog.json'),
    styles: {width: 70, height: 70, top: isAndroid() ? -30 : -20, right: 10},
  },
  {
    path: require('./assets/dog_grey.json'),
    styles: {width: 70, height: 70, top: isAndroid() ? -31 : -20, left: 15},
  },
  {
    path: require('./assets/dog_yellow.json'),
    styles: {width: 70, height: 70, top: isAndroid() ? -29 : -19, left: 10},
  },
];

export const registrationFields = [
  {name: 'name', placeholder: 'Your name', label: 'Name', iconName: 'account'},
  {
    name: 'email',
    placeholder: 'Your email address',
    label: 'Email',
    iconName: 'email-outline',
  },
  {
    name: 'password',
    placeholder: 'Your password',
    label: 'Password',
    iconName: 'lock-outline',
    isPassword: true,
  },
  {
    name: 'confirmPassword',
    placeholder: 'Confirm your password',
    label: 'Confirm Password',
    iconName: 'lock-outline',
    isPassword: true,
  },
];

export const results = [
  {
    message: 'Can be better!',
    min: 0,
    max: 15,
    colors: {
      main: '#CD7F32',
      shadow: '#a86421',
    },
  },
  {
    message: 'Never give up!',
    min: 16,
    max: 30,
    colors: {
      main: '#CD7F32',
      shadow: '#a86421',
    },
  },
  {
    message: 'Well!',
    min: 31,
    max: 50,
    colors: {main: '#C0C0C0', shadow: '#ababab'},
  },
  {
    message: 'Super!',
    min: 51,
    max: 75,
    colors: {main: '#C0C0C0', shadow: '#ababab'},
  },
  {
    message: 'Perfect!',
    min: 76,
    max: 95,
    colors: {main: '#FFD700', shadow: '#bba00e'},
  },
  {
    message: 'Excellent!',
    min: 96,
    max: 100,
    colors: {main: '#FFD700', shadow: '#bba00e'},
  },
];

export const badgeColors = {
  bronze: {
    palette: {
      outer: '#CF751C',
      moon: 'rgba(234,200,128,0.53)',
      inner: '#C98A26',
      starOuter: '#CC8F47',
      starInner: 'rgba(255,168,0,0.23)',
    },
  },
  silver: {
    palette: {
      outer: '#C0C0C0',
      moon: '#C0C0C0',
      inner: '#DCDCDC',
      starOuter: '#EDEDED',
      starInner: '#FFFFFF',
    },
  },
  gold: {
    palette: {
      outer: '#FFC850',
      moon: '#FFC850',
      inner: '#E1A546',
      starOuter: '#FFFFFF',
      starInner: '#FFFAB4',
    },
  },
};
