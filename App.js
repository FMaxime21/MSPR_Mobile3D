import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './Navigation/NavBar';

const App = () =>
{
  return(
    <NavigationContainer>
      <Nav />
    </NavigationContainer>   
  );
}

export default App;

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Switch on your camera !</Text>
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
});*/
