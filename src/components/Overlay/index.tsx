import React from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {white} from '../../assets/colors';

const Overlay = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color={white} />
    </View>
  );
};
console.log('temp')
export default Overlay;

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    height: Dimensions.get('screen').height,
    width: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.5,
  },
});
