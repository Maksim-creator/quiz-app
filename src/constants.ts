import {isAndroid} from './utils';

export const welcomeMessage = 'Welcome to Quizlet!';
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
