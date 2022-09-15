import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '68%',
    color: 'black',
    fontSize: 20,
    paddingVertical: 20,
  },
  description: {
    color: 'black',
    width: '80%',
  },
  items: {
    marginTop: 10,
    marginBottom: 40,
  },
  item: {
    marginTop: 15,
    position: 'relative',
    width: Dimensions.get('screen').width - 100,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    borderRadius: 10,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlay: {
    borderRadius: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  content: {paddingVertical: 50, paddingHorizontal: 30},
  icon: {textAlign: 'center', paddingBottom: 6},
  label: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {marginLeft: 15},
});
