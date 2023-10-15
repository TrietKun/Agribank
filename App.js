import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import BottomTab from './screens/BottomTab';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Screen3" >
        <Drawer.Screen name="Home" component={BottomTab}  />
        <Drawer.Screen name="LoginScreen" component={LoginScreen}  />
        <Drawer.Screen name="SearchScreen" component={SearchScreen}  />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;