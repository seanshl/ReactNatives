import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './Components/common';

class App extends Component {
	render() {
		return (
			<View>
				<Header />
				<Text>An App!</Text>
			</View>
		);
	}
}

export default App;