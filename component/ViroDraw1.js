import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Button, SafeAreaView,TextInput,} from 'react-native';


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

  
  const openRegister = () => {
    setResgisterIsOpen(false)
    console.log(ResgisterIsOpen)
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
  };


  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
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
        

    </View>
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
