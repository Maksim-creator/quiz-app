import React from 'react';
import Svg, {Circle as SvgCircle} from 'react-native-svg';
import {StyleSheet} from 'react-native';

interface Props {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const Circle: React.FC<Props> = props => {
  return (
    <Svg
      style={[styles.circle, {...props}]}
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none">
      <SvgCircle cx="75" cy="75" r="50" fill="white" opacity={0.2} />
      <SvgCircle cx="75" cy="75" r="74.5" stroke="white" opacity={0.2} />
    </Svg>
  );
};

export default Circle;

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
  },
});
