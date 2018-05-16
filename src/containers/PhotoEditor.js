
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles.js';


class PhotoEditor extends React.Component {
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
export default PhotoEditor
