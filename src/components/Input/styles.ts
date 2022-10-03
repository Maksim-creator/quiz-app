import {StyleSheet} from 'react-native';
import {white} from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
  },
  label: {
    fontWeight: '600',
    marginBottom: 5,
  },
  wrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    zIndex: 10,
    left: 10,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: white,
    borderRadius: 20,
    paddingRight: 15,
    paddingLeft: 50,
  },
  errorText: {
    fontSize: 12,
    paddingLeft: 7,
    paddingTop: 2,
    color: '#dc6e6e',
  },
});

export {styles};
