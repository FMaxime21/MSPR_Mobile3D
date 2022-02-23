import React, {useState} from 'react';
import {SafeAreaView,StyleSheet,Text,View,Image,TouchableOpacity,Button} from 'react-native';
import { Share } from 'react-native';
import { captureRef } from "react-native-view-shot";


// import CaptureScreen
import {captureScreen} from 'react-native-view-shot';

const CaptureTest = () => {
  const [imageURI, setImageURI] = useState(
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
  );
  const [savedImagePath, setSavedImagePath] = useState('');
  const [productDetails, onChangeProductDetails] = React.useState(null);

  const takeScreenShot = () => {
    const uri = captureRef(imageURI, {
      format : 'png',
      quality:0.7
    })
      Share.open({imageURI});

  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          React Native Example to Take Screenshot Programmatically
        </Text>
        <Image
          source={{uri: imageURI}}
          style={{
            width: 200,
            height: 300,
            resizeMode: 'contain',
            marginTop: 5
          }}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={takeScreenShot}>
          <Text style={styles.buttonTextStyle}>
            Take Screenshot
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {
            savedImagePath ?
            
            `Saved Image Path\n ${savedImagePath}` : ''
          }
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CaptureTest;

const styles = StyleSheet.create({
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