import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { SongsQuery } from './queries';

@graphql(SongsQuery, { name: "SongsQuery" })
export class SongList extends Component {
	render() {
		console.log(this.props.SongsQuery);
	
		return (
			<div>
				Song List
				
			</div>	
		);
	}
}
