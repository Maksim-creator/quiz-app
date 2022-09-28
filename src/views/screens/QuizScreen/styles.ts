import {StyleSheet} from 'react-native';
import {violet} from '../../../../assets/colors';
import {isAndroid} from '../../../utils';

export default StyleSheet.create<any>({
  container: {
    height: '100%',
    backgroundColor: violet,
  },
  backIcon: {
    position: 'absolute',
    top: isAndroid() ? 10 : 50,
    left: 15,
    zIndex: 2,
  },
});
