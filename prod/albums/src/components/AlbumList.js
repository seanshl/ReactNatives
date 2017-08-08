import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album}/>
		);
	}

	render() {
		console.log(this.state);

		//Whenever you have a ScrollView, must have a flex 1 style to the root view.
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;