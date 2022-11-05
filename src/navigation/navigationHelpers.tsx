import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const renderTabBarIcon =
  (iconName: string) =>
  ({focused}: {focused: boolean}) =>
    <Icon name={iconName} size={30} color={focused ? 'black' : '#d0d0d0'} />;
