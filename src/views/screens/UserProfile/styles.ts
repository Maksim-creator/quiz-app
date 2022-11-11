import {Dimensions, StyleSheet} from 'react-native';
import {violet, white} from '../../../assets/colors';
import {isAndroid, isTablet} from '../../../utils';

export default StyleSheet.create<any>({
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
    width: isTablet() ? '50%' : '80%',
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
  tabIndicator: {
    backgroundColor: violet,
    width: 7,
    height: 7,
    borderRadius: 100,
    left: (Dimensions.get('screen').width - 20 - 7) / 6, // total width - marginHorizontal - indicatorWidth / totalTabs * 2
  },
  tabBar: {
    backgroundColor: white,
    marginTop: 15,
    shadowOffset: {height: 0, width: 0},
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
  },
  tabText: (focused: boolean) => ({
    color: focused ? violet : '#adaaaa',
    fontWeight: '700',
    fontSize: 14,
  }),
  sceneContainer: {borderBottomWidth: 0},
  initialLayout: {width: Dimensions.get('screen').width},
  signOutIcon: {
    right: 20,
    position: 'absolute',
    top: isAndroid() ? 8 : 56,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});
