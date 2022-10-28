import React from 'react';
import {screenNames} from './screenNames';
import InitialScreen from '../views/screens/InitialScreen';
import SignUp from '../views/screens/SignUp';
import SignIn from '../views/screens/SignIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.INITIAL_SCREEN}>
      <Stack.Screen
        name={screenNames.INITIAL_SCREEN}
        options={{headerShown: false}}
        component={InitialScreen}
      />
      <Stack.Screen
        name={screenNames.SIGN_UP}
        options={{headerShown: false, gestureEnabled: false}}
        component={SignUp}
      />
      <Stack.Screen
        name={screenNames.SIGN_IN}
        options={{headerShown: false, gestureEnabled: false}}
        component={SignIn}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
