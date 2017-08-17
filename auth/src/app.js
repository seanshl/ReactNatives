import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillAmount() {
	  	var config = {
		    apiKey: 'AIzaSyBNvokmIxYU5dfse4bZpXgsvF5SWvQtEAY',
		    authDomain: 'react-auth-500b7.firebaseapp.com',
		    databaseURL: 'https://react-auth-500b7.firebaseio.com',
		    projectId: 'react-auth-500b7',
		    storageBucket: 'react-auth-500b7.appspot.com',
		    messagingSenderId: '918943673382'
	  	};

	  	firebase.initializeApp(config);
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication"/>
				<LoginForm />
			</View>
		);
	}
}

export default App;