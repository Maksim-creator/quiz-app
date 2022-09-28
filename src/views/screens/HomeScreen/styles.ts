import {Dimensions, StyleSheet} from 'react-native';
import {violet, white} from '../../../assets/colors';
import {isAndroid} from '../../../utils';

export default StyleSheet.create({
  container: {
    backgroundColor: violet,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  avatar: {
    top: -65,
    position: 'absolute',
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: white,
  },
  text: {
    textAlign: 'center',
    color: white,
    fontWeight: '700',
  },
  info: {
    marginTop: 15,
    alignSelf: 'center',
    width: '80%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    backgroundColor: violet,
    borderRadius: 15,
  },
  buttons: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    width: '85%',
    justifyContent: 'space-between',
  },
  wrapper: {
    backgroundColor: white,
    height: '75%',
    marginHorizontal: 10,
    borderRadius: 25,
    position: 'relative',
    justifyContent: 'space-between',
    marginBottom: isAndroid() ? 35 : 0,
  },
  label: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 13,
    color: white,
    opacity: 0.5,
    marginVertical: 3,
  },
  name: {
    paddingTop: 10,
    textAlign: 'center',
    marginTop: 60,
    fontWeight: '600',
    fontSize: 22,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '49%',
  },
});
