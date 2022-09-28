import React from 'react';
import {Animated, View} from 'react-native';
import {white} from '../../../assets/colors';

interface Props {
  opacity?: Animated.AnimatedInterpolation;
}

const TopCircles: React.FC<Props> = ({opacity}) => {
  return (
    <>
      <Animated.View
        style={{
          top: -70,
          right: -70,
          height: 200,
          width: 200,
          backgroundColor: white,
          opacity: opacity ? opacity : 0.2,
          position: 'absolute',
          borderRadius: 100,
        }}
      />
      <Animated.View
        style={{
          width: 220,
          height: 220,
          position: 'absolute',
          borderRadius: 120,
          borderWidth: 1,
          borderColor: white,
          top: -70,
          opacity: opacity ? opacity : 0.2,
          right: -70,
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          overflow: 'hidden',
          top: 100,
          width: 75,
          opacity: opacity ? opacity : 0.2,
        }}>
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            backgroundColor: white,
            left: -100,
          }}
        />
      </Animated.View>
    </>
  );
};

export default TopCircles;
