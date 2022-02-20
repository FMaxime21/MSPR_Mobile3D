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

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      {data.object === 'Rhino' ? (
        <Viro3DObject
          source={require('../assets/Animaux/Motomoto/motomotoobj.obj')}
          position={[0, 0, -5]}
          scale={[1, 1, 1]}
          rotation={[10, 20, 0]}
          materials={['Rhinoceros']}
          type="OBJ"
        />
      )  : data.object === 'Monkey' ? (
        <Viro3DObject
          source={require('../assets/Animaux/Singe/babouche.obj')}
          position={[0, 0, -5]}
          scale={[1, 1, 1]}
          rotation={[10, 20, 0]}
          type="OBJ"
          resources= 
          {[
            require('../assets/Animaux/Singe/babouche_obj.mtl')
          ]}
        /> 
      ) : data.object === 'Snake' ?(
        <Viro3DObject
          source={require('../assets/Animaux/Serpent/snake.obj')}
          position={[0, 0, -5]}
          scale={[1, 1, 1]}
          rotation={[10, 20, 0]}
          materials={['Snake']}
          type="OBJ"
        /> 
      ) : (
        <Viro3DObject
        source={require('../assets/Animaux/Motomoto/motomotoobj.obj')}
        position={[0, 0, -5]}
        scale={[1, 1, 1]}
        rotation={[10, 20, 0]}
        materials={['Rhinoceros']}
        type="OBJ"
      />
      )
    }
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
      <View style={styles.controlView}>
        <TouchableOpacity onPress={() => setObject('Rhino')}>
          <Text style={styles.text}>Rhino</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setObject('Snake')}>
          <Text style={styles.text}>Snake</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setObject('Monkey')}>
          <Text style={styles.text}>Monkey</Text>
        </TouchableOpacity>
      </View>
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
