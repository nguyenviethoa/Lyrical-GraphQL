import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { SongQuery } from '../queries';
import CreateLyric from '../CreateLyric';
import LyricList from '../LyricList';

@graphql(SongQuery, { options: (ownProps) => {
	console.log('ownprops', ownProps)
		return {
			variables: {
				id: ownProps.match.params.id
			}
		};
	},
	name: 'SongQuery'
})
export class SongDetail extends Component {
	render() {
		const { loading } = this.props.SongQuery;
		if (loading) {
			return <div id="activityIndicator" />
		}
		console.log(' hi', this.props)
		return (
			<div>
				<Link to="/songs"> Back </Link>
				<h3> Song Detail: {this.props.SongQuery.song.title} </h3>

				<LyricList 
					lyrics={this.props.SongQuery.song.lyrics} 
				/>
				<CreateLyric songId={this.props.match.params.id} />
			</div>
		);
	}
}
