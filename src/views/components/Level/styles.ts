import {StyleSheet} from 'react-native';
import {white} from '../../../assets/colors';

export default StyleSheet.create<any>({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  level: {
    zIndex: 10,
    height: 40,
    width: 40,
    backgroundColor: 'rgb(176,142,232)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: white,
  },
  levelText: {
    color: white,
  },
  progressBar: {
    left: -15,
    zIndex: 5,
  },
  inner: {
    width: 120,
    height: 25,
    borderRadius: 40,
    backgroundColor: white,
    opacity: 0.4,
  },
  outer: (completed: number) => ({
    borderRadius: 40,
    width: completed,
    height: 25,
    backgroundColor: '#e2ddf1',
    position: 'absolute',
  }),
  popover: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'rgb(195,139,224)',
  },
});
