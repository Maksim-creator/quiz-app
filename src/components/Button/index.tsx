import React from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import Text from '../Text';
import {styles as buttonStyles} from './styles';

interface Props {
  text: string;
  onPress: () => void;
  styles?: ViewStyle;
  textStyles?: TextStyle;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  onPress,
  styles,
  textStyles,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyles.button(disabled), styles]}
      disabled={disabled}>
      <Text style={[buttonStyles.buttonText, textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
