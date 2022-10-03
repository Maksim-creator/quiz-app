import {StyleSheet} from 'react-native';
import {lightViolet, violet, white} from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: lightViolet,
    position: 'relative',
  },
  header: {
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    top: 5,
    left: 15,
    zIndex: 2,
  },
  label: {
    paddingTop: 20,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
  },
  googleButtonWrapper: {
    position: 'relative',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  googleButton: {
    backgroundColor: white,
    paddingVertical: 14,
    opacity: 0.5,
  },
  googleButtonText: {
    color: 'black',
  },
  divider: {
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerLine: {
    width: '30%',
    height: 1,
    backgroundColor: 'grey',
  },
  dividerText: {
    color: 'grey',
    paddingHorizontal: 20,
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
  resetPasswordText: {
    fontSize: 14,
    color: violet,
    fontWeight: '700',
  },
  resetPassword: {
    alignSelf: 'center',
    paddingVertical: 14,
  },
});
