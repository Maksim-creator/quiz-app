import {StyleSheet} from 'react-native';
import {white} from '../../../assets/colors';
import {isTablet} from '../../../utils';

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },
  description: {
    textAlign: 'center',
  },
  container: {
    height: '70%',
    backgroundColor: '#f6f5fb',
    borderRadius: 15,
    position: 'relative',
  },
  topImage: {
    height: isTablet() ? 120 : 50,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  closeIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  card: {
    alignSelf: 'center',
    width: '80%',
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: white,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.5,
    marginTop: 25,
    paddingVertical: 9,
    backgroundColor: white,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: isTablet() ? 'space-around' : 'space-between',
  },
  cardInfo: {
    width: '80%',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 13,
    fontWeight: '700',
  },
  progressLine: {
    position: 'relative',
    width: '80%',
    justifyContent: 'center',
  },
  outerLine: {
    width: '100%',
    height: 6,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: white,
  },
  innerLine: {
    position: 'absolute',

    height: 4,
    borderRadius: 25,
    backgroundColor: 'green',
  },
  score: {
    paddingTop: 2,
    fontWeight: '600',
    fontSize: 14,
  },
});
