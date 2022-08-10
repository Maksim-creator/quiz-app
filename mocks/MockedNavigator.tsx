import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../src/navigation/screenNames';

const Stack = createNativeStackNavigator();
const MockedNavigator = ({
  component,
  params = {},
}: {
  component: React.ComponentType<any>;
  params: Partial<any>;
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenNames.INITIAL_SCREEN}
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
