import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View } from 'react-native';
import { QRScannerView } from 'react-native-qrcode-scanner-view';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  Image,
} from 'react-native';

const ScanCode = ({navigation}) => {
    const renderTitleBar = () => <Text style={{color:'white',textAlign:'center',padding:16}}>Title</Text>

    const renderMenu = () => <Text style={{color:'white',textAlign:'center',padding:16}}>Menu</Text>

    const barcodeReceived = (event) => { 
      console.log('Type: ' + event.type + '\nData: ' + event.data)
      if(event.data === "Draw1"){
        alert("Draw1")
        navigation.navigate('ViroDraw1')
      }else if(event.data === "Draw2"){
        alert("Draw2")
        navigation.navigate('ViroDraw2')
      }else if(event.data === "Draw3"){
        alert("Draw3")
        navigation.navigate('ViroDraw3')
      }
      
    
    };


  return (
    <View style={{flex:1}}>
     < QRScannerView
         onScanResult={ barcodeReceived }
         //renderHeaderView={ renderTitleBar }
         renderFooterView={ renderMenu }
         scanBarAnimateReverse={ true }/>
    </View>
  );
};

export default ScanCode;
