import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyleSheet} from 'react-native';

const BottomRightLines = () => {
  return (
    <Svg
      style={styles.svg}
      width="75"
      height="50"
      viewBox="0 0 130 82"
      fill="none">
      <Path
        d="M1 81C1.86338 60.9403 11.0121 18.0712 40.6998 7.07279C70.3875 -3.92562 111.936 2.49012 129 7.07279"
        stroke="white"
        strokeOpacity="0.29"
        strokeWidth="2"
      />
      <Path
        d="M1.04709 80.8735C1.94187 63.0348 13.4185 36.7758 41.9713 26.9357C73.053 16.2241 109.535 33.627 124.196 37.1835"
        stroke="white"
        strokeOpacity="0.29"
        strokeWidth="2"
      />
    </Svg>
  );
};

export default BottomRightLines;

const styles = StyleSheet.create({
  svg: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
