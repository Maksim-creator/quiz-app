import React from 'react';
import {Animated, Text, View} from 'react-native';
import styles from './styles';

interface Props {
  scaleAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
  timerNumber: number;
}

const Timer: React.FC<Props> = ({
  scaleAnimation,
  opacityAnimation,
  timerNumber,
}) => {
  return (
    <View style={styles.timerContainer}>
      <Animated.View
        style={{
          transform: [{scale: scaleAnimation}],
          opacity: opacityAnimation,
          ...styles.timer,
        }}>
        <Text style={styles.timerText}>
          {timerNumber === 0 ? 'Start!' : timerNumber}
        </Text>
      </Animated.View>
    </View>
  );
};

export default Timer;
