import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to 2MJR</Text>
      <Text></Text>
      <Text>To begin, tap on the scan icon at the bottom</Text>
      <Image source={require('../assets/Loupe.png')} 
      resizeMode='contain'
      style={{
        width: 25,
        height: 25
      }}/>
      <Text>Or you can go to the parameter icon</Text>
      <Image source={require('../assets/Parametre.png')} 
      resizeMode='contain'
      style={{
        width: 25,
        height: 25
      }}/>
      <Image source={require('../assets/Accueil.png')} 
      resizeMode='contain'
      style={{
        width: 500,
        height: 400
      }}/>
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
