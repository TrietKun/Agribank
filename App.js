import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs/src';
import {  createNativeStackNavigator} from '@react-navigation/native-stack/src'

import CustomDrawerContent from './navigation/DrawerCustom';

import InfScreen from './screens/InfScreen';
import SearchScreen from './screens/SearchScreen';
import Home from './screens/Home';
import CardService from './screens/CardServiceScreen';
import LoginScreen from './screens/LoginScreen';
import PayOderScreen from './screens/PayOderScreen';
import StockScreen from './screens/StockScreen';
import TransferScreen from './screens/TransferScreen';
import PhoneRecharge from './screens/PhoneRecharge';
import SavingMoneyScreen from './screens/SavingMonneyScreen';
import GiftScreen from './screens/GiftScreen'; 
import TestScreen from './screens/TestScreen';
import Transfer from './screens/Transfer';
import FianceScreen from './screens/FianceSreen';
import SoftOTPScreen from './screens/SoftOTPScreen';
import FaceIDScreen from './screens/FaceIDScreen';
import LimitedTranferScreen from './screens/LimitedTranferScreen';
import RePasswordScreen from './screens/RePasswordScreen';
import {Provider} from 'react-redux';
import store from './redux/store';

import { Ionicons } from '@expo/vector-icons'; // Sử dụng thư viện icon phù hợp với dự án của bạn

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Trang chủ" component={Home}   
      options={{
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
      <Ionicons name="log-in" size={size} color={color} />
    ),
  }} />
      <Tab.Screen name="Thông báo" component={InfScreen}   options={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="notifications" size={size} color={color} />
    ),
  }} />
      {/* <Tab.Screen name = "Home" component={Home}   options={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home-outline" size={size} color={color} />
    ),
  }}/> */}
      <Tab.Screen name = "Gọi Taxi" component={SearchScreen}   options={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="car-sport-outline" size={size} color={color} />
    ),
  }}/>
      <Tab.Screen name = "Lịch sử GD" component={SearchScreen}   options={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="time-outline" size={size} color={color} />
    ),
  }}/>
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
    <Provider store={store}>
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
        <Stack.Screen name="Thanh toán hóa đơn" component={PayOderScreen} />
        <Stack.Screen name="Chứng khoán" component={StockScreen} />
        <Stack.Screen name="Chuyển khoản" component={TransferScreen} />
        <Stack.Screen name="Nạp tiền điện thoại" component={PhoneRecharge} />
        <Stack.Screen name="Tiền gửi trực tuyến" component={SavingMoneyScreen} />
        <Stack.Screen name="Gửi tiền mừng" component={GiftScreen} />
        <Stack.Screen name="Chuyển" component={Transfer} />
        <Stack.Screen name="Tài chính" component={FianceScreen} />
        <Stack.Screen name="Cài đặt Soft Otp" component={SoftOTPScreen} />
        <Stack.Screen name="Cài đặt Face ID" component={FaceIDScreen} />
        <Stack.Screen name="Cài đặt hạn mức chuyển khoản" component={LimitedTranferScreen} />
        <Stack.Screen name="Cài đặt mật khẩu" component={RePasswordScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}
export default App;

