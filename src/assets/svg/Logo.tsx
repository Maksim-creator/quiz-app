import React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {StyleSheet} from 'react-native';

const Logo = () => {
  return (
    <Svg
      width="90"
      height="90"
      viewBox="0 0 308 333"
      fill="none"
      style={styles.svg}>
      <G>
        <Path
          d="M4 20C4 8.9543 12.9543 0 24 0H284C295.046 0 304 8.95431 304 20V300H4V20Z"
          fill="white"
        />
        <Path
          d="M4.5 20C4.5 9.23045 13.2304 0.5 24 0.5H284C294.77 0.5 303.5 9.23045 303.5 20V305C303.5 315.77 294.77 324.5 284 324.5H24C13.2304 324.5 4.5 315.77 4.5 305V20Z"
          stroke="#D2D0D0"
        />
        <Path
          d="M204 300H304V305C304 316.046 295.046 325 284 325H204V300Z"
          fill="#EFA1FC"
        />
        <Path
          d="M4 300H104V325H24C12.9543 325 4 316.046 4 305V300Z"
          fill="#A3EDBC"
        />
        <Path d="M104 300H204V325H104V300Z" fill="#695ADF" />
        <Path
          d="M232.615 145.774C232.615 192.627 196.536 229.548 153.308 229.548C110.079 229.548 74 192.627 74 145.774C74 98.9213 110.079 62 153.308 62C196.536 62 232.615 98.9213 232.615 145.774Z"
          stroke="#695ADF"
          strokeWidth="26"
        />
        <Path
          d="M252.775 229.705L223.399 204.766L214.846 215.839L244.222 240.778C245.468 241.072 248.603 240.83 251.169 237.508C253.735 234.186 253.308 230.922 252.775 229.705Z"
          fill="#695ADF"
        />
        <Circle cx="258" cy="243" r="7" fill="#695ADF" />
      </G>
    </Svg>
  );
};
export default Logo;

const styles = StyleSheet.create({
  svg: {
    position: 'absolute',
    top: 70,
    alignSelf: 'center',
  },
});
