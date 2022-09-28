import {StyleSheet} from 'react-native';
import {white} from '../../../assets/colors';
import {isAndroid} from '../../../utils';

export default StyleSheet.create({
  container: {
    height: isAndroid() ? '85%' : '75%',
    backgroundColor: white,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  icon: {alignSelf: 'flex-end'},
  label: {
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  clock: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginVertical: 20,
  },
  quoteWrapper: {
    width: '85%',
    alignSelf: 'flex-end',
    marginTop: 30,
  },
  quote: {
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: 17,
  },
  author: {
    fontStyle: 'normal',
  },
});
