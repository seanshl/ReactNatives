// Index.ios.js - place code for iOS. 
 
import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';

const appName = 'albums';
const App = () => {
  return (
    <Header />  
  );
};

AppRegistry.registerComponent(appName, () =>  App);