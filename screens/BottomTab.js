import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen'
import SearchScreen from './SearchScreen'


const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="LoginScreen" component={LoginScreen} options={{headerShown : false}} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{headerShown : false}} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;