import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';
import {navigationRef} from './navigationService';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={screenNames.INITIAL_SCREEN}
          options={{headerShown: false}}
          component={AuthStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={screenNames.HOME}
          component={MainStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
