import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../views/screens/HomeScreen';
import InitialScreen from '../views/screens/InitialScreen';
import {screenNames} from './screenNames';
import QuizSelection from '../views/screens/QuizSelection';
import QuizScreen from '../views/screens/QuizScreen';
import Result from '../views/screens/Result';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screenNames.INITIAL_SCREEN}>
        <Stack.Screen
          name={screenNames.INITIAL_SCREEN}
          options={{headerShown: false}}
          component={InitialScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={screenNames.HOME_SCREEN}
          component={HomeScreen}
        />
        <Stack.Screen
          name={screenNames.QUIZ_SELECTION}
          options={{headerShown: false}}
          component={QuizSelection}
        />
        <Stack.Screen
          name={screenNames.QUIZ_SCREEN}
          options={{headerShown: false, gestureEnabled: false}}
          component={QuizScreen}
        />
        <Stack.Screen
          name={screenNames.RESULT}
          options={{headerShown: false, gestureEnabled: false}}
          component={Result}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
