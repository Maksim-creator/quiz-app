import React from 'react';
import {Dimensions, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {white} from '../../assets/colors';

const MiddleCircles = () => {
  return (
    <View>
      <View style={styles.outer}>
        <View style={styles.inner} />
      </View>
      <View style={styles.second} />
    </View>
  );
};

export default MiddleCircles;

const styles = StyleSheet.create({
  outer: {
    top: Dimensions.get('screen').height / 4,
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.1,
    left: -120,
  },
  inner: {
    height: 250,
    width: 250,
    backgroundColor: white,
    borderRadius: 200,
    opacity: 0.4,
  },
  second: {
    top: Dimensions.get('screen').height / 4,
    position: 'absolute',
    right: -60,
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: white,
    opacity: 0.1,
  },
});
