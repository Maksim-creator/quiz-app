import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';
import {navigationRef} from './navigationService';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import QuizSelection from '../views/screens/QuizSelection';
import QuizScreen from '../views/screens/QuizScreen';
import Result from '../views/screens/Result';
import TopicSelection from '../views/screens/TopicSelection';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={screenNames.AUTH_STACK}
          options={{headerShown: false}}
          component={AuthStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={screenNames.HOME}
          component={MainStack}
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
        <Stack.Screen
          name={screenNames.TOPICS}
          component={TopicSelection}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
