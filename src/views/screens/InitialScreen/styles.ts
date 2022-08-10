import {Animated, Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    letterSpacing: 2,
    fontWeight: 'bold',
    fontSize: 25,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    flex: 1,
  },
});

const animatedStyles = StyleSheet.create<any>({
  text: (animatedValues: Animated.Value[], index: number) => ({
    opacity: animatedValues[index],
    transform: [
      {
        translateY: Animated.multiply(
          animatedValues[index],
          new Animated.Value(-2),
        ),
      },
    ],
  }),
});

export const animatedText = (animatedValues: Animated.Value[], index: number) =>
  StyleSheet.compose(styles.text, animatedStyles.text(animatedValues, index));
