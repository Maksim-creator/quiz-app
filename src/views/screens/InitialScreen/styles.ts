import {StyleSheet} from 'react-native';
import {violet, white} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: violet,
    height: '100%',
    justifyContent: 'flex-end',
  },
  mainBlock: {
    backgroundColor: white,
    height: '40%',
    marginHorizontal: 15,
    borderRadius: 20,
  },
  label: {
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 19,
    fontWeight: '700',
    fontSize: 24,
  },
  description: {
    paddingHorizontal: 30,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
    color: '#7a7a7a',
  },
  buttons: {
    marginVertical: 20,
    justifyContent: 'space-around',
    height: '40%',
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  createAccountButton: {
    backgroundColor: '#e6e6e6',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: violet,
  },
  lottieAnimation: {
    marginBottom: 30,
  },
});
