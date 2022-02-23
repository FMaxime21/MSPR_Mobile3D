import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './Navigation/NavBar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './component/Home';
import Viro3DAR from './component/Viro3DAR';

const Stack = createNativeStackNavigator();
const Navbar = createBottomTabNavigator();

function App() 
{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Viro3DAR" component={Viro3DAR} />
        <Stack.Screen name="Navbar" component={Nav} />
      </Stack.Navigator>
    </NavigationContainer>   
  );
}

export default App;
