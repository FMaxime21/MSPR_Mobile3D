import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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

const Register = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Register Screen</Text>

      <Button title="Go back" onPress={() => navigation.goBack('')} />

      <Button
        title="Continue"
        onPress={() => navigation.navigate('InputScreen')}
      />
    </View>
  );
};

export default Register;
