import {StyleSheet} from 'react-native';
import {white} from '../../../assets/colors';

export default StyleSheet.create({
  timerContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  timer: {
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: white,
    borderRadius: 100,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 25,
    color: white,
    paddingTop: 10,
  },
});
