import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';
import HomeScreen from '../views/screens/HomeScreen';
import QuizSelection from '../views/screens/QuizSelection';
import QuizScreen from '../views/screens/QuizScreen';
import Result from '../views/screens/Result';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.HOME_SCREEN}>
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
  );
};

export default ProfileStack;
