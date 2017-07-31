import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//functional component. 
// Anytime the state of component is changed, it will rerender on the mobile device. 
class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		//setState method is the only way to update a component state. 
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({
				albums: response.data
			}));
	}

	renderAlbums() {
		this.state.albums.map(album => <Text>{album.title}</Text>);
	}

	render() {
		console.log(this.state);

		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;