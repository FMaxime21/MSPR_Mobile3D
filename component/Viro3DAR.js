import React, {useState, useRef} from 'react';
import {SafeAreaView, View, Button, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Share from 'react-native-share';
import ViewShot, {captureScreen, captureRef } from 'react-native-view-shot';

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
  const viewRef2 = useRef(); 

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

  const  _takeScreenshot = async () => {
    await props.sceneNavigator.takeScreenshot("viroScreen", true).then((retDict)=>{
    console.log(retDict.success, retDict.url, retDict.errorCode);
    });
    }

  ViroARTrackingTargets.createTargets({
    RhinoImage:{
      source: require('../assets/Animaux/Motomoto/Rhino.png'),
      orientation: "Up",
      physicalWidth: 0.165,
    },
    SnakeImage:{
      source: require('../assets/Animaux/Serpent/Serpent.png'),
      orientation: "Up",
      physicalWidth: 0.165,
    },
    MonkeyImage:{
      source: require('../assets/Animaux/Singe/Singe.png'),
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
          source={require('../assets/Animaux/Motomoto/rhino_1.obj')}
          position={[0, -3, 1]}
          scale={[0.3, 0.3, 0.3]}
          rotation={[-100, 0, 110]}
          materials={['Rhinoceros']}
          resources={[ 
            require("../assets/Animaux/Motomoto/rhino.mtl") 
          ]} 
          type="OBJ"
        />
      </ViroARImageMarker>
      <ViroARImageMarker target="SnakeImage" onAnchorFound={anchorFound}>
      <ViroAmbientLight color="#ffffff" />
        <Viro3DObject
          source={require('../assets/Animaux/Serpent/snakes_1.obj')}
          position={[0, -3, 1]}
          scale={[0.3, 0.3, 0.3]}
          rotation={[-100, 0, 0]}
          materials={['Snake']}
          type="OBJ"
        />
      </ViroARImageMarker>
      <ViroARImageMarker target="MonkeyImage" onAnchorFound={anchorFound}>
      <ViroAmbientLight color="#ffffff" />
        <Viro3DObject
          source={require('../assets/Animaux/Singe/monkey.obj')}
          position={[2, -2, 1]}
          scale={[0.1, 0.1, 0.1]}
          rotation={[-100, 0, 0]}
          materials={['Monkey']}
          type="OBJ"
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default () => {

  const [imageURI, setImageURI] = useState('',
  );
  const [savedImagePath, setSavedImagePath] = useState('');
  const [productDetails, onChangeProductDetails] = React.useState(null);
  const viewRef = useRef(); 

  const shareRhino= async () => {
      const uri = captureRef(imageURI, {
        format : 'png',
        quality:0.7,
      })
        await Share.open({url:uri})
  }

  const shareSnake= async () => {
    const uri = captureRef(imageURI, {
      format : 'png',
      quality:0.7,
    })
      await Share.open('')
}

const shareMonkey= async () => {
  const uri = captureRef(imageURI, {
    format : 'png',
    quality:0.7,
  })
    await Share.open({url:uri})
}

  const SHARE = () => {
    //console.log(prenom)
    //console.log(mail)
    setTimeout(shareSnake, 2000);
  };


  
  const [object, setObject] = useState('tv');
  return (
    <SafeAreaView style={{flex: 1}}>
    <ViewShot  style={styles.mainView}  collapsable={false} ref={viewRef}>
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{scene: InitialScene}}
        viroAppProps={{object: object}}
        style={{flex: 1}}
      />
    </View>
    <View>
    <TouchableOpacity
          style={styles.buttonStyle}
          onPress={SHARE}>
          <Text style={styles.buttonTextStyle}>
            Take Screenshot
          </Text>
        </TouchableOpacity>
    </View>
    </ViewShot>
    </SafeAreaView>
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    padding: 10,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});
