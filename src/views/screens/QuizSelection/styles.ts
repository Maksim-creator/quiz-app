import {StyleSheet} from 'react-native';
import {violet, white} from '../../../assets/colors';
import {isAndroid} from '../../../utils';

export default StyleSheet.create<any>({
  container: {
    alignItems: 'center',
    backgroundColor: violet,
    height: '100%',
  },
  title: {
    color: white,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 1.1,
    paddingTop: 10,
  },
  backIcon: {
    position: 'absolute',
    top: 4,
    left: 15,
    zIndex: 100,
  },
  description: {
    color: white,
    textAlign: 'center',
    fontWeight: '600',
    width: '80%',
  },
  items: {
    backgroundColor: white,
    height: isAndroid() ? '85%' : '80%',
    width: '95%',
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: 'space-between',
  },
  item: {
    marginVertical: 7,
    width: '44%',
    borderRadius: 30,
    paddingVertical: 25,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: violet,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    paddingTop: 5,
  },
  titleContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: 15,
    paddingTop: 8,
  },
  iconContainer: (isSelected: boolean) => ({
    backgroundColor: isSelected ? 'rgba(255,255,255,0.21)' : white,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
  }),
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  list: {
    marginTop: 10,
    maxHeight: '90%',
  },
  button: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
});
