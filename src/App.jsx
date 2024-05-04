import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Beranda from './screens/Beranda';
import Profil from './screens/Profil';
import Perpustakaan from './screens/Perpustakaan';
import Cari from './screens/Cari';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Beranda' component={Beranda} options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
      
      }} />
      <Tab.Screen name='Perpustakaan' component={Perpustakaan} options={{
          tabBarLabel: 'Perpustakaan',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name='Cari' component={Cari} options={{
            tabBarLabel: 'Cari',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-search" color={color} size={26} />
            ),
      
      }} />
      <Tab.Screen name='Profil' component={Profil} options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),                                                                                                                                                                                                                                    
      
      }} />
    </Tab.Navigator>
   </NavigationContainer>
  );
};


export default App;

const styles = StyleSheet.create({});