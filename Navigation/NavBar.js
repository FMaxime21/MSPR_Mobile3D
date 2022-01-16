import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Home from '../Screens/Home';
import Settings from '../Screens/Settings';
import Scan from '../Screens/Scan';

const Navbar = createBottomTabNavigator();

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
            <Navbar.Screen name="Home" component={Home} options={{
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
            <Navbar.Screen name="Settings" component={Settings} options={{
              tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Image
                        source={require('../assets/Parametre.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? 'blue' : '#748c94'
                        }}
                      />
                      <Text style={{color: focused ? 'blue' : '#748c94', fontSize: 12}}>Settings</Text>
                  </View>
              )  
            }}/>
            <Navbar.Screen name="Scan" component={Scan} options={{
              tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Image
                        source={require('../assets/Loupe.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? 'blue' : '#748c94'
                        }}
                      />
                      <Text style={{color: focused ? 'blue' : '#748c94', fontSize: 12}}>Scan</Text>
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
