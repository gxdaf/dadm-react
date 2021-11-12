import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createButtonTabNavigator, BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Pais1 from './Pais1';
import Pais2 from './Pais2';
import Pais3 from './Pais3';
import Pais4 from './Pais4';
import Sobre from './Sobre';
import styles from './styles';

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return(
      <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:'#800000', tabBarInactiveTintColor:'#c0c0c0'}} tabBarOptions={{showLabel: true, style: {backgroundColor:'transparent', borderTopWidth:0, elevation:0}}}>
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name='Pais1' component={Pais1}/>
          <Tab.Screen name='Pais2' component={Pais2}/>
          <Tab.Screen name='Pais3' component={Pais3}/>
          <Tab.Screen name='Pais4' component={Pais4}/>
      </Tab.Navigator>
  )
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'} screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Tabs}/>
        <Stack.Screen name='Pais1' component={Pais1}/>
        <Stack.Screen name='Pais2' component={Pais2}/>
        <Stack.Screen name='Pais3' component={Pais3}/>
        <Stack.Screen name='Pais4' component={Pais4}/>
        <Stack.Screen name='Sobre' component={Sobre}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}