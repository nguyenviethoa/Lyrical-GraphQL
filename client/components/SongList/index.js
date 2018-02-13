import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { SongsQuery } from './queries';
import { DeleteSongMutation } from './mutations';

@graphql(SongsQuery, { name: "SongsQuery" })
@graphql(DeleteSongMutation)
export class SongList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	onDeletePressed(id) {
		this.props.mutate({ 
			variables: { id },
			refetchQueries: [{ query: SongsQuery }]			
		})
	}

	renderSongs() {
		return this.props.SongsQuery.songs.map( (song) => {
			return (
				<li 
					key={song.id} 
					className="collection-item"
					onClick={() => {}}
				>
					{song.title}

					<Link to={`/songs/${song.id}`}>{song.title}</Link>

					<i
						className="material-icons"
						onClick={() => this.onDeletePressed(song.id)}
					>
						delete
					</i>	
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
			<div>
				<label> list of songs </label>
				<ul className="collection">
					{this.renderSongs()}
				</ul>
				<Link
					to="/songs/new"
					className="btn-floating btn-large red right"
				>
					<i className="material-icons">add</i>
				</Link>	
			</div>	
		);
	}
}
