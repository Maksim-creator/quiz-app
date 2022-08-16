import {Dimensions, StyleSheet} from 'react-native';
import {lightBlack} from '../../../../assets/colors';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    justifyContent: 'space-between',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  avatar: {
    zIndex: 20,
    bottom: -50,
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: lightBlack,
    backgroundColor: 'white',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 18,
    zIndex: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: 'black',
    elevation: 5,
  },
  text: {textAlign: 'center'},
  infoContainer: {
    paddingTop: 60,
    paddingBottom: 15,
    alignSelf: 'center',
    width: '100%',
  },
  info: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: 15,
  },
  user: {
    alignSelf: 'center',
    width: '85%',
  },
  buttons: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 40,
    width: '85%',
    justifyContent: 'space-between',
  },
  boldText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  wrapper: {paddingHorizontal: 10},
});
