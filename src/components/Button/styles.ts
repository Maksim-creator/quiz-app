import {StyleSheet} from 'react-native';
import {violet, white} from '../../assets/colors';

export const styles = StyleSheet.create<any>({
  button: (disabled: boolean) => ({
    borderRadius: 17,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: disabled ? 'rgba(105,90,223,0.52)' : violet,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }),
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: white,
    textAlign: 'center',
  },
});
