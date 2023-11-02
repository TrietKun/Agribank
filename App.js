<<<<<<< HEAD
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
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 48affde (Initial commit)
