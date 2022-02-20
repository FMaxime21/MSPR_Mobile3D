import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

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
  ViroARTrackingTargets,
  ViroARImageMarker
} from '@viro-community/react-viro';

const InitialScene = props => {
  let data = props.sceneNavigator.viroAppProps;
  ViroMaterials.createMaterials({
    Rhinoceros: {
      diffuseTexture: require('../assets/Animaux/Motomoto/Rhino.png'),
    },
    Snake: {
      diffuseTexture: require('../assets/Animaux/Serpent/Serpent.png'),
    },
    Monkey: {
      diffuseTexture: require('../assets/Animaux/Singe/Singe.png'),
    },
  });

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: '+=90',
      },
    },
  });

  ViroARTrackingTargets.createTargets({
    RhinoImage:{
      source: require('../assets/Animaux/Motomoto/Rhino.png'),
      orientation: "Up",
      physicalWidth: 0.165
    }
  })

  const anchorFound = ()=>
  {
    console.log("Anchor/Image Detected");
  }

  return (
    <ViroARScene>
      <ViroARImageMarker target="RhinoImage" onAnchorFound={anchorFound}>
      <ViroAmbientLight color="#ffffff" />
        <Viro3DObject
          source={require('../assets/Animaux/Motomoto/motomotoobj.obj')}
          position={[2, -2, 1]}
          scale={[0.3, 0.3, 0.3]}
          rotation={[-100, 0, 0]}
          materials={['Rhinoceros']}
          type="OBJ"
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default () => {
  const [object, setObject] = useState('tv');
  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{scene: InitialScene}}
        viroAppProps={{object: object}}
        style={{flex: 1}}
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
    margin: 10,
    backgroundColor: '#9d9d9d',
    padding: 30,
    fontWeight: 'bold',
  },
});
