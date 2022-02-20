import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './Navigation/NavBar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './component/Home';
import Register from './component/Register';
import AR from './component/AR';
import InputScreen from './component/InputScreen';
import Viro3DAR from './component/Viro3DAR';
import ScanCode from './component/ScanCode';
import ViroDraw1 from './component/ViroDraw1';
import ViroDraw2 from './component/ViroDraw2';
import ViroDraw3 from './component/ViroDraw3';
import CaptureTest from './component/CaptureTest';

const Stack = createNativeStackNavigator();
const Navbar = createBottomTabNavigator();

function App() 
{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AR" component={AR} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="Viro3DAR" component={Viro3DAR} />
        <Stack.Screen name="ScanCode" component={ScanCode} />
        <Stack.Screen name="ViroDraw1" component={ViroDraw1} />
        <Stack.Screen name="ViroDraw2" component={ViroDraw2} />
        <Stack.Screen name="ViroDraw3" component={ViroDraw3} />
        <Stack.Screen name="CaptureTest" component={CaptureTest} />
        <Stack.Screen name="Navbar" component={Nav} />
      </Stack.Navigator>
    </NavigationContainer>   
  );
}

export default App;
