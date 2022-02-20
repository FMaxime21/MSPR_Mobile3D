import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Button} from 'react-native';

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

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: '+=90',
      },
    },
  });

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
        {data.object === 'skull' }
        <Viro3DObject
          source={require('./assets/rhino/mm_frame.obj')}
          position={[0, 0, -5]}
          scale={[1, 1,1]}
          rotation={[0, 0, 0]}
          type="OBJ"
        />
    
    </ViroARScene>
  );
};

export default () => {
  const [object, setObject] = useState('skull');
  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{scene: InitialScene}}
        viroAppProps={{object: object}}
        style={{flex: 1}}
      />
      <Button
        title="Save"
        onPress={() => navigation.navigate('InputScreen')} //le state pr afficher le le register a true on affiche le regidter puis ipr ecran
      />
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
