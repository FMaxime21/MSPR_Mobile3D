import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

import Settings from '../Screens/Settings';
import Scan from '../Screens/Scan';
import Partage from '../Screens/Partage';

const Navbar = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Welcome to 2MJR</Text>
      <Text></Text>
      <Text>To see 3D Model, tap on the Model icon at the bottom</Text>
      <Image source={require('../assets/Model.png')} 
      resizeMode='contain'
      style={{
        width: 25,
        height: 25
      }}/>
      <Text>Or you can go to the share icon to share your model</Text>
      <Image source={require('../assets/Partage.png')} 
      resizeMode='contain'
      style={{
        width: 25,
        height: 25
      }}/>
      <Image source={require('../assets/Accueil.png')} 
      resizeMode='contain'
      style={{
        width: 360,
        height: 250
      }}/>

      <Button
        title="SCAN YOUR MODEL"
        onPress={() => navigation.navigate('Viro3DAR')}
      />
    </View>

    
  );
};

const NavBar = () => 
{
    return(
        <Navbar.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
            >
            <Navbar.Screen name="ㅤ" component={Home} options={{
              tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Image
                        source={require('../assets/Maison.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? 'blue' : '#748c94'
                        }}
                      />
                      <Text style={{color: focused ? 'blue' : '#748c94', fontSize: 12}}>Home</Text>
                  </View>
              )  
            }}/>
            <Navbar.Screen name=" " component={Partage} options={{
              tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Image
                        source={require('../assets/Partage.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? 'blue' : '#748c94'
                        }}
                      />
                      <Text style={{color: focused ? 'blue' : '#748c94', fontSize: 12}}>Partage</Text>
                  </View>
              )  
            }}/>
            <Navbar.Screen name="  " component={Scan} options={{
              tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Image
                        source={require('../assets/Model.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? 'blue' : '#748c94'
                        }}
                      />
                      <Text style={{color: focused ? 'blue' : '#748c94', fontSize: 12}}>Model</Text>
                  </View>
              )  
            }}/>
        </Navbar.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default NavBar;
