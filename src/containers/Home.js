
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from '../styles.js';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera style={styles.preview} ref={cam => this.camera=cam} >
          <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
          onPress={this.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        </View>
        </RNCamera>
      </View>
    );
  }
  //render ends
  //
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      this.camera.takePictureAsync(options)
        .then(data => this.props.navigation.push('Editor', {image: data.uri}))
        .catch(err => console.log(err))
 
    }
  };

}
export default Home
