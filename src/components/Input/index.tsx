import React from 'react';
import {StyleProp, TextInput, TextStyle, View, ViewStyle} from 'react-native';
import {violet} from '../../assets/colors';
import Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles as mainInputStyles} from './styles';

interface Props {
  value: string;
  handleValueChange: (value: string) => void;
  handleBlur: (e: any) => void;
  placeholder: string;
  label: string;
  labelStyles?: StyleProp<TextStyle>;
  inputStyles?: StyleProp<TextStyle>;
  styles?: StyleProp<ViewStyle>;
  iconName: string;
  error?: string;
  touched?: boolean;
  isPassword?: boolean;
  iconColor?: string;
  placeholderTextColor?: string;
}

const Input: React.FC<Props> = ({
  value,
  handleValueChange,
  placeholder,
  label,
  inputStyles,
  labelStyles,
  styles,
  handleBlur,
  iconName,
  error,
  isPassword,
  touched,
  iconColor,
  placeholderTextColor,
}) => {
  return (
    <View style={[mainInputStyles.container, styles]}>
      <Text style={[mainInputStyles.label, labelStyles]}>{label}</Text>
      <View style={mainInputStyles.wrapper}>
        <Icon
          style={mainInputStyles.icon}
          name={iconName}
          size={25}
          color={iconColor || violet}
        />
        <TextInput
          style={[
            mainInputStyles.input,
            {
              ...(error &&
                touched && {
                  borderWidth: 1,
                  borderColor: '#dc6e6e',
                }),
            },
            inputStyles,
          ]}
          onChangeText={handleValueChange}
          value={value}
          onBlur={handleBlur}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || 'grey'}
          autoCapitalize={'none'}
          secureTextEntry={isPassword}
        />
      </View>
      {error && touched ? (
        <Text style={mainInputStyles.errorText}>{error}</Text>
      ) : null}
    </View>
  );
};

export default Input;
