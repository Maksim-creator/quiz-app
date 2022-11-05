import {StyleSheet} from 'react-native';
import {white} from '../../../assets/colors';
import {isTablet} from '../../../utils';

export default StyleSheet.create<any>({
  hexagon: {
    width: 100,
    height: 55,
    alignItems: 'center',
  },
  hexagonInner: (color: string) => ({
    top: 25,
    width: 80,
    height: 50,
    backgroundColor: color,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: color,
    shadowOpacity: 0.8,
  }),
  hexagonAfter: (color: string) => ({
    position: 'absolute',
    bottom: -45,
    left: '10%',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 40,
    borderLeftColor: 'transparent',
    borderRightWidth: 40,
    borderRightColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: color,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: color,
    shadowOpacity: 0.8,
  }),
  hexagonBefore: (color: string) => ({
    position: 'absolute',
    top: 0,
    left: '10%',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 40,
    borderLeftColor: 'transparent',
    borderRightWidth: 40,
    borderRightColor: 'transparent',
    borderBottomWidth: 25,
    borderBottomColor: color,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: color,
    shadowOpacity: 0.8,
  }),
  halfCircle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: white,
    opacity: 0.7,
    overflow: 'hidden',
  },
  scrollContainer: {
    height: '100%',
  },
  content: {
    width: isTablet() ? '60%' : '95%',
    marginTop: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  firstLine: {marginBottom: 30},
  line: {marginVertical: 30},
  iconContainer: (colorPalette: {
    borderColor: string;
    iconBackground: string;
  }) => ({
    position: 'absolute',
    height: 55,
    width: 55,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colorPalette.borderColor,
    backgroundColor: colorPalette.iconBackground,
    justifyContent: 'center',
    alignItems: 'center',
    left: '22%',
    top: '40%',
  }),
});
