import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Toast, {ToastConfig} from 'react-native-toast-message';
import Text from '../Text';
import {white} from '../../assets/colors';

export const toastConfig: ToastConfig = {
  error: ({text1, props}) => (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text1}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => Toast.hide()}>
        <Text style={styles.text}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: '#d26161',
  },
  textContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: white,
  },
  button: {
    paddingRight: 20,
  },
});
