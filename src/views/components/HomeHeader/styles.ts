import {StyleSheet} from 'react-native';
import {white} from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  userInfo: {
    height: 60,
    justifyContent: 'space-around',
  },
  dayInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayInfoText: {
    color: '#d0afde',
    fontWeight: '700',
    marginLeft: 5,
  },
  name: {
    color: white,
    fontWeight: '700',
    fontSize: 20,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
