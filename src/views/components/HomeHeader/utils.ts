import {isInRange} from '../../../utils';

export const renderGreeting = () => {
  const hours = new Date().getHours();
  if (isInRange(hours, 0, 6)) {
    return {
      label: 'GOOD NIGHT',
      iconName: 'weather-night',
    };
  } else if (isInRange(hours, 7, 12)) {
    return {
      label: 'GOOD MORNING',
      iconName: 'weather-sunny',
    };
  } else if (isInRange(hours, 13, 18)) {
    return {
      label: 'GOOD AFTERNOON',
      iconName: 'weather-sunny',
    };
  } else if (isInRange(hours, 19, 23)) {
    return {
      label: 'GOOD EVENING',
      iconName: 'weather-sunset',
    };
  } else {
    return {
      label: 'Hello!',
      iconName: 'emoticon-outline',
    };
  }
};
