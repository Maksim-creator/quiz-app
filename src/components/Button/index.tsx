import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {styles as buttonStyles} from './styles';

interface Props {
  text: string;
  onPress: () => void;
  styles?: ViewStyle;
}

const Button: React.FC<Props> = ({text, onPress, styles}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyles.button, styles]}>
      <Text style={buttonStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
