import React, {useState,useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Button, SafeAreaView,TextInput,Image} from 'react-native';
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

const InitialScene = props => {
  let data = props.sceneNavigator.viroAppProps;
  const  _takeScreenshot = async () => {
    await props.sceneNavigator.takeScreenshot("viroScreen", true).then((retDict)=>{
    console.log(retDict.success, retDict.url, retDict.errorCode);
    });
    }
  //_takeScreenshot()
  //let test = props.sceneNavigator.takeScreenshot("test",true)
  ViroMaterials.createMaterials({
    tv: {
      diffuseTexture: require('./assets/singe/mm_frame.png'),
    },
  });



  return (
    <View>
    <ViroARScene>
        <Viro3DObject
          source={require('./assets/singe/monkey.obj')}
          position={[0, 0, -5]}
          scale={[0.5, 0.5, 0.5]}
          rotation={[0, 0, 0]}
          materials={['tv']}
          type="OBJ"
          onClick={_takeScreenshot}
        />
    
    </ViroARScene>
    </View>
  );
};

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
      await Share.open({url:'file:///storage/emulated/0/Pictures/My Viro App/viroScreen.jpg'})
    } catch(err){
      console.log(err)
    }
  }
  const handleSubmit = () => {
    //console.log(prenom)
    //console.log(mail)
    setResgisterIsOpen(true)
    setTimeout(shareDummyImage, 2000);
  };


  return (
    <ViewShot  style={styles.mainView}  collapsable={false} >
      <ViroARSceneNavigator ref={viewRef}
        initialScene={{scene: InitialScene}}
        viroAppProps={{object: object}}
        style={{flex: 1}}
      />
    
      <Button
          title="Save"
          onPress={() => openRegister()} //le state pr afficher le le register a true on affiche le regidter puis ipr ecran
        />
        {ResgisterIsOpen === false ? 
        <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangePrenom}
          value={prenom}
          placeholder="Prenom"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeMail}
          value={mail}
          placeholder="Adresse mail"
        />
        <Button onPress={handleSubmit} title="Submit" />
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