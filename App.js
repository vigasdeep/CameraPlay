import React from 'react';
import { createStackNavigator } from 'react-navigation';

// Importing Screens/containers

import Home from './src/containers/Home';
import PhotoEditor from './src/containers/PhotoEditor';


const RootStack = createStackNavigator({
  Home: Home,
  Editor: PhotoEditor,
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
