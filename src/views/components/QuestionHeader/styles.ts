import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    height: '38%',
    position: 'relative',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    shadowColor: 'black',
  },
  image: {
    height: '100%',
    width: Dimensions.get('screen').width,
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: Dimensions.get('screen').width,
    backgroundColor: 'black',
    opacity: 0.6,
  },
  backIcon: {
    position: 'absolute',
    top: 45,
    left: 15,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingBottom: 15,
  },
  wrapper: {
    alignSelf: 'center',
    width: '70%',
    position: 'absolute',
    top: '40%',
  },
  questionText: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '700',
  },
});
