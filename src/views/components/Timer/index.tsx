import React from 'react';
import {Animated, TextStyle, View, ViewStyle} from 'react-native';
import Text from '../../../components/Text';
import styles from './styles';

interface Props {
  scaleAnimation?: Animated.Value;
  opacityAnimation?: Animated.Value;
  timerNumber: number;
  containerStyles?: ViewStyle;
  innerStyles?: ViewStyle;
  textStyles?: TextStyle;
  finalWord?: string;
}

const Timer: React.FC<Props> = ({
  scaleAnimation,
  opacityAnimation,
  timerNumber,
  containerStyles,
  innerStyles,
  textStyles,
  finalWord,
}) => {
  return (
    <View style={[styles.timerContainer, containerStyles]}>
      <Animated.View
        style={[
          {
            transform: [{scale: scaleAnimation || 1}],
            opacity: opacityAnimation || 1,
            ...styles.timer,
          },
          innerStyles,
        ]}>
        <Text style={[styles.timerText, textStyles]}>
          {timerNumber === 0 && finalWord ? finalWord : timerNumber}
        </Text>
      </Animated.View>
    </View>
  );
};

export default Timer;
