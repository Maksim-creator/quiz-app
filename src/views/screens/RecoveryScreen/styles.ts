import {StyleSheet} from 'react-native';
import {lightViolet} from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: lightViolet,
    position: 'relative',
  },
  label: {
    paddingTop: 20,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
  },
  icon: {
    position: 'absolute',
    top: 5,
    left: 15,
    zIndex: 2,
  },
  header: {
    marginBottom: 20,
  },
  input: {
    width: '80%',
    alignSelf: 'center',
  },
  confirmButton: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 15,
  },
  text: {
    marginVertical: 20,
    lineHeight: 21,
    color: '#737373',
    paddingHorizontal: 40,
  },
});
