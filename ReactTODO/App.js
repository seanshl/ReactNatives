import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/common/Header';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'React Todo'} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

export default App;
