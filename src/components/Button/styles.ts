import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderColor: 'rgb(0,0,0, 0.3)',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 11,
    paddingHorizontal: 25,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    backgroundColor: 'white',
  },
  buttonText: {fontWeight: 'bold', fontSize: 17},
});
