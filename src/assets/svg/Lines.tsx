import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyleSheet} from 'react-native';

const Lines = () => {
  return (
    <Svg
      width={'100%'}
      height="90"
      viewBox="0 0 502 202"
      fill="none"
      style={styles.lines}>
      <Path
        d="M1 1C10.1245 67.9118 43.578 201.588 104.396 200.998C165.213 200.408 252.582 132.919 288.665 99.2479C303.957 84.4401 342.94 63.7091 376.537 99.2479C410.134 134.787 473.511 181.889 501 200.998"
        stroke="white"
        strokeWidth="2"
        opacity={0.5}
      />
      <Path
        d="M1 1C14.629 54.5171 47.3516 149.624 71.5475 166.528C108.484 192.335 199.614 106.068 248.817 73.3495C268.036 59.5248 315.096 43.4696 349.579 89.8471C384.063 136.225 431.815 183.21 451.381 200.906"
        stroke="white"
        opacity={0.5}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default Lines;

const styles = StyleSheet.create({
  lines: {
    position: 'absolute',
    zIndex: -1,
  },
});
