// Index.ios.js - place code for iOS. 
 
import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/Header';

const appName = 'albums';
const App = () => {
  return (
    <Header headerText={'Albums'}/>  
  );
};

AppRegistry.registerComponent(appName, () =>  App);