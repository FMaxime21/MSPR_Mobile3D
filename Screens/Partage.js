import React, {useState,useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Button, SafeAreaView,TextInput} from 'react-native';
import { captureRef } from "react-native-view-shot";
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
} from '@viro-community/react-viro';

export default () => {
  const [object, setObject] = useState('skull');
  const [ResgisterIsOpen, setResgisterIsOpen] = useState(true);
  
  const [prenom, onChangePrenom] = React.useState(null);
  const [mail, onChangeMail] = React.useState(null);

  const viewRef = useRef(); 

  const openRegister = () => {
    setResgisterIsOpen(false)
    console.log(ResgisterIsOpen)
  }

  const shareDummyImage = async () => {
    try{
      const uri = await captureRef(viewRef, {
        format : 'png',
        quality:0.7
      });
      await Share.open({message: 'My new Model'})
    } catch(err){
      console.log(err)
    }
  }
  const handleSubmit = () => {
    //console.log(prenom)
    //console.log(mail)
    setResgisterIsOpen(true)
    fetch('https://api.sendinblue.com/v3/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key':
          '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',
      },
      body: JSON.stringify({
        email: mail,
        attributes: {
          FNAME: 'Elly',
          LNAME: 'Roger',
          prenom: prenom,
        },
        emailBlacklisted: false,
        smsBlacklisted: false,
        listIds: [36],
        updateEnabled: false,
        smtpBlacklistSender: ['user@example.com'],
      }),
    });
    setTimeout(shareDummyImage, 2000);
  };


  return (
    <ViewShot  style={styles.mainView}  collapsable={false} ref={viewRef}>
    
      <Button
          title="SHARE"
          onPress={() => openRegister()} //le state pr afficher le le register a true on affiche le regidter puis ipr ecran
        />
        {ResgisterIsOpen === false ? 
        <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'grey',
        }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangePrenom}
          value={prenom}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeMail}
          value={mail}
          placeholder="Email Adress"
        />
        <Button onPress={handleSubmit} title="Validate" />
      </SafeAreaView>
        
        : <SafeAreaView></SafeAreaView>}
        

    </ViewShot >
  );
};

var styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  controlView: {
    width: '100%',
    height: 100,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    margin: 20,
    backgroundColor: '#9d9d9d',
    padding: 10,
    fontWeight: 'bold',
  },
});