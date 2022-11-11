import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';
import HomeScreen from '../views/screens/UserProfile';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.USER_PROFILE}>
      <Stack.Screen
        options={{headerShown: false}}
        name={screenNames.USER_PROFILE}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
