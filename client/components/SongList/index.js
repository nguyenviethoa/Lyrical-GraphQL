import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { SongsQuery } from './queries';

@graphql(SongsQuery, { name: "SongsQuery" })
export class SongList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	renderSongs() {
		return this.props.SongsQuery.songs.map( (song) => {
			return (
				<li key={song.id} className="collection-item">
					{song.title}
				</li>	
			);
		});
	}

	render() {
		const { loading } = this.props.SongsQuery;
		if (loading) {
			return <div> Loading... </div>
		}

		console.log(this.props.SongsQuery);
	
		return (
			<ul className="collection">
				{this.renderSongs()}
			</ul>	
		);
	}
}
