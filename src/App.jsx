import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Beranda from './screens/Beranda';
import Profil from './screens/Profil';
import Kontak from './screens/kontak';
import notif from './screens/notif';
import menu from './screens/menu';
import bayar from './screens/bayar';
import uang from './screens/uang';
import luluk from './screens/luluk';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Beranda' component={Beranda} options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={29} />
          ),
      
      }} />
        <Tab.Screen name='Profil' component={Profil} options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
      
      }} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='root' component={BottomTab} />
      <Stack.Screen name='Hubungi' component={Kontak} />
      <Stack.Screen name='Notifikasi' component={notif} />
      <Stack.Screen name='Kategori' component={menu} />
      <Stack.Screen name='Pembayaran' component={bayar} />
      <Stack.Screen name='Uang Saku' component={uang} />
      <Stack.Screen name='Panduan' component={luluk} />
    </Stack.Navigator>
   </NavigationContainer>
);
};


export default App;

const styles = StyleSheet.create({});