import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenNames} from './screenNames';
import ProfileStack from './ProfileStack';
import Discover from '../views/screens/Discover';
import Home from '../views/screens/Home';
import Statistics from '../views/screens/Statistics';
import {StyleSheet} from 'react-native';
import {renderTabBarIcon} from './navigationHelpers';
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.HOME}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name={screenNames.HOME}
        options={{
          headerShown: false,
          tabBarIcon: renderTabBarIcon('home-outline'),
        }}
        component={Home}
      />
      <Tab.Screen
        name={screenNames.DISCOVER}
        options={{
          headerShown: false,
          tabBarIcon: renderTabBarIcon('magnify'),
        }}
        component={Discover}
      />
      <Tab.Screen
        name={screenNames.STATISTICS}
        options={{
          headerShown: false,
          tabBarIcon: renderTabBarIcon('poll'),
        }}
        component={Statistics}
      />
      <Tab.Screen
        name={screenNames.HOME_SCREEN}
        options={{
          headerShown: false,
          tabBarIcon: renderTabBarIcon('account'),
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 85,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
});
