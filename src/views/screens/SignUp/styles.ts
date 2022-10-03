import {StyleSheet} from 'react-native';
import {lightViolet, violet, white} from '../../../assets/colors';

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
  googleButtonWrapper: {
    position: 'relative',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  googleButton: {
    backgroundColor: white,
    opacity: 0.5,
    paddingVertical: 14,
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
  loginWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  loginText: {
    fontSize: 13,
    paddingRight: 4,
  },
  loginButtonText: {
    fontSize: 13,
    color: violet,
    fontWeight: '700',
  },
});
