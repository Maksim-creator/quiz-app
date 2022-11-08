import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';
import Discover from '../views/screens/Discover';

const Stack = createNativeStackNavigator();

const DiscoverQuizStack = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.DISCOVER}>
      <Stack.Screen
        name={screenNames.DISCOVER}
        options={{headerShown: false}}
        component={Discover}
      />
    </Stack.Navigator>
  );
};

export default DiscoverQuizStack;
