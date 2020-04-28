import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import screen1 from './src/Screen/Screen1'
import screen2 from './src/Screen/Screen2'
import screen3 from './src/Screen/Screen3'

import Tab1 from './src/Tab/Tab1'
import Tab2 from './src/Tab/Tab2'
import Tab3 from './src/Tab/Tab3'

import Detail from './src/Detail'
import Feed from './src/Feed'

const Stack=createStackNavigator();
const MatrerialBottomTab=createBottomTabNavigator();
const MaterialTopTab=createMaterialTopTabNavigator();
const Drawer=createDrawerNavigator();

export default class App extends React.Component {
  createHomeStack=()=>{
    <Stack.Navigator>
      <Stack.Screen name="feed" component={Feed}/>
      <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
  }
  render()
  {
    createHomeStack=()=>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="TopTab" children={createTopTab}/>
        <Stack.Screen name="BottomTab" children={createBottomTab}/>
      </Stack.Navigator>

     createTopTab =()=> {
      return<MaterialTopTab.Navigator>
        <MaterialTopTab.Screen name="Tab1" component={Tab1}/>
        <MaterialTopTab.Screen name="Tab2" component={Tab2}/>
        <MaterialTopTab.Screen name="Tab3" component={Tab3}/>
      </MaterialTopTab.Navigator>
            }
 
    
      createBottomTab = ()=> {
        return<MatrerialBottomTab.Navigator>
          <MatrerialBottomTab.Screen name="Tab1" component={Tab1}/>
          <MatrerialBottomTab.Screen name="Tab2" component={Tab2}/>
          <MatrerialBottomTab.Screen name="Tab3" component={Tab3}/>
        </MatrerialBottomTab.Navigator>
              }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="ho" children ={createHomeStack}/>
        <Drawer.Screen name="home" children ={createTopTab}/>
        <Drawer.Screen name="Contact" component={screen1}/>
        <Drawer.Screen name="favourite" component={screen2}/>
        <Drawer.Screen name="About us" component={screen3}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
