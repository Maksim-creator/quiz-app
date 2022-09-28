import React, {ReactNode} from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';

export interface QuizTextProps extends TextProps {
  children: ReactNode;
}

const Text = (props: QuizTextProps) => {
  return <RNText {...props} style={[styles.text, props.style]} />;
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    lineHeight: 18,
    fontSize: 15,
  },
});
