import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import styles from './src/styles.js';
const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);
class Home extends React.Component {
  state = {
        width: null,
        height: null
    };

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
        .then(data => this.props.navigation.push('Details', {image: data.uri}))
        .catch(err => console.log(err))
 
    }
  };

}
class Details extends React.Component {
  render() {
    const { navigation } = this.props;
    const uri = navigation.getParam('image', 'abc.jpg')
    
    return (
      <View style={{ flex: 1}}>
        <Image
          resizeMode="contain"
          style={{flex:1, width: null, height: null}}
          source={{isStatic:true, uri: uri}}
        />
      </View>
    );
  }
}
const RootStack = createStackNavigator({
  Home: Home,
  Details: Details,
},
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
