import React from 'react';
import { NavigationContainer } from '@react-navigation/native/src';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs/src';
import {  createNativeStackNavigator} from '@react-navigation/native-stack/src'

import CustomDrawerContent from './navigation/DrawerCustom';

import InfScreen from './screens/InfScreen';
import SearchScreen from './screens/SearchScreen';
import Home from './screens/Home';
import CardService from './screens/CardService';
import LoginScreen from './screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Trang chủ" component={Home} options={{headerShown : false}} />
      <Tab.Screen name="Thông báo" component={InfScreen} options={{headerShown : false}} />
      <Tab.Screen name = "VnShop" component={SearchScreen} options={{headerShown : false}}/>
      <Tab.Screen name = "Gọi Taxi" component={SearchScreen} options={{headerShown : false}}/>
      <Tab.Screen name = "Lịch sử GD" component={SearchScreen} options={{headerShown : false}}/>
    </Tab.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator 
    drawerContent={(props) => <CustomDrawerContent {...props}/>} 
    screenOptions={{
      drawerStyle: {
        backgroundColor: 'transparent',
        width: 340,
      },
    }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} options={{headerShown : false,drawerPosition : true }}/>
      <Drawer.Screen name="InfScreen" component={InfScreen} options={{headerShown : false,drawerPosition : true}}/>
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e0721b',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Trang chủ" component={DrawerNav} options={{headerShown : false}} />
        <Stack.Screen name="Tìm kiếm" component={SearchScreen} options={{headerShown : false}} />
        <Stack.Screen name="Thông tin" component={InfScreen} options={{headerShown : false}} />
        <Stack.Screen name="Đăng nhập" component={LoginScreen} options={{headerShown : false}} />
        <Stack.Screen name="Dịch vụ thẻ" component={CardService} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}
export default App;

