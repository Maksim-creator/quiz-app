import {StyleSheet} from 'react-native';
import {violet, white} from '../../../../assets/colors';

export default StyleSheet.create<any>({
  container: {
    height: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 25,
  },
  startButton: {
    position: 'absolute',
    bottom: 15,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: violet,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  mainBlock: {
    height: '75%',
    backgroundColor: white,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  label: {
    fontWeight: '700',
    color: 'rgb(168,168,168)',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    paddingVertical: 12,
  },
  configBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#efeefc',
    paddingVertical: 8,
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  circleIcon: (color: string) => ({
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 100,
  }),
  configItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    paddingLeft: 5,
    fontWeight: '700',
  },
  description: {
    paddingVertical: 10,
    lineHeight: 21,
  },
  authorBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  nameContainer: {
    height: '70%',
    paddingLeft: 6,
    justifyContent: 'space-around',
  },
  name: {fontWeight: '800'},
  role: {color: 'grey', fontSize: 12},
  picker: {
    justifyContent: 'space-between',
  },
  pickerButton: (isEqual: boolean) => ({
    backgroundColor: violet,
    borderRadius: 10,
    opacity: isEqual ? 0.5 : 1,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  descriptionContent: {paddingVertical: 15},
});
