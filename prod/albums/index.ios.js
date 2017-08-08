// Index.ios.js - place code for iOS. 
 
import React from 'react';
import { View, AppRegistry } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const appName = 'albums';
const App = () => {
  return (
    <View style={{flex : 1}}>
      <Header headerText={'Albums'} />  
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent(appName, () =>  App);